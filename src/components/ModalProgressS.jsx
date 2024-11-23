import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axios/axios_instance";
import * as MP from "../styles/Components/ModalProgressStyle";
import Delete from "../assets/images/Common/delete.png";
import ProfileImg from "../assets/images/Mypage/profile.png";

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
const statuses = Object.keys(statusMapping); // 상태 값 리스트 생성

const ModalProgressS = ({ onClose, isModalVisibleP, purchaseId, consumerName }) => {
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

  const handleStepClick = async (index) => {
    if (index !== activeStep + 1) {
      console.warn("현재 단계의 다음 단계만 이동 가능합니다.");
      return;
    }

    const nextStatus = statuses[index]; // 다음 단계의 상태 값
    if (!nextStatus) {
      console.error("다음 단계의 상태 값이 유효하지 않습니다.");
      return;
    }

    try {
      // PATCH 요청: purchaseId와 status 전달
      const response = await axiosInstance.patch(`/api/core/mypage/${purchaseId}/${nextStatus}`);
      console.log("단계 업데이트 성공:", response.data);

      // UI 업데이트
      setActiveStep(index); // 활성 스텝 업데이트
      setPurchaseData((prevData) => ({
        ...prevData,
        status: nextStatus, // 상태 업데이트
      }));
    } catch (error) {
      console.error("단계 업데이트 중 오류가 발생했습니다:", error.response?.data || error.message);
    }
  };

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
                <MP.ProfileImg src={ProfileImg} alt="profile"></MP.ProfileImg>
                <MP.ProfileName>{consumerName}</MP.ProfileName>
              </MP.Profile>
              <MP.Close src={Delete} alt="delete" onClick={onClose}></MP.Close>
            </MP.ModalHeader>
            <MP.ProgressContainer>
              <MP.ProgressBar>
                <MP.ProgressLine width={progressWidth} />
              </MP.ProgressBar>
              {steps.map((label, index) => (
                <MP.StepWrapper key={index} onClick={() => handleStepClick(index)}>
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

export default ModalProgressS;
