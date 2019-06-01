import Api from "@/services/Api";

export default {
  login(credentals) {
    return Api().post("users/login", credentals);
  }
};
