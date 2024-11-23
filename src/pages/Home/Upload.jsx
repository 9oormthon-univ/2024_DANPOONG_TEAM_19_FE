import React, { useRef, useState, useEffect } from "react";
import { axiosInstance } from "../../axios/axios_instance";
import { useNavigate } from "react-router-dom";
import * as U from "../../styles/Home/UploadStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Modal from "../../components/priceModal";
import userProfile from "../../assets/images/user.png";
import useProductUploader from "../../hooks/Home/uploadProduct";

function Upload() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [productPrice, setProductPrice] = useState("00,000원");
  const [modalOpen, setModalOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const { uploadProduct, loading: productUploadLoading } = useProductUploader();

  const fetchUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/api/core/mypage/info"); 
      setUserName(response.data); 
      console.log("유저 정보:", response.data);
    } catch (error) {
      console.error("유저 정보를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchUserInfo(); 
  }, []);
  
  const handleAddPhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const newFiles = Array.from(selectedFiles);
    const newImages = newFiles.map((file) => URL.createObjectURL(file));

    setFiles([...files, ...newFiles]);
    setImages([...images, ...newImages]);

    console.log("선택된 파일들:", newFiles);
    console.log("미리보기 URL들:", newImages);
  };

  const handlePriceClick = () => setModalOpen(true);
  const handlePriceChange = (newPrice) => setProductPrice(`${newPrice}원`);

  const handleSubmit = async () => {
    if (!productName || !productDetails || files.length === 0) {
      alert("모든 필드를 입력하고 이미지를 업로드해주세요.");
      return;
    }

    console.log("==== 완료 버튼 클릭 ====");
    console.log("전송 데이터 준비");
    console.log("파일들:", files);
    console.log("상품명:", productName);
    console.log("상품 금액:", productPrice);
    console.log("상품 내용:", productDetails);

    try {
      const response = await uploadProduct({
        files,
        title: productName,
        content: productDetails,
        price: productPrice,
      });

      console.log("상품 등록 성공:", response);
      alert("상품이 성공적으로 등록되었습니다.");
      navigate("/home");
    } catch (err) {
      console.error("상품 등록 실패:", err);
      alert("상품 등록에 실패했습니다.");
    }
  };

  return (
    <U.Page>
      <U.Center>
        <U.PageSpace modalOpen={modalOpen}>
          <U.Wrapper modalOpen={modalOpen}>
            <U.Title>상품 등록</U.Title>
            <input
              type="file"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <U.PhotoAddButton onClick={handleAddPhotoClick}>
              {images.length === 0 ? (
                <span style={{ fontSize: "48px", color: "white" }}>+</span>
              ) : (
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Preview ${index}`}
                        style={{
                          width: "321px",
                          height: "321px",
                          objectFit: "cover",
                          objectPosition: "center center", // 이미지의 중심 표시
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </U.PhotoAddButton>
            <U.ProfileContainer>
              <U.ProfileImage src={userProfile} alt="사용자 프로필" />
              <U.UserName>{userName}</U.UserName>
            </U.ProfileContainer>
            <U.Input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="상품명"
            />
            <U.PriceButton onClick={handlePriceClick}>
              <U.PriceLabel>상품 금액</U.PriceLabel>
              <U.PriceValue>{productPrice}</U.PriceValue>
            </U.PriceButton>
            <U.TextArea
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
              placeholder="상품 상세 내용을 작성해주세요."
            />
            <U.ButtonRow>
              <U.CancelButton onClick={() => navigate("/home")}>취소</U.CancelButton>
              <U.CompleteButton onClick={handleSubmit} disabled={productUploadLoading}>
                {productUploadLoading ? "업로드 중..." : "완료"}
              </U.CompleteButton>
            </U.ButtonRow>
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              onChange={handlePriceChange}
            />
          </U.Wrapper>
        </U.PageSpace>
      </U.Center>
    </U.Page>
  );
}

export default Upload;
