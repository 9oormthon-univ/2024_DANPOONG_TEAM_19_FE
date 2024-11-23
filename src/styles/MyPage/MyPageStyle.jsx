import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 99px;
  height: 99px;
  margin-top: 121px;
  margin-bottom: 45px;
`;

export const ProfileText = styled.div`
  font-size: 24px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 40px;
  font-family: EliceDigitalBaeum_Bold;
`;

export const Division = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DivisionTitle = styled.div`
  font-size: 16px;
  color: #000000;
  margin-bottom: 10px;
  font-family: EliceDigitalBaeum_Bold;
`;

export const DivisionLine = styled.div`
  display: flex;
  align-items: center;
  width: 364px;
  justify-content: center;
  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #e0e0e0;
  }

  div {
    width: 125px;
    height: 4px;
    background-color: #000000;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 21px;
  justify-content: center;
  margin-bottom: 100px;
`;
