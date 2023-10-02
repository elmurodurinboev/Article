<!-- Navbar.vue -->
<template>
   <div class="container">
      <header
         class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
      >
         <div @click="linkHandler" class="col-md-3 mb-2 mb-md-0">
            <h2>El</h2>
         </div>

         <div class="col-md-3 text-end">
            <router-link
               to="/login"
               class="btn btn-outline-primary me-2"
               type="button"
               >Login</router-link
            >

            <router-link to="/register" type="button" class="btn btn-primary"
               >Sign-up</router-link
            >
         </div>
      </header>
   </div>
</template>

<script>
export default {
   name: "Navbar",
   methods: {
      linkHandler() {
         return this.$router.push({name: "home"})
      },
   },
}
</script>

<style scoped>
/* Add any additional styles specific to this component */
</style>
