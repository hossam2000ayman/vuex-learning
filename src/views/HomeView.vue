<template>
  <div class="home">
    <h1>This is Home Page</h1>
    <button @click="this.$store.dispatch('doGetProducts')">Get Products</button>
  </div>
</template>

<script>
export default {};
</script>
