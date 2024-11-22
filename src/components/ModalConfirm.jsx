import React from "react";
import * as MD from "../styles/Components/ModalConfirmStyle";

const ModalConfirm = ({ onClose, isModalVisibleD }) => {
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
              <MD.CloseBtn style={{ color: "#000000", backgroundColor: "#f6f6f6", width: "190px", marginLeft: "20px" }}>
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