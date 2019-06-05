import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Tenant from "./components/Register User/Tenant.vue";
import Index from "./views/Index.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
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
        console.log(store.state.isUserLogIn);
        if (store.state.isUserLogIn) {
          next("/home");
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
      path: "/home",
      name: "dashboard",
      component: Index
    }
  ]
});
