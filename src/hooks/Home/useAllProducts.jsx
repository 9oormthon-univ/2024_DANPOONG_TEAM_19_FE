import { useState, useEffect } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useAllProducts = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
  
      // Authorization 헤더에 토큰이 없는 경우, 로컬스토리지의 토큰 설정
      if (!axiosInstance.defaults.headers.common["Authorization"]) {
        const token = localStorage.getItem("token");
        if (token) {
          axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          console.log("로컬스토리지에서 Authorization 헤더 설정:", axiosInstance.defaults.headers.common["Authorization"]);
        } else {
          console.warn("Authorization 헤더와 로컬스토리지에 토큰이 없습니다.");
        }
      }
  
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
