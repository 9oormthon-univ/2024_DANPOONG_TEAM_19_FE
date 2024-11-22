import styled from "styled-components";

export const Alarm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const AlarmItem = styled.div`
  width: 364px;
  border-radius: 20px;
  background-color: ${({ isRead }) => (isRead ? "#FFFFFF" : "#FFEBD4")};
  border: ${({ isRead }) => (isRead ? "0.5px solid #b2b2b2" : "none")};
  padding: 20px 17px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

export const AlarmText = styled.div`
  font-size: 14px;
  color: #000000;
  word-wrap: break-word;
  line-height: 1.5;
`;
