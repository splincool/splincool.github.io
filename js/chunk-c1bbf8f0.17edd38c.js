(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1bbf8f0"],{"057f":function(t,e,n){var o=n("fc6a"),i=n("241c").f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?s(t):i(o(t))}},"25f0":function(t,e,n){"use strict";var o=n("6eeb"),i=n("825a"),r=n("d039"),a=n("ad6d"),s="toString",c=RegExp.prototype,d=c[s],u=r((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),l=d.name!=s;(u||l)&&o(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),n=t.flags,o=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return"/"+e+"/"+o}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var o=n("6547").charAt,i=n("69f3"),r=n("7dd0"),a="String Iterator",s=i.set,c=i.getterFor(a);r(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=o(n,i),e.index+=t.length,{value:t,done:!1})}))},"4de4":function(t,e,n){"use strict";var o=n("23e7"),i=n("b727").filter,r=n("1dde"),a=n("ae40"),s=r("filter"),c=a("filter");o({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var o=n("0366"),i=n("7b0b"),r=n("9bdd"),a=n("e95a"),s=n("50c4"),c=n("8418"),d=n("35a1");t.exports=function(t){var e,n,u,l,f,v,h=i(t),p="function"==typeof this?this:Array,b=arguments.length,y=b>1?arguments[1]:void 0,g=void 0!==y,S=d(h),m=0;if(g&&(y=o(y,b>2?arguments[2]:void 0,2)),void 0==S||p==Array&&a(S))for(e=s(h.length),n=new p(e);e>m;m++)v=g?y(h[m],m):h[m],c(n,m,v);else for(l=S.call(h),f=l.next,n=new p;!(u=f.call(l)).done;m++)v=g?r(l,y,[u.value,m],!0):u.value,c(n,m,v);return n.length=m,n}},"5f52":function(t,e,n){"use strict";var o=n("8de5"),i=n.n(o);i.a},6547:function(t,e,n){var o=n("a691"),i=n("1d80"),r=function(t){return function(e,n){var r,a,s=String(i(e)),c=o(n),d=s.length;return c<0||c>=d?t?"":void 0:(r=s.charCodeAt(c),r<55296||r>56319||c+1===d||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):r:t?s.slice(c,c+2):a-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"746f":function(t,e,n){var o=n("428f"),i=n("5135"),r=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});i(e,t)||a(e,t,{value:r.f(t)})}},"8de5":function(t,e,n){},a017:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note-view"},[n("header",{staticClass:"note-view__header"},[n("router-link",{staticClass:"header__back-btn",attrs:{to:"/"}},[t._v(" ← Все заметки ")])],1),n("div",{staticClass:"note-view__body"},[n("div",[n("div",{staticClass:"top-edit-panel"},[n("div",{staticClass:"top-edit-panel__btn",class:t.isUndo?"":"disabled",attrs:{title:"Undo"},on:{click:t.onUndo}},[n("i",{staticClass:"mdi mdi-undo"})]),n("div",{staticClass:"top-edit-panel__btn",class:t.isRedo?"":"disabled",attrs:{title:"Redo"},on:{click:t.onRedo}},[n("i",{staticClass:"mdi mdi-redo"})])]),n("div",{staticClass:"todo-title__wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],staticClass:"todo-title__text",attrs:{type:"text",placeholder:"Введите заголовок"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}})]),n("div",{staticClass:"todo-input__wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todoValue,expression:"todoValue"}],staticClass:"todo-input__input",attrs:{type:"text",placeholder:"Введите todo"},domProps:{value:t.todoValue},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onAddTodo(e)},input:function(e){e.target.composing||(t.todoValue=e.target.value)}}}),n("div",{staticClass:"todo-input__btn",on:{click:t.onAddTodo}},[t._v("Добавить")])]),n("div",{staticClass:"todos-block__wrapper"},t._l(t.note.todos,(function(e){return n("div",{key:e.todoId,staticClass:"todos-block__todo-raw"},[n("span",{staticClass:"todos-block__remove-btn",on:{click:function(n){return t.onRemoveTodo(e.todoId)}}},[t._v("✕")]),n("input",{staticClass:"todos-block__todo-checkbox",attrs:{type:"checkbox"},domProps:{checked:e.isChecked},on:{change:function(n){return t.onTodoCheckbox(e.todoId)}}}),n("span",{staticClass:"todos-block__todo-text",style:{textDecoration:e.isChecked?"line-through":"none"},attrs:{contenteditable:""},on:{blur:function(n){return t.onTodoText(n,e.todoId)}}},[t._v(" "+t._s(e.text)+" ")])])})),0)]),n("div",{staticClass:"bottom-edit-panel"},[n("div",{staticClass:"bottom-edit-panel__wrapper"},[n("div",{staticClass:"bottom-edit-panel__btn btn delete-btn",on:{click:function(e){return t.onDeleteNote()}}},[t._v("Удалить")]),n("div",{staticClass:"bottom-edit-panel__btn btn primary-btn",on:{click:function(e){return t.onCancelEdit()}}},[t._v("Отменить")])]),n("div",{staticClass:"bottom-edit-panel__btn btn",class:t.isSaveBtn?"primary-btn":"btn-disabled",on:{click:function(e){return t.onSaveNote()}}},[t._v("Сохранить")])])])])},i=[];n("4de4"),n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0"),n("a630"),n("fb6a"),n("b0c0"),n("25f0");function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function s(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=a(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,r=!0,s=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return r=t.done,t},e:function(t){s=!0,i=t},f:function(){try{r||null==o["return"]||o["return"]()}finally{if(s)throw i}}}}function c(t){if(Array.isArray(t))return r(t)}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return c(t)||d(t)||a(t)||u()}var f={name:"NoteView",data:function(){return{activeNote:{},todoValue:"",note:{noteId:this.$store.state.notes.length+1,title:"",todos:[]},prevPrevState:null,prevState:null,isUndo:!1,isRedo:!1}},created:function(){var t=this.$route.params.noteId;isNaN(t)||this.getNoteData(t)},watch:{"$store.state.isCancelEdit":function(t){t&&this.getNoteData(this.note.noteId)}},computed:{isSaveBtn:function(){return this.note.title||this.note.todos&&this.note.todos.length},isCancelEdit:function(){return this.$store.state.isCancelEdit}},methods:{getNoteData:function(t){var e=this.$store.getters.getNote(t);this.prevPrevState=JSON.parse(JSON.stringify(e)),this.prevState=JSON.parse(JSON.stringify(e)),this.note=JSON.parse(JSON.stringify(e))},onAddTodo:function(){if(this.todoValue.length){var t=this.note.todos.length+1;this.note.todos.push({todoId:t,isChecked:!1,text:this.todoValue}),this.todoValue="",this.onSaveMoves()}},onRemoveTodo:function(t){var e=this.note.todos.filter((function(e){return e.todoId!==t}));this.note.todos=l(e),this.onSaveMoves()},onTodoCheckbox:function(t){var e,n=this.note.todos,o=s(n);try{for(o.s();!(e=o.n()).done;){var i=e.value;i.todoId===t&&(i.isChecked=!i.isChecked)}}catch(r){o.e(r)}finally{o.f()}this.note.todos=l(n),this.onSaveMoves()},onTodoText:function(t,e){var n,o=this.note.todos,i=s(o);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.todoId===e&&(r.text=t.target.innerText)}}catch(a){i.e(a)}finally{i.f()}this.note.todos=l(o),this.onSaveMoves()},onSaveNote:function(){this.isSaveBtn&&(this.$store.dispatch("saveNote",this.note),this.$router.push({name:"HomeView"}))},onCancelEdit:function(){this.$store.dispatch("popupCanceEditAction")},onDeleteNote:function(){this.$store.dispatch("popupDeleteAction",this.note.noteId)},onUndo:function(){this.isUndo&&(this.note=JSON.parse(JSON.stringify(this.prevPrevState)),this.isRedo=!0,this.isUndo=!1)},onRedo:function(){this.isRedo&&(this.note=JSON.parse(JSON.stringify(this.prevState)),this.prevState=JSON.parse(JSON.stringify(this.prevPrevState)),this.onSaveMoves(),this.isRedo=!1,this.isUndo=!0)},onSaveMoves:function(){this.prevPrevState=JSON.parse(JSON.stringify(this.prevState)),this.prevState=JSON.parse(JSON.stringify(this.note)),this.isUndo=!0,this.isRedo=!1}}},v=f,h=(n("5f52"),n("2877")),p=Object(h["a"])(v,o,i,!1,null,"629e0d40",null);e["default"]=p.exports},a4d3:function(t,e,n){"use strict";var o=n("23e7"),i=n("da84"),r=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),d=n("fdbf"),u=n("d039"),l=n("5135"),f=n("e8b5"),v=n("861d"),h=n("825a"),p=n("7b0b"),b=n("fc6a"),y=n("c04e"),g=n("5c6c"),S=n("7c73"),m=n("df75"),C=n("241c"),_=n("057f"),w=n("7418"),O=n("06cf"),N=n("9bf2"),k=n("d1e7"),x=n("9112"),A=n("6eeb"),T=n("5692"),L=n("f772"),P=n("d012"),E=n("90e3"),I=n("b622"),J=n("e538"),R=n("746f"),M=n("d44e"),j=n("69f3"),V=n("b727").forEach,$=L("hidden"),D="Symbol",U="prototype",G=I("toPrimitive"),F=j.set,H=j.getterFor(D),B=Object[U],q=i.Symbol,Q=r("JSON","stringify"),W=O.f,z=N.f,K=_.f,X=k.f,Y=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),nt=T("wks"),ot=i.QObject,it=!ot||!ot[U]||!ot[U].findChild,rt=s&&u((function(){return 7!=S(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=W(B,e);o&&delete B[e],z(t,e,n),o&&t!==B&&z(B,e,o)}:z,at=function(t,e){var n=Y[t]=S(q[U]);return F(n,{type:D,tag:t,description:e}),s||(n.description=e),n},st=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,e,n){t===B&&ct(Z,e,n),h(t);var o=y(e,!0);return h(n),l(Y,o)?(n.enumerable?(l(t,$)&&t[$][o]&&(t[$][o]=!1),n=S(n,{enumerable:g(0,!1)})):(l(t,$)||z(t,$,g(1,{})),t[$][o]=!0),rt(t,o,n)):z(t,o,n)},dt=function(t,e){h(t);var n=b(e),o=m(n).concat(ht(n));return V(o,(function(e){s&&!lt.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?S(t):dt(S(t),e)},lt=function(t){var e=y(t,!0),n=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,$)&&this[$][e])||n)},ft=function(t,e){var n=b(t),o=y(e,!0);if(n!==B||!l(Y,o)||l(Z,o)){var i=W(n,o);return!i||!l(Y,o)||l(n,$)&&n[$][o]||(i.enumerable=!0),i}},vt=function(t){var e=K(b(t)),n=[];return V(e,(function(t){l(Y,t)||l(P,t)||n.push(t)})),n},ht=function(t){var e=t===B,n=K(e?Z:b(t)),o=[];return V(n,(function(t){!l(Y,t)||e&&!l(B,t)||o.push(Y[t])})),o};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===B&&n.call(Z,t),l(this,$)&&l(this[$],e)&&(this[$][e]=!1),rt(this,e,g(1,t))};return s&&it&&rt(B,e,{configurable:!0,set:n}),at(e,t)},A(q[U],"toString",(function(){return H(this).tag})),A(q,"withoutSetter",(function(t){return at(E(t),t)})),k.f=lt,N.f=ct,O.f=ft,C.f=_.f=vt,w.f=ht,J.f=function(t){return at(I(t),t)},s&&(z(q[U],"description",{configurable:!0,get:function(){return H(this).description}}),a||A(B,"propertyIsEnumerable",lt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),V(m(nt),(function(t){R(t)})),o({target:D,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:dt,getOwnPropertyDescriptor:ft}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:vt,getOwnPropertySymbols:ht}),o({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(p(t))}}),Q){var pt=!c||u((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));o({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var o,i=[t],r=1;while(arguments.length>r)i.push(arguments[r++]);if(o=e,(v(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!st(e))return e}),i[1]=e,Q.apply(null,i)}})}q[U][G]||x(q[U],G,q[U].valueOf),M(q,D),P[$]=!0},a630:function(t,e,n){var o=n("23e7"),i=n("4df4"),r=n("1c7e"),a=!r((function(t){Array.from(t)}));o({target:"Array",stat:!0,forced:a},{from:i})},ad6d:function(t,e,n){"use strict";var o=n("825a");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d28b:function(t,e,n){var o=n("746f");o("iterator")},ddb0:function(t,e,n){var o=n("da84"),i=n("fdbc"),r=n("e260"),a=n("9112"),s=n("b622"),c=s("iterator"),d=s("toStringTag"),u=r.values;for(var l in i){var f=o[l],v=f&&f.prototype;if(v){if(v[c]!==u)try{a(v,c,u)}catch(p){v[c]=u}if(v[d]||a(v,d,l),i[l])for(var h in r)if(v[h]!==r[h])try{a(v,h,r[h])}catch(p){v[h]=r[h]}}}},e01a:function(t,e,n){"use strict";var o=n("23e7"),i=n("83ab"),r=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,d=n("e893"),u=r.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};d(f,u);var v=f.prototype=u.prototype;v.constructor=f;var h=v.toString,p="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(a(l,t))return"";var n=p?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,n){var o=n("b622");e.f=o},fb6a:function(t,e,n){"use strict";var o=n("23e7"),i=n("861d"),r=n("e8b5"),a=n("23cb"),s=n("50c4"),c=n("fc6a"),d=n("8418"),u=n("b622"),l=n("1dde"),f=n("ae40"),v=l("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),b=[].slice,y=Math.max;o({target:"Array",proto:!0,forced:!v||!h},{slice:function(t,e){var n,o,u,l=c(this),f=s(l.length),v=a(t,f),h=a(void 0===e?f:e,f);if(r(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(l,v,h);for(o=new(void 0===n?Array:n)(y(h-v,0)),u=0;v<h;v++,u++)v in l&&d(o,u,l[v]);return o.length=u,o}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-c1bbf8f0.17edd38c.js.map