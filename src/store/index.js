import { createStore } from "vuex";
import ProductsModule from "@/store/products/getProducts.js";
//vuex store ==> centralized store
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ProductsModule,
  },
});
