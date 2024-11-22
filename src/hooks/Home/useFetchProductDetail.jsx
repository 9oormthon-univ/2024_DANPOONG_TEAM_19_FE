import { useState, useEffect } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useFetchProductDetail = (productId) => {
  const [productDetail, setProductDetail] = useState(null); 
  const [comments, setComments] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);

      try {
        const response = await axiosInstance.get(`/api/core/product/${productId}`);
        const { productDetail, mainComments } = response.data?.data || {};
        setProductDetail(productDetail || null);
        setComments(mainComments || []);
      } catch (err) {
        setError(err.response?.data?.message || "상품 데이터를 가져오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetail();
    }
  }, [productId]);

  return { productDetail, comments, loading, error };
};

export default useFetchProductDetail;
