import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: 21px;
  margin-top: 10px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  color: ${({ active }) => (active ? "#ffffff" : "#666666")};
  background-color: ${({ active }) => (active ? "#ee8814" : "#ffffff")};
  border: ${({ active }) => (active ? "none" : "0.5px solid #B2B2B2")};
  cursor: pointer;

  &:hover {
    opacity: 0.8; /* Hover 효과 */
  }
`;

export const Content = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  padding: 0 18px;
`;
