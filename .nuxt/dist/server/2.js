exports.ids = [2];
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=02e8ec71&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\" data-v-02e8ec71><div class=\"row\" data-v-02e8ec71><div class=\"col-md-10 offset-md-1 col-xs-12\" data-v-02e8ec71><form data-v-02e8ec71><fieldset data-v-02e8ec71><fieldset class=\"form-group\" data-v-02e8ec71><input required=\"required\" type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\" data-v-02e8ec71></fieldset> <fieldset class=\"form-group\" data-v-02e8ec71><input required=\"required\" type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\" data-v-02e8ec71></fieldset> <fieldset class=\"form-group\" data-v-02e8ec71><textarea required=\"required\" rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\" data-v-02e8ec71>"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-02e8ec71><input type=\"text\" placeholder=\"Enter tags\" class=\"form-control\" data-v-02e8ec71> <div class=\"tag-list\" data-v-02e8ec71>"+(_vm._ssrList((_vm.article.tagList),function(tag,index){return ("<span class=\"tag-default tag-pill\" data-v-02e8ec71><i class=\"ion-close-round\" data-v-02e8ec71></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n                ")+"</span>")}))+"</div></fieldset> <button class=\"btn btn-lg pull-xs-right btn-primary\" data-v-02e8ec71>\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=02e8ec71&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: "editor",
  middleware: 'authenticated',

  // 在路由匹配组件渲染之前先执行这个中间件
  data() {
    return {};
  },

  computed: {
    article() {
      const article = this.$route.params.article || {
        title: '',
        description: '',
        body: '',
        tagList: []
      };
      return article;
    }

  },
  methods: {
    async onSubmit() {
      const {
        data
      } = this.$route.params.article ? await Object(article["i" /* putArticle */])(this.article) : await Object(article["b" /* createArticles */])(this.article);
      this.$router.push({
        name: 'article',
        params: {
          slug: data.article.slug
        }
      });
    },

    addTag(e) {
      this.article.tagList.push(e.target.value);
      e.target.value = '';
    },

    deleteTag(tag) {
      const index = this.article.tagList.findIndex(item => item === tag);
      this.article.tagList.splice(index, 1);
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "02e8ec71",
  "488d2af3"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map