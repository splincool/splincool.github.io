(function(e){function t(t){for(var n,a,u=t[0],i=t[1],f=t[2],s=0,l=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,f||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"351bfc04","chunk-ae538c46":"bbb9c7e2","chunk-e004e6e4":"503e32a3"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-ae538c46":1,"chunk-e004e6e4":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"31d6cfe0","chunk-ae538c46":"cf54b1e1","chunk-e004e6e4":"c3571497"}[e]+".css",o=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var f=c[u],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===n||s===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){f=l[u],s=f.getAttribute("data-href");if(s===n||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],d.parentNode.removeChild(d),r(c)},d.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(d)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=c);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;f=function(t){s.onerror=s.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var d=setTimeout(function(){f({type:"timeout",target:s})},12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var d=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"18f1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("744f"),r("6c7b"),r("7514"),r("20d6"),r("1c4c"),r("6762"),r("cadf"),r("e804"),r("55dd"),r("d04f"),r("c8ce"),r("217b"),r("7f7f"),r("f400"),r("7f25"),r("536b"),r("d9ab"),r("f9ab"),r("32d7"),r("25c9"),r("9f3c"),r("042e"),r("c7c6"),r("f4ff"),r("049f"),r("7872"),r("a69f"),r("0b21"),r("6c1a"),r("c7c62"),r("84b4"),r("c5f6"),r("2e37"),r("fca0"),r("7cdf"),r("ee1d"),r("b1b1"),r("87f3"),r("9278"),r("5df2"),r("04ff"),r("f751"),r("4504"),r("fee7"),r("ffc1"),r("0d6d"),r("9986"),r("8e6e"),r("25db"),r("e4f7"),r("b9a1"),r("64d5"),r("9aea"),r("db97"),r("66c8"),r("57f0"),r("165b"),r("456d"),r("cf6a"),r("fd24"),r("8615"),r("551c"),r("097d"),r("df1b"),r("2397"),r("88ca"),r("ba16"),r("d185"),r("ebde"),r("2d34"),r("f6b3"),r("2251"),r("c698"),r("a19f"),r("9253"),r("9275"),r("3b2b"),r("3846"),r("4917"),r("a481"),r("28a5"),r("386d"),r("6b54"),r("4f7f"),r("8a81"),r("ac4d"),r("8449"),r("9c86"),r("fa83"),r("48c0"),r("a032"),r("aef6"),r("d263"),r("6c37"),r("9ec8"),r("5695"),r("2fdb"),r("d0b0"),r("5df3"),r("b54a"),r("f576"),r("ed50"),r("788d"),r("14b9"),r("f386"),r("f559"),r("1448"),r("673e"),r("242a"),r("c66f"),r("b05c"),r("34ef"),r("6aa2"),r("15ac"),r("af56"),r("b6e4"),r("9c29"),r("63d9"),r("4dda"),r("10ad"),r("c02b"),r("4795"),r("130f"),r("ac6a"),r("96cf"),r("0cdd");var n=r("2b0e"),a=r("5f5b");r("ab8b"),r("2dd8");n["default"].use(a["a"]);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{id:"app"}},[r("b-row",[r("b-col",[r("Navbar")],1)],1),r("b-row",[r("b-col",{staticClass:"mb-3"},[r("router-view")],1)],1)],1)},c=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{staticClass:"mb-3 justify-content-between",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",[r("router-link",{staticClass:"logo-link",attrs:{to:"/"}},[e._v("Media shop")])],1),r("CartButton")],1)},i=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-button",{staticClass:"cart-btn d-flex align-items-start",attrs:{to:"/cart",variant:"outline-light"}},[r("span",{staticClass:"mdi mdi-cart mdi-24px"}),r("b-badge",{attrs:{variant:"light"}},[e._v(e._s(e.cartItemsCount))])],1)},s=[],l=r("2f62");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={name:"cartButton",computed:b({},Object(l["b"])(["cartItemsCount"]))},h=p,v=(r("bea9"),r("2877")),g=Object(v["a"])(h,f,s,!1,null,null,null),y=g.exports,w={name:"navbar",components:{CartButton:y}},O=w,I=(r("a555"),Object(v["a"])(O,u,i,!1,null,"38fbc108",null)),j=I.exports,k={name:"app",created:function(){this.$store.dispatch("downloadFromLocalStorage")},components:{Navbar:j}},S=k,C=(r("034f"),Object(v["a"])(S,o,c,!1,null,null,null)),P=C.exports,_=r("8c4f");n["default"].use(_["a"]);var x=new _["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"Home",component:function(){return r.e("chunk-ae538c46").then(r.bind(null,"bb51"))}},{path:"/cart",name:"Cart",component:function(){return r.e("chunk-e004e6e4").then(r.bind(null,"b789"))}},{path:"*",name:"NoFound",component:function(){return r.e("chunk-2d0e5e97").then(r.bind(null,"9703"))}}]});n["default"].use(l["a"]);var D=new l["a"].Store({state:{cartItems:[],isLoading:!0},mutations:{addToCart:function(e,t){var r=e.cartItems.findIndex(function(e){return e.id===t.trackId});r<0?e.cartItems.unshift({id:t.trackId,cartItemData:t,amount:1,timeAdded:new Date}):(e.cartItems[r].amount+=1,e.cartItems[r].timeAdded=new Date)},changeAmount:function(e,t){var r=e.cartItems.findIndex(function(e){return e.id===t.id});e.cartItems[r].amount=t.amount},deleteItemFromCart:function(e,t){e.cartItems=e.cartItems.filter(function(e){return e.id!=t})},deleteAllFromCart:function(e){e.cartItems=[]},setDataFromLocalStorage:function(e,t){e.cartItems=t.cartItems},setLoading:function(e,t){e.isLoading=t}},getters:{cartItemsCount:function(e){var t=0,r=!0,n=!1,a=void 0;try{for(var o,c=e.cartItems[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var u=o.value;t+=Number(u.amount)}}catch(i){n=!0,a=i}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}return t},sortCartItemsByDate:function(e){return e.cartItems.sort(function(e,t){var r=new Date(e.timeAdded).getTime(),n=new Date(t.timeAdded).getTime();return n>r?1:-1})},totalCartPrice:function(e){var t=e.cartItems.reduce(function(e,t){return e+t.amount*t.cartItemData.trackPrice},0);return t.toFixed(2)}},actions:{saveToLocalStorage:function(e){var t=e.state;localStorage&&localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},downloadFromLocalStorage:function(e){var t=e.commit;if(localStorage){var r=JSON.parse(localStorage.getItem("cartItems"));r&&t("setDataFromLocalStorage",{cartItems:r})}}}});n["default"].config.productionTip=!1,new n["default"]({router:x,store:D,render:function(e){return e(P)}}).$mount("#app")},"64a9":function(e,t,r){},"9e60":function(e,t,r){},a555:function(e,t,r){"use strict";var n=r("18f1"),a=r.n(n);a.a},bea9:function(e,t,r){"use strict";var n=r("9e60"),a=r.n(n);a.a}});
//# sourceMappingURL=app.78f95b47.js.map