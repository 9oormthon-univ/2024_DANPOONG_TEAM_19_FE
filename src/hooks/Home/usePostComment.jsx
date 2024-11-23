import { useState } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const usePostComment = (productId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postComment = async (content, secret) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post(`/api/core/product/${productId}/comment`, {
        content,
        secret,
      });
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "댓글 등록 중 오류가 발생했습니다.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { postComment, loading, error };
};

export default usePostComment;
