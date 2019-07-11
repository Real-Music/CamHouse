import Api from "@/services/Api";

export default {
  query(data) {
    return Api().post("search", data);
  },
  getHouseProvider(data) {
    return Api().post(`search/provider`, data);
  }
};
