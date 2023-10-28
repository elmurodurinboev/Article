<!-- Navbar.vue -->
<template>
   <div class="container">
      <header
         class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4"
      >
         <div @click="linkHandler" class="col-md-3 mb-2 mb-md-0 pointer-event">
            <h2>El</h2>
         </div>

         <div class="col-md-3 text-end">
            <template v-if="isLoggedIn">
               <div class="d-flex gap-4 justify-content-end">
                  <h5 class="border-black">{{ currentUser.username }}</h5>
                  <a
                     href="#"
                     class="text-decoration-none text-danger"
                     @click="logout"
                     >Logout</a
                  >
               </div>
            </template>

            <template v-if="isAnonymous">
               <router-link
                  to="/login"
                  class="btn btn-outline-primary me-2"
                  type="button"
                  >Login</router-link
               >
               <router-link to="/register" type="button" class="btn btn-primary"
                  >Sign-up</router-link
               >
            </template>
         </div>
      </header>
   </div>
</template>

<script>
import { gettersTypes } from "../modules/types"
import { mapGetters } from "vuex"
export default {
   name: "Navbar",
   methods: {
      linkHandler() {
         return this.$router.push({ name: "home" })
      },
      logout() {
         return this.$store.dispatch("logout")
      },
   },
   computed: {
      ...mapGetters({
         currentUser: gettersTypes.currentUser,
         isLoggedIn: gettersTypes.isLoggedIn,
         isAnonymous: gettersTypes.isAnonymous,
      }),
   },
}
</script>

<style scoped>
/* Add any additional styles specific to this component */
</style>
