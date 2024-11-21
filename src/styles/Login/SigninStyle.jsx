import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 55%; 
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
 align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 353px;
  height: 71px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 344px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 40px;

  &.signin {
    background-color: #EE8814; 
    color: white;
  }

  &.signin:hover {
    background-color: #FFFFFF; 
  }
`;

export const Image = styled.img`
  width: 175px;
  height: 37px;
  display: block;
  margin: 0 auto;
  margin-bottom: 60px;
`;

export const ValidMessage = styled.p`
  margin-top: 8px;
  color: green;
  font-size: 14px;
`;

export const InvalidMessage = styled.p`
  margin-top: 8px;
  color: red;
  font-size: 14px;
`;
