<template>
   <div class="form-signin w-25 m-auto mt-5 text-center border p-3 rounded">
      <form>
         <h1>El</h1>
         <h1 class="h3 mb-3 fw-normal">Register</h1>

         <base-input label="Name" type="text" placeholder="John Doe" />

         <base-input
            label="Email address"
            type="email"
            placeholder="name@example.com"
         />

         <base-input label="Password" type="password" placeholder="Password" />
         <base-button type="submit" @click="submitHandler" :disabled="isLoading"
            >Register</base-button
         >
      </form>
   </div>
</template>
<script>
export default {
   name: "TheRegister",
   computed: {
      isLoading() {
         return this.$store.state.auth.isLoading
      },
   },
   methods: {
      submitHandler(e) {
         e.preventDefault()
         const user = {
            username: "ema8121",
            email: "saloam@gmail.com",
            password: "salomAleykuma"
         }
         this.$store.dispatch("register",user).then(response=>console.log(response)).catch(err=>console.log(err))
         // console.log(this.isLoading)
      },
   },
}
</script>
<style></style>
