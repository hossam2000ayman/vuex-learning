<template>
  <div class="home">
    <h1>This is Home Page</h1>
    <h2>your name is {{ this.$store.state.name }}</h2>
    <h2>your age is {{ this.$store.state.age }}</h2>

    <input type="text" v-model="this.$store.state.name" />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  // data() {
  //declared locally
  // return {
  //   name: "Hossam AlBadry",
  //   age: 24,
  // };
  // },
};
</script>
