(this["webpackJsonptower-task"]=this["webpackJsonptower-task"]||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(0),a=t(4),s=t.n(a),i=t(5),u=t(2),o=t(11),l="SET_USERS",j={users:[]},d=t(3);t(27);function f(e){var n=e.active,t=e.setActive,r=e.children;return Object(c.jsx)("div",{className:n?"modal active":"modal",onClick:function(){return t(!1)},children:Object(c.jsx)("div",{className:n?"modal__content active":"modal",onClick:function(e){return e.stopPropagation()},children:r})})}t(28);function b(e){var n=e.setActive,t=e.currentUser,r=t.name,a=t.desc,s=t.surname;return Object(c.jsxs)("div",{className:"info",children:[Object(c.jsxs)("div",{className:"info__user-content",children:[Object(c.jsxs)("div",{className:"info__user-fullname",children:[Object(c.jsx)("div",{className:"info__user-name",children:Object(c.jsx)("input",{type:"text",required:!0,value:r})}),Object(c.jsx)("div",{className:"info__user-surname",children:Object(c.jsx)("input",{type:"text",value:s,required:!0})})]}),Object(c.jsx)("div",{className:"info__user-description",children:Object(c.jsx)("p",{children:a})})]}),Object(c.jsx)("div",{className:"info__user-button",children:Object(c.jsx)("button",{className:"info__user-cancel",onClick:function(){return n(!1)},children:"Cancel"})})]})}var p=t(13),h=t.n(p);t(29);function v(e){for(var n=e.countPages,t=e.handleCurrentPage,a=e.currentPage,s=e.handlePrevPage,i=e.handleNextPage,u=[],o=1;o<=n;o++)u.push(o);return Object(c.jsxs)("div",{className:"pagination",children:[Object(c.jsx)("span",{className:"pagination__prev",onClick:function(){return s()},children:"Prev"}),Object(c.jsx)("ul",{children:u.map((function(e){return Object(c.jsx)(r.Fragment,{children:Object(c.jsx)("li",{className:h()("pagination__page",{active:e===a}),onClick:function(){return t(e)},children:Object(c.jsx)("span",{className:"pagination__page-number",children:e})})},e)}))}),Object(c.jsx)("span",{className:"pagination__next",onClick:function(){return i()},children:"Next"})]})}var O=t(14),x=t.n(O),m=t(10),_=t.n(m),g=t(15),N="https://raw.githubusercontent.com/oivannikov/tower-task/api/";function k(){return(k=Object(g.a)(_.a.mark((function e(){var n,t,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"api/users.json"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.next=8,t.users;case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(31);var P=function(){var e=Object(r.useState)({}),n=Object(d.a)(e,2),t=n[0],a=n[1],s=Object(r.useState)(1),i=Object(d.a)(s,2),o=i[0],j=i[1],p=Object(r.useState)(0),h=Object(d.a)(p,2),O=h[0],m=h[1],_=Object(r.useState)(!1),g=Object(d.a)(_,2),N=g[0],P=g[1],y=Object(u.c)((function(e){return e.users})),C=Object(u.b)();Object(r.useEffect)((function(){(function(){return k.apply(this,arguments)})().then((function(e){return C(function(e){return{type:l,payload:e}}(e))}))}),[]),Object(r.useEffect)((function(){var e=null;return N||(e=setInterval((function(){m((function(e){return e+1}))}),8e3)),function(){return clearInterval(e)}}),[o,N]);var w=Math.ceil(y.length/5),S=5*o,E=S-5,A=y.slice(E,S).map((function(e){return{key:e.id,content:Object(c.jsx)("li",{className:"app__user",children:e.name}),onClick:function(){return function(e){a(e),P(!0)}(e)}}}));return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(x.a,{slides:A,goToSlide:O,offsetRadius:0}),Object(c.jsx)(f,{active:N,setActive:P,children:Object(c.jsx)(b,{setActive:P,currentUser:t})}),Object(c.jsx)(v,{countPages:w,handleCurrentPage:function(e){j(e),m(0)},currentPage:o,handleNextPage:function(){o<w&&j((function(e){return e+1}))},handlePrevPage:function(){o>1&&j((function(e){return e-1}))}})]})},y=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return Object(o.a)(Object(o.a)({},e),{},{users:n.payload});default:return e}}));s.a.render(Object(c.jsx)(u.a,{store:y,children:Object(c.jsx)(P,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.83bb8075.chunk.js.map