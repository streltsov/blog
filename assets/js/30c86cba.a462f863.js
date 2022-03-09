"use strict";(self.webpackChunkwiki_blog=self.webpackChunkwiki_blog||[]).push([[272],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),N=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=N(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=N(t),m=r,d=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return t?a.createElement(d,l(l({ref:n},u),{},{components:t})):a.createElement(d,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var N=2;N<i;N++)l[N]=t[N];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4702:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return N},assets:function(){return u},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={title:"The difference between isNaN and Number.isNaN",description:"How to check for NaN value and what is the difference between isNaN and Number.isNaN",slug:"isNaN-vs-Number.isNaN",tags:["JavaScript","wtfjs"],hide_table_of_contents:!1},s=void 0,N={permalink:"/isNaN-vs-Number.isNaN",editUrl:"https://github.com/streltsov/blog/blog/2022-03-10-isNaN-vs-Number-isNaN.md",source:"@site/blog/2022-03-10-isNaN-vs-Number-isNaN.md",title:"The difference between isNaN and Number.isNaN",description:"How to check for NaN value and what is the difference between isNaN and Number.isNaN",date:"2022-03-10T00:00:00.000Z",formattedDate:"March 10, 2022",tags:[{label:"JavaScript",permalink:"/tags/java-script"},{label:"wtfjs",permalink:"/tags/wtfjs"}],readingTime:3.16,truncated:!1,authors:[]},u={authorsImageUrls:[]},p=[{value:"NaN",id:"nan",children:[],level:2},{value:"Global Function isNaN",id:"global-function-isnan",children:[],level:2},{value:"Number.isNaN method",id:"numberisnan-method",children:[],level:2},{value:"Test yourself",id:"test-yourself",children:[],level:2}],c={toc:p};function m(e){var n=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"JavaScript method ",(0,i.kt)("strong",{parentName:"p"},"Number.isNaN")," and its evil twin brother global function\n",(0,i.kt)("strong",{parentName:"p"},"isNaN")," may confuse you and make you think if they has the same name \u2013 then\nthey behave the same way."),(0,i.kt)("p",null,"But they do not."),(0,i.kt)("p",null,"In this article I'll try to explain in detail the difference between the twins\nand how to reliably check for ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," value."),(0,i.kt)("p",null,"But first, let's recall what the hell ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," value is."),(0,i.kt)("h2",{id:"nan"},"NaN"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NaN")," \u2014 is a two-faced value, which stands for ",(0,i.kt)("em",{parentName:"p"},"Not-a-Number"),", but\nparadoxically has a type of ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,i.kt)("p",null,"You can get a ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," if you try to do some crazy operation like multiplying\ninfinity by zero:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Infinity * 0 // -> NaN\n")),(0,i.kt)("p",null,"and other useless operatons:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'0 / 0                 // -> NaN\n0 * Infinity          // -> NaN\n"JavaScript" - 777    // -> NaN\nundefined + undefined // -> NaN\n')),(0,i.kt)("p",null,"But also you can get a ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," in some practical case, for example when parsing a\nstring with ",(0,i.kt)("inlineCode",{parentName:"p"},"parseInt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'parseInt("string"); // -> NaN\n')),(0,i.kt)("p",null,"Here, we would like to know if the operation failed or not. How do we do that?\nWell, if it's failed then the result should be ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),", so we check for ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const maybeNaN = parseInt("some string");\n\nif (maybeNaN == NaN) {\n  // Code if parsing failed\n} else {\n  // Code if parsing succeeded\n}\n')),(0,i.kt)("p",null,"But, thats not gonna work as comparison ",(0,i.kt)("inlineCode",{parentName:"p"},"maybeNaN == NaN")," always will be false\nbecause in JavaScript nothing is equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),", even ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," itself."),(0,i.kt)("p",null,"So, how do we check for ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),"? Let's try this global function ",(0,i.kt)("inlineCode",{parentName:"p"},"isNaN"),"."),(0,i.kt)("h2",{id:"global-function-isnan"},"Global Function isNaN"),(0,i.kt)("p",null,"Considering the function's name we can assume that the function checks for\n",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," value. So, if we pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," value it will return true and if it's\nsomething else we will get ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Let's check it out if it's true:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"isNaN(NaN);          // -> true\n")),(0,i.kt)("p",null,"Works like a charm with ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),"! Let's try different values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"isNaN(42); // -> false\nisNaN(0);  // -> false\n")),(0,i.kt)("p",null,"Seems to be working too!"),(0,i.kt)("p",null,"But all JS quirks begins when we pass to the function some value with type\nother than ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),". Let's see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'isNaN(undefined);    // -> true\nisNaN("JavaScript"); // -> true\nisNaN({a: 1});       // -> true\nisNaN([]);           // -> true\n')),(0,i.kt)("p",null,"So, what the heck is going on here?"),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-isnan-number"},"specification")," the\nfirst thing that function ",(0,i.kt)("inlineCode",{parentName:"p"},"isNaN")," does, is implicitly converts passed argument\nto type ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),". And only after converting checks if it is a ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")),(0,i.kt)("p",null,"You can see it if you'll pass to ",(0,i.kt)("inlineCode",{parentName:"p"},"isNaN")," a value with type ",(0,i.kt)("inlineCode",{parentName:"p"},"symbol")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"bigint"),". JavaScript wont be able to convert these types to ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TypeError \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u044e isNaN \u0442\u0438\u043f\u043e\u0432 symbol \u0438 bigint",src:t(5943).Z})),(0,i.kt)("p",null,"To sum up, if you want to check for ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," value with ",(0,i.kt)("inlineCode",{parentName:"p"},"isNaN")," function, you\nshould feed it only with values of type ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),". Or you can use a much more\nreliable method ",(0,i.kt)("inlineCode",{parentName:"p"},"Number.isNaN"),"."),(0,i.kt)("h2",{id:"numberisnan-method"},"Number.isNaN method"),(0,i.kt)("p",null,"Number.isNaN works as you would expect it to work. It returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," only in\none particular case when you provide it with ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," value as argument and\n",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in all other cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Number.isNaN(NaN);          // -> true\n\nNumber.isNaN(42);           // -> false\nNumber.isNaN(BigInt(42));   // -> false\nNumber.isNaN("JavaScript"); // -> false\nNumber.isNaN([1, 2, 3]);    // -> false\nNumber.isNaN(undefined);    // -> false\nNumber.isNaN(null);         // -> false\nNumber.isNaN(Symbol());     // -> false\n')),(0,i.kt)("p",null,"Under the hood ",(0,i.kt)("strong",{parentName:"p"},"Number.isNaN")," checks if provided argument is of type\n",(0,i.kt)("inlineCode",{parentName:"p"},"number"),". If it's not a ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," \u2013 it will return ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". If it is \u2013 it will\ncheck this value for ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," and accordingly return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h2",{id:"test-yourself"},"Test yourself"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'isNaN("string") // -> ?\nisNaN(42) // -> ?\nisNaN(NaN) // -> ?\n\nNumber.isNaN("string") // -> ?\nNumber.isNaN(42) // -> ?\nNumber.isNaN(NaN) // -> ?\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Answer"),"`true` `false` `true` `false` `false` `true`"))}m.isMDXComponent=!0},5943:function(e,n,t){n.Z=t.p+"assets/images/type-error-21b3ccb0b3ea80f4cef97bd28d594ea0.jpg"}}]);