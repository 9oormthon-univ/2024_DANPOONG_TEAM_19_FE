import React, { useState, useEffect } from "react";
import * as MP from "../styles/Components/ModalProgressStyle";
import Delete from "../assets/images/Common/delete.png";
import { axiosInstance } from "../axios/axios_instance";

// 상태 값에 따른 단계 매핑
const statusMapping = {
  ORDER_REQUEST: "구매요청",
  PAYMENT_PENDING: "구매수락",
  PAYMENT_COMPLETE: "입금확인",
  IN_PRODUCTION: "제작중",
  IN_DELIVERY: "배송중",
  DELIVERY_COMPLETE: "배송완료",
};

const steps = Object.values(statusMapping); // 단계 이름 리스트 생성

const ModalProgressB = ({ onClose, isModalVisibleP, purchaseId, title }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [purchaseData, setPurchaseData] = useState(null);

  useEffect(() => {
    const fetchPurchaseData = async () => {
      if (!purchaseId) return;

      try {
        // API 호출
        const response = await axiosInstance.get(`/api/core/mypage/${purchaseId}`);
        const data = response.data;

        console.log("API 응답 데이터:", data);
        setPurchaseData(data);

        // 상태 값 매핑 및 activeStep 계산
        const stepLabel = statusMapping[data.status]; // 상태 값을 단계 이름으로 변환
        console.log("data.status 값:", data.status);
        console.log("변환된 단계 이름:", stepLabel);

        if (stepLabel) {
          const statusIndex = steps.indexOf(stepLabel); // `steps`에서 인덱스 찾기
          console.log("단계 인덱스:", statusIndex);

          if (statusIndex >= 0) {
            setActiveStep(statusIndex); // 활성 스텝 업데이트
          }
        } else {
          console.error(`'${data.status}'에 해당하는 단계가 없습니다.`);
        }
      } catch (error) {
        console.error("구매 정보 가져오기 실패:", error.response?.data || error.message);
      }
    };

    fetchPurchaseData();
  }, [purchaseId]);

  const progressWidths = [10, 26, 42, 58, 76, 100];
  const progressWidth = `${progressWidths[activeStep]}%`;

  if (!purchaseData) {
    return null; // 데이터가 로드되지 않으면 렌더링하지 않음
  }

  return (
    <>
      <MP.ModalBackground onClick={onClose} />
      <MP.ModalSpace>
        <MP.ModalWrap $isModalVisibleP={isModalVisibleP}>
          <MP.ModalContent>
            <MP.ModalHeader>
              <MP.Profile>
                <MP.ProfileImg src={purchaseData.productImage} />
                <MP.ProfileName>{title}</MP.ProfileName>
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
