import styled from "styled-components";

export const Ask = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AskContent = styled.div`
  display: flex;
  align-items: start;
  width: 353px;
  height: 328px;
  border-radius: 20px;
  border: 0.5px solid #b2b2b2;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const AskInput = styled.textarea`
  margin: 20px 25px;
  width: 100%;
  height: 88%;
  border: none;
  background-color: #ffffff;
  color: #000000;
  line-height: 1.5;
  text-align: start;
  font-size: 14px;
  resize: none;
  box-sizing: border-box;
  overflow-y: auto;

  ::placeholder {
    font-size: 14px;
  }

  &:focus {
    outline: none;
  }
`;

export const AskButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 162px;
  height: 50px;
  background-color: #ffffff;
  color: #ee8814;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`;
