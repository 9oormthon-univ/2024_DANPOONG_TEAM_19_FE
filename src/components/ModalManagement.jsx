import React from "react";
import * as MM from "../styles/Components/ModalManagementStyle";
import { useNavigate } from "react-router-dom";

const ModalManagement = ({ onClose, isModalVisibleM, productId }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    console.log("주문 관리로 이동 - productId:", productId);
    navigate(`/order/${productId}`);
  };

  const handleAsk = () => {
    console.log("문의 관리로 이동 - productId:", productId);
    navigate(`/detail/${productId}`);
  };

  return (
    <>
      <MM.ModalBackground onClick={onClose} />
      <MM.ModalSpace>
        <MM.ModalWrap $isModalVisibleM={isModalVisibleM}>
          <MM.ModalContent>
            <MM.Close>
              <MM.CloseBtn onClick={handleOrder}>주문 관리</MM.CloseBtn>
              <MM.CloseBtn
                onClick={handleAsk}
                style={{
                  color: "#000000",
                  backgroundColor: "#f6f6f6",
                  marginTop: "10px",
                }}
              >
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
