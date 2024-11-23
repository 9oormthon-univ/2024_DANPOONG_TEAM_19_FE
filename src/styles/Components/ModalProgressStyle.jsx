import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

export const ModalWrap = styled.div`
  position: fixed;
  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.02);
  border-radius: 30px;
  width: 373px;
  height: 175px;
  z-index: 1000;
  background-color: #ffffff;
  animation: ${(props) => (props.$isModalVisibleP ? slideUp : slideDown)} 0.4s ease-in-out;
`;

export const ModalSpace = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 22px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  \
`;

export const ProfileImg = styled.img`
  width: 37.68px;
  height: 37.68px;
  border-radius: 50%;
  margin-right: 11.68px;
`;

export const ProfileName = styled.div`
  font-size: 12px;
  color: #000000;
`;

export const Close = styled.img`
  width: 10px;
  height: 10px;
`;

export const ProgressContainer = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  width: 100%;
`;

export const ProgressBar = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  transform: translateY(-50%);
`;

export const ProgressLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  background-color: #ee8814;
  width: ${({ width }) => width};
  transition: width 0.4s ease;
`;

export const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  width: calc(100% / 6);
  text-align: center;
  cursor: pointer;
`;

export const Step = styled.div`
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border: 2px solid ${({ active }) => (active ? "#ee8814" : "#e2e2e2")};
  border-radius: 50%;
  box-sizing: border-box;
  margin: 0 auto;
  transition: background-color 0.4s, border-color 0.4s;
`;

export const StepLabel = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: ${({ active }) => (active ? "#ee8814" : "#000000")};
  font-weight: ${({ active }) => (active ? "bold" : "none")};
  transition: color 0.4s;
`;
