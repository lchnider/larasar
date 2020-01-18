(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{e37c:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"q-pa-md flex-center"},[n("q-form",{staticClass:"q-gutter-md"},[n("q-input",{attrs:{filled:"",type:"email",label:e.$t("email"),hint:e.email_data,"lazy-rules":"",rules:[function(t){return t&&t.length>0||e.email_data}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("q-input",{attrs:{filled:"",type:e.isPwd?"password":"text",label:e.$t("password"),hint:e.password_data,"lazy-rules":"",rules:[function(t){return t&&t.length>0||e.password_data}]},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("div",{staticClass:"col-md-12"},[n("q-btn",{staticClass:"q-ma-sm",attrs:{color:"primary",loading:e.loader,label:e.$t("login")},on:{click:function(t){return t.preventDefault(),e.login(t)}}}),n("login-with-social"),n("q-checkbox",{attrs:{label:e.$t("remember_me")},model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}}),n("q-btn",{staticClass:"q-ma-sm",attrs:{color:"primary",flat:"",label:e.$t("forgot_password"),to:"/password/reset"}})],1)],1)],1)},a=[],o=n("967e"),s=n.n(o),i=(n("96cf"),n("fa84")),c=n.n(i),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",e._l(e.drivers,(function(t,r){return n("span",{key:r},[n("q-btn",{staticClass:"q-ma-sm",attrs:{icon:"fab fa-"+t,label:e.$t("login_with"),color:"primary"},on:{click:function(n){return n.preventDefault(),e.login(t)}}})],1)})),0)},u=[],d=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),p=n.n(d),f=n("8993"),m=n.n(f),w=n("2f62");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={name:"LoginWithsocial",data:function(){return{drivers:["github","google"]}},computed:Object(w["b"])({socialAuth:"config/servicesGetter"}),mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var e=c()(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=v("",this.$t("login")),e.next=3,this.$store.dispatch("users/socialAuthAction",{provider:t});case 3:r=e.sent,n.location.href=r;case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onMessage:function(e){var t=this;if(e.origin===window.origin&&e.data.token){try{this.$store.commit("users/loginMutation",e.data.token)}catch(e){alert(e)}this.$store.dispatch("users/authAction").then((function(){t.$router.push({path:"/"})}))}}}};function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===m()(e)&&(n=e,e=""),n=b({url:e,title:t,width:600,height:720},n);var r=void 0!==window.screenLeft?window.screenLeft:window.screen.left,a=void 0!==window.screenTop?window.screenTop:window.screen.top,o=window.innerWidth||document.documentElement.clientWidth||window.screen.width,s=window.innerHeight||document.documentElement.clientHeight||window.screen.height;n.left=o/2-n.width/2+r,n.top=s/2-n.height/2+a;var i=Object.keys(n).reduce((function(e,t){return e.push("".concat(t,"=").concat(n[t])),e}),[]).join(","),c=window.open(e,t,i);return window.focus&&c.focus(),c}var y=g,O=n("2877"),k=n("eebe"),_=n.n(k),j=n("9c40"),P=Object(O["a"])(y,l,u,!1,null,null,null),q=P.exports;_()(P,"components",{QBtn:j["a"]});var $={name:"loginPage",components:{LoginWithSocial:q},data:function(){return{loader:!1,email:null,email_data:null,password:null,password_data:null,isPwd:!0,remember:!1}},methods:{login:function(){var e=c()(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loader=!0,this.$store.dispatch("users/loginAction",{email:this.email,password:this.password,remember:this.remember,user:"login"}).then((function(){t.loader=!1})).catch((function(e){t.loader=!1,t.email_data=[e.response.data.errors.email][0]||e.response.data.message,t.password_data=[e.response.data.errors.password][0]||e.response.data.message}));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},x=$,C=n("9989"),E=n("0378"),D=n("27f9"),Q=n("0016"),L=n("8f8e"),A=Object(O["a"])(x,r,a,!1,null,null,null);t["default"]=A.exports;_()(A,"components",{QPage:C["a"],QForm:E["a"],QInput:D["a"],QIcon:Q["a"],QBtn:j["a"],QCheckbox:L["a"]})}}]);