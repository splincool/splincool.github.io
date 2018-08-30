(function(e){function n(n){for(var a,i,o=n[0],c=n[1],d=n[2],u=0,f=[];u<o.length;u++)i=o[u],r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(n);while(f.length)f.shift()();return s.push.apply(s,d||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],a=!0,o=1;o<t.length;o++){var c=t[o];0!==r[c]&&(a=!1)}a&&(s.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},s=[];function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var d=0;d<o.length;d++)n(o[d]);var l=c;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("c21b"),r=t.n(a);r.a},"0ab0":function(e,n,t){"use strict";var a=t("222f"),r=t.n(a);r.a},"0c74":function(e,n,t){},"222f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Game")],1)},s=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"game"},[t("div",{staticClass:"info-panel"},[e.isGameStarted?[t("div",{staticClass:"time"},[e._v("Time: "+e._s(e.clock)+" ")]),t("div",{staticClass:"moves"},[e._v("Moves: "+e._s(e.moves))])]:[t("div",{staticClass:"overlay-box"},[t("div",{staticClass:"start-btn",on:{click:e.onStart}},[e._v("\n            Start\n        ")])])]],2),t("div",{staticClass:"cards-board"},[e._l(e.cardsArray,function(n,a){return[t("Card",{key:a,attrs:{_card:n},on:{cardClick:e.onCardClick}})]})],2),e.isGameFinished?t("div",{staticClass:"overlay-box"},[t("div",{staticClass:"play-again-btn",on:{click:e.onPlayAgain}},[e._v("\n        Play Again?\n    ")])]):e._e()])},o=[],c=(t("7f7f"),t("ac4d"),t("8a81"),t("ac6a"),[{id:1,name:"Card #1",color:"lightsalmon",isOpen:!1,isGuessed:!1},{id:2,name:"Card #1",color:"lightsalmon",isOpen:!1,isGuessed:!1},{id:3,name:"Card #2",color:"#65A5AD",isOpen:!1,isGuessed:!1},{id:4,name:"Card #2",color:"#65A5AD",isOpen:!1,isGuessed:!1},{id:5,name:"Card #3",color:"#FFBB00",isOpen:!1,isGuessed:!1},{id:6,name:"Card #3",color:"#FFBB00",isOpen:!1,isGuessed:!1},{id:7,name:"Card #4",color:"#4CB5F5",isOpen:!1,isGuessed:!1},{id:8,name:"Card #4",color:"#4CB5F5",isOpen:!1,isGuessed:!1},{id:9,name:"Card #5",color:"#DE7A22",isOpen:!1,isGuessed:!1},{id:10,name:"Card #5",color:"#DE7A22",isOpen:!1,isGuessed:!1},{id:11,name:"Card #6",color:"#EC96A4",isOpen:!1,isGuessed:!1},{id:12,name:"Card #6",color:"#EC96A4",isOpen:!1,isGuessed:!1},{id:13,name:"Card #7",color:"#F62A00",isOpen:!1,isGuessed:!1},{id:14,name:"Card #7",color:"#F62A00",isOpen:!1,isGuessed:!1},{id:15,name:"Card #8",color:"#523634",isOpen:!1,isGuessed:!1},{id:16,name:"Card #8",color:"#523634",isOpen:!1,isGuessed:!1}]),d=c,l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"card-wrapper"},[e._card.isGuessed?t("div",{staticClass:"empty-card"}):t("div",{staticClass:"card",class:{guessed:e._card.isGuessed},on:{click:function(n){e.$emit("cardClick",e._card)}}},[e._card.isOpen?t("div",{staticClass:"front",style:{background:e._card.color}},[e._v("\n      "+e._s(e._card.name)+"\n    ")]):t("div",{staticClass:"back"})])])},u=[],f={name:"Card",props:{_card:Object,_isOpen:Boolean}},p=f,m=(t("0ab0"),t("2877")),v=Object(m["a"])(p,l,u,!1,null,null,null);v.options.__file="Card.vue";var h=v.exports,C={name:"Game",data:function(){return{cards:d,openCards:[],moves:0,clockCount:0,isGameStarted:!1,isGameFinished:!1,guessedCardsPairs:0}},created:function(){this.shuffleCards()},watch:{openCards:function(e){var n=this;2===e.length&&(this.timeout=setTimeout(function(){n.compareCards()},500))},guessedCardsPairs:function(e){8===e&&(clearTimeout(this.timeoutClock),this.isGameFinished=!0)}},methods:{shuffleCards:function(){for(var e=null,n={},t=0;t<this.cards.length;t++)e=Math.floor(15*Math.random()),n=this.cards[t],this.cards[t]=this.cards[e],this.cards[e]=n},onStart:function(){this.isGameStarted=!0},onPlayAgain:function(){location.reload()},onCardClick:function(e){var n=!0,t=!1,a=void 0;try{for(var r,s=this.cards[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var i=r.value;i.id===e.id&&(i.isOpen=!0)}}catch(e){t=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(t)throw a}}this.openCards.push(e)},compareCards:function(){var e=this.openCards[0],n=this.openCards[1];if(e.name===n.name){var t=!0,a=!1,r=void 0;try{for(var s,i=this.cards[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var o=s.value;o.name===e.name&&(o.isGuessed=!0)}}catch(e){a=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(a)throw r}}this.guessedCardsPairs+=1}else{var c=!0,d=!1,l=void 0;try{for(var u,f=this.cards[Symbol.iterator]();!(c=(u=f.next()).done);c=!0){var p=u.value;p.name!==e.name&&p.name!==n.name||(p.isOpen=!1)}}catch(e){d=!0,l=e}finally{try{c||null==f.return||f.return()}finally{if(d)throw l}}}this.openCards=[],clearTimeout(this.timeout),this.moves+=1}},computed:{cardsArray:function(){return this.cards},clock:function(){var e=this;return this.timeoutClock=setTimeout(function(){e.clockCount+=1},1e3),this.clockCount}},components:{Card:h}},y=C,_=(t("68e4"),Object(m["a"])(y,i,o,!1,null,null,null));_.options.__file="Game.vue";var b=_.exports,O={name:"app",components:{Game:b}},G=O,g=(t("034f"),Object(m["a"])(G,r,s,!1,null,null,null));g.options.__file="App.vue";var k=g.exports,w=t("2f62");a["a"].use(w["a"]);var A=new w["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({store:A,render:function(e){return e(k)}}).$mount("#app")},"68e4":function(e,n,t){"use strict";var a=t("0c74"),r=t.n(a);r.a},c21b:function(e,n,t){}});
//# sourceMappingURL=app.0f20e898.js.map