import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 998;
  height: 80px;
`;

export const MenuItem = styled.img`
  cursor: pointer;
  transition: transform 0.2s;
  height: 30px; 
  width: 40px;
  object-fit: contain; 
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 5px;
`;

export const MenuText = styled.span`
  font-size: 12px;
  color: ${(props) => (props.active ? "#EE8814" : "#777777")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;