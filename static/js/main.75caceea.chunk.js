(this.webpackJsonpthunks=this.webpackJsonpthunks||[]).push([[0],{23:function(e,t,n){},3:function(e,t,n){e.exports={list:"styles_list__38N8m",list__item:"styles_list__item__JK4BJ",list__image:"styles_list__image__tiYV8","list__user-data":"styles_list__user-data__2tyLz","list__user-name":"styles_list__user-name__2Wbga","list__user-phone":"styles_list__user-phone__rWV1j","list__user-email":"styles_list__user-email__7dzIZ"}},30:function(e,t,n){e.exports={spinner:"styles_spinner__1dC-A","lds-ring":"styles_lds-ring__1syIq"}},31:function(e,t,n){e.exports={app:"styles_app__1Lyvs"}},32:function(e,t,n){e.exports=n(61)},61:function(e,t,n){"use strict";n.r(t);var s,r=n(0),a=n.n(r),i=n(5),c=n.n(i),l=n(7),u=n(2),o=n(25),_=n(4),m=n(8),d=n(6),p={users:void 0,loading:!1,error:void 0},E=Object(d.createReducer)(p,(s={},Object(_.a)(s,"users/LOAD_USERS_REQUEST",(function(e){return Object(m.a)({},e,{loading:!0})})),Object(_.a)(s,"users/LOAD_USERS_SUCCESS",(function(e,t){return Object(m.a)({},e,{users:t.payload,loading:!1})})),Object(_.a)(s,"users/LOAD_USERS_FAILURE",(function(e,t){return Object(m.a)({},e,{error:t.payload,loading:!1})})),s)),f=Object(u.combineReducers)({users:E}),b=n(26),h=n(27),v=n.n(h),O=n(28),g=new function e(){Object(b.a)(this,e),this.getUsers=function(){return v.a.get("https://randomuser.me/api/?results=25")}},S=n(12),y=function(e){return e.users},j=Object(S.a)(y,(function(e){return e.users})),U=Object(S.a)(y,(function(e){return e.loading})),w=n(13),A=n.n(w),R=n(29),L=Object(d.createAsyncAction)("users/LOAD_USERS_REQUEST","users/LOAD_USERS_SUCCESS","users/LOAD_USERS_FAILURE")(),N=function(){return function(){var e=Object(R.a)(A.a.mark((function e(t,n,s){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L.request()),e.prev=1,e.next=4,s.getUsers();case 4:r=e.sent,t(L.success(r.data.results)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(L.failure(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,s){return e.apply(this,arguments)}}()},k=n(3),x=n.n(k),D=function(e){var t=e.users;return r.createElement("ul",{className:x.a.list},t.map((function(e){return r.createElement("li",{className:x.a.list__item,key:e.id.value},r.createElement("img",{className:x.a.list__image,src:e.picture.thumbnail,alt:e.name.first}),r.createElement("div",{className:x.a["list__user-data"]},r.createElement("p",{className:x.a["list__user-name"]},"".concat(e.name.first," ").concat(e.name.last)),r.createElement("p",{className:x.a["list__user-email"]},e.email),r.createElement("p",{className:x.a["list__user-phone"]},e.phone)))})))},C=n(30),I=n.n(C),W=function(e){return r.createElement("div",{className:I.a.spinner},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))},J=n(31),B=n.n(J),T=function(e){var t=e.loadUsers,n=e.users,s=e.loading;return a.a.useEffect((function(){t()}),[t]),a.a.createElement("div",{className:B.a.app},void 0===n||s?a.a.createElement(W,null):a.a.createElement(D,{users:n}))},q=Object(l.b)((function(e){return{users:j(e),loading:U(e)}}),(function(e){return Object(u.bindActionCreators)({loadUsers:N},e)}))(T),z=(n(23),function(){return r.createElement(l.a,{store:Object(u.createStore)(f,Object(o.composeWithDevTools)(Object(u.applyMiddleware)(O.a.withExtraArgument(g))))},r.createElement(q,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.75caceea.chunk.js.map