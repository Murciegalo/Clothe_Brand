(this["webpackJsonpcloting-ecommerce"]=this["webpackJsonpcloting-ecommerce"]||[]).push([[9],{119:function(n,e,t){"use strict";t.r(e);var a=t(50);function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],a=!0,r=!1,i=void 0;try{for(var o,l=n[Symbol.iterator]();!(a=(o=l.next()).done)&&(t.push(o.value),!e||t.length!==e);a=!0);}catch(c){r=!0,i=c}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return t}}(n,e)||Object(a.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=t(0),o=t.n(i),l=t(46),c=t(11),u=t(3),p=t.n(u),s=t(37),m=t(45),d=t(8),f=t(9);function b(){var n=Object(d.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.shrink {\n    ","\n  }\n"]);return b=function(){return n},n}function x(){var n=Object(d.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(d.a)(["\n  position: relative;\n  margin: 45px 0;\n\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(d.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"]);return h=function(){return n},n}var w=Object(f.a)(h(),"black"),v=f.b.div(g()),y=f.b.input(x(),"grey","grey",w),j=f.b.label(b(),"grey",w),O=function(n){var e=n.handleChange,t=n.label,a=n.value,r=Object(m.a)(n,["handleChange","label","value"]);return o.a.createElement(v,null,o.a.createElement(y,Object.assign({onChange:e},r)),t?o.a.createElement(j,{className:a.length?"shrink":""},t):null)},E=t(44),S=t(19),z=t(14);function k(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return k=function(){return n},n}function C(){var n=Object(d.a)(["\n  margin: 10px 0;\n  font-size: 40px;\n\n  @media screen and (max-width: 400px){    \n    font-size:30px;\n    p{\n      font-size:14px;\n    }\n  }\n"]);return C=function(){return n},n}function I(){var n=Object(d.a)(["\nfont-family: monospace;\ncolor: darkgray;\ndisplay: flex;\nflex-direction: column;\nwidth: 850px;\nalign-items: center;\np{\n  font-size: 20px;\n}\nspan{\n  text-decoration:none;\n  cursor:pointer;\n  color: blue;\n}\ninput{\n  width: 850px;\n  font-size: 20px;\n}\nbutton{\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 400px){    \n  display: flex;\n  flex-direction: column;\n  width: 210px;\n  align-items: center;\n  p{\n    font-size:14px;\n  }\n  form > div {\n    margin:0;\n  }\n  input{\n    width: 240px;\n    width: 195px;\n    margin: 18px 0;\n  }\n  label{\n    font-size: 14px;\n  }\n  button{\n    min-width: 100px;\n    height: 45px;\n    line-height:none;\n    align-items:center;\n    margin-top:10px!important;\n    padding:5px;\n  }\n}\n"]);return I=function(){return n},n}var N=f.b.div(I()),q=f.b.h2(C()),P=(f.b.div(k()),Object(S.b)(null,{googleSignInStart:z.c,emailSignInStart:z.b})((function(n){var e=n.googleSignInStart,t=n.emailSignInStart,a=r(Object(i.useState)({email:"",password:""}),2),u=a[0],m=a[1],d=u.email,f=u.password,b=function(){var n=Object(s.a)(p.a.mark((function n(e){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),t({email:d,password:f});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(n){return m(Object(c.a)({},u,Object(l.a)({},n.target.name,n.target.value)))};return o.a.createElement(N,null,o.a.createElement(q,null,"Login"),o.a.createElement("form",{onSubmit:b},o.a.createElement(O,{name:"email",type:"email",handleChange:x,value:d,label:"email",required:!0}),o.a.createElement(O,{name:"password",type:"password",value:f,handleChange:x,label:"password",required:!0}),o.a.createElement(E.a,{type:"submit"}," Sign in "),o.a.createElement(E.a,{type:"button",onClick:e,isGoogleSignIn:!0},"Sign in with Google")))})));function A(){var n=Object(d.a)(["\n  margin: 10px 0;\n  font-size: 40px;\n  \n  @media screen and (max-width: 400px){    \n    font-size:30px;\n    p{\n      font-size:14px;\n    }\n  }\n"]);return A=function(){return n},n}function D(){var n=Object(d.a)(["\n  font-family: monospace;\n  color: darkgray;\n  display: flex;\n  flex-direction: column;\n  width: 850px;\n  align-items: center;\n  p{\n    font-size: 20px;\n  }\n  span{\n    text-decoration:none;\n    cursor:pointer;\n    color: blue;\n  }\n  input{\n    width: 850px;\n    font-size: 20px;\n  }\n  button{\n    margin: 0 auto;\n  }\n\n  @media screen and (max-width: 400px){    \n    display: flex;\n    flex-direction: column;\n    width: 210px;\n    align-items: center;\n    p{\n      font-size:14px;\n    }\n    form > div {\n      margin: 0;\n    }\n    input{\n      width: 240px;\n      width: 195px;\n      margin: 18px 0;\n    }\n    label{\n      font-size: 14px;\n    }\n    \n    button{\n      min-width: 100px;\n      height: 45px;\n    }\n  }\n"]);return D=function(){return n},n}var G=f.b.div(D()),U=f.b.h2(A()),J=Object(S.b)(null,{signUpStart:z.j})((function(n){var e=n.signUpStart,t=n.handle,a=r(Object(i.useState)({displayName:"",email:"",password:"",confirmPassword:""}),2),u=a[0],m=a[1],d=u.displayName,f=u.email,b=u.password,x=u.confirmPassword,g=function(){var n=Object(s.a)(p.a.mark((function n(t){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),b===x){n.next=4;break}return alert("passwords don't match"),n.abrupt("return");case 4:e({email:f,password:b,displayName:d});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(n){return m(Object(c.a)({},u,Object(l.a)({},n.target.name,n.target.value)))};return o.a.createElement(G,null,o.a.createElement(U,null,"Sign up"),o.a.createElement("p",null,"Already have an account? ",o.a.createElement("span",{onClick:function(){return t(!1)}},"Login")),o.a.createElement("form",{className:"sign-up-form",onSubmit:g},o.a.createElement(O,{type:"text",name:"displayName",value:d,onChange:h,label:"Display Name",required:!0}),o.a.createElement(O,{type:"email",name:"email",value:f,onChange:h,label:"Email",required:!0}),o.a.createElement(O,{type:"password",name:"password",value:b,onChange:h,label:"Password",required:!0}),o.a.createElement(O,{type:"password",name:"confirmPassword",value:x,onChange:h,label:"Confirm Password",required:!0}),o.a.createElement(E.a,{type:"submit"},"SIGN UP")))}));function L(){var n=Object(d.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n\n  @media screen and (max-width: 800px){ \n    width: auto;\n  }\n"]);return L=function(){return n},n}var T=f.b.div(L());e.default=function(){var n=r(Object(i.useState)(!0),2),e=n[0],t=n[1];return o.a.createElement(T,null,e?o.a.createElement(J,{handle:t}):o.a.createElement(P,null))}}}]);
//# sourceMappingURL=9.d10495e5.chunk.js.map