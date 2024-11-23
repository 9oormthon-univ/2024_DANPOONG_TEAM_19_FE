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
