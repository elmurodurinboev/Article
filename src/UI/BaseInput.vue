<template>
   <div class="form-floating mb-3">
      <input
         :type="type"
         class="form-control"
         id="floatingInput"
         :placeholder="placeholder"
      />
      <label for="floatingInput">{{ label }}</label>
   </div>
</template>
<script>
export default {
   name: "BaseInput",

   props: {
      label: String,
      type: String,
      placeholder: String,
   },
}
</script>
<style></style>
