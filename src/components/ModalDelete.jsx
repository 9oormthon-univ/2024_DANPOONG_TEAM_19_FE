import React, { useEffect } from "react";
import * as MD from "../styles/Components/ModalDeleteStyle";
import { axiosInstance } from "../axios/axios_instance";

const ModalDelete = ({ onClose, isModalVisibleD, index, onDeleteSuccess }) => {
  console.log("받은 index:", index);
  const handleDelete = async () => {
    console.log("삭제하려는 상품의 index:", index); // index 확인
    const productId = index;

    if (!productId) {
      console.error("해당 인덱스에서 productId를 찾을 수 없습니다.");
      return;
    }

    try {
      const response = await axiosInstance.delete(`/api/core/product/${productId}`);
      console.log("삭제 성공:", response.data);

      if (onDeleteSuccess) {
        onDeleteSuccess(index);
      }

      onClose();
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
