import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import VueCookies from "vue-cookies";
import Home from "./views/Home.vue";
import Tenant from "./components/Register User/Tenant.vue";
import Index from "./views/Index.vue";
import newHouse from "./components/Dashboard/House.vue";
import viewHouse from "./components/Dashboard/House__Preview.vue";
import viewApartment from "./components/Dashboard/viewApartment.vue";
import viewStudio from "./components/Dashboard/viewStudio.vue";
import viewRoom from "./components/Dashboard/viewRoom.vue";
import Search from "./components/Search/Search.vue";

Vue.use(VueCookies);
Vue.use(Router);

const guard = function(to, from, next) {
  if (store.state.isUserLogIn) {
    store.dispatch("showSignUp", false);
    store.dispatch("showLogin", false);
    store.dispatch("showHome", false);
    store.dispatch("showDashboard", false);
    next();
  } else {
    next("/login");
  }
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter(to, from, next) {
        if (store.state.isUserLogIn) {
          store.dispatch("showSignUp", false);
          store.dispatch("showLogin", false);
          store.dispatch("showDashboard", true);
          store.dispatch("showHome", true);
          next();
        } else {
          store.dispatch("isUserLogIn", false);
          store.dispatch("showSignUp", true);
          store.dispatch("showLogin", true);
          store.dispatch("showHome", true);
          next();
        }
      }
    },
    {
      path: "/search",
      name: "search",
      component: Search
      // beforeEnter(to, from, next) {
      //   // if (store.state.isUserLogIn) {
      //   //   store.dispatch("showDashboard", true);
      //   //   store.dispatch("showLogin", false);
      //   //   next();
      //   // } else {
      //   //   store.dispatch("showDashboard", false);
      //   //   next();
      //   // }
      // }
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue"),
      beforeEnter(to, from, next) {
        if (store.state.isUserLogIn) {
          store.dispatch("showSignUp", false);
          store.dispatch("showLogin", false);
          store.dispatch("showHome", false);
          next(`/home/${VueCookies.get("user").slug}`);
        } else {
          next();
        }
      }
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Register.vue")
    },
    {
      path: "/register/:tenant",
      name: "tenant",
      component: Tenant
    },
    {
      path: "/home/:userId",
      name: "dashboard",
      component: Index,
      beforeEnter: guard
    },
    {
      path: "/home/:userId/new_house",
      name: "new_house",
      component: newHouse,
      beforeEnter: guard
    },
    {
      // For Houses
      path: "/home/:userId/house",
      name: "house",
      component: viewHouse,
      beforeEnter: guard
    },
    {
      path: "/home/:userId/house/:houseId",
      name: "viewHouse",
      component: viewHouse,
      beforeEnter: guard
    },
    {
      path: "/home/:userId/apartment",
      name: "apartment",
      component: viewApartment,
      beforeEnter: guard
    },
    {
      path: "/home/:userId/studio",
      name: "studio",
      component: viewStudio,
      beforeEnter: guard
    },
    {
      path: "/home/:userId/room",
      name: "room",
      component: viewRoom,
      beforeEnter: guard
    }
  ]
});
