import Api from "@/services/Api";

export default {
  create(slug, apartment) {
    return Api().post(`/apartments/${slug}`, apartment);
  },
  getAllApartment(slug) {
    return Api().get(`apartments/user/${slug}`);
  },
  updateApartment(slug, data) {
    return Api().patch(`/apartments/${slug}`, data);
  },
  deleteApartment(slug) {
    return Api().delete(`/apartments/${slug}`);
  },
  getApartments() {
    return Api().get("/apartments");
  }
};
