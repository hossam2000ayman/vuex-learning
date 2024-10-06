import { createStore } from "vuex";
//vuex store ==> centralized store
export default createStore({
  //options of state management
  //state => declare the data (globally) over all the pages
  state: {
    name: "Hossam AL-Badry",
    age: 24,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
