import { defineStore } from "pinia";

export const counterStore = defineStore("counter-store", {
  //options
  state: () => ({
    count: 0,
  }),
  getters: {
    countPlusOne() {
      return this.count + 1;
    },
  },
  actions: {
    increaseAction() {
      this.count++;
    },

    decreaseAction() {
      this.count--;
    },
    //I can also make overriding the built in reset function of store
    $reset() {
      console.log("$reset fired (counter-store)");
      this.count = 2;
    },
  },
});
