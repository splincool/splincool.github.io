(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),i=(a(22),a(5)),m=a(6),s=a(8),o=a(7),u=a(9),d=a(31),h=a(32),p=a(29),E=a(27),g=a(30),f=function(){return l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(g.a,{to:"/create"},"New Project")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"/"},"Log Out")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"/",className:"btn btn-floating pink lighten-1"},"NN")))},b=function(){return l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(g.a,{to:"/signup"},"Signup")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"/signin"},"Login")))},N=function(){return l.a.createElement("nav",{className:"nav-wrapper grey darken-3"},l.a.createElement("div",{className:"container"},l.a.createElement(E.a,{to:"/",className:"brand-logo"},"MarioPlan"),l.a.createElement(f,null),l.a.createElement(b,null)))},v=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Notifications"))},j=function(){return l.a.createElement("div",{className:"card z-depth-0 project-summary"},l.a.createElement("div",{className:"card-content grey-text text-darken-3"},l.a.createElement("span",{className:"card-title"},"Project Title"),l.a.createElement("p",null,"Posted by the Net Ninja"),l.a.createElement("p",{className:"grey-text"},"3rd September, 2am")))},y=function(){return l.a.createElement("div",{className:"project-list section"},l.a.createElement(j,null),l.a.createElement(j,null),l.a.createElement(j,null),l.a.createElement(j,null))},w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"dashboard container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6"},l.a.createElement(y,null)),l.a.createElement("div",{className:"col s12 m5 offset-m1"},l.a.createElement(v,null))))}}]),t}(n.Component),O=function(e){var t=e.match.params.id;return l.a.createElement("div",{className:"container section project-details"},l.a.createElement("div",{className:"card z-depth-0"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},"Project Title - ",t),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, tempora omnis tempore perferendis quisquam sunt aut quos ea fuga at ducimus natus officiis, ratione debitis. Soluta repellat qui delectus architecto!")),l.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},l.a.createElement("div",null,"Posted by the Net Ninja"),l.a.createElement("div",null,"2nd Setember, 2am"))))},C=a(10),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),l.a.createElement("div",{className:"input-filed"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-filed"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),l.a.createElement("div",{className:"input-filed"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-filed"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-filed"},l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-filed"},l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Create a project"),l.a.createElement("div",{className:"input-filed"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),l.a.createElement("div",{className:"input-filed"},l.a.createElement("label",{htmlFor:"content"},"Project Content"),l.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(h.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:w}),l.a.createElement(p.a,{path:"/project/:id",component:O}),l.a.createElement(p.a,{path:"/signin",component:S}),l.a.createElement(p.a,{path:"/signup",component:k}),l.a.createElement(p.a,{path:"/create",component:x}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.3978eb81.chunk.js.map