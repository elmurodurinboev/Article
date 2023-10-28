<template>
   <h1>Article Detail</h1>
</template>

<script>
export default {
   name: "articleDetailView",
   mounted() {
      this.$store
            .dispatch("articleDetail", this.$route.params.slug)
   },
}
</script>

<style></style>
