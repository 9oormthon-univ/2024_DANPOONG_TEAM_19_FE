import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  margin: 120px 0 10px 0;
  justify-content: center;
`;

export const ProductImg = styled.img`
  width: 167px;
  height: 167px;
`;

export const ProductTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin-left: 20px;
  width: 167px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 364px;
  height: 1px;
  background-color: #e2e2e2;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ListTitle = styled.div`
  height: 20px;
  width: 364px;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  display: flex;
  margin-bottom: 20px;
  margin-left: 10px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  display: felx;
  margin-bottom: 10px;
  width: 353px;
  height: 71px;
  border-radius: 20px;
  border: 0.5px solid #b2b2b2;
  background-color: #ffffff;
  overflow: hidden;
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 17px 27px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ListImg = styled.img`
  width: 37.68px;
  height: 37.68px;
  border-radius: 50%;
`;

export const ListText = styled.div`
  font-size: 12.06px;
  color: #000000;
  margin-left: 11.3px;
`;

export const ListMore = styled.img`
  width: 15px;
  height: 15px;
`;
