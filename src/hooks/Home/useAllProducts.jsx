import { useState, useEffect } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useAllProducts = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  console.log("Authorization 헤더:", axiosInstance.defaults.headers.common["Authorization"]);
  console.log("Authorization 헤더:", axiosInstance.defaults.headers.common.Authorization);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/api/core/product/all");
        setProducts(response.data?.data || []);
      } catch (err) {
        setError(err.response?.data?.message || "상품 데이터를 가져오는 데 실패했습니다.");
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts(); 
  }, []);

  return { products, loading, error };
};

export default useAllProducts;
