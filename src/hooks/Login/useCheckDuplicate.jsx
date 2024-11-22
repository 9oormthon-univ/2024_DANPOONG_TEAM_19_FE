import { useState } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useCheckDuplicate = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState(null);

  const checkDuplicate = async (userId) => {
    setIsChecking(true);
    setError(null);

    try {
      const response = await axiosInstance.get(`/api/core/auth/check/${userId}`);
      console.log("중복 확인 응답 데이터:", response.data);

      return response.data?.isDuplicate || false; 
    } catch (err) {
      console.error("중복 확인 요청 에러:", err.response?.data || err.message);
      setError(err.response?.data?.message || "중복 확인에 실패했습니다.");
      return true; 
    } finally {
      setIsChecking(false);
    }
  };

  return { checkDuplicate, isChecking, error };
};

export default useCheckDuplicate;
