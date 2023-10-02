<template>
   <div class="form-signin w-25 m-auto mt-5 text-center border p-3 rounded">
      <form>
         <h1>El</h1>
         <h1 class="h3 mb-3 fw-normal">Register</h1>

         <base-input label="Name" type="text" placeholder="John Doe" v-model="username" />

         <base-input
            label="Email address"
            type="email"
            placeholder="name@example.com"
            v-model="email"
         />

         <base-input label="Password" type="password" placeholder="Password" v-model="password" />
         <base-button type="submit" @click="submitHandler" :disabled="isLoading"
            >Register</base-button
         >
      </form>
   </div>
</template>
<script>
export default {
   name: "TheRegister",
   data() {
      return {
         username: "",
         email: "",
         password: ""
      }
   },
   computed: {
      isLoading() {
         return this.$store.state.auth.isLoading
      },
   },
   methods: {
      submitHandler(e) {
         e.preventDefault()
         const user = {
            username: this.username,
            email: this.email,
            password: this.password
         }
         this.$store.dispatch("register",user).then(response=>{
            console.log(response)
            this.$router.push({name: 'home'})
         }).catch(err=>console.log(err))
         // console.log(this.isLoading)
      },
   },
}
</script>
<style></style>
