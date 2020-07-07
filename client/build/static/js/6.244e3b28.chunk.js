(this["webpackJsonpcloting-ecommerce"]=this["webpackJsonpcloting-ecommerce"]||[]).push([[6],{117:function(n,t,e){"use strict";e.r(t);var i=e(0),r=e.n(i),a=e(19),c=e(88),o=e(87),u=e(8),l=e(9);function d(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n\n  & > div {\n    margin-bottom: 30px;\n  }\n\n  @media screen and (max-width: 800px){\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-row-gap: 10vw;\n    grid-column-gap: 3vw;\n  }\n"]);return d=function(){return n},n}function m(){var n=Object(u.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]);return m=function(){return n},n}function p(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return p=function(){return n},n}var s=l.b.div(p()),f=l.b.h2(m()),b=l.b.div(d()),h=e(97);t.default=Object(a.b)((function(n,t){return{collection:Object(o.a)(t.match.params.collectionId)(n)}}))((function(n){var t=n.collection,e=n.match;return console.log("TEST",e.url),null===t?r.a.createElement(h.a,null):r.a.createElement(s,null,r.a.createElement(f,null,t.title),r.a.createElement(b,null,t.items.map((function(n){return r.a.createElement(c.a,{key:n.id,item:n})}))))}))},88:function(n,t,e){"use strict";var i=e(0),r=e.n(i),a=e(19),c=e(27),o=e(8),u=e(9),l=e(44);function d(){var n=Object(o.a)(["\n  width: 10%;\n  text-align: right;\n\n  @media screen and (max-width: 800px){\n    width: 20%;\n  }\n"]);return d=function(){return n},n}function m(){var n=Object(o.a)(["\n  width: 90%;\n"]);return m=function(){return n},n}function p(){var n=Object(o.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n\n  @media screen and (max-width: 800px){\n    font-size: 15px;\n  }\n"]);return p=function(){return n},n}function s(){var n=Object(o.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return s=function(){return n},n}function f(){var n=Object(o.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 800px){\n    display: block;\n    position: absolute;\n    height: auto;\n    top: 20vh;\n    opacity: 0.6;\n    min-width: 55px;\n    width: 40px;\n    padding: 10px;\n    border: none;\n    line-height: 0px;\n  }\n"]);return f=function(){return n},n}function b(){var n=Object(o.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 800px){\n    width: 40vw;\n    height: 30vh;\n    position: relative;\n    &:hover {\n      .image {\n        opacity: unset;\n      } \n  \n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]);return b=function(){return n},n}var h=u.b.div(b()),g=Object(u.b)(l.a)(f()),v=u.b.div(s(),(function(n){var t=n.imageUrl;return"url(".concat(t,")")})),x=u.b.div(p()),w=u.b.span(m()),y=u.b.span(d());t.a=Object(a.b)(null,(function(n){return{addItem:function(t){return n(Object(c.a)(t))}}}))((function(n){var t=n.item,e=n.addItem,i=t.name,a=t.price,c=t.imageUrl;return r.a.createElement(h,null,r.a.createElement(v,{className:"image",imageUrl:c}),r.a.createElement(x,null,r.a.createElement(w,null,i),r.a.createElement(y,null,a)),r.a.createElement(g,{onClick:function(){return e(t)},inverted:!0},"Buy"))}))}}]);
//# sourceMappingURL=6.244e3b28.chunk.js.map