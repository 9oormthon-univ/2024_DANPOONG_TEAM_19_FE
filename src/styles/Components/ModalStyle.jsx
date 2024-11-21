import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 5%;
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
    align-items: flex-center; 
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

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; 
`;


export const CButton = styled.button`
  width: 344px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: #ee8814;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #ee8814;
  }
`;