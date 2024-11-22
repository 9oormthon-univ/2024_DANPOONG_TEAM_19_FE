import { useState, useEffect } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useAllProducts = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      console.log("현재 Authorization 헤더:", axiosInstance.defaults.headers.common["Authorization"]);
      console.log("현재 저장된 토큰(localStorage):", localStorage.getItem("token"));

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
