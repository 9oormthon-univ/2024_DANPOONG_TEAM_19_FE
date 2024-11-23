import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL, 
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // S3 Presigned URL 요청 확인
    if (!config.url.includes('s3.ap-northeast-2.amazonaws.com')) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } else {
      // S3 Presigned URL 요청인 경우 Authorization 헤더 제거
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
