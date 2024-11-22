import React from "react";
import * as MD from "../styles/Components/ModalDeleteStyle";
import { axiosInstance } from "../axios/axios_instance";

const ModalDelete = ({ onClose, isModalVisibleD, productId, onDeleteSuccess }) => {
  const handleDelete = async () => {
    if (!productId) {
      console.error("삭제 요청 시 productId가 유효하지 않습니다.");
      return;
    }

    try {
      // DELETE 요청: productId를 경로 파라미터로 전달
      const response = await axiosInstance.delete(`/api/core/product/${productId}`);
      console.log("삭제 성공:", response.data);

      // 삭제 성공 시 콜백 호출
      if (onDeleteSuccess) {
        onDeleteSuccess(productId);
      }

      onClose(); // 모달 닫기
    } catch (error) {
      console.error("삭제 중 오류가 발생했습니다:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <MD.ModalBackground onClick={onClose} />
      <MD.ModalSpace>
        <MD.ModalWrap $isModalVisibleD={isModalVisibleD}>
          <MD.ModalContent>
            <MD.ModalTitle>
              <MD.ModalText>{`정말 삭제하시겠어요?`}</MD.ModalText>
              <MD.ModalText
                style={{ fontSize: "12px", marginTop: "14px" }}
              >{`이 작업은 되돌릴 수 없습니다. 계속 하시겠어요?`}</MD.ModalText>
            </MD.ModalTitle>

            <MD.Close>
              <MD.CloseBtn onClick={onClose}>취소</MD.CloseBtn>
              <MD.CloseBtn
                onClick={handleDelete}
                style={{
                  color: "#000000",
                  backgroundColor: "#f6f6f6",
                  width: "190px",
                  marginLeft: "20px",
                }}
              >
                삭제
              </MD.CloseBtn>
            </MD.Close>
          </MD.ModalContent>
        </MD.ModalWrap>
      </MD.ModalSpace>
    </>
  );
};

export default ModalDelete;
