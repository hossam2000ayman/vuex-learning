export default {
  state: {
    counter: 0,
  },
  getters: {
    multiplyCounter(state) {
      return state.counter * 2;
    },
  },
  mutations: {
    increaseCounter(state) {
      state.counter++;
    },
    decreaseCounter(state) {
      state.counter--;
    },
    updateCounter(state, newValue) {
      state.counter = newValue;
    },
  },
  actions: {
    increaseAction(context) {
      context.commit("increaseCounter");
    },
    decreaseAction(context) {
      context.commit("decreaseCounter");
    },
  },
};
