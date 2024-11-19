import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end; 
`;

export const ModalContainer = styled.div`
  width: 100%;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
border: 1px solid #B2B2B2;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0%);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 33.3%;
  height: 60px;
  font-size: 24px;
  background: none;
  border: none;
  outline: none;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;
