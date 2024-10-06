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
  //getters => computed functions (but globally)
  //computed function must return data
  getters: {
    //state => data (best practice))
    getNameWithTitle(state) {
      return `${state.name} - (${state.title})`;
    },
  },
  //mutations ==> control on data or your state (manage state)
  //can fire on mutations through this.$store.commit(<mutation-name>)
  //can make changes on the state ==> data globally over the pages
  mutations: {
    //access on state and see it's data
    changeTitle(state) {
      state.title = "Web Developer";
    },
  },
  actions: {},
  modules: {},
});
