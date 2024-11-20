import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../../styles/CommonStyle";
import * as U from "../../styles/Home/UploadStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Modal from "../../components/priceModal";
import userProfile from "../../assets/images/user.png";

function Upload() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [productPrice, setProductPrice] = useState("00,000원");
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const imageFiles = Array.from(files);
    const newImages = imageFiles.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const adjustTextAreaHeight = (event) => {
    const target = event.target;
    target.style.height = "auto";
    const newHeight = Math.max(target.scrollHeight, 100);
    target.style.height = `${newHeight}px`;
  };

  const handlePriceClick = () => setModalOpen(true);

  const handlePriceChange = (newPrice) => setProductPrice(newPrice);

  return (
    <U.Page>
      <U.Center>
        <U.PageSpace>
          <U.Wrapper>
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
                    renderBullet: (index, className) => {
                      return `<span class="${className}" style="
                        width: 10px;
                        height: 10px;
                        margin: 0 5px;
                        background-color: ${
                          className.includes(
                            "swiper-pagination-bullet-active"
                          )
                            ? "#EE8814"
                            : "#EE8814"
                        };
                        border-radius: 50%;
                        display: inline-block;"></span>`;
                    },
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
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </U.PhotoAddButton>
            <U.ProfileContainer>
                <U.ProfileImage src={userProfile} alt="사용자 프로필" />
                <U.UserName>김옥순</U.UserName>
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
              onInput={adjustTextAreaHeight}
              placeholder="상품 상세 내용을 작성해주세요."
            />
            <U.ButtonRow>
            <U.CancelButton onClick={() => navigate("/home")}>
                취소
              </U.CancelButton>
              <U.CompleteButton onClick={() => console.log("완료")}>
                완료
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
