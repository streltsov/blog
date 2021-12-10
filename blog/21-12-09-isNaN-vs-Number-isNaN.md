---
title: Разница между isNaN и Number.isNaN

description: ADD DESCRIPTION

slug: isNaN-vs-Number.isNaN
tags: [JavaScript, wtfjs]
hide_table_of_contents: false
---

<!--
     TODO:
     2. Find out why bigint and symbol throws an error on converting it to number
     3. Find out why NaN is of type number
    
     Links: https://dev.to/mang0088/isnan-vs-numberisnan-5e01

## Что такое NaN

**NaN (Not-A-Number)**

**NaN** может появится в коде в случаях когда:
 - Число невозможно распарсить, например `parseInt("Helluva")` или `Number(undefined)`
 - Один из операндов равняется **NaN**, например `12 + NaN` или `42 * NaN`
 - Результат метематической операции не является числомa, например `Math.sqrt(-1)`
 - `0 * Infinity` или `undefined + undefined`
 - Операции со строкой кроме сложения, например `"helluva" / 2` 

Origin of NaN values:

NaN values are generated when arithmetic operations result in undefined or unrepresentable values. Such values do not necessarily represent overflow conditions. A NaN also results from attempted coercion to numeric values of non-numeric values for which no primitive numeric value is available.
-->


**TL;DR:** Отличие **isNaN** от **Number.isNaN** в том, что перед тем как
проверить значение на `NaN`, функция **isNaN** , неявно приводит переданный
аргумент к типу `number`, а метод **Number.isNaN** проверяет является ли
переданный аргумент типом `number`

## isNaN
Наверняка найдется случай где функция **isNaN** придется кстати и будет полезна, но сразу в
голову такой не придет.

И она вроде бы работает, если в нее передать `NaN`, строку или объект, она вернет `true`:

```js
isNaN(NaN);          // -> true
isNaN(undefined);    // -> true
isNaN("JavaScript"); // -> true
isNaN({a: 1});       // -> true
isNaN([]);           // -> true
```

А если передать число, она закономерно возвращает `false`:

```js
isNaN(42); // -> false
isNaN(0);  // -> false
```

Но, не все так просто.

**isNaN** по настоящему джаваскриптовая функция, у нее есть принципы и она следует
*JavaScript Way*.

Поэтому, первым делом она *неявно* приводит переданное в нее значение к типу
`number`, и теперь булевы значения, пустые строки, строки с пробелами и
некоторые массивы для нее тоже `number`:

```js
isNaN(["1"]); // -> false
isNaN(true);  // -> false
isNaN('  ');  // -> false
isNaN('');    // -> false
```

Да, потому что если переданные выше значения привести к типу `number`, они в
самом деле станут числами. Первые два единицами, а вторые два нулями.

Более того, если в **isNaN** передать тип `symbol` или `bigint`, то она выкинет ошибку:

![TypeError при передаче в функцию isNaN типов symbol и bigint](/img/isNaN-vs-Number-isNaN/type-error.jpg)

Во всех остальных случаях **isNaN** вернет `false`.

<!--
```js
isNaN(["1"]); // -> false
isNaN(true);  // -> false
isNaN('  ');  // -> false
isNaN('');    // -> false
```
-->
Так как `NaN` не равен самому себе, то до ES2015, надежным способом проверки на
`NaN` было сравнить значение с самим собой:

```js
const value = NaN;
value == value; // -> false
```

Для того чтобы не напрягать попусту мозги всевозможными исходами вызова функции
**isNaN**, можно воспользоваться понятным и надежным методом **Number.isNaN**,
который появился в ES2015.

## Number.isNaN

C **Number.isNaN** все намного проще.

Про этот метод, в отличие от **isNaN**, действительно можно сказать, что она
определяет было ли передано в нее значение `NaN` или нет. Она ожидаемо
возвращает `true` если в нее передать `NaN` и `false` во всех остальных
случаях:

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

Под капотом **Number.isNaN** сначала проверяет является ли аргумент числом, и
если нет, возвращает `false`, а если является, то проверяет является ли оно
`NaN` и соответственно возвращает `true` или `false`.

Поначалу, пока я не разобрался и не копнул поглубже, мне показалось, что метод
**Number.isNaN** проверяет именно на значение `NaN`, а функция **isNaN**
проверяет на то, чтобы значение не являлось числом, не типом `number`, а именно
числом, но я ошибался.

## Проверь себя

```js
const name = 'Lydia Hallie';
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));
```

<details>
  <summary>Ответ</summary>

`false`, `false`, `true`, `false`

<!---
With the Number.isNaN method, you can check if the value you pass is a numeric value and equal to NaN. name is not a numeric value, so Number.isNaN(name) returns false. age is a numeric value, but is not equal to NaN, so Number.isNaN(age) returns false.

With the isNaN method, you can check if the value you pass is not a number. name is not a number, so isNaN(name) returns true. age is a number, so isNaN(age) returns false.
--->
</details>

