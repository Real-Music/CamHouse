import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: localStorage.getItem("access_token") || null,
    user: null,
    isUserLogIn: false,
    isHouseProvider: false
  },
  mutations: {
    setHouseProvider(state, value) {
      state.isHouseProvider = value;
    },
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLogIn = true;
      } else {
        state.isUserLogIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setHouseProvider({ commit }, state) {
      commit("setHouseProvider", state);
    },
    setToken({ commit }, token) {
      localStorage.setItem("access_token", token);
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    }
  }
});
