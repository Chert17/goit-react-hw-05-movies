"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[589],{6815:function(n,t,e){e.d(t,{O:function(){return i},X:function(){return s}});var r,a,c=e(168),u=e(1087),o=e(7691),i=o.ZP.ul(r||(r=(0,c.Z)(["\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),s=(0,o.ZP)(u.rU)(a||(a=(0,c.Z)(["\n  text-decoration: none;\n  color: black;\n  &:hover,\n  &:focus {\n    color: orange;\n  }\n"])))},3589:function(n,t,e){e.r(t),e.d(t,{MoviesPage:function(){return w}});var r=e(9439),a=e(5861),c=e(4687),u=e.n(c),o=e(2791),i=e(7689),s=e(8350),p=e(6815),f=e(184);function l(n){var t=n.query,e=(0,o.useState)([]),c=(0,r.Z)(e,2),l=c[0],d=c[1],h=(0,i.TH)();if((0,o.useEffect)((function(){function n(){return n=(0,a.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=3;break}return d([]),n.abrupt("return");case 3:return n.next=5,(0,s.LI)(t);case 5:e=n.sent,d(e);case 7:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(t){n.apply(this,arguments)}(t)}),[l.length,t]),l.length)return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(p.O,{children:l.map((function(n){var t=n.id,e=n.title;return(0,f.jsx)("span",{children:(0,f.jsx)(p.X,{state:{from:h},to:"/movies/".concat(t),children:e})},t)}))})})}var d,h,v=e(1087),g=e(3019),x=e(168),y=e(7691),m=y.ZP.form(d||(d=(0,x.Z)(["\n  padding-top: 20px;\n"]))),Z=y.ZP.form(h||(h=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n"])));function w(){var n,t=(0,v.lr)(),e=(0,r.Z)(t,2),a=e[0],c=e[1],u=null!==(n=a.get("query"))&&void 0!==n?n:"";return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m,{children:(0,f.jsx)(Z,{children:(0,f.jsx)(g.Z,{onChange:function(n){var t=n.target.value.toLowerCase().trim();c(""!==t?{query:t}:{})},value:u,type:"text",placeholder:"Search movies",autoFocus:!0})})}),(0,f.jsx)(l,{query:u})]})}},8350:function(n,t,e){e.d(t,{LI:function(){return v},XT:function(){return d},fU:function(){return m},l2:function(){return x},sv:function(){return w}});var r=e(5861),a=e(4687),c=e.n(a),u=e(3263),o="caf7d5dc55fb72336c14ff1053fc599c";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="/trending/movie/week",s="/search/movie",p="/movie",f="/credits",l="/reviews";function d(){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(c().mark((function n(){var t,e,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,u.Z.get("".concat(i,"?api_key=").concat(o,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("".concat(s,"?api_key=").concat(o,"&page=").concat(e,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)}))),g.apply(this,arguments)}function x(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(p,"/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t).concat(f,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return k.apply(this,arguments)}function k(){return k=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("/movie/".concat(t).concat(l,"?api_key=").concat(o,"&language=en-US&page=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)}))),k.apply(this,arguments)}}}]);
//# sourceMappingURL=589.db0bb14f.chunk.js.map