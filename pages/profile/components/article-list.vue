<template>
  <div>
    <div class="article-preview" v-for="(article,index) in articles" :key="index">
      <div class="article-meta">
        <nuxt-link :to="{name:'profile',params:{username:article.author.username}}"><img :src="article.author.image" />
        </nuxt-link>
        <div class="info">
          <nuxt-link :to="{name:'profile',params:{username:article.author.username}}" class="author">
            {{article.author.username}}</nuxt-link>
          <span class="date">{{article.author.createdAt}}</span>
        </div>
        <button class="btn btn-outline-primary btn-sm pull-xs-right">
          <i class="ion-heart"></i> {{ article.favoritesCount }}
        </button>
      </div>
      <nuxt-link :to="{name:'article',params:{slug:article.slug}}" class="preview-link">
        <h1>{{article.title}}</h1>
        <p v-html="article.body"></p>
        <span>Read more...</span>
      </nuxt-link>
    </div>
  </div>

</template>

<script type="text/javascript">
import MarkdownIt from 'markdown-it'
import { getArticles } from '@/api/article'
export default {
  name: 'ArticleList',
  async asyncData({ route, store }) {
    const username = store.state.user.username
    const query = route.name === 'favorites' ? { favorited: username } : { author: username }
    const { data } = await getArticles(query)
    const { articles } = data
    const md = new MarkdownIt()
    articles.forEach(article => article.body = md.render(article.body))
    return {
      articles
    }

  }
}
</script>

<style scoped>
</style>
