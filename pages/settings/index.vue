<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="updateUser">
            <fieldset>
              <fieldset class="form-group">
                <input v-model="user.image" class="form-control" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="user.bio" class="form-control form-control-lg" rows="8"
                  placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.password" class="form-control form-control-lg" type="password"
                  placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr>
          <button class="btn btn-outline-danger" @click="logout">
            Or click here to logout.
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import { mapState } from 'vuex'
import { getUser, updateUser } from '@/api/user'
export default {
  name: "settings",
  middleware: 'authenticated',
  async asyncData() {
    const { data } = await getUser()
    return {
      user: data.user
    }
  },
  methods: {
    async updateUser() {
      const { data } = await updateUser(this.user)
      this.$store.commit('setUser', data.user)
      Cookie.set('user', data.user)
      this.$router.push('/profile')
    },
    logout() {
      this.$store.commit('setUser', null)
      Cookie.remove('user')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
