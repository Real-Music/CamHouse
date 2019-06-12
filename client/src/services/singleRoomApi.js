import Api from "@/services/Api";

export default {
  create(slug, properties) {
    return Api().post(`rooms/${slug}`, properties, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  getAllRoom(slug) {
    return Api().get(`rooms/user/${slug}`);
  },
  updateRoom(slug, data) {
    return Api().patch(`/rooms/${slug}`, data);
  },
  deleteRoom(slug) {
    return Api().delete(`/rooms/${slug}`);
  }
};
