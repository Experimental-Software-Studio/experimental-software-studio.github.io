(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+F0J":function(e,t,n){e.exports={header:"styles-module--header--L-KIn",link:"styles-module--link--Zl1H9",active:"styles-module--active--3tbJ0",links:"styles-module--links--2AbM9"}},"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Experimental Software","description":"We are the team of software engineers and designers that will turn your idea into a product.","author":"@alexanderqchen"}}}}')},"8+s/":function(e,t,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},BE87:function(e,t,n){e.exports={footer:"styles-module--footer--2Ymu3",content:"styles-module--content--2PXMd",socials:"styles-module--socials--A_wy6",social:"styles-module--social--1fMGK",logoContainer:"styles-module--logoContainer--13yfK",copyright:"styles-module--copyright--3KzVs",links:"styles-module--links--bq2vO",link:"styles-module--link--3027N",mobileInfo:"styles-module--mobileInfo--1wAqp",logo:"styles-module--logo--2dUJo",mobileSocials:"styles-module--mobileSocials--3nFwl",mobileLinks:"styles-module--mobileLinks--obbqt"}},C9fy:function(e,t,n){var r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var e=a.call(this);return e==e?o.call(this):"Invalid Date"}))},DGZL:function(e,t,n){"use strict";var r=n("51K9"),o=n("q1tI"),a=n.n(o),i=n("qhky"),c=function(e){var t=e.description,n=e.lang,o=e.meta,c=e.title,s=r.data.site,u=t||s.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o)})};c.defaultProps={lang:"en",meta:[],description:""},t.a=c},KpVe:function(e,t,n){e.exports=n.p+"static/logo-white-bg-948b7c6a3cdd699bee148348e8acd780.svg"},LNxH:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPfSURBVHgBvZhfSFNRHMd/m4qCf0tJCsQrhBAG0kME4cSU8MUyiMAepFIfREFDH0SC9EUpQTPEF4PsoceEFBEUdDFnLyWsBxMJ2mT5sFVO3fBP0n79zuZd13nvuXfbvX7g65Wd37n77tzfOed3jwkS4zzpEuki6YLkcz/JQfpF+gKnTDlpmPSdhGoym81eur4l3SaZwEBukKxaTHHkJD3U22iRDsbkjN4BHagn/dbZnFTPIQF6DDQmlZV0DmLktMyJ+krKBo08OWVzomY1eINbcp3r6uqwurqaLRkJG7FYLNja2qp0L25OZkF4dh3rlJ2djXt7e8jwer04NjaGgiDEZCotLQ17enpwY2MDRaqqqpTiryoZfCnXoaKiAqMJBAI4MDCAQ0NDOD09jU6nE30+HwaDwdCPWV9fR5vNhsPDw9jS0hJqj6avr0/J4Gc5cwIpKNehpqYGjWB8fJw36vdFY+ajazcorO77+/tgBNvb27zmx9EfnMg9UTk5Oej3+1Fvamtr1XLXwoyxEbwJ4UcsS1NTE2RkZIDe1NfXq4XcFf/pA4VfwWbrzs4OGgXLb1AeQYdo0KoU1N/fj0aytLTEM/iHdJYZ3FIKWlxcRKNh6yzH5GWWg4p7YGFhIRhNcXExrznPzGtNTk4Go0lPT+e2cw0eHByA0dDOw23nGtzc3ASjcTgc3HZm8K9SI00SMJK1tTXVp8QMflNqnJqaAiOZmZlRC3GzP6+Bs+UsLy+jUaiUbT9Fl808g3Lllh709vaq7cXvRINnVAKxoaEhVOvpxeDgoJo5pgfSZ22VNmZlZWFqauqJfXlychITYWVlRUsVw8R2t2OLcKU0YGJiInTDkZERpErmWOeioiLs7u5GmkC4urrKNeRyuXBubi5UWbNU0WBM1CuQwS4G0A4SKskZCwsLijfq6uriGpydnY3FlChWyQpyBi3RwWyUGG1tbSduRFsUut1uVKO8vDxWg09BCcq7F9LgkpKSyOTo7OyM5CWrshsbG1ELHR0dsZhjJ2bc3S0Vwm9VkU7z8/ORL9vd3Q29odHqj1pheazRnAc4lb0UFuQUO+bn56Pdbsd4GR0d1WKOFafX5czI1VMu+H8WKHg8HigrKwM6EYDS0lLIy8sLBWVmZgI9PtCBAOkR6SPEiGAymdjxreyv1rrDqIygJyUl5SrPBC8hXXT/K3SG8gz0h60C1ubm5muHh4efQAeE3NzcD5D4CAYpNX7QvVTfOeOikqDLm4KCAmxvb9dkkFaBIBlixyoLSUlJ90A+7xWJ6zCbvjeHLhVHKoXwzBckIS6SD8LvtjbSe8rnLYiDf73QhWGWXvBfAAAAAElFTkSuQmCC"},R48M:function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},TYdL:function(e,t,n){e.exports=n.p+"static/logo-58869bccba28abcc2bc582e7580f0fff.svg"},X7BR:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={HOME:0,PORTFOLIO:1,CONTACT:2}},aVX8:function(e,t,n){e.exports={layout:"styles-module--layout--Z86Z4",content:"styles-module--content--RpADO"}},bmMU:function(e,t,n){n("Ll4R"),n("Ggvi"),n("q8oJ"),n("C9fy"),n("Kz6e"),n("klQ5"),n("MIFh"),n("ToIb"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("xJgp");var r="undefined"!=typeof Element,o="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(o&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!n.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!e(s.value[1],n.get(s.value[0])))return!1;return!0}if(a&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!n.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(t[s]!==n[s])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(n,u[s]))return!1;if(r&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],n[u[s]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},klQ5:function(e,t,n){var r=n("emib"),o=n("TUPI"),a=n("rjfK").f,i=n("chL8").f,c=n("mhTz"),s=n("lb9j"),u=r.RegExp,l=u,f=u.prototype,p=/a/g,d=/a/g,m=new u(p)!==p;if(n("QPJK")&&(!m||n("96qb")((function(){return d[n("sOol")("match")]=!1,u(p)!=p||u(d)==d||"/a/i"!=u(p,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),a=void 0===t;return!n&&r&&e.constructor===u&&a?e:o(m?new l(r&&!a?e.source:e,t):l((r=e instanceof u)?e.source:e,r&&a?s.call(e):t),n?this:f,u)};for(var y=function(e){e in u||a(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},h=i(l),b=0;h.length>b;)y(h[b++]);f.constructor=u,u.prototype=f,n("IYdN")(r,"RegExp",u)}n("to/b")("RegExp")},ntAx:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=(n("y7hu"),n("Wbzz")),i=n("X7BR"),c=n("KpVe"),s=n.n(c),u=n("+F0J"),l=n.n(u),f=function(e){var t=e.page;t===i.a.HOME?[l.a.link,l.a.active].join(" "):l.a.link,t===i.a.PORTFOLIO?[l.a.link,l.a.active].join(" "):l.a.link,t===i.a.CONTACT?[l.a.link,l.a.active].join(" "):l.a.link;return o.a.createElement("div",{className:l.a.header},o.a.createElement(a.Link,{to:"/"},o.a.createElement("img",{src:s.a,alt:"logo",className:l.a.logo})))},p=n("uMgP"),d=n.n(p),m=n("LNxH"),y=n.n(m),h=n("TYdL"),b=n.n(h),A=n("BE87"),g=n.n(A),v=function(){return o.a.createElement("div",{className:g.a.footer},o.a.createElement("div",{className:g.a.content},o.a.createElement("div",{className:g.a.socials},o.a.createElement("a",{href:"https://github.com/Experimental-Software-Studio",target:"_blank"},o.a.createElement("img",{src:y.a,className:g.a.social,alt:"GitHub Logo"})),o.a.createElement("a",{href:"https://www.linkedin.com/company/experimental-software",target:"_blank"},o.a.createElement("img",{src:d.a,className:g.a.social,alt:"LinkedIn Logo"}))),o.a.createElement("div",{className:g.a.logoContainer},o.a.createElement("img",{src:b.a,className:g.a.logo}),o.a.createElement("p",{className:g.a.copyright},"© 2020 Experimental Software LLC")),o.a.createElement("div",{className:g.a.links},o.a.createElement(a.Link,{to:"/about",className:g.a.link},"About"),o.a.createElement("a",{className:g.a.link},"Careers")),o.a.createElement("div",{className:g.a.mobileInfo},o.a.createElement("div",{className:g.a.mobileSocials},o.a.createElement("img",{src:y.a,className:g.a.social,alt:"GitHub Logo"}),o.a.createElement("img",{src:d.a,className:g.a.social,alt:"LinkedIn Logo"})),o.a.createElement("div",{className:g.a.mobileLinks},o.a.createElement(a.Link,{to:"/about",className:g.a.link},"About"),o.a.createElement("a",{className:g.a.link},"Careers")))))},w=n("aVX8"),T=n.n(w);t.a=function(e){var t=e.page,n=e.children;return o.a.createElement("div",{className:T.a.layout},o.a.createElement(f,{page:t}),o.a.createElement("main",{className:T.a.content},n),o.a.createElement(v,null))}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ye}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,o,a,i,c=n("17x9"),s=n.n(c),u=n("8+s/"),l=n.n(u),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),y=n("MgzW"),h=n.n(y),b="bodyAttributes",A="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",C="http-equiv",S="innerHTML",O="itemprop",k="name",L="property",j="rel",N="src",I="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",R="encodeSpecialCharacters",U="onChangeClientState",B="titleTemplate",q=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=_(e,v.TITLE),n=_(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,P);return t||r||void 0},V=function(e){return _(e,U)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||n===j&&"canonical"===e[n].toLowerCase()||s===j&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==S&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=h()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(v.BODY,r),se(v.HTML,o),ce(f,p);var d={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,a),metaTags:ue(v.META,i),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,l)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),s(e,m,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(v.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=a.indexOf(s);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[m.a.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case A:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===S||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===S||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(A,o,r),link:pe(v.LINK,a,r),meta:pe(v.META,i,r),noscript:pe(v.NOSCRIPT,c,r),script:pe(v.SCRIPT,s,r),style:pe(v.STYLE,u,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:X([E,I],e),bodyAttributes:Q(b,e),defer:_(e,M),encode:_(e,R),htmlAttributes:Q(A,e),linkTags:Z(v.LINK,[j,E],e),metaTags:Z(v.META,[k,w,C,L,O],e),noscriptTags:Z(v.NOSCRIPT,[S],e),onChangeClientState:V(e),scriptTags:Z(v.SCRIPT,[N,S],e),styleTags:Z(v.STYLE,[T],e),title:W(e),titleAttributes:Q(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),ye=(o=me,i=a=function(e){function t(){return F(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return J({},o,((t={})[r.type]=i,t.titleAttributes=J({},a),t));case v.BODY:return J({},o,{bodyAttributes:J({},a)});case v.HTML:return J({},o,{htmlAttributes:J({},a)})}return J({},o,((n={})[r.type]=J({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(G(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(o,r)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),a.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind}).call(this,n("yLpj"))},"t+fG":function(e,t,n){var r=n("P8UN"),o=n("96qb"),a=n("ap2Z"),i=/"/g,c=function(e,t,n,r){var o=String(a(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},uMgP:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7ZgxaBRBFIb/WSMkhZq1EIzFRVFQQTwRbAwSwUpSnIKd4NlYeiqopRc7bYyWNlEsbTwF0wRyKdIIeisSbTTGwogpctEUOTBkfW/hdLl9M5tks5sJ3AcDy80O+93szHtvVoG59boApUp01Q8r8D34GMT9sy8Ubo4U4WAYNuL75xwovwRbobdKgioPe+nvMPbu24nC4V3Bde3HAp6+/Y6s0QqOXTkRCIYpn9mP04/fYLq+iKxwpB8fDByMyDG9bheGLxxBlkQEuzs7cK2vVzuAxfM925AVUcGurbGD8ru3IysigvOLf2IHbeganG8soTo1px3Acqb+9UbcJJeffxBnieWvv/qELNmCvotlCCKVj7NweT0qhcbSMqpf5wLx6lQdWaJwe8SHxWgDNYeS7s7ojg6vPw5J+Z7ojubl0VwizXs4POUojjLfqM+b+Q2PslPchhMFOSDXrp4UBxSevUNlcja45sxSEmImP3TvvXHqy9E9BwJJHeXRzxikpsPRCepwQ7Nqipl3SH5o4JBRLhCk+0zZyUEKsBQ/eKUUj+/BJWoS6QiuIBu1ovtDqQiuBV5WUoGSqiDvVC7P3PIojj2aiK0npRxvXsEJ4J3Mchz0GW9mAUUK9IxuvR0VqqTUZpDDR1MuzBPDLLrCjk9NsDL5U/zdVGjsEDZXKoJcskmz96/f0NdKOoIxAnHBO4w1YUZHWzApbcGktAWTsjkFTYf3eiP+YB9HfRWZRAzpfJjhc0KupfT/ReLjX/7n0qGJaUhHwvdUuZi4QWfrU0Lt91LI39YfO/kVV2EtqubQh+qHsBMf/vJdhz/189d0ah7WFz9BGyOf8+z2F4X37Mg9Ljl5AAAAAElFTkSuQmCC"},wZFJ:function(e,t,n){"use strict";var r=n("P8UN"),o=n("Wadk")(3);r(r.P+r.F*!n("h/qr")([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},y7hu:function(e,t,n){"use strict";n("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-b54dd768d654ced87a83.js.map