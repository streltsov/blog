---
title: The difference between isNaN and Number.isNaN
description: How to check for NaN value and what is the difference between isNaN and Number.isNaN
slug: isNaN-vs-Number.isNaN
tags: [JavaScript, wtfjs]
hide_table_of_contents: false
---

JavaScript method **Number.isNaN** and its evil twin brother global function
**isNaN** may confuse you and make you think if they has the same name – then
they behave the same way.

But they do not.

In this article I'll try to explain in detail the difference between the twins
and how to reliably check for `NaN` value.

But first, let's recall what the hell `NaN` value is.

## NaN

**NaN** — is a two-faced value, which stands for *Not-a-Number*, but
paradoxically has a type of `number`.

You can get a `NaN` if you try to do some crazy operation like multiplying
infinity by zero:

```js
Infinity * 0 // -> NaN
```
and other useless operatons:

```js
0 / 0                 // -> NaN
0 * Infinity          // -> NaN
"JavaScript" - 777    // -> NaN
undefined + undefined // -> NaN
```

But also you can get a `NaN` in some practical case, for example when parsing a
string with `parseInt`:

```js
parseInt("string"); // -> NaN
```

Here, we would like to know if the operation failed or not. How do we do that?
Well, if it's failed then the result should be `NaN`, so we check for `NaN`

```js
const maybeNaN = parseInt("some string");

if (maybeNaN == NaN) {
  // Code if parsing failed
} else {
  // Code if parsing succeeded
}
```
But, thats not gonna work as comparison `maybeNaN == NaN` always will be false
because in JavaScript nothing is equal to `NaN`, even `NaN` itself.

So, how do we check for `NaN`? Let's try this global function `isNaN`.

## Global Function isNaN

Considering the function's name we can assume that the function checks for
`NaN` value. So, if we pass the `NaN` value it will return true and if it's
something else we will get `false`. Let's check it out if it's true:

```js
isNaN(NaN);          // -> true
```

Works like a charm with `NaN`! Let's try different values:

```js
isNaN(42); // -> false
isNaN(0);  // -> false
```

Seems to be working too!

But all JS quirks begins when we pass to the function some value with type
other than `number`. Let's see:

```js
isNaN(undefined);    // -> true
isNaN("JavaScript"); // -> true
isNaN({a: 1});       // -> true
isNaN([]);           // -> true
```

So, what the heck is going on here?

According to [specification](https://tc39.es/ecma262/#sec-isnan-number) the
first thing that function `isNaN` does, is implicitly converts passed argument
to type `number`. And only after converting checks if it is a `NaN`

You can see it if you'll pass to `isNaN` a value with type `symbol` or
`bigint`. JavaScript wont be able to convert these types to `number`:

![TypeError при передаче в функцию isNaN типов symbol и bigint](/img/isNaN-vs-Number-isNaN/type-error.jpg)

To sum up, if you want to check for `NaN` value with `isNaN` function, you
should feed it only with values of type `number`. Or you can use a much more
reliable method `Number.isNaN`.

## Number.isNaN method

Number.isNaN works as you would expect it to work. It returns `true` only in
one particular case when you provide it with `NaN` value as argument and
`false` in all other cases:

```js
Number.isNaN(NaN);          // -> true

Number.isNaN(42);           // -> false
Number.isNaN(BigInt(42));   // -> false
Number.isNaN("JavaScript"); // -> false
Number.isNaN([1, 2, 3]);    // -> false
Number.isNaN(undefined);    // -> false
Number.isNaN(null);         // -> false
Number.isNaN(Symbol());     // -> false
```

Under the hood **Number.isNaN** checks if provided argument is of type
`number`. If it's not a `number` – it will return `false`. If it is – it will
check this value for `NaN` and accordingly return `true` or `false`

## Test yourself

```js
isNaN("string") // -> ?
isNaN(42) // -> ?
isNaN(NaN) // -> ?

Number.isNaN("string") // -> ?
Number.isNaN(42) // -> ?
Number.isNaN(NaN) // -> ?
```

<details>
  <summary>Answer</summary>
`true`
`false`
`true`
`false`
`false`
`true`

</details>
