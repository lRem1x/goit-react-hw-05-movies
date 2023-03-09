(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[102],{2897:function(n,e,t){"use strict";t.d(e,{Z:function(){return Z}});var r,o,a,c,i=t(2007),s=t.n(i),u=t(4390),p=t(168),f=t(1087),l=t(6444),d=(0,l.ZP)(f.rU)(r||(r=(0,p.Z)(["\n  text-decoration: none;\n  color: inherit;\n  transition: 200ms ease-in-out;\n"]))),m=l.ZP.li(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transition: 200ms ease-in-out;\n  &:hover {\n    color: #ffffff;\n    scale: 1.04;\n  }\n"]))),h=l.ZP.img(a||(a=(0,p.Z)(["\n  margin: auto;\n"]))),g=l.ZP.div(c||(c=(0,p.Z)(["\n  text-align: center;\n"]))),v=t(6122),x=t(7689),b=t(184),y=function(n){var e=n.movies,t=(0,x.TH)();return e.map((function(n){var e=n.id,r=n.title,o=n.poster_path,a=n.release_date;return(0,b.jsx)(m,{children:(0,b.jsxs)(d,{to:"/movies/".concat(e),state:{from:t},children:[(0,b.jsx)(h,{src:o?"".concat(u.YQ).concat(o):v,alt:r,width:"100px"}),(0,b.jsxs)(g,{children:[(0,b.jsx)("p",{children:r||"No title"}),(0,b.jsx)("p",{children:a?a.slice(0,4):""})]})]})},e)}))};y.PropTypes={movies:s().arrayOf(s().object.isRequired).isRequired};var Z=y},1077:function(n,e,t){"use strict";t.d(e,{e:function(){return i},r:function(){return s}});var r,o,a=t(168),c=t(6444),i=c.ZP.ul(r||(r=(0,a.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),s=c.ZP.h2(o||(o=(0,a.Z)(["\n  text-align: center;\n  margin: 24px 16px;\n"])))},8102:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var r,o,a,c=t(9439),i=t(2791),s=t(1087),u=t(4390),p=t(2897),f=t(7596),l=t(168),d=t(6444),m=d.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  padding: 24px;\n  margin: 0 auto;\n  align-items: center;\n  max-width: 400px;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),h=d.ZP.input(o||(o=(0,l.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border: none;\n  outline: none;\n  padding: 12px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=d.ZP.button(a||(a=(0,l.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 47px;\n  color: #ffffff;\n  border: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-image: url('https://cdn-icons-png.flaticon.com/512/711/711319.png');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  opacity: 1;\n  :hover {\n    opacity: 0.8;\n  }\n"]))),v=t(1077),x=t(184),b=function(){var n,e=(0,i.useState)([]),t=(0,c.Z)(e,2),r=t[0],o=t[1],a=(0,s.lr)(),l=(0,c.Z)(a,2),d=l[0],b=l[1],y=null!==(n=d.get("query"))&&void 0!==n?n:"";(0,i.useEffect)((function(){""!==y&&(0,u.Ph)(y).then((function(n){var e=n.results;0!==n.total_results?o(e):f.Am.info("Sorry, there are no movies with the search ".concat(y))})).catch((function(n){console.log("error.message",n.message)}))}),[y]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=e.elements.search.value.trim().toLowerCase();b(""!==t?{query:t}:{}),e.reset()},children:[(0,x.jsx)(h,{type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search movies by name"}),(0,x.jsx)(g,{type:"submit"})]}),(0,x.jsx)(v.e,{children:(0,x.jsx)(p.Z,{movies:r})})]})}},4390:function(n,e,t){"use strict";t.d(e,{Df:function(){return l},Pg:function(){return d},Ph:function(){return g},YQ:function(){return i},tx:function(){return h},zv:function(){return m}});var r=t(5861),o=t(7757),a=t.n(o),c=t(1243),i="https://image.tmdb.org/t/p/w500",s="https://api.themoviedb.org/3",u="6702b03d7b0f4536a898ba63b67f43b4",p="/movie",f={params:{api_key:u}},l=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get(s+"/trending/movie/day",f);case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log("error.message:",n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.Z)("".concat(s).concat(p,"/").concat(e),f);case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log("error.message:",n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.Z)("".concat(s).concat(p,"/").concat(e).concat("/credits"),f);case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log("error.message:",n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.Z)("".concat(s).concat(p,"/").concat(e).concat("/reviews"),f);case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log("error.message:",n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={params:{api_key:u,query:e}},n.prev=1,n.next=4,(0,c.Z)("".concat(s).concat("/search/movie"),t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),console.log("error.message:",n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(9047);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,a,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6122:function(n,e,t){"use strict";n.exports=t.p+"static/media/default-poster.9d22720a034633e18c46.webp"}}]);
//# sourceMappingURL=102.8f72d4ed.chunk.js.map