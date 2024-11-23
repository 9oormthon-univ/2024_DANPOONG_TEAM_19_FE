import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  width: 404px;
`;

export const ListItem = styled.li`
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  display: felx;
  margin-bottom: 14px;
  width: calc(50% - 7px);
  height: 247px;
  border-radius: 20px;
  border: 0.5px solid #b2b2b2;
  background-color: #ffffff;
  overflow: hidden;
`;

export const ListImg = styled.img`
  width: 100%;
  height: 166px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px 20px 0 0;
`;

export const ListText = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
`;

export const ListTitle = styled.div`
  width: 80%;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
  font-family: EliceDigitalBaeum_Bold;
`;
