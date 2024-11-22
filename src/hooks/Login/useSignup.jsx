import { useState } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const signup = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/api/core/auth/register", data);
      setSuccess(true);
      return response.data; 
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "회원가입에 실패했습니다."); 
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, success };
};

export default useSignup;
