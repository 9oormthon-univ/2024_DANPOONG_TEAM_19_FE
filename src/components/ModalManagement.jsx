import React from "react";
import * as MM from "../styles/Components/ModalManagementStyle";

const ModalManagement = ({ onClose, isModalVisibleM }) => {
  return (
    <>
      <MM.ModalBackground onClick={onClose} />
      <MM.ModalSpace>
        <MM.ModalWrap $isModalVisibleM={isModalVisibleM}>
          <MM.ModalContent>
            <MM.Close>
              <MM.CloseBtn onClick={onClose}>주문 관리</MM.CloseBtn>
              <MM.CloseBtn style={{ color: "#000000", backgroundColor: "#f6f6f6", marginTop: "10px" }}>
                문의 관리
              </MM.CloseBtn>
            </MM.Close>
          </MM.ModalContent>
        </MM.ModalWrap>
      </MM.ModalSpace>
    </>
  );
};

export default ModalManagement;
