import axios from "axios";

const api = axios.create({
  baseURL:"https://fashion-store-backend-3.onrender.com"
});

export default api;