(this["webpackJsonptower-task"]=this["webpackJsonptower-task"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(4),s=n.n(a),i=n(5),u=n(2),o=n(11),l="SET_USERS",j={users:[]},d=n(3);n(27);function f(e){var t=e.active,n=e.setActive,r=e.children;return Object(c.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return n(!1)},children:Object(c.jsx)("div",{className:t?"modal__content active":"modal",onClick:function(e){return e.stopPropagation()},children:r})})}n(28);function b(e){var t=e.setActive,n=e.currentUser,r=n.name,a=n.desc,s=n.surname;return Object(c.jsxs)("div",{className:"info",children:[Object(c.jsxs)("div",{className:"info__user-content",children:[Object(c.jsxs)("div",{className:"info__user-fullname",children:[Object(c.jsx)("div",{className:"info__user-name",children:Object(c.jsx)("input",{type:"text",required:!0,value:r})}),Object(c.jsx)("div",{className:"info__user-surname",children:Object(c.jsx)("input",{type:"text",value:s,required:!0})})]}),Object(c.jsx)("div",{className:"info__user-description",children:Object(c.jsx)("p",{children:a})})]}),Object(c.jsx)("div",{className:"info__user-button",children:Object(c.jsx)("button",{className:"info__user-cancel",onClick:function(){return t(!1)},children:"Cancel"})})]})}var O=n(13),p=n.n(O);n(29);function v(e){for(var t=e.countPages,n=e.handleCurrentPage,r=e.currentPage,a=[],s=1;s<=t;s++)a.push(s);return Object(c.jsx)("ul",{className:"pagination",children:a.map((function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{className:p()("pagination__page",{active:e===r}),onClick:function(){return n(e)},children:Object(c.jsx)("a",{className:"pagination__page-link",children:e})},e)})}))})}var h=n(14),m=n.n(h),x=n(10),_=n.n(x),g=n(15),N="https://raw.githubusercontent.com/oivannikov/tower-task/api/api/users.json";function k(){return(k=Object(g.a)(_.a.mark((function e(){var t,n,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,n.users;case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(31);var y=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(1),i=Object(d.a)(s,2),o=i[0],j=i[1],O=Object(r.useState)({}),p=Object(d.a)(O,2),h=p[0],x=p[1],_=Object(r.useState)(0),g=Object(d.a)(_,2),N=g[0],y=g[1],w=Object(u.c)((function(e){return e.users})),C=Object(u.b)();Object(r.useEffect)((function(){(function(){return k.apply(this,arguments)})().then((function(e){return C(function(e){return{type:l,payload:e}}(e))}))}),[]),Object(r.useEffect)((function(){var e;return n||(e=setInterval((function(){y((function(e){return e+1}))}),2e3)),function(){return clearInterval(e)}}),[o,n]);var S=Math.ceil(w.length/5),P=5*o,E=P-5,A=w.slice(E,P).map((function(e){return{key:e.id,content:Object(c.jsx)("li",{className:"app__user",children:e.name}),onClick:function(){return function(e){x(e),a(!0)}(e)}}}));return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(m.a,{slides:A,goToSlide:N,offsetRadius:2}),Object(c.jsx)(f,{active:n,setActive:a,children:Object(c.jsx)(b,{setActive:a,currentUser:h})}),Object(c.jsx)(v,{countPages:S,handleCurrentPage:function(e){j(e),y(0)},currentPage:o})]})},w=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{users:t.payload});default:return e}}));s.a.render(Object(c.jsx)(u.a,{store:w,children:Object(c.jsx)(y,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4b41fa6a.chunk.js.map