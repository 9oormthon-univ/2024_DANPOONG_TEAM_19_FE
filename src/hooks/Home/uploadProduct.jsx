import { useState } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useProductUploader = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadProduct = async ({ files, title, price, content }) => {
    setLoading(true);
    setError(null);
  
    try {
      console.log("======== 상품 업로드 시작 ========");
      console.log("파일 목록:", files);
      console.log("상품명:", title);
      console.log("상품 금액:", price);
      console.log("상품 내용:", content);
  
      const productPayload = {
        title,
        content,
        price: parseInt(price.replace(/,/g, ""), 10),
        imageCount: files.length,
      };
  
      console.log("상품 정보 POST 요청 데이터:", productPayload);
  
      const productResponse = await axiosInstance.post("/api/core/product", productPayload);
  
      console.log("상품 등록 POST 응답 데이터:", productResponse.data);
  
      // Presigned URLs 접근 수정
      const presignedUrls = productResponse.data?.data?.presignedUrls || []; // 데이터 구조에 맞게 접근
      console.log("Presigned URLs:", presignedUrls);
  
      if (presignedUrls.length !== files.length) {
        throw new Error("Presigned URL 개수와 파일 개수가 일치하지 않습니다.");
      }
  
      await Promise.all(
        files.map((file, index) => {
          const presignedUrl = presignedUrls[index]?.preSignedUrl;
          if (!presignedUrl) {
            throw new Error(`Presigned URL이 없습니다. 파일 인덱스: ${index}`);
          }
  
          console.log(`업로드 중인 파일 이름: ${file.name}`);
          console.log(`Presigned URL 요청 경로: ${presignedUrl}`);
  
          return axiosInstance.put(presignedUrl, file, {
            headers: { "Content-Type": file.type },
          }).then(() => {
            console.log(`S3 업로드 성공: ${presignedUrl}`);
          });
        })
      );
  
      console.log("======== 상품 업로드 완료 ========");
      return productResponse.data;
    } catch (err) {
      console.error("상품 업로드 중 오류 발생:");
      console.error("에러 상태 코드:", err.response?.status || "없음");
      console.error("에러 응답 데이터:", err.response?.data || "없음");
      console.error("에러 메시지:", err.message || "없음");
  
      setError("상품 업로드에 실패했습니다.");
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  return { uploadProduct, loading, error };
};

export default useProductUploader;
