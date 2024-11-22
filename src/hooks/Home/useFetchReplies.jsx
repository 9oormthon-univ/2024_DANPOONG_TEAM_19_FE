import { useState, useEffect } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useFetchReplies = (productId, mainCommentId) => {
  const [replies, setReplies] = useState([]); // 답글 데이터
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const fetchReplies = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/api/core/product/${productId}/comment`,
          { params: { mainCommentId } } // mainCommentId를 쿼리 파라미터로 전달
        );
        setReplies(response.data?.data || []); // 응답 데이터를 설정
      } catch (err) {
        setError(err.response?.data?.message || "답글 데이터를 가져오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    // productId와 mainCommentId가 있을 때만 요청 실행
    if (productId && mainCommentId) {
      fetchReplies();
    }
  }, [productId, mainCommentId]);

  return { replies, loading, error }; // 상태 값 반환
};

export default useFetchReplies;
