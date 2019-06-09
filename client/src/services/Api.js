import axios from "axios";
import Vue from "vue";
import VueCookies from "vue-cookies";

const token = VueCookies.get("user") ? VueCookies.get("user").token : "";

Vue.use(VueCookies);
export default () => {
  return axios.create({
    baseURL: `http://localhost:8000/`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
