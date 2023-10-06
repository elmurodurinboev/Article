<template>
   <ul class="list-group list-unstyled text-start mb-4">
      <li
         class="list-group-item list-group-item-danger"
         v-for="errorMessage in errorMessages"
         :key="erroMessage"
      >
         {{ errorMessage }}
      </li>
   </ul>
</template>

<script>
export default {
   // name: "ValidationError",
   props: {
      validationErrors: {
         type: Object,
         required: true,
      },
   },
   computed: {
      errorMessages() {
         return Object.keys(this.validationErrors).map((name) => {
            const msg = this.validationErrors[name].join(", ")
            return `${name} ${msg}`
         })
      },
   },
}
</script>

<style></style>
