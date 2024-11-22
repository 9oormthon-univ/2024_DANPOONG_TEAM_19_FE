import { useState, useEffect } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useProductDetail = (productId) => {
  const [productDetail, setProductDetail] = useState(null);
  const [mainComments, setMainComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(`/api/core/product/${productId}`);
        const { productDetail, mainComments } = response.data.data;
        setProductDetail(productDetail);
        setMainComments(mainComments);
      } catch (err) {
        console.error("상품 정보를 가져오는 중 오류 발생:", err);
        setError(err.response?.data?.message || "상품 정보를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetail();
    }
  }, [productId]);

  return { productDetail, mainComments, loading, error };
};

export default useProductDetail;
