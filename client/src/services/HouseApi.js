import Api from "@/services/Api";

export default {
  createHouse(slug, properties) {
    return Api().post(`houses/${slug}`, properties, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  getAllHouse(slug) {
    return Api().get(`houses/user/${slug}`);
  },
  updateHouse(slug, data) {
    return Api().patch(`/houses/${slug}`, data);
  },
  deleteHouse(slug) {
    return Api().delete(`/houses/${slug}`);
  },
  getHouses() {
    return Api().get("/houses");
  }
};
