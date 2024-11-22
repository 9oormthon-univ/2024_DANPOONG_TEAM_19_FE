import React, { useState } from "react";
import * as MP from "../styles/Components/ModalProgressStyle";
import Delete from "../assets/images/Common/delete.png";
import Test from "../assets/images/Common/test.png";

const steps = ["구매요청", "구매수락", "입금확인", "제작중", "배송중", "배송완료"];

const ModalProgressS = ({ onClose, isModalVisibleP }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const progressWidths = [10, 26, 42, 58, 76, 100];

  const progressWidth = `${progressWidths[activeStep]}%`;

  return (
    <>
      <MP.ModalBackground onClick={onClose} />
      <MP.ModalSpace>
        <MP.ModalWrap $isModalVisibleP={isModalVisibleP}>
          <MP.ModalContent>
            <MP.ModalHeader>
              <MP.Profile>
                <MP.ProfileImg src={Test} alt="test"></MP.ProfileImg>
                <MP.ProfileName>김옥순</MP.ProfileName>
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
