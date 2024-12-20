import styled from "styled-components";

export const ImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 430px;
  height: 932px;
  object-fit: cover;
`;

export const Jump = styled.img`
  position: fixed;
  align-self: start;
  margin-top: 60px;
  margin-left: 280px;
  width: 83px;
  height: 33px;
`;
