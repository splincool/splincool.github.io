(function(t){function e(e){for(var a,s,i=e[0],l=e[1],u=e[2],f=0,d=[];f<i.length;f++)s=i[f],r[s]&&d.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/projects/music-widget/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("Widget")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"widget-wrapper"},[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("CategoryTabs")],1)],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",[n("v-toolbar",{attrs:{color:"blue",dark:"",tabs:""}},[n("v-toolbar-title",[t._v("Популярные поздравления")]),n("v-tabs",{attrs:{slot:"extension",color:"blue",grow:"","show-arrows":""},slot:"extension",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"yellow"}}),t._l(t.categories,function(e){return n("v-tab",{key:e,on:{click:t.chooseNextTab}},[t._v("\n          "+t._s(e)+"\n        ")])})],2)],1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.categories,function(e){return n("v-tab-item",{key:e},[n("SongsList",{attrs:{_songs:t.computedSongs}}),n("v-btn",{attrs:{disabled:1===t.currPage,small:""},on:{click:t.prevPage}},[t._v("\n            Назад\n        ")]),n("v-btn",{attrs:{disabled:t.currPage===t.pageCount,small:""},on:{click:t.nextPage}},[t._v("\n          Далее\n        ")])],1)}),1)],1)],1)},c=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",[n("Song",{attrs:{_songs:t._songs}})],1)],1)},d=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},t._l(t._songs,function(e,a){return n("v-flex",{key:a,attrs:{xs12:"",sm6:""}},[n("v-card",{staticClass:"ma-1"},[n("v-layout",{attrs:{"align-center":"","pa-1":""}},[n("v-flex",{attrs:{xs3:""}},[n("v-btn",{attrs:{fab:"",dark:"",small:"",depressed:"",color:"blue"}},[n("v-icon",{attrs:{large:"",dark:""}},[t._v("play_arrow")])],1)],1),n("v-flex",{attrs:{xs9:""}},[n("div",{staticClass:"text-xs-left d-flex blue--text font-weight-bold"},[t._v(t._s(e))])])],1)],1)],1)}),1)],1)],1)},p=[],v={name:"song",props:{_songs:Array}},b=v,h=n("2877"),m=n("6544"),w=n.n(m),x=n("8336"),y=n("b0af"),_=n("99d9"),P=n("0e8f"),V=n("132d"),T=n("a722"),j=Object(h["a"])(b,g,p,!1,null,null,null),k=j.exports;w()(j,{VBtn:x["a"],VCard:y["a"],VCardText:_["a"],VFlex:P["a"],VIcon:V["a"],VLayout:T["a"]});var W={name:"songsList",props:{_songs:Array},components:{Song:k}},O=W,S=Object(h["a"])(O,f,d,!1,null,null,null),C=S.exports;w()(S,{VFlex:P["a"],VLayout:T["a"]});var L={name:"widgetHeader",data:function(){return{currPage:1,songsPerPage:8,windowWidth:0,tab:null,categories:["По именам","Популярные","Прикольные","Мужчине","Девушке","О любви","Разные"],songs:["Поздравляю с Днём Рождения (звонок из полиции)","С днем рожденья тебя, дорогая моя!","Сестрёнка, пусть сбываются все твои мечты!","Пускай идут года - ты только молодей!","От всей души тебя я поздравляю с Днём Рождения!","Заводное поздравление для мужчины!","Поздравление для головокружительной Женщины!","Я поднимаю за тебя бокал!","С Новым Годом!"]}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()})},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},watch:{windowWidth:function(){this.windowWidth<600?this.songsPerPage=4:this.songsPerPage=8}},computed:{pageCount:function(){var t=Math.ceil(this.songs.length/this.songsPerPage);return t},computedSongs:function(){var t=this,e=this.songs.filter(function(e,n){return n>=t.songsPerPage*t.currPage-t.songsPerPage&&n<=t.songsPerPage*t.currPage-1});return e}},methods:{nextPage:function(){this.currPage+=1},prevPage:function(){1!=this.currPage&&(this.currPage-=1)},getWindowWidth:function(){this.windowWidth=document.documentElement.clientWidth},chooseNextTab:function(){this.currPage=1}},components:{SongsList:C}},E=L,$=n("71a3"),M=n("c671"),A=n("fe57"),F=n("aac8"),I=n("9a96"),z=n("71d9"),B=n("2a7f"),J=Object(h["a"])(E,u,c,!1,null,null,null),N=J.exports;w()(J,{VBtn:x["a"],VFlex:P["a"],VLayout:T["a"],VTab:$["a"],VTabItem:M["a"],VTabs:A["a"],VTabsItems:F["a"],VTabsSlider:I["a"],VToolbar:z["a"],VToolbarTitle:B["a"]});var D={components:{CategoryTabs:N}},H=D,q=(n("5a31"),n("a523")),G=Object(h["a"])(H,i,l,!1,null,null,null),K=G.exports;w()(G,{VContainer:q["a"],VFlex:P["a"],VLayout:T["a"]});var Q={name:"App",components:{Widget:K},data:function(){return{}}},R=Q,U=n("7496"),X=n("549c"),Y=Object(h["a"])(R,o,s,!1,null,null,null),Z=Y.exports;w()(Y,{VApp:U["a"],VContent:X["a"]});var tt=n("8c4f");a["a"].use(tt["a"]);var et=new tt["a"]({routes:[]}),nt=n("2f62");a["a"].use(nt["a"]);var at=new nt["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:et,store:at,render:function(t){return t(Z)}}).$mount("#app")},"5a31":function(t,e,n){"use strict";var a=n("a3a1"),r=n.n(a);r.a},a3a1:function(t,e,n){}});
//# sourceMappingURL=app.5b4ba124.js.map