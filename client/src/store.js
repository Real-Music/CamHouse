import Vue from "vue";
import Vuex from "vuex";
// import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: localStorage.getItem("access_token") || null,
    user: null,
    isUserLogIn: false,
    isHouseProvider: false,
    showSignUp: true,
    showLogin: true,
    showHome: true
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
    },
    isUserLogIn(state, boolean) {
      state.isUserLogIn = boolean;
    },
    showSignUp(state, value) {
      state.showSignUp = value;
    },
    showLogin(state, value) {
      state.showLogin = value;
    },
    showHome(state, value) {
      state.showHome = value;
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
    },
    isUserLogIn({ commit }, boolean) {
      commit("isUserLogIn", boolean);
    },
    showSignUp({ commit }, boolean) {
      commit("showSignUp", boolean);
    },
    showLogin({ commit }, boolean) {
      commit("showLogin", boolean);
    },
    showHome({ commit }, boolean) {
      commit("showHome", boolean);
    }
  }
});
