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

      // 서버 응답 결과 반환 (isDuplicate)
      return response.data?.isDuplicate || false; // false는 사용 가능한 아이디
    } catch (err) {
      console.error("중복 확인 요청 에러:", err.response?.data || err.message);
      setError(err.response?.data?.message || "중복 확인에 실패했습니다.");
      return true; // 중복 여부 확인 실패 시 기본적으로 중복된 것으로 처리
    } finally {
      setIsChecking(false);
    }
  };

  return { checkDuplicate, isChecking, error };
};

export default useCheckDuplicate;
