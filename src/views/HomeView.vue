<template>
  <div class="home">
    <h1>This is Home Page</h1>
    <h5>State Count is :: {{ count }}</h5>
    <h5>Getter Count is :: {{ countPlusOne }}</h5>
    <button v-on:click="increment">Increase</button>
    <button v-on:click="decrement">Decrease</button>
    <button @click="_counterStore.$reset">Reset Counter State</button>
    <hr />
    <h4 v-html="getUserDetails"></h4>
    <button @click="changeName">Change Name</button>
    <button @click="changeEmail">Change Email</button>
    <button @click="_userStore.$reset">Reset User State</button>
  </div>
</template>

<script setup>
import { counterStore } from "@/store/counter-store";
import { userStore } from "@/store/user-store";
import { storeToRefs } from "pinia";

// import { userStore } from "@/store/user-store";
const _userStore = userStore();
const _counterStore = counterStore();
//extract == destructuring the data inside the store
// const { state , getter }
// const { getUserDetails } = _userStore;
//in that case it's not reactive
// const { count, countPlusOne } = _counterStore;
//how to make the state object is reactive on update it's values
const { count, countPlusOne } = storeToRefs(_counterStore);
const { getUserDetails } = storeToRefs(_userStore);

//how to invoke functions in actions
const increment = _counterStore.increaseAction;
const decrement = _counterStore.decreaseAction;

const changeName = _userStore.changeNameAction;
const changeEmail = _userStore.changeEmailAction;
</script>
