import styled from 'styled-components';

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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding-top: 30%;
  margin: 0 auto; 
  width: fit-content; 
  margin-bottom: 25%;
`;

export const Box = styled.div`
  width: 180px;
  height: 247px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 180px;
  height: 166px;
  object-fit: cover;
`;

export const Description = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  width: 100%; 
  font-size: 14px;
`;

export const NameAndUploader = styled.span`
  display: flex;
  align-items: center; 
  justify-content: flex-start;
  flex-grow: 1;
`;

export const MoreButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0; 
`;


export const BottomRow = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10%;
`;

export const Name = styled.span`
  font-size: 16px; 
  font-weight: bold; 
  color: #333; 
`;

export const Uploader = styled.span`
  font-size: 14px; 
  color: #666; 
  margin-left: 30%; 
`;

export const Price = styled.span`
  font-size: 18px; 
  font-weight: bold; 
  color: #1a1a1a; 
`;

export const UploadButton = styled.img`
  position: fixed; // 고정 위치
  right: 5%; // 오른쪽에서 20px
  bottom: 12%; // 하단에서 80px
  width: 50px; // 너비 50px
  height: 50px; // 높이 50px
  cursor: pointer; // 클릭 가능한 커서 스타일
`;