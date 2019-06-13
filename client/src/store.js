import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
Vue.use(createPersistedState);

export default new Vuex.Store({
  strict: true,
  state: {
    isUserLogIn: false,
    isHouseProvider: false,
    showDashboard: false,
    showSignUp: true,
    showLogin: true,
    showHome: true,
    user: null
  },
  plugins: [createPersistedState()],
  mutations: {
    setUser(state, value) {
      state.user = value;
    },
    setHouseProvider(state, value) {
      state.isHouseProvider = value;
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
    },
    showDashboard(state, value) {
      state.showDashboard = value;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setHouseProvider({ commit }, state) {
      commit("setHouseProvider", state);
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
    },
    showDashboard({ commit }, boolean) {
      commit("showDashboard", boolean);
    }
  }
});
