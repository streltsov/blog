"use strict";(self.webpackChunkwiki_blog=self.webpackChunkwiki_blog||[]).push([[542],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):N(N({},n),e)),t},o=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return t?a.createElement(k,N(N({ref:n},o),{},{components:t})):a.createElement(k,N({ref:n},o))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,N=new Array(i);N[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,N[1]=l;for(var s=2;s<i;s++)N[s]=t[s];return a.createElement.apply(null,N)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9250:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return o},toc:function(){return u},default:function(){return c}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),N=["components"],l={title:"\u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 isNaN \u0438 Number.isNaN",description:"ADD DESCRIPTION",slug:"isNaN-vs-Number.isNaN",tags:["JavaScript","wtfjs"],hide_table_of_contents:!1},p=void 0,s={permalink:"/isNaN-vs-Number.isNaN",editUrl:"https://github.com/streltsov/blog/edit/main/website/blog/blog/21-12-06-isNaN-vs-Number-isNaN.md",source:"@site/blog/21-12-06-isNaN-vs-Number-isNaN.md",title:"\u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 isNaN \u0438 Number.isNaN",description:"ADD DESCRIPTION",date:"2021-12-09T15:22:02.735Z",formattedDate:"December 9, 2021",tags:[{label:"JavaScript",permalink:"/tags/java-script"},{label:"wtfjs",permalink:"/tags/wtfjs"}],readingTime:3.51,truncated:!1,authors:[]},o={authorsImageUrls:[]},u=[{value:"isNaN",id:"isnan",children:[],level:2},{value:"Number.isNaN",id:"numberisnan",children:[],level:2},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c \u0441\u0435\u0431\u044f",id:"\u043f\u0440\u043e\u0432\u0435\u0440\u044c-\u0441\u0435\u0431\u044f",children:[],level:2}],m={toc:u};function c(e){var n=e.components,l=(0,r.Z)(e,N);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TL;DR:")," \u041e\u0442\u043b\u0438\u0447\u0438\u0435 ",(0,i.kt)("strong",{parentName:"p"},"isNaN")," \u043e\u0442 ",(0,i.kt)("strong",{parentName:"p"},"Number.isNaN")," \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043f\u0435\u0440\u0435\u0434 \u0442\u0435\u043c \u043a\u0430\u043a\n\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),", \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,i.kt)("strong",{parentName:"p"},"isNaN")," , \u043d\u0435\u044f\u0432\u043d\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439\n\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043a \u0442\u0438\u043f\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", \u0430 \u043c\u0435\u0442\u043e\u0434 ",(0,i.kt)("strong",{parentName:"p"},"Number.isNaN")," \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438\n\u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0442\u0438\u043f\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h2",{id:"isnan"},"isNaN"),(0,i.kt)("p",null,"\u041d\u0430\u0432\u0435\u0440\u043d\u044f\u043a\u0430 \u043d\u0430\u0439\u0434\u0435\u0442\u0441\u044f \u0441\u043b\u0443\u0447\u0430\u0439 \u0433\u0434\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,i.kt)("strong",{parentName:"p"},"isNaN")," \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u043a\u0441\u0442\u0430\u0442\u0438 \u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u0435\u0437\u043d\u0430, \u043d\u043e \u0441\u0440\u0430\u0437\u0443 \u0432\n\u0433\u043e\u043b\u043e\u0432\u0443 \u0442\u0430\u043a\u043e\u0439 \u043d\u0435 \u043f\u0440\u0438\u0434\u0435\u0442."),(0,i.kt)("p",null,"\u0418 \u043e\u043d\u0430 \u0432\u0440\u043e\u0434\u0435 \u0431\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0435\u0441\u043b\u0438 \u0432 \u043d\u0435\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),", \u0441\u0442\u0440\u043e\u043a\u0443 \u0438\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442, \u043e\u043d\u0430 \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'isNaN(NaN);          // -> true\nisNaN(undefined);    // -> true\nisNaN("JavaScript"); // -> true\nisNaN({a: 1});       // -> true\nisNaN([]);           // -> true\n')),(0,i.kt)("p",null,"\u0410 \u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e, \u043e\u043d\u0430 \u0437\u0430\u043a\u043e\u043d\u043e\u043c\u0435\u0440\u043d\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"isNaN(42); // -> false\nisNaN(0);  // -> false\n")),(0,i.kt)("p",null,"\u041d\u043e, \u043d\u0435 \u0432\u0441\u0435 \u0442\u0430\u043a \u043f\u0440\u043e\u0441\u0442\u043e."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"isNaN")," \u043f\u043e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u043c\u0443 \u0434\u0436\u0430\u0432\u0430\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u0443 \u043d\u0435\u0435 \u0435\u0441\u0442\u044c \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u0438 \u043e\u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u0435\u0442\n",(0,i.kt)("em",{parentName:"p"},"JavaScript Way"),"."),(0,i.kt)("p",null,"\u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u043f\u0435\u0440\u0432\u044b\u043c \u0434\u0435\u043b\u043e\u043c \u043e\u043d\u0430 ",(0,i.kt)("em",{parentName:"p"},"\u043d\u0435\u044f\u0432\u043d\u043e")," \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0435 \u0432 \u043d\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a \u0442\u0438\u043f\u0443\n",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", \u0438 \u0442\u0435\u043f\u0435\u0440\u044c \u0431\u0443\u043b\u0435\u0432\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043f\u0443\u0441\u0442\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438, \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043f\u0440\u043e\u0431\u0435\u043b\u0430\u043c\u0438 \u0438\n\u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u0434\u043b\u044f \u043d\u0435\u0435 \u0442\u043e\u0436\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"isNaN([\"1\"]); // -> false\nisNaN(true);  // -> false\nisNaN('  ');  // -> false\nisNaN('');    // -> false\n")),(0,i.kt)("p",null,"\u0414\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u044b\u0448\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0442\u0438\u043f\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", \u043e\u043d\u0438 \u0432\n\u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u0441\u0442\u0430\u043d\u0443\u0442 \u0447\u0438\u0441\u043b\u0430\u043c\u0438. \u041f\u0435\u0440\u0432\u044b\u0435 \u0434\u0432\u0430 \u0435\u0434\u0438\u043d\u0438\u0446\u0430\u043c\u0438, \u0430 \u0432\u0442\u043e\u0440\u044b\u0435 \u0434\u0432\u0430 \u043d\u0443\u043b\u044f\u043c\u0438."),(0,i.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u0442\u043e\u0433\u043e, \u0435\u0441\u043b\u0438 \u0432 ",(0,i.kt)("strong",{parentName:"p"},"isNaN")," \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0442\u0438\u043f ",(0,i.kt)("inlineCode",{parentName:"p"},"symbol")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"bigint"),", \u0442\u043e \u043e\u043d\u0430 \u0432\u044b\u043a\u0438\u043d\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TypeError \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u044e isNaN \u0442\u0438\u043f\u043e\u0432 symbol \u0438 bigint",src:t(1124).Z})),(0,i.kt)("p",null,"\u0412\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 ",(0,i.kt)("strong",{parentName:"p"},"isNaN")," \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"\u0422\u0430\u043a \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," \u043d\u0435 \u0440\u0430\u0432\u0435\u043d \u0441\u0430\u043c\u043e\u043c\u0443 \u0441\u0435\u0431\u0435, \u0442\u043e \u0434\u043e ES2015, \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430\n",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," \u0431\u044b\u043b\u043e \u0441\u0440\u0430\u0432\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u0441\u0430\u043c\u0438\u043c \u0441\u043e\u0431\u043e\u0439:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const value = NaN;\nvalue == value; // -> false\n")),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u043d\u0430\u043f\u0440\u044f\u0433\u0430\u0442\u044c \u043f\u043e\u043f\u0443\u0441\u0442\u0443 \u043c\u043e\u0437\u0433\u0438 \u0432\u0441\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c\u0438 \u0438\u0441\u0445\u043e\u0434\u0430\u043c\u0438 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438\n",(0,i.kt)("strong",{parentName:"p"},"isNaN"),", \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c \u0438 \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,i.kt)("strong",{parentName:"p"},"Number.isNaN"),",\n\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u044f\u0432\u0438\u043b\u0441\u044f \u0432 ES2015."),(0,i.kt)("h2",{id:"numberisnan"},"Number.isNaN"),(0,i.kt)("p",null,"C ",(0,i.kt)("strong",{parentName:"p"},"Number.isNaN")," \u0432\u0441\u0435 \u043d\u0430\u043c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0449\u0435."),(0,i.kt)("p",null,"\u041f\u0440\u043e \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434, \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 ",(0,i.kt)("strong",{parentName:"p"},"isNaN"),", \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u043e\u043d\u0430\n\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0431\u044b\u043b\u043e \u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u0432 \u043d\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," \u0438\u043b\u0438 \u043d\u0435\u0442. \u041e\u043d\u0430 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\n\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u0435\u0441\u043b\u0438 \u0432 \u043d\u0435\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," \u0432\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445\n\u0441\u043b\u0443\u0447\u0430\u044f\u0445:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Number.isNaN(NaN);          // -> true\n\nNumber.isNaN(42);           // -> false\nNumber.isNaN(BigInt(42));   // -> false\nNumber.isNaN("JavaScript"); // -> false\nNumber.isNaN([1, 2, 3]);    // -> false\nNumber.isNaN(undefined);    // -> false\nNumber.isNaN(null);         // -> false\nNumber.isNaN(Symbol());     // -> false\n')),(0,i.kt)("p",null,"\u041f\u043e\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c ",(0,i.kt)("strong",{parentName:"p"},"Number.isNaN")," \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0447\u0438\u0441\u043b\u043e\u043c, \u0438\n\u0435\u0441\u043b\u0438 \u043d\u0435\u0442, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", \u0430 \u0435\u0441\u043b\u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f, \u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u043e\u043d\u043e\n",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"\u041f\u043e\u043d\u0430\u0447\u0430\u043b\u0443, \u043f\u043e\u043a\u0430 \u044f \u043d\u0435 \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u043b\u0441\u044f \u0438 \u043d\u0435 \u043a\u043e\u043f\u043d\u0443\u043b \u043f\u043e\u0433\u043b\u0443\u0431\u0436\u0435, \u043c\u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043b\u043e\u0441\u044c, \u0447\u0442\u043e \u043c\u0435\u0442\u043e\u0434\n",(0,i.kt)("strong",{parentName:"p"},"Number.isNaN")," \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0438\u043c\u0435\u043d\u043d\u043e \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),", \u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,i.kt)("strong",{parentName:"p"},"isNaN"),"\n\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u044f\u0432\u043b\u044f\u043b\u043e\u0441\u044c \u0447\u0438\u0441\u043b\u043e\u043c, \u043d\u0435 \u0442\u0438\u043f\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", \u0430 \u0438\u043c\u0435\u043d\u043d\u043e\n\u0447\u0438\u0441\u043b\u043e\u043c, \u043d\u043e \u044f \u043e\u0448\u0438\u0431\u0430\u043b\u0441\u044f."),(0,i.kt)("h2",{id:"\u043f\u0440\u043e\u0432\u0435\u0440\u044c-\u0441\u0435\u0431\u044f"},"\u041f\u0440\u043e\u0432\u0435\u0440\u044c \u0441\u0435\u0431\u044f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const name = 'Lydia Hallie';\nconst age = 21;\n\nconsole.log(Number.isNaN(name));\nconsole.log(Number.isNaN(age));\n\nconsole.log(isNaN(name));\nconsole.log(isNaN(age));\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"\u041e\u0442\u0432\u0435\u0442"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"))))}c.isMDXComponent=!0},1124:function(e,n,t){n.Z=t.p+"assets/images/type-error-21b3ccb0b3ea80f4cef97bd28d594ea0.jpg"}}]);