import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _134428e0 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _753e7276 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _321f4b7a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _752cb3fa = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _4df962f4 = () => interopDefault(import('..\\pages\\profile\\components\\article-list.vue' /* webpackChunkName: "" */))
const _790b2b09 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _2ae1dc5a = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _a7982d60 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _134428e0,
    children: [{
      path: "",
      component: _753e7276,
      name: "home"
    }, {
      path: "/login",
      component: _321f4b7a,
      name: "login"
    }, {
      path: "/register",
      component: _321f4b7a,
      name: "register"
    }, {
      path: "/profile",
      component: _752cb3fa,
      name: "profile",
      children: [{
        path: "",
        component: _4df962f4,
        name: "myArticles"
      }, {
        path: "/profile/favorites",
        component: _4df962f4,
        name: "favorites"
      }]
    }, {
      path: "/settings",
      component: _790b2b09,
      name: "settings"
    }, {
      path: "/settings",
      component: _790b2b09,
      name: "settings"
    }, {
      path: "/editor",
      component: _2ae1dc5a,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _a7982d60,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
