import Api from "@/services/Api";

export default {
  create(slug, studio) {
    return Api().post(`studio/${slug}`, studio, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  getAllStudio(slug) {
    return Api().get(`studio/user/${slug}`);
  },
  updateStudio(slug, data) {
    return Api().patch(`/studio/${slug}`, data);
  },
  deleteStudio(slug) {
    return Api().delete(`/studio/${slug}`);
  },
  getStudios() {
    return Api().get("/studio");
  }
};
