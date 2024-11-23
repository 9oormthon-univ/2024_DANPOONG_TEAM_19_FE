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
  border-radius: 30px 30px 0 0;
  width: 404px;
  height: 218px;
  z-index: 1000;
  background-color: #ffffff;
  animation: ${(props) => (props.$isModalVisibleM ? slideUp : slideDown)} 0.4s ease-in-out;
`;

export const ModalSpace = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: end;

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
`;

export const Close = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseBtn = styled.div`
  margin-top: 37px;
  width: 344px;
  height: 50px;
  border-radius: 30px;
  color: #ffffff;
  cursor: pointer;
  background-color: #ee8814;

  font-size: 16px;
  font-family: EliceDigitalBaeum_Bold;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 300ms ease-out;
`;
