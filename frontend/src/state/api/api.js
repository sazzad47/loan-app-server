import axios from "axios";

// export const API_URL = "http://localhost:5000";
export const API_URL = "http://74.63.223.224:5000";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: API_URL,
});

export default api;
