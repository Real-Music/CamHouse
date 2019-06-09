import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Dashboard from "./components/Dashboard/Index.vue";
// import { sync } from "vuex-router-sync";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
Vue.component("dashboard", Dashboard);

VueCookies.config("7d");
Vue.config.productionTip = false;
// sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
