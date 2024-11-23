import styled from "styled-components";

export const BackButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 40px;
  left: 25px;
  background: none;
  border: none;
  padding: 0;
  margin: 0;

  @media (min-width: 1024px) {
    top: 8%;
    left: 38%;
  }
`;

export const BackImage = styled.img`
  width: 24px;
  height: 25px;
`;

export const Separator = styled.div`
  position: absolute;
  top: 90px;
  width: 90%;
  height: 1px;

  background-color: #e2e2e2;
  @media (min-width: 1024px) {
    width: 390px;
  }
`;
