<template>
   <div class="form-floating mb-3">
      <input
         :type="type"
         class="form-control"
         :id="label"
         :placeholder="placeholder"
         :value="modelValue"
         @input="updateHandler"
      />
      <label :for="label">{{ label }}</label>
   </div>
</template>
<script>
export default {
   name: "BaseInput",

   props: {
      label: String,
      type: String,
      placeholder: String,
      modelValue: [String,Number]
   },
   methods: {
      updateHandler(e) {
         this.$emit('update:modelValue', e.target.value)
      }
   }
}
</script>
<style></style>
