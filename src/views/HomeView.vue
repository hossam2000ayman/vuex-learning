<template>
  <div class="home">
    <h1>This is Home Page</h1>
    <h2>State count is :: {{ count }}</h2>
    <h2>Getter count is :: {{ getterCountStore }}</h2>
    <button @click="increaseAction">Increase Action</button>
    <button @click="decreaseAction">Decrease Action</button>
    <hr />
    <div v-html="getterUserStore"></div>
    <button v-on:click="increaseAgeAction">Increase Age Action</button>
    <button v-on:click="decreaseAgeAction">Decrease Age Action</button>
  </div>
</template>

<script>
import { counterStore } from "@/store/counter-store";
import { userStore } from "@/store/user-store";
import { mapActions, mapState } from "pinia";

export default {
  computed: {
    ...mapState(counterStore, ["count"]),
    // ...mapState(counterStore, {
    //   myCount: (state) => state.count,
    // }),

    ...mapState(userStore, ["user"]),
    // ...mapState(userStore, {
    //   myUser: (state) => state.user,
    // }),

    getterCountStore() {
      return counterStore().countPlusOne;
    },

    getterUserStore() {
      return userStore().getUserDetails;
    },
  },

  methods: {
    ...mapActions(counterStore, ["increaseAction", "decreaseAction"]),
    ...mapActions(userStore, ["increaseAgeAction", "decreaseAgeAction"]),
  },
  mounted() {
    // console.log("Count :: ", this.count);
    // console.log("User :: ", this.user);
    // console.log(counterStore().increment);
  },
};
</script>
