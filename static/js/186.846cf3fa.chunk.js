"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(n,t,e){e.r(t),e.d(t,{Reviews:function(){return f}});var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),s=e(689),o=e(350),p=e(184);function f(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],f=(0,s.UO)().movieId;if((0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.sv)(t);case 2:e=n.sent,c(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(t){n.apply(this,arguments)}(f)}),[f]),e.length)return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:e}),(0,p.jsx)("p",{children:r})]},t)}))})})}},350:function(n,t,e){e.d(t,{LI:function(){return v},XT:function(){return d},fU:function(){return m},l2:function(){return w},sv:function(){return k}});var r=e(861),a=e(757),c=e.n(a),u=e(263),i="7f2db20686f1c663c04ed9685ddd85ef";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",o="/search/movie",p="/movie",f="/credits",l="/reviews";function d(){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(c().mark((function n(){var t,e,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,u.Z.get("".concat(s,"?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)}))),h.apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("".concat(o,"?api_key=").concat(i,"&page=").concat(e,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)}))),g.apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(p,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t).concat(f,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return _.apply(this,arguments)}function _(){return _=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,u.Z.get("/movie/".concat(t).concat(l,"?api_key=").concat(i,"&language=en-US&page=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)}))),_.apply(this,arguments)}}}]);
//# sourceMappingURL=186.846cf3fa.chunk.js.map