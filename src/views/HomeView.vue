<template>
   <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
         <article-card
            v-for="article in data"
            :article="article"
            :key="article.id"
         />
      </div>
   </div>
</template>

<script>
import { mapState } from "vuex"
import ArticleCard from "../components/ArticleCard.vue"
export default {
   name: "Home",
   components: {
      ArticleCard,
   },
   computed: {
      ...mapState({
         data: (state) => state.articles.data,
         isLoading: (state) => state.articles.isLoading,
      }),
   },
   mounted() {
      this.$store.dispatch("articles")
   },
}
</script>

<style></style>
