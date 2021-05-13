<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>
          
          <ul class="error-messages">
            <template v-for="(messages,field) in errors">
              <li v-for="(message,index) in messages" :key="message + index">
                {{ field }} {{ message }}
              </li>
            </template>
            
          </ul>
          
          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                  required
                  autocomplete
              >
            </fieldset>
            <fieldset class="form-group">
              <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  v-model="user.email"
                  required
                  autocomplete
              >
            </fieldset>
            <fieldset class="form-group">
              <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                  required
                  minlength="8"
                  autocomplete
              >
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? 'Sign in' : 'Sign up' }}
            </button>
          </form>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
  // 只在 客户端 加载这个包 js-cookie
  const Cookie = process.client ? require('js-cookie') : undefined
  import { login, register } from '@/api/user'
  export default {
    name: "login",
    middleware:'notauthenticated',
    data(){
      return {
        user:{
          username:'',
          email:'',
          password:''
        },
        errors:{} // 错误信息
      }
    },
    computed:{
      isLogin(){
        // return this.$route.path === '/login'
        return this.$route.name === 'login'
      }
    },
    methods:{
      async onSubmit(){
        try{
          // 提交表单请求登录
          const { data } = this.isLogin
            ? await login({user:this.user})
            : await register({user:this.user})
          // 保存登录状态到容器，共享
          this.$store.commit('setUser',data.user)
          // 为了防止页面刷新数据丢失，把登录状态存储到 Cookie 中，放到 Cookie 里客户端 与 服务端 都可以拿到
          Cookie.set('user',data.user)
          // 登陆成功，跳转到首页
          this.$router.push('/')
        }catch(err){
          this.errors = err.response.data.errors
        }
        
      }
    }
  }
</script>

<style scoped>

</style>
