<template>
  <div class="home">
    <h1>This is Home Page</h1>

    <h2>Counter is :: {{ productsModule.counter }}</h2>
    <h2>Getters is :: {{ getters.multiplyCounter }}</h2>
    <button @click="store.commit('increaseCounter')">Mutation Increase</button>
    <button @click="store.commit('decreaseCounter')">Mutation Decrease</button>
    <br />
    <br />
    <button @click="store.dispatch('increaseAction')">Action Increase</button>
    <button @click="store.dispatch('decreaseAction')">Action Decrease</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
console.log("store :: ", store);
const productsModule = store.state.ProductsModule;
console.log("ProductsModule :: ", productsModule);
const getters = store.getters;
console.log("getters :: ", getters);

//you can access on mutation or action through
// commit <==> mutation , dispatch <==> action
//observation that the action is one to many relationship with mutations
</script>
