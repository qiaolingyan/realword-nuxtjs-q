exports.ids = [8];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=26b4cdde&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-26b4cdde><div class=\"container\" data-v-26b4cdde><div class=\"row\" data-v-26b4cdde><div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-26b4cdde><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\" data-v-26b4cdde> <h4 data-v-26b4cdde>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p data-v-26b4cdde>"+_vm._ssrEscape("\n            "+_vm._s(_vm.profile.bio)+"\n          ")+"</p> <button class=\"btn btn-sm btn-outline-secondary action-btn\" data-v-26b4cdde><i class=\"ion-plus-round\" data-v-26b4cdde></i>\n             \n            Following\n          </button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\" data-v-26b4cdde>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-26b4cdde>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-26b4cdde>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-26b4cdde>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-26b4cdde>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-26b4cdde>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active:_vm.$route.name ==='myArticles'},attrs:{"exact":"","to":"/profile"}},[_vm._v("My\n                Articles\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-26b4cdde>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active:_vm.$route.name ==='favorites'},attrs:{"exact":"","to":"/profile/favorites"}},[_vm._v("\n                Favorited Articles")])],1)],2)])]),_vm._ssrNode(" "),_c('nuxt-child')],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=26b4cdde&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/profile.js
 // 获取

const getProfile = username => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
}; // follow

const followProfile = username => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
}; // unfollow

const deleteProfile = username => {
  return Object(request["b" /* request */])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//

/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: "profile",
  middleware: 'authenticated',

  async asyncData({
    store,
    query
  }) {
    const {
      data
    } = await getProfile(store.state.user.username);
    return {
      profile: data.profile,
      tab: query.tab,
      username: store.state.user.username
    };
  },

  head() {
    return {
      title: `@${this.username} - conduit`
    };
  }

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "26b4cdde",
  "3e8b36bf"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=8.js.map