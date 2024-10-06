export default {
  //options of state management
  //state => declare the data (but globally) over all the pages
  state: {
    products: "",
  },
  //getters => computed functions (but globally)
  //computed function must return data
  getters: {
    //state => data (best practice))
  },
  //mutations ==> control on data or your state (manage state)
  //we cannot access on the state and modify on it except through mutations
  //can fire on mutations through this.$store.commit(<mutation-name>)
  //can make changes on the state ==> data globally over the pages

  mutations: {
    //access on state and see it's data
    //first argument is the state (data) object that will be updated
    //second argument is optional and for local variable that is return from actions
    getProducts(state, products) {
      console.log("Products passed from actions to mutations ::", products);
      state.products = products;
      console.log("Then passing from mutations to state ::", state.products);
    },
  },
  //important question is the best practice on the mutations is to declare the api call in case of async function? (no)
  //so the best practice is to use the api calls by using actions instead of mutations
  // actions => functions of api calls or http requests calls (async function)
  //then after the state will receive inside actions then it will be set into mutations
  //can fire actions method through this.$store.dispatch(<action-name>)
  actions: {
    //action have mutation argument (context) and to fire mutation we using commit('mutation-name')
    async doGetProducts(context) {
      await fetch("https://dummyjson.com/products")
        .then((result) => result.json())
        .then((data) => {
          context.commit("getProducts", data.products);
        });
    },
  },

  //modules => files which make separated outside the index.js (current file)
  //state management ---> authentication login , signup
  //state management ---> profile edit profile
  //state management ---> ...etc
  //we should not put all of these different type of state management into just on index.js file it will be not clean
  //instead vuex provide modules concept
  //you can make other state-management from other files separated from index.js file and add it as a module
  modules: {},
};
