import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  width: 366px;
`;

export const ListItem = styled.li`
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  display: felx;
  margin-bottom: 14px;
  width: 48%;
  height: 317px;
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
  width: 135px;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
`;

export const ListMore = styled.img`
  cursor: pointer;
  width: 3px;
  hwight: 13px;
`;

export const LsitPrice = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  padding: 0px 16px;
`;

export const ListButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 0.5px solid #b2b2b2;
  margin: 30px 12px 20px 12px;
  width: 146px;
  height: 40px;
`;

export const Button = styled.div`
  display: felx;
  color: #b2b2b2;
  font-size: 14px;
  padding: 0 20px 0 26px;
`;

export const ListLine = styled.div`
  height: 18px;
  width: 1px;
  background-color: #b2b2b2;
`;
