(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/strategy/strategyParticulars"],{"031c":function(t,e,a){"use strict";var n=a("d035"),r=a.n(n);r.a},"0d74":function(t,e,a){"use strict";a.r(e);var n=a("7146"),r=a("644a");for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);a("031c");var u=a("2877"),c=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,"6032b734",null);e["default"]=c.exports},"267e":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("e316"),r=function(){return Promise.all([a.e("common/vendor"),a.e("components/gaoyia-parse/parse")]).then(a.bind(null,"d4ae"))},o={components:{uParse:r},data:function(){return{article:[]}},onLoad:function(t){var e=this;t.id;n.requestWB.post("/article/getarticleinfobyid",{id:t.id}).then(function(t){console.log(t.data.data," at pages/strategy/strategyParticulars.vue:47"),e.article=t.data.data}).catch(function(t){console.log(t," at pages/strategy/strategyParticulars.vue:50")})},methods:{}};e.default=o},"644a":function(t,e,a){"use strict";a.r(e);var n=a("267e"),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=r.a},7146:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},d035:function(t,e,a){}},[["bf09","common/runtime","common/vendor"]]]);