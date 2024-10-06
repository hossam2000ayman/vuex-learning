import { createStore } from "vuex";
//vuex store ==> centralized store
export default createStore({
  //options of state management
  //state => declare the data (but globally) over all the pages
  state: {
    name: "Hossam AL-Badry",
    age: 24,
    title: "FullStack Developer",
  },
  //getters => computed functions or like getters functions (but globally)
  //computed function must return data
  getters: {
    //state => data (best practice))
    getNameWithTitle(state) {
      return `${state.name} - (${state.title})`;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
