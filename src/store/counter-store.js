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
  },
});
