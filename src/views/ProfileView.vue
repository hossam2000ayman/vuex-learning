<template>
  <div class="about">
    <h1>This is an Profile page</h1>

    <h2>Your name is :: {{ this.$store.state.name }}</h2>
    <h2>Your age is :: {{ this.$store.state.age }}</h2>
  </div>
</template>

<script>
export default {};
</script>
