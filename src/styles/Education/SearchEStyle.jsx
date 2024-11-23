import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const SearchContainer = styled.div`s
  display: flex;
  width: 364px;
  margin: 30px;
`;

export const SearchTitle = styled.div`
  font-size: 14px;

  color: #000000;
  display: flex;
  font-family: EliceDigitalBaeum_Bold;
`;

export const SearchContent = styled.ul``;

export const SearchItem = styled.li`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  background-color: #ffffff;
  border: 0.5px solid #b2b2b2;
  width: 364px;
  height: 42px;
  padding: 11px 17px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const SearchText = styled.div`
  font-size: 14px;
  color: #000000;
  width: 300px;
  font-family: EliceDigitalBaeum_Regular;
`;

export const SearchDelete = styled.img`
  cursor: pointer;
  width: 8px;
  height: 8px;
`;
