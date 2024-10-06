<template>
  <div class="home">
    <h1>This is Home Page</h1>
    <h2>Introduce myself as {{ this.$store.getters.getNameWithTitle }}</h2>
    <button @click="this.$store.commit('changeTitle')">Fire Mutation</button>
  </div>
</template>

<script>
export default {};
</script>
