<template>
  <div class="home">
    <h1>This is Home Page</h1>
    <h1>Strict Mood</h1>
    <!-- vuex not the work way to access on state directly and change it using two way bind -->
    <!-- but we can do this access and change the data by using mutations methods instead for access state directly -->
    <!-- so to keep our state is safe and the change of this state will occur only inside the store and avoid other modification on state from outside -->
    <!-- here is the idea of "Strict Mood" -->
    <!-- so instead for doing this -->
    <h3>State Counter :: {{ productsModule.counter }}</h3>
    <input type="number" v-model="productsModule.counter" />
    <!-- do this  -->
    <h3>Mutation Counter :: {{ counter }}</h3>
    <input type="number" v-model="counter" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const productsModule = store.state.ProductsModule;

const counter = computed({
  get: () => productsModule.counter,
  set: (value) => store.commit("updateCounter", value),
});
</script>
