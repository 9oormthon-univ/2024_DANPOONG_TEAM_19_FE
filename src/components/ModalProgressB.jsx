import React, { useState, useEffect } from "react";
import * as MP from "../styles/Components/ModalProgressStyle";
import Delete from "../assets/images/Common/delete.png";
import axios from "axios";

const steps = ["구매요청", "구매수락", "입금확인", "제작중", "배송중", "배송완료"];

const ModalProgressB = ({ onClose, isModalVisibleP, purchaseId }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [purchaseData, setPurchaseData] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchPurchaseData = async () => {
      if (!purchaseId) return;
      try {
        const url = `${API_KEY}/mypage/${purchaseId}`;
        const response = await axios.get(url);
        const data = response.data;
        setPurchaseData(data);

        const statusIndex = steps.findIndex((step) => step === data.status);
        if (statusIndex >= 0) {
          setActiveStep(statusIndex);
        }
      } catch (error) {
        console.error("구매 정보 가져오기 실패:", error);
      }
    };

    fetchPurchaseData();
  }, [purchaseId, API_KEY]);

  const progressWidths = [10, 26, 42, 58, 76, 100];
  const progressWidth = `${progressWidths[activeStep]}%`;

  if (!purchaseData) {
    return null;
  }

  return (
    <>
      <MP.ModalBackground onClick={onClose} />
      <MP.ModalSpace>
        <MP.ModalWrap $isModalVisibleP={isModalVisibleP}>
          <MP.ModalContent>
            <MP.ModalHeader>
              <MP.Profile>
                <MP.ProfileImg src={purchaseData.productImage || "상품 이미지"} />
                <MP.ProfileName>{purchaseData.productTitle || "상품 이름"}</MP.ProfileName>
              </MP.Profile>
              <MP.Close src={Delete} alt="delete" onClick={onClose}></MP.Close>
            </MP.ModalHeader>
            <MP.ProgressContainer>
              <MP.ProgressBar>
                <MP.ProgressLine width={progressWidth} />
              </MP.ProgressBar>
              {steps.map((label, index) => (
                <MP.StepWrapper key={index}>
                  <MP.Step active={index <= activeStep} />
                  <MP.StepLabel active={index <= activeStep}>{label}</MP.StepLabel>
                </MP.StepWrapper>
              ))}
            </MP.ProgressContainer>
          </MP.ModalContent>
        </MP.ModalWrap>
      </MP.ModalSpace>
    </>
  );
};

export default ModalProgressB;
