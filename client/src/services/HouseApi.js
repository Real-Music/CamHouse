import Api from "@/services/Api";

export default {
  createHouse(slug, properties) {
    return Api().post(`houses/${slug}`, properties, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
};
