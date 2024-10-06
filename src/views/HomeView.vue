<template>
  <div class="home">
    <h1>This is Home Page</h1>
    <!-- <h2>{{ this.$store.state.ProductsModule.name }}</h2> -->
    <!-- <h2>{{ ProductsModule.name }}</h2> -->
    <!-- <h2>User is {{ this.$store.getters.addTitle }}</h2> -->
    <!-- <h2>User is {{ addTitle }}</h2> -->
    <!-- <h2>Name is {{ this.$store.state.ProductsModule.name }}</h2> -->
    <!-- <button @click="this.$store.commit('changeName')">Change Name</button> -->
    <!-- <button @click="changeName">Change Name</button> -->

    <!-- <h2>User is :: {{ this.$store.getters.addTitle }}</h2> -->

    <!-- <button @click="this.$store.dispatch('doChangeTitle')">Change Title</button> -->
    <button @click="doChangeTitle">Change Title</button>
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import { mapGetters } from "vuex";
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  // computed: {
  //   ...mapState(["ProductsModule"]),
  // },
  // computed: {
  //   ...mapGetters(["addTitle"]),
  // },
  // methods: {
  //   ...mapMutations(["changeName"]),
  // },

  methods: {
    ...mapActions(["doChangeTitle"]),
  },
};
</script>
