import React from "react";
import * as MD from "../styles/Components/ModalConfirmStyle";
import { axiosInstance } from "../axios/axios_instance";

const ModalConfirm = ({ onClose, isModalVisibleD, productId }) => {
  const handlePurchase = async () => {
    try {
      console.log("전달된 productId:", productId); // productId 확인 로그
      const response = await axiosInstance.post(`/api/core/product/${productId}/orders`);
      console.log("구매 성공:", response.data);
      alert("구매가 완료되었습니다.");
      onClose(); // 모달 닫기
    } catch (error) {
      console.error("구매 실패:", error);
      alert("구매 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <MD.ModalBackground onClick={onClose} />
      <MD.ModalSpace>
        <MD.ModalWrap $isModalVisibleD={isModalVisibleD}>
          <MD.ModalContent>
            <MD.ModalTitle>
              <MD.ModalText>{`구매하시겠어요??`}</MD.ModalText>
              <MD.ModalText
                style={{ fontSize: "12px", marginTop: "14px" }}
              >{`제품 구매를 진행하시겠어요??`}</MD.ModalText>
            </MD.ModalTitle>

            <MD.Close>
              <MD.CloseBtn onClick={onClose}>취소</MD.CloseBtn>
              <MD.CloseBtn
                style={{
                  color: "#000000",
                  backgroundColor: "#f6f6f6",
                  width: "190px",
                  marginLeft: "20px",
                }}
                onClick={handlePurchase}
              >
                구매
              </MD.CloseBtn>
            </MD.Close>
          </MD.ModalContent>
        </MD.ModalWrap>
      </MD.ModalSpace>
    </>
  );
};

export default ModalConfirm;
