"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1247:function(t,n,e){e.r(n),e.d(n,{Cast:function(){return f}});var r=e(5861),a=e(9439),c=e(4687),u=e.n(c),i=e(2791),s=e(8350),o=e(7689),p=e(184);function f(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],f=(0,o.UO)().movieId;if((0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.fU)(n);case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(n){t.apply(this,arguments)}(f)}),[f]),e.length)return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{children:e.map((function(t){var n=t.name,e=t.profile_path,r=t.character,a=t.id;return(0,p.jsxs)("li",{children:[(0,p.jsx)("div",{children:e&&(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w92".concat(e),alt:n})}),(0,p.jsx)("p",{children:n}),(0,p.jsxs)("p",{children:["Character: ",r]})]},a)}))})})}},8350:function(t,n,e){e.d(n,{LI:function(){return v},XT:function(){return h},fU:function(){return x},l2:function(){return m},sv:function(){return k}});var r=e(5861),a=e(4687),c=e.n(a),u=e(3263),i="caf7d5dc55fb72336c14ff1053fc599c";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",o="/search/movie",p="/movie",f="/credits",l="/reviews";function h(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(c().mark((function t(){var n,e,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,u.Z.get("".concat(s,"?api_key=").concat(i,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("".concat(o,"?api_key=").concat(i,"&page=").concat(e,"&query=").concat(n,"&language=en-US&include_adult=false"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(p,"/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n).concat(f,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return _.apply(this,arguments)}function _(){return _=(0,r.Z)(c().mark((function t(n){var e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("/movie/".concat(n).concat(l,"?api_key=").concat(i,"&language=en-US&page=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}}}]);
//# sourceMappingURL=247.2ed46aba.chunk.js.map