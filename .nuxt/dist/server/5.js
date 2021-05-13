exports.ids = [5];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
}; // 获取当前用户信息

const getUser = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/user'
  });
}; // 更新当前用户信息

const updateUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: '/api/user',
    data
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=35e6503f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-35e6503f>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-35e6503f>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-35e6503f>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-35e6503f>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-35e6503f>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-35e6503f>"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-35e6503f>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form data-v-35e6503f>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-35e6503f><input type=\"text\" placeholder=\"Your Name\" required=\"required\" autocomplete"+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-35e6503f></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-35e6503f><input type=\"email\" placeholder=\"Email\" required=\"required\" autocomplete"+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-35e6503f></fieldset> <fieldset class=\"form-group\" data-v-35e6503f><input type=\"password\" placeholder=\"Password\" required=\"required\" minlength=\"8\" autocomplete"+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-35e6503f></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-35e6503f>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=35e6503f&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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
// 只在 客户端 加载这个包 js-cookie
const Cookie =  false ? undefined : undefined;

/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "login",
  middleware: 'notauthenticated',

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {} // 错误信息

    };
  },

  computed: {
    isLogin() {
      // return this.$route.path === '/login'
      return this.$route.name === 'login';
    }

  },
  methods: {
    async onSubmit() {
      try {
        // 提交表单请求登录
        const {
          data
        } = this.isLogin ? await Object(user["b" /* login */])({
          user: this.user
        }) : await Object(user["c" /* register */])({
          user: this.user
        }); // 保存登录状态到容器，共享

        this.$store.commit('setUser', data.user); // 为了防止页面刷新数据丢失，把登录状态存储到 Cookie 中，放到 Cookie 里客户端 与 服务端 都可以拿到

        Cookie.set('user', data.user); // 登陆成功，跳转到首页

        this.$router.push('/');
      } catch (err) {
        this.errors = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "35e6503f",
  "7c287e7f"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map