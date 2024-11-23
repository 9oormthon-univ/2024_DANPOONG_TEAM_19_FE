import { useState } from "react";
import { axiosInstance } from "../../axios/axios_instance";

const useProductUploader = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadProduct = async ({ files, title, price, content }) => {
    setLoading(true);
    setError(null);

    try {
      // 초기 로그
      console.log("======== 상품 업로드 시작 ========");
      console.log("파일 목록:", files);
      console.log("상품명:", title);
      console.log("상품 금액:", price);
      console.log("상품 내용:", content);

      // 1. 상품 정보 POST 요청
      const productPayload = {
        title,
        content,
        price: parseInt(price.replace(/,/g, ""), 10),
        imageCount: files.length, // 이미지 개수만큼 presigned URL 요청
      };

      // 추가 로그: 요청 데이터 확인
      console.log("상품 정보 POST 요청 데이터:", productPayload);

      const productResponse = await axiosInstance.post("/api/core/product", productPayload);

      // 추가 로그: POST 요청 응답 데이터 확인
      console.log("상품 등록 POST 응답 데이터:", productResponse.data);

      // 추가 로그: Authorization 헤더 확인
      console.log("Authorization 헤더:", axiosInstance.defaults.headers.common.Authorization);

      // 경로 확인 로그
      console.log("상품 등록 요청 경로:", productResponse.config?.url || "/api/core/product");
      console.log("상품 등록 요청 상태 코드:", productResponse.status);

      const { presignedUrls } = productResponse.data; // 서버에서 presigned URL 반환
      console.log("Presigned URLs:", presignedUrls);

      // 2. S3 업로드
      if (presignedUrls.length !== files.length) {
        throw new Error("Presigned URL 개수와 파일 개수가 일치하지 않습니다.");
      }

      await Promise.all(
        files.map((file, index) => {
          console.log(`업로드 중인 파일 이름: ${file.name} (Presigned URL: ${presignedUrls[index]})`);

          // Presigned URL 경로 확인
          console.log("Presigned URL 요청 경로:", presignedUrls[index]);

          return axiosInstance.put(presignedUrls[index], file, {
            headers: { "Content-Type": file.type },
          }).then(() => {
            console.log(`S3 업로드 성공: ${presignedUrls[index]}`);
          });
        })
      );

      console.log("======== 상품 업로드 완료 ========");
      return productResponse.data; // 상품 등록 최종 데이터 반환
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
