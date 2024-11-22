import axios from "axios";

const token = import.meta.env.VITE_TOKEN;

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
