import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    langage: "fr"
  },
  getters: {
    langage: state => state.langage
  },
  mutations: {
    setLangage: (state, payload) => {
      state.langage = payload;
    }
  }
});
