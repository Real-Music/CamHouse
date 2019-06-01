import Api from "@/services/Api";

export default {
  register(credentals) {
    return Api().post("users", credentals);
  }
};
