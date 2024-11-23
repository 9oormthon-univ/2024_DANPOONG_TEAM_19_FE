import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const PageSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 36px;
  padding-top: 14%;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const Comment = styled.h1`
  font-size: 15px;
  font-family: EliceDigitalBaeum_Bold;
  font-weight: bold;
  color: #ee8814;
  text-align: left;
  margin-right: 30%;
`;

export const Line = styled.hr`
  width: 364px;
  height: 2px;
  background-color: #ddd;
  border: none;
  margin: 0 auto;
  margin-bottom: -5%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 180px);
  gap: 36px 14px;
  justify-content: center;
`;

export const Box = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background: ${({ image }) => (image ? `url(${image}) center/cover no-repeat` : "none")};
  cursor: pointer;
  transition: all 0.3s ease;

  /* 선택되지 않은 상태 */
  border: none;

  /* 선택된 상태 */
  &.selected {
    box-shadow: inset 0 0 0 5px #ee8814; /* 내부 테두리 */
  }

  /* 반투명 오버레이 */
  &.selected::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(238, 136, 20, 0.3); /* 반투명 오버레이 */
    z-index: 1;
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
  margin-top: 10%;
  margin-bottom: 5%;

  &:hover {
    background-color: #ffffff;
    color: #ee8814;
  }
`;
