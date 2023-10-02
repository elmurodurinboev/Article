<template>
   <div class="container mx-auto my-2">
      <the-navbar></the-navbar>
      <router-view></router-view>
   </div>
</template>

<script>
import { RouterView } from "vue-router"
import TheNavbar from "./components/TheNavbar.vue"
export default { components: { TheNavbar } }
</script>
<style></style>
