import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  flex-direction: column;
  box-sizing: border-box;
  display: felx;
  margin-bottom: 14px;
  align-items: center;
  justify-content: center;
  width: 363px;
  height: 237px;
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
  width: 90%;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
`;

export const ListMore = styled.img`
  cursor: pointer;
  width: 3px;
  height: 13px;
`;
