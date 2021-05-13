(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(t,e,r){"use strict";r.d(e,"f",(function(){return c})),r.d(e,"b",(function(){return o})),r.d(e,"i",(function(){return l})),r.d(e,"c",(function(){return m})),r.d(e,"h",(function(){return d})),r.d(e,"a",(function(){return f})),r.d(e,"d",(function(){return v})),r.d(e,"e",(function(){return O})),r.d(e,"g",(function(){return h}));var n=r(63),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},l=function(data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(data.slug),data:data})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},f=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},O=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},h=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})}},270:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(36),r(202)),o=r.n(c),l=r(194),m=(r(37),r(23),r(24),r(49),r(50),r(21)),d=r(38);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={name:"ArticleMeta",props:{article:{type:Object,required:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["user"])),methods:{editArticle:function(){this.$router.push({name:"editor",params:{article:this.article}})},deleteArticle:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params.slug,e.next=3,Object(l.c)(r);case 3:t.$router.push("/");case 4:case"end":return e.stop()}}),e)})))()}}},O=r(30),h=Object(O.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD,YYYY")))])],1),t._v(" "),t.user.username===t.article.author.username?[r("button",{staticClass:"btn btn-sm btn-outline-secondary",on:{click:t.editArticle}},[r("i",{staticClass:"ion-edit"}),t._v("\n       \n      Edit Article "),r("span",{staticClass:"counter"})]),t._v("\n      \n    "),r("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:t.deleteArticle}},[r("i",{staticClass:" ion-trash-a"}),t._v("\n       \n      Delete Article "),r("span",{staticClass:"counter"})])]:[r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n       \n      Follow Eric Simons "),r("span",{staticClass:"counter"},[t._v("(10)")])]),t._v("\n      \n    "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited}},[r("i",{staticClass:"ion-heart"}),t._v("\n       \n      Favorite Post "),r("span",{staticClass:"counter"},[t._v("(29)")])])]],2)}),[],!1,null,"7e431978",null).exports;function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var j={name:"ArticleComments",props:{article:{type:Object,required:!0}},data:function(){return{comments:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["user"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.g)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()}},C={name:"articlePage",components:{ArticleMeta:h,ArticleComments:Object(O.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{staticClass:"card comment-form"},[t._m(0),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.user.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary"},[t._v("\n        Post Comment\n      ")])])]),t._v(" "),t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n       \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.author.createdAt,"MMM DD,YY")))])],1)])}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-block"},[e("textarea",{staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"}})])}],!1,null,"32b6cf2e",null).exports},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(l.e)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,c=new o.a,article.bodyHtml=c.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}}},y=Object(O.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.bodyHtml)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("article-comments",{attrs:{article:t.article}})],1)])])])}),[],!1,null,"8e3f01a4",null);e.default=y.exports}}]);