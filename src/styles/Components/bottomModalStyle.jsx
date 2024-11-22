import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); 
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: flex-end; 
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: #fff;
  width: 100%;
  max-width: 400px;
  min-height: 280px;
  padding: 20px 16px;
  border-radius: 30px 30px 0 0; 
  display: flex;
  flex-direction: column;
  gap: 12px; 
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);

  animation: ${({ isOpen }) => (isOpen ? slideUp : "none")} 0.3s ease forwards;
`;

export const Button = styled.button`
  width: 344px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8; 
  }
`;
