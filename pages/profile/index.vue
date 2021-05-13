<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Following
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link exact class="nav-link" :class="{active:$route.name ==='myArticles'}" to="/profile">My
                  Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link exact class="nav-link" :class="{active:$route.name ==='favorites'}" to="/profile/favorites">
                  Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

        </div>
        <nuxt-child />
      </div>
    </div>

  </div>
</template>

<script>
import { getProfile, followProfile, deleteProfile } from '@/api/profile'
export default {
  name: "profile",
  middleware: 'authenticated',
  async asyncData({ store, query }) {
    const { data } = await getProfile(store.state.user.username)
    return {
      profile: data.profile,
      tab: query.tab,
      username: store.state.user.username
    }
  },
  head() {
    return {
      title: `@${this.username} - conduit`
    }
  }
}
</script>

<style scoped>
</style>
