import axios from "axios";
export default () => {
  return axios.create({
    baseURL: `http://localhost:8000/`,
    headers: { Authorization: "Bearer " + localStorage.getItem("userToken") }
  });
};
