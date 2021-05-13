<template>
  <div class="article-meta">
    <nuxt-link :to="{
        name:'profile',
        params:{
          username:article.author.username
        }
      }"><img :src="article.author.image" /></nuxt-link>
    <div class="info">
      <nuxt-link :to="{
        name:'profile',
        params:{
          username:article.author.username
        }
      }" class="author">{{ article.author.username }}</nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD,YYYY')}}</span>
    </div>
    <template v-if="user.username === article.author.username">
      <button class="btn btn-sm btn-outline-secondary" @click="editArticle">
        <i class="ion-edit"></i>
        &nbsp;
        Edit Article <span class="counter"></span>
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-sm btn-outline-primary" @click="deleteArticle">
        <i class=" ion-trash-a"></i>
        &nbsp;
        Delete Article <span class="counter"></span>
      </button>
    </template>
    <template v-else>
      <button class="btn btn-sm btn-outline-secondary" :class="{active:article.author.following}">
        <i class="ion-plus-round"></i>
        &nbsp;
        Follow Eric Simons <span class="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-sm btn-outline-primary" :class="{active:article.favorited}">
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post <span class="counter">(29)</span>
      </button>
    </template>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
import { deleteArticle } from '@/api/article'
export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    editArticle() {
      this.$router.push({
        name: 'editor',
        params: {
          article: this.article
        }
      })
    },
    async deleteArticle() {
      const slug = this.$route.params.slug
      await deleteArticle(slug)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
