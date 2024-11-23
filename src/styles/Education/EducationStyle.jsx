import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  padding: 100px 18px 0 18px;
`;

export const Btn = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  color: ${(props) => (props["data-active"] ? "#ffffff" : "#666666")};
  background-color: ${(props) => (props["data-active"] ? "#ee8814" : "#ffffff")};
  border: ${(props) => (props["data-active"] ? "none" : "1px solid #B2B2B2")};
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
`;

export const Content = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  padding: 0 10%;
  margin-bottom: 100px;
`;
