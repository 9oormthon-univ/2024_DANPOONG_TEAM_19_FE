import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-top: 50%;
`;

export const FieldContainer = styled.div`
  width: 100%;
  max-width: 353px;
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "20px"};
  margin-top: ${({ $marginTop }) => $marginTop || "0"};
  text-align: ${({ $align }) => $align || "left"};
`;

export const InputGroup = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 71px;
  padding: 10px;
  padding-right: 110px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  font-family: EliceDigitalBaeum_Regular;
`;

export const DuplicateButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 2;
  pointer-events: auto;
  padding: 10px 15px;
  font-size: 14px;
  font-family: EliceDigitalBaeum_Bold;
  background-color: #ee8814;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #ee8814;
  }
`;

export const RoleButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const RoleButton = styled.button`
  padding: 16px 61px;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  color: black;
  cursor: pointer;
  font-family: EliceDigitalBaeum_Regular;

  &.selected {
    background-color: #ee8814;
    color: white;
    border: none;
    font-family: EliceDigitalBaeum_Bold;
  }
`;

export const Button = styled.button`
  width: 344px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: #ee8814;
  color: white;
  transition: background-color 0.3s ease;
  margin-top: 40px;

  &:hover {
    background-color: #ffffff;
    color: #ee8814;
  }
`;

export const Message = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: ${({ color }) => color};
  height: 20px;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  text-align: left;
  line-height: 20px;
`;
