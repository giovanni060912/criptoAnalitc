import axios from "axios";

const api = axios.create({
  baseURL: "https://api.polygonscan.com/",
});

export default api;
