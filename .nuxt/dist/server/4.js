exports.ids = [4];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return putArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getComments; });
/* unused harmony export addComments */
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取公共的文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 创建文章

const createArticles = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
}; // 更新文章

const putArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${data.slug}`,
    data
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
}; // 获取关注饿文章列表

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 添加文章评论

const addComments = ({
  slug,
  comment
}) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    comment
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/components/article-list.vue?vue&type=template&id=22eded77&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.articles),function(article,index){return _vm._ssrNode("<div class=\"article-preview\" data-v-22eded77>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-22eded77>","</div>",[_c('nuxt-link',{attrs:{"to":{name:'profile',params:{username:article.author.username}}}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-22eded77>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{name:'profile',params:{username:article.author.username}}}},[_vm._v("\n          "+_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-22eded77>"+_vm._ssrEscape(_vm._s(article.author.createdAt))+"</span>")],2),_vm._ssrNode(" <button class=\"btn btn-outline-primary btn-sm pull-xs-right\" data-v-22eded77><i class=\"ion-heart\" data-v-22eded77></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n      ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{name:'article',params:{slug:article.slug}}}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(article.body)}}),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/components/article-list.vue?vue&type=template&id=22eded77&scoped=true&

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/components/article-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_listvue_type_script_lang_js_ = ({
  name: 'ArticleList',

  async asyncData({
    route,
    store
  }) {
    const username = store.state.user.username;
    const query = route.name === 'favorites' ? {
      favorited: username
    } : {
      author: username
    };
    const {
      data
    } = await Object(article["f" /* getArticles */])(query);
    const {
      articles
    } = data;
    const md = new external_markdown_it_default.a();
    articles.forEach(article => article.body = md.render(article.body));
    return {
      articles
    };
  }

});
// CONCATENATED MODULE: ./pages/profile/components/article-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_listvue_type_script_lang_js_ = (article_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/components/article-list.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22eded77",
  "85152770"
  
)

/* harmony default export */ var article_list = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map