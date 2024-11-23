import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL, // VITE_SERVER_URL에서 가져온 baseURL
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // localStorage의 토큰 확인
    const localStorageToken = localStorage.getItem("token");
    // Vite 환경 변수의 토큰 확인
    const envToken = import.meta.env.VITE_TOKEN;

    const token = localStorageToken || envToken;

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
