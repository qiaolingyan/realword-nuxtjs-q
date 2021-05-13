const cookieparser = process.server ? require('cookieparser') : undefined
// 在服务端渲染期间运行的都是同一个实例，
// 为了防止数据冲突，所以要定义成函数，返回数据对象
export const state = () => {
  return {
    // 当前登录用户的登录状态
    user:null
  }
}

export const mutations = {
  setUser(state,user){
    state.user = user
  }
}

export const actions = {
  // nuxtServerInit 仅在服务端调用
  // 在服务端渲染期间自动调用，初始化容器数据及传递数据给客户端使用
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    if(req.headers.cookie){
      // 使用 cookieparser 把 cookie 字符串解析为 js 对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      }catch(err){
      
      }
    }
    commit('setUser',user)
  }
}

