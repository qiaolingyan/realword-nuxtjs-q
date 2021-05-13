module.exports = {
  router: {
    // nuxt-link 选中后的 class ,默认 'nuxt-link-active'
    linkActiveClass: 'active',
    // 自定义路由表规则
    extendRoutes(routes, resolve) {
      // 清除 Nuxt.js 基于 pages 目录默认生成的路由表规则
      routes.splice(0)
      routes.push(...[{
          path: '/',
          component: resolve(__dirname, 'pages/layout'),
          children: [{
              path: '', // 默认子路由
              name: 'home',
              component: resolve(__dirname, 'pages/home')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login')
            },
            {
              path: '/profile',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile'),
              children: [{
                  path: '',
                  name: 'myArticles',
                  component: resolve(__dirname, 'pages/profile/components/article-list.vue')
                },
                {
                  path: '/profile/favorites',
                  name: 'favorites',
                  component: resolve(__dirname, 'pages/profile/components/article-list.vue')
                },
              ]
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings')
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings')
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor')
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article')
            }
          ]
        }

      ])
    },
  },
  // 注册插件
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ],
  server: {
    host: '0.0.0.0', // 
    port: 3000
  }
}