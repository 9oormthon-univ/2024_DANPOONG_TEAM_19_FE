import React from "react";
import * as MD from "../styles/Components/ModalDeleteStyle";

const ModalDelete = ({ onClose, isModalVisibleD }) => {
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
              >{`이 작업은 되돌릴 수 없습니다. 계속 하시곘어요?`}</MD.ModalText>
            </MD.ModalTitle>

            <MD.Close>
              <MD.CloseBtn onClick={onClose}>취소</MD.CloseBtn>
              <MD.CloseBtn style={{ color: "#000000", backgroundColor: "#f6f6f6", width: "190px", marginLeft: "20px" }}>
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
