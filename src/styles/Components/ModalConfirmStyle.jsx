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
  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.02);
  border-radius: 30px;
  width: 373px;
  height: 212px;
  z-index: 2;
  background-color: #ffffff;
  animation: ${(props) => (props.$isModalVisibleD ? slideUp : slideDown)} 0.4s ease-in-out;
`;

export const ModalSpace = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  z-index: 999;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 313px;
`;

export const ModalText = styled.div`
  font-size: 18px;
  font-family: EliceDigitalBaeum_Bold;
  text-align: center;
  margin-top: 40px;
  color: #000000;
  white-space: pre-line;
`;

export const Close = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CloseBtn = styled.div`
  margin-top: 30px;
  width: 103px;
  height: 50px;
  border-radius: 30px;
  color: #ffffff;
  cursor: pointer;
  background-color: #ee8814;

  font-size: 15px;
  font-family: EliceDigitalBaeum_Bold;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 300ms ease-out;
`;
