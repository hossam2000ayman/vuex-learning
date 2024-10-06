export default {
  state: {
    name: "Hossam AlBadry",
    title: "Software Engineer",
  },
  getters: {
    addTitle(state) {
      return `${state.name} ( ${state.title} )`;
    },
  },
  mutations: {
    changeName(state) {
      state.name = "John Doe";
    },

    changeTitle(state, newTitle) {
      state.title = newTitle;
    },
  },
  actions: {
    doChangeTitle(context) {
      context.commit("changeTitle", "Full Stack Developer");
    },
  },
};
/**
 *
 *
 *
 */
