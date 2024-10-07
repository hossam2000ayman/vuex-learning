import { defineStore } from "pinia";

export const userStore = defineStore("user-store", {
  state: () => ({
    user: {
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
    },
  }),
  getters: {
    getUserDetails() {
      return `<h1>Your name is ${this.user.name} <br> Your age is ${this.user.age} <br> Your email is ${this.user.email} <br> </h1>`;
    },
  },

  actions: {
    increaseAgeAction() {
      this.user.age++;
    },

    decreaseAgeAction() {
      this.user.age--;
    },
  },
});
