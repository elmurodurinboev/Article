<template>
   <Loader v-if="isLoading" class="offset-md-6" />
   <article-detail v-else />
</template>

<script>
import ArticleDetail from "../components/ArticleDetail.vue"
import { mapState } from "vuex"
export default {
   name: "articleDetailView",
   components: {
      ArticleDetail,
   },
   mounted() {
      this.$store.dispatch("articleDetail", this.$route.params.slug)
   },
   computed: {
      ...mapState({
         isLoading: (state) => state.articles.isLoading,
      })
   },
}
</script>

<style></style>
