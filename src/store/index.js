import { createStore } from "vuex";
import ProductsModule from "@/store/products/getProducts.js";
//vuex store ==> centralized store
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    //you can access on this module through the state like
    //this.$store.state.ProductsModule.<key-inside-the-state>
    ProductsModule,
  },
});
