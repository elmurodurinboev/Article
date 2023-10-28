<template>
   <div v-if="article">
      <h1>{{ article.title }}</h1>
   </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
   name: "article-detail",
   computed: {
      ...mapState({
         article: (state) => state.articles.article,
      })
   },
}
</script>

<style></style>
