"use strict";(self.webpackChunkwiki_blog=self.webpackChunkwiki_blog||[]).push([[290],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return r?n.createElement(g,o(o({ref:t},m),{},{components:r})):n.createElement(g,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8665:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(3366),a=r(7294),l=r(6010),o=r(1066),i=r(9960),c="sidebar_q+wC",s="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",u="sidebarItem_cjdF",p="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs",g=r(5999);function y(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:m},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:u},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:d},e.title))}))))}var h=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,r=e.toc,i=e.children,c=(0,n.Z)(e,h),s=t&&t.items.length>0;return a.createElement(o.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(y,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),r&&a.createElement("div",{className:"col col--2"},r))))}},3520:function(e,t,r){r.d(t,{Z:function(){return ae}});var n=r(7294),a=r(6010),l=r(3905),o=r(5999),i=r(9960),c=r(4996),s=r(3810),m=r(7462),u=r(3366),p=r(2859),d={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},g={Prism:r(7410).default,theme:d};function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}var f=/\r\n|\r|\n/,v=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},E=function(e,t){var r=e.plain,n=Object.create(null),a=e.styles.reduce((function(e,r){var n=r.languages,a=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=h({},e[t],a);e[t]=r})),e}),n);return a.root=r,a.plain=h({},r,{backgroundColor:null}),a};function k(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var N=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),y(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?E(e.theme,e.language):void 0;return t.themeDict=r})),y(this,"getLineProps",(function(e){var r=e.key,n=e.className,a=e.style,l=h({},k(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==a&&(l.style=void 0!==l.style?h({},l.style,a):a),void 0!==r&&(l.key=r),n&&(l.className+=" "+n),l})),y(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,a=r.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===a&&!n)return l[r[0]];var o=n?{display:"inline-block"}:{},i=r.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),y(this,"getTokenProps",(function(e){var r=e.key,n=e.className,a=e.style,l=e.token,o=h({},k(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?h({},o.style,a):a),void 0!==r&&(o.key=r),n&&(o.className+=" "+n),o})),y(this,"tokenize",(function(e,t,r,n){var a={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,a=e.children,l=this.getThemeDict(this.props),o=t.languages[r];return a({tokens:function(e){for(var t=[[]],r=[e],n=[0],a=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=n[o]++)<a[o];){var s=void 0,m=t[o],u=r[o][l];if("string"==typeof u?(m=o>0?m:["plain"],s=u):(m=b(m,u.type),u.alias&&(m=b(m,u.alias)),s=u.content),"string"==typeof s){var p=s.split(f),d=p.length;i.push({types:m,content:p[0]});for(var g=1;g<d;g++)v(i),c.push(i=[]),i.push({types:m,content:p[g]})}else o++,t.push(m),r.push(s),n.push(0),a.push(s.length)}o--,t.pop(),r.pop(),n.pop(),a.pop()}return v(i),c}(void 0!==o?this.tokenize(t,n,o,r):[n]),className:"prism-code language-"+r,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),T=N;var Z={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},P=r(5350),O=function(){var e=(0,s.LU)().prism,t=(0,P.Z)().isDarkTheme,r=e.theme||Z,n=e.darkTheme||r;return t?n:r},_="codeBlockContainer_J+bg",w="codeBlockContent_csEI",j="codeBlockTitle_oQzk",C="codeBlock_rtdJ",L="copyButton_M3SB",x="codeBlockLines_1zSZ";function S(e){var t,r=e.children,l=e.className,i=e.metastring,c=e.title,u=(0,s.LU)().prism,p=(0,n.useState)(!1),d=p[0],y=p[1],h=(0,n.useState)(!1),f=h[0],v=h[1];(0,n.useEffect)((function(){v(!0)}),[]);var b=(0,s.bc)(i)||c,E=O(),k=Array.isArray(r)?r.join(""):r,N=null!=(t=(0,s.Vo)(l))?t:u.defaultLanguage,Z=(0,s.nZ)(k,i,N),P=Z.highlightLines,S=Z.code,D=function(){!function(e,t){var r=(void 0===t?{}:t).target,n=void 0===r?document.body:r,a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus()}(S),y(!0),setTimeout((function(){return y(!1)}),2e3)};return n.createElement(T,(0,m.Z)({},g,{key:String(f),theme:E,code:S,language:N}),(function(e){var t=e.className,r=e.style,i=e.tokens,c=e.getLineProps,s=e.getTokenProps;return n.createElement("div",{className:(0,a.Z)(_,l)},b&&n.createElement("div",{style:r,className:j},b),n.createElement("div",{className:(0,a.Z)(w,N)},n.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,C,"thin-scrollbar"),style:r},n.createElement("code",{className:x},i.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var r=c({line:e,key:t});return P.includes(t)&&(r.className+=" docusaurus-highlight-code-line"),n.createElement("span",(0,m.Z)({key:t},r),e.map((function(e,t){return n.createElement("span",(0,m.Z)({key:t},s({token:e,key:t})))})),n.createElement("br",null))})))),n.createElement("button",{type:"button","aria-label":(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(L,"clean-btn"),onClick:D},d?n.createElement(o.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):n.createElement(o.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var D="anchorWithStickyNavbar_y2LR",B="anchorWithHideOnScrollNavbar_3ly5",I=["id"],A=function(e){var t=Object.assign({},e);return n.createElement("header",null,n.createElement("h1",(0,m.Z)({},t,{id:void 0}),t.children))},R=function(e){return"h1"===e?A:function(e){return function(t){var r,l=t.id,i=(0,u.Z)(t,I),c=(0,s.LU)().navbar.hideOnScroll;return l?n.createElement(e,(0,m.Z)({},i,{className:(0,a.Z)("anchor",(r={},r[B]=c,r[D]=!c,r)),id:l}),i.children,n.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+l,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(e,i)}}(e)},z="details_h+cY";function U(e){var t=Object.assign({},e);return n.createElement(s.PO,(0,m.Z)({},t,{className:(0,a.Z)("alert alert--info",z,t.className)}))}var F=["mdxType","originalType"];var M={head:function(e){var t=n.Children.map(e.children,(function(e){return function(e){var t,r;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(r=e.props)&&r.originalType){var a=e.props,l=(a.mdxType,a.originalType,(0,u.Z)(a,F));return n.createElement(e.props.originalType,l)}return e}(e)}));return n.createElement(p.Z,e,t)},code:function(e){var t=e.children;return(0,n.isValidElement)(t)?t:t.includes("\n")?n.createElement(S,e):n.createElement("code",e)},a:function(e){return n.createElement(i.Z,e)},pre:function(e){var t,r=e.children;return(0,n.isValidElement)(r)&&(0,n.isValidElement)(null==r||null==(t=r.props)?void 0:t.children)?r.props.children:n.createElement(S,(0,n.isValidElement)(r)?null==r?void 0:r.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),r=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=n.createElement(n.Fragment,null,t.filter((function(e){return e!==r})));return n.createElement(U,(0,m.Z)({},e,{summary:r}),a)},h1:R("h1"),h2:R("h2"),h3:R("h3"),h4:R("h4"),h5:R("h5"),h6:R("h6")},V="iconEdit_mS5F",W=["className"];var q=function(e){var t=e.className,r=(0,u.Z)(e,W);return n.createElement("svg",(0,m.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(V,t),"aria-hidden":"true"},r),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function J(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.kM.common.editThisPage},n.createElement(q,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var X="blogPostTitle_d4p0",K="blogPostData_-Im+",Y="blogPostDetailsFull_xD8n",G=r(7774),H="tags_NBRY",Q="tag_F03v";function $(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,a.Z)(H,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,r=e.permalink;return n.createElement("li",{key:r,className:Q},n.createElement(G.Z,{name:t,permalink:r}))}))))}var ee="image_9q7L";var te=function(e){var t=e.author,r=t.name,a=t.title,l=t.url,o=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:ee,src:o,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),a&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},re="authorCol_8c0z";function ne(e){var t=e.authors,r=e.assets;return 0===t.length?null:n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,a.Z)("col col--6",re),key:t},n.createElement(te,{author:Object.assign({},e,{imageURL:null!=(l=r.authorsImageUrls[t])?l:e.imageURL})}))})))}var ae=function(e){var t,r,m,u,p=(m=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return m(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=(0,c.C)().withBaseUrl,g=e.children,y=e.frontMatter,h=e.assets,f=e.metadata,v=e.truncated,b=e.isBlogPostPage,E=void 0!==b&&b,k=f.date,N=f.formattedDate,T=f.permalink,Z=f.tags,P=f.readingTime,O=f.title,_=f.editUrl,w=f.authors,j=null!=(t=h.image)?t:y.image,C=!E&&v,L=Z.length>0;return n.createElement("article",{className:E?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(u=E?"h1":"h2",n.createElement("header",null,n.createElement(u,{className:X,itemProp:"headline"},E?O:n.createElement(i.Z,{itemProp:"url",to:T},O)),n.createElement("div",{className:(0,a.Z)(K,"margin-vert--md")},n.createElement("time",{dateTime:k,itemProp:"datePublished"},N),void 0!==P&&n.createElement(n.Fragment,null," \xb7 ",p(P))),n.createElement(ne,{authors:w,assets:h}))),j&&n.createElement("meta",{itemProp:"image",content:d(j,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:M},g)),(L||v)&&n.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(r={},r[Y]=E,r))},L&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":C})},n.createElement($,{tags:Z})),E&&_&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(J,{editUrl:_})),C&&n.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":L})},n.createElement(i.Z,{to:f.permalink,"aria-label":"Read more about "+O},n.createElement("b",null,n.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},7774:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(7294),a=r(6010),l=r(9960),o="tag_WK-t",i="tagRegular_LXbV",c="tagWithCount_S5Zl";var s=function(e){var t,r=e.permalink,s=e.name,m=e.count;return n.createElement(l.Z,{href:r,className:(0,a.Z)(o,(t={},t[i]=!m,t[c]=m,t))},s,m&&n.createElement("span",null,m))}}}]);