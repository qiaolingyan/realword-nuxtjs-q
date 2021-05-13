<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent>
            <fieldset>
              <fieldset class="form-group">
                <input v-model="article.title" required type="text" class="form-control form-control-lg"
                  placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="article.description" required type="text" class="form-control"
                  placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="article.body" required class="form-control" rows="8"
                  placeholder="Write your article (in markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input @keyup.enter="addTag" type="text" class="form-control" placeholder="Enter tags">
                <div class="tag-list">
                  <span class="tag-default tag-pill" v-for="(tag,index) in article.tagList" :key="index">
                    <i class="ion-close-round" @click="deleteTag(tag)"></i>
                    {{tag}}
                  </span>
                </div>
              </fieldset>
              <button @click="onSubmit" class="btn btn-lg pull-xs-right btn-primary">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { createArticles, putArticle } from '@/api/article'
export default {
  name: "editor",
  middleware: 'authenticated', // 在路由匹配组件渲染之前先执行这个中间件
  data() {
    return {

    }
  },
  computed: {
    article() {
      const article = this.$route.params.article || {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
      return article
    }
  },
  methods: {
    async onSubmit() {
      const { data } = this.$route.params.article
        ? await putArticle(this.article)
        : await createArticles(this.article)

      this.$router.push({
        name: 'article',
        params: { slug: data.article.slug }
      })
    },
    addTag(e) {
      this.article.tagList.push(e.target.value)
      e.target.value = ''
    },
    deleteTag(tag) {
      const index = this.article.tagList.findIndex(item => item === tag)
      this.article.tagList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
</style>
