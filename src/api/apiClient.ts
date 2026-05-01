import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:44323/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;