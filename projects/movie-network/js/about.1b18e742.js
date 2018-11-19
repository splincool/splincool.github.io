(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{2029:function(t,e,s){},"2d3b":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("b-container",{staticClass:"text-center"},[t.loading?r("img",{attrs:{src:s("cf1c"),alt:"loading..."}}):t._e()]),t.show?r("b-container",[r("b-row",t._l(t.movies,function(e){return r("b-col",{key:e.show.id,attrs:{md:"3"}},[r("b-card",{staticClass:"mb-2 pointer",staticStyle:{"max-width":"20rem"},attrs:{title:e.show.name,"img-src":t.coverImage(e),"img-alt":e.show.name,"img-top":"",tag:"article"},on:{click:function(s){t.movieRouter(e.show.id)}}})],1)}))],1):t._e()],1)},o=[],i={name:"search",data:function(){return{show:!1}},created:function(){this.getMovies()},watch:{"$store.state.searchValue":function(t){t&&this.getMovies()},movies:function(t){t&&(this.show=!0)}},computed:{movies:function(){return this.$store.getters.movies},loading:function(){return this.$store.state.loading}},methods:{getMovies:function(){var t="search/shows?q=".concat(this.$store.getters.searchValue);this.$store.dispatch("getMovies",t)},movieRouter:function(t){this.$router.push("movie/"+t)},coverImage:function(t){return t.show.image?t.show.image.medium:""}}},a=i,n=(s("43cf"),s("2877")),l=Object(n["a"])(a,r,o,!1,null,null,null);l.options.__file="Search.vue";e["default"]=l.exports},"43cf":function(t,e,s){"use strict";var r=s("2029"),o=s.n(r);o.a},acc0:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"text-center"},[s("b-row",[s("b-col",[s("signin")],1),s("b-col",[s("signup"),s("loginWithGoogle",{staticClass:"mt-4"})],1)],1)],1)},o=[],i=(s("cadf"),s("551c"),s("097d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"text-center"},[s("b-form",{staticClass:"mb-4",on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onSignin(e):null}}},[s("b-form-group",{staticClass:"col",attrs:{label:"Signin"}},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{attrs:{cols:"auto"}},[s("b-form-input",{staticClass:"mb-2",attrs:{name:"email",label:"Email",type:"email",placeholder:"Your email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("b-col",{attrs:{cols:"auto"}},[s("b-form-input",{staticClass:"mb-2",attrs:{name:"password",label:"Password",type:"password",placeholder:"Your password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{attrs:{cols:"auto"}},[s("b-button",{staticClass:"mr-1",attrs:{variant:"primary"},on:{click:t.onSignin}},[t._v("Login")])],1),s("b-col",{attrs:{cols:"auto"}},[s("b-button",{attrs:{type:"reset",variant:"danger"},on:{click:t.resetForm}},[t._v("Reset")])],1)],1)],1),t.error?s("span",{staticClass:"font-weight-light"},[t._v(t._s(t.error.message))]):t._e(),s("p",[t._v("Forgot password? enter your email and reset your password!")]),s("b-button",{attrs:{type:"submit",variant:"danger"},on:{click:function(e){return e.preventDefault(),t.onResetPassword(e)}}},[t._v("Reset")])],1)}),a=[],n={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/profile")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onResetPassword:function(){if(""===this.email)return this.$store.dispatch("setError",{message:"Email can not be blnak"});this.$store.dispatch("resetPasswordWithEmail",{email:this.email})},onDismissed:function(){this.$store.dispatch("clearError")},resetForm:function(){this.email="",this.password=""}}},l=n,u=s("2877"),c=Object(u["a"])(l,i,a,!1,null,null,null);c.options.__file="Signin.vue";var m=c.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-form",{staticClass:"text-center",on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onSignup(e):null}}},[s("b-form-group",{staticClass:"col",attrs:{label:"Signup"}},[s("b-form-input",{staticClass:"mb-2",attrs:{name:"email",label:"Email",id:"email",type:"email",placeholder:"Enter email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("b-form-input",{staticClass:"mb-2",attrs:{name:"password",id:"password",type:"password",placeholder:"Enter password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("b-form-input",{staticClass:"mb-2",attrs:{name:"confirmPassword",label:"Confirm Password",placeholder:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),s("b-form-input",{staticClass:"mb-2",attrs:{name:"text",id:"userName",type:"text",placeholder:"Enter Name",required:""},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),s("b-button",{staticClass:"mr-1",attrs:{variant:"primary"},on:{click:t.onSignup}},[t._v("Submit")]),s("b-button",{attrs:{type:"reset",variant:"danger"},on:{click:t.resetForm}},[t._v("Reset")])],1)},f=[],p={data:function(){return{email:"",password:"",confirmPassword:"",userName:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Passwords do not match":""},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/profile")}},methods:{onSignup:function(){""===this.comparePasswords?this.$store.dispatch("signUserUp",{email:this.email,password:this.password,displayName:this.userName}):alert("Passwords do not match")},onDismissed:function(){this.$store.dispatch("clearError")},resetForm:function(){this.email="",this.password="",this.confirmPassword="",this.userName=""}}},h=p,b=Object(u["a"])(h,d,f,!1,null,null,null);b.options.__file="Signup.vue";var v=b.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loginWithGoogle"},[r("b-button",{staticClass:"google",attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.onSigninGoogle(e)}}},[t._v("Login with\n    "),r("img",{attrs:{src:s("cebc")}}),t._v("oogle\n  ")])],1)},w=[],y={name:"loginWithGoogle",computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/profile")}},methods:{onSigninGoogle:function(){this.$store.dispatch("signUserInGoogle")}}},A=y,_=Object(u["a"])(A,g,w,!1,null,null,null);_.options.__file="loginWithGoogle.vue";var C=_.exports,P={name:"authUser",components:{signin:m,signup:v,loginWithGoogle:C},computed:{user:function(){return this.$store.getters.user}}},x=P,k=Object(u["a"])(x,r,o,!1,null,null,null);k.options.__file="authUser.vue";e["default"]=k.exports},b3b1:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"text-center"},[s("ProfileInfo"),t.update?s("UpdateProfile"):t._e(),s("b-button",{staticClass:"m-3",on:{click:t.UpdateProfileUser}},[t._v("\n  "+t._s(t.updateText)+"\n  ")]),s("myMovies")],1)},o=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("h2",[t._v("Profile info")]),s("b-row",[s("b-col",[t.defaultPhoto?t._e():s("b-img",{staticClass:"m-3",attrs:{rounded:"",width:"200",height:"300",thumbnail:"",src:t.user.photoURL,fluid:"",alt:"userIcon"}}),t.defaultPhoto?s("b-img",{staticClass:"m-3",attrs:{rounded:"",width:"200",height:"200",thumbnail:"",blank:"","blank-color":"#777",fluid:"",alt:"userIcon"}}):t._e()],1),s("b-col",[s("h2",{staticClass:"m-3"},[t._v(t._s(t.user.name))]),s("p",{staticClass:"m-3"},[s("b",[t._v("Your email: ")]),t._v(" "+t._s(t.user.email))])])],1)],1)},a=[],n={data:function(){return{defaultPhoto:!1}},computed:{user:function(){return this.$store.getters.user}},watch:{user:function(t){t&&this.$router.push("*")}},created:function(){this.user.photoURL?this.defaultPhoto=!1:this.defaultPhoto=!0}},l=n,u=s("2877"),c=Object(u["a"])(l,i,a,!1,null,null,null);c.options.__file="ProfileInfo.vue";var m=c.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-form",{staticClass:"mb-3",on:{submit:function(e){return e.preventDefault(),t.updateProfile(e)}}},[s("h3",{staticClass:"mb-3"},[t._v("Update Profile")]),s("b-col",{staticClass:"mb-3"},[s("b-row",{staticClass:"mb-3"},[s("b-form-input",{attrs:{placeholder:"Your name"},model:{value:t.displayName,callback:function(e){t.displayName=e},expression:"displayName"}})],1),s("b-row",{staticClass:"mb-3"},[s("b-form-file",{attrs:{state:Boolean(t.file),placeholder:"Choose a image...",accept:".jpg, .jpeg, .png"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1),s("b-button",{staticClass:"mb-4",attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.updateProfile(e)}}},[t._v("Save")]),t.progressShow?s("b-progress",{staticClass:"mb-2",attrs:{value:t.progress,variant:"success",striped:t.striped}}):t._e()],1)],1)},f=[],p=(s("7f7f"),{data:function(){return{displayName:"",file:null,striped:!0}},methods:{updateProfile:function(){""!==this.displayName&&null!==this.file&&this.$store.dispatch("updateProfile",{displayName:this.displayName,photoURL:this.file}),""===this.displayName&&null!==this.file?this.$store.dispatch("updateProfile",{displayName:this.user.name,photoURL:this.file}):(this.showProgress=!1,this.$store.dispatch("updateProfile",{displayName:this.displayName}))}},computed:{user:function(){return this.$store.getters.user},progress:function(){return this.$store.getters.progress},progressShow:function(){return this.$store.state.progressShow}}}),h=p,b=Object(u["a"])(h,d,f,!1,null,null,null);b.options.__file="UpdateProfile.vue";var v=b.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"text-center"},[r("b-container",{staticClass:"text-center"},[t.loading?r("img",{staticClass:"mt-6",attrs:{src:s("cf1c"),alt:"loading..."}}):t._e()]),t.show?r("b-container",[r("h2",[t._v("My favourites")]),r("b-row",{attrs:{"align-h":"center"}},t._l(t.myMovies,function(e){return r("b-col",{key:e.id,staticClass:"mb-3",attrs:{md:"3"}},[r("b-card",{staticClass:"mb-2 pointer",staticStyle:{"max-width":"20rem"},attrs:{title:e.name,"img-src":e.image.medium,"img-alt":e.name,"img-top":"",tag:"article"},on:{click:function(s){t.movieRouter(e.id)}}}),r("b-button",{attrs:{variant:"primary"},on:{click:function(s){t.deleteMyMovies(e.id)}}},[t._v("\n        Remove from favorites\n        ")])],1)}))],1):t._e()],1)},w=[],y=(s("cadf"),s("551c"),s("097d"),s("154a")),A={name:"myMovies",data:function(){return{show:!1}},components:{movieCard:y["a"]},created:function(){this.getMyMovies()},computed:{loading:function(){return this.$store.state.loading},user:function(){return this.$store.state.user},myMovies:function(){return this.$store.state.myMovies}},watch:{myMovies:function(t){t&&(this.show=!0)},getMyMovies:function(){this.$store.dispatch("getMyMovies")}},methods:{deleteMyMovies:function(t){this.$store.dispatch("deleteMyMovies",t),this.getMyMovies()},getMyMovies:function(){this.$store.dispatch("getMyMovies")},movieRouter:function(t){this.$router.push("/movie/"+t)}}},_=A,C=Object(u["a"])(_,g,w,!1,null,null,null);C.options.__file="myMovies.vue";var P=C.exports,x={name:"Profile",components:{ProfileInfo:m,UpdateProfile:v,myMovies:P},data:function(){return{update:!1,updateText:"Update profile"}},computed:{user:function(){return this.$store.getters.user}},methods:{UpdateProfileUser:function(){this.update=!this.update,!1===this.update?this.updateText="Update profile":this.updateText="Cancel"}}},k=x,M=Object(u["a"])(k,r,o,!1,null,null,null);M.options.__file="profile.vue";e["default"]=M.exports},cebc:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT5SURBVGhD7ZhtTFtVGMfvvYUW5jSabItb2CAZYcFNXqaObiAzM2MD5WXzlQlhmywQCBGGgwkkV0HoAAFBYLKCI+hiwAiF9lb2gbQlwAfd2NjcPs0vrjJfop80OKHP8Vx2igVP8ba93RrTf/L70j7Pef7PuefltoxffvnluRDPBMCpwFwo4gTI4W5DBvsnJLM2tI9B6DkGwX4G8GdzkM39AAXcKJQHHhdzSPqDE5QFqCGfm4QX2AX0LDbrAjhnHvK4KagKjCXD3T8Br4zAxq+Js0sz5xLiE8rlZqCSCSXDe1dQxjZDEgtUMx4ABxgblLIaUkZ+oS5mDZ6pm7TicoJrXMX7Q0nKyiPUyTyGN+CPtILeAIrZj0hpzwX9TDAcYX+mFfIK+ZyZlJZHi5uVVsgbyG7+FNtGLeQEfPYvoALuEpRyVVAfsBev5XXAMxvgHcXzqJR9d/G0EWMoufKbb1BthYP4MqIVWwGksAvwtqJLyubDMWvQW4reZY3IbV4UFHNfO5p0Br55rdjU4yRNsvC5vxWyuFnvmLcEbYYx1V1UpkAokW5cBE5wl9EAoyBpviNkUZ3BoEW6AhFKYv9t/t7McyTFd4QQw4FFaV1qQESvRCib+8e8uOYLmU0kxbcE5qDdy8zbMWP4e0sKihXdJNz3BGZlBbUBApwP/AmKGBUJ9z2BRTVIM24Hf99KQiVpY9k1JAfbKibg1UbtLTKsc4FZ9S3NuB38hJJJqCTRzLhLfPXIHBnWuXADv9GM24FxZQQJlSSaEXeJrBgHMqxz4Qbu0ozbgQnmYRIqSTQj7rKl/DIiwzrX/6EBn11C4kYmwzoXPmWu04zbwZs4hYRKEs2Iu8S/p5ewiS2qL2nG7eBbuo2EShLNiLukn+mzkmGda7WL7FfTI6hG2P1HU786mITLpvaBgrVRlSYbzbidolaNnoQ7F5iC1TTzM2MbUfZwMnpxKAO1GZ/6hITLppK22h6aaUc02pIjJNy5yMvcbbtxvKTQFxcjUfpQ+qJ5kazh5IWO0e2bSYrHajmbF7aj0rLq7G+vHF/gTby0f/PwSaQRzf9uXisumSXjjlQZEqwDyPPfAjz/ijJN8+kdmmlHTrS0TJCU/xZeRiG3xtb/lTuSRDVvp8awZ9qTJsQZzf6g8wbNsCNbTk8jTfdJ1/6CrDOor9JMr6Rcv3f2nPHJEJImWd2GyND89urvaIZX8lqD9gZJk66hr7aF4bVuo5leSZYu2dYh7OyRcjr1XYx6qEV4pusNnJMxeBi91NRBNW0nomIS+HMnXbo8l9QpxDSnUgw7Q9zcdXr1lXbjTr5feGJfvzF8/QVTxLrzQnR8hzG2utqw55LYrGNO6uAhdPQsjzaVz1AbKPywvpPYcU/1QpykpeQpb/YWorDT3ywz/3J9z01iw31NTYUEl+kT79CKys3RC8fQjirLovmk9wd+KWlqkufCNJlCH63UJ8zSispNZn8mymputfJ9pRtIeXmEmwiqEdTXXdkT7lArqK8YjeHe+82tHY1qyJR4OrlCpi7F9rExpp6U8a76hmPD6wxx04d1qVQzrnBoKA3VGtTTn+Njmwx//9Q7Gr2rUYgbP647ME8ztxo5wwfn64S4yc8M0TFkuAcn8XVCK0QfazY+ra/QJ3yfN7x/Lhuf9+ITytClodd1KSB+Vj6SaG0UdglaY0yOHO9RfvnlF8P8Da+9ZrALdO66AAAAAElFTkSuQmCC"},f820:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],i=s("2877"),a={},n=Object(i["a"])(a,r,o,!1,null,null,null);n.options.__file="About.vue";e["default"]=n.exports}}]);
//# sourceMappingURL=about.1b18e742.js.map