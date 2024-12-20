import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
    max-width: 370px;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  top: 40px;
  background-color: #

`;

export const Logo = styled.img`
  width: 118px;
  height: 25px;
  
`;

export const RightIcons = styled.div`
  display: flex;
  gap: 23px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Separator = styled.div`
  position: absolute;
  top: 90px;
 width: 370px;
  height: 1px;

  background-color: #e2e2e2;
    @media (min-width: 1024px) {
 width: 390px;
  }
`;
