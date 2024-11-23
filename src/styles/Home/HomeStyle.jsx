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
  width: 170px;
  height: 240px;
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
  font-size: 1px;
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
  flex-grow: 1; 
`;

export const Uploader = styled.span`
  font-size: 10px;
  color: #666;
  margin-right: 25px; 
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis; 
`;

export const NameAndUploader = styled.span`
  display: flex;
  align-items: center; 
  justify-content: flex-start;
  flex-grow: 1;
`;


export const BottomRow = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10%;
`;


export const Price = styled.span`
  font-size: 18px; 
  font-weight: bold; 
  color: #1a1a1a; 
`;

export const UploadButton = styled.img`
  position: fixed; 
  right: 5%; 
  bottom: 15%; 
  width: 50px; 
  height: 50px; 
  cursor: pointer; 
   @media (min-width: 1024px) {
      right: 40%; 
  }
`;