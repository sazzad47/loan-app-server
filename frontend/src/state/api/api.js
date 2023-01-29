import axios from "axios";

// export const API_URL = "http://localhost:5000";
export const API_URL = "http://69.162.75.30:5000";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: API_URL,
});

export default api;
