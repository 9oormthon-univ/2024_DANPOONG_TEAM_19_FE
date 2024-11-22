import { useState } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (id, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/api/core/auth/login", {
        id,
        password,
      });

      const token = response.headers['authorization'] || response.data;
      localStorage.setItem("token", token);

      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      console.log("로그인 성공! 토큰:", token);

      return true;
    } catch (err) {
      console.error("로그인 실패:", err.response?.data || err.message);
      setError(err.response?.data?.message || "로그인에 실패했습니다.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
