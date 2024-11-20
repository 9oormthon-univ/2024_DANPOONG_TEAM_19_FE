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


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 36px;
  margin-top:15%;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const Line = styled.hr`
  width: 364px;
  height: 2px;
  background-color: #ddd;
  border: none;
  margin: 0 auto;
  margin-bottom: -5%;
`;

export const PhotoAddButton = styled.div`
  width: 321px;
  height: 321px;
  background-color: #D0D0D0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 20px auto; 
  position: relative;

`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;

`;

export const ProfileImage = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: #ccc;
`;

export const ProfileName = styled.span`
  margin-left: 10px;
`;

export const Input = styled.input`
  width: 80%;
  height: 60px;
  padding: 10px;
  border-radius: 20px;
  padding: 0 10px;
  border: 1px solid #B2B2B2;
  height: 70px;
  font-size: 18px;
`;

export const PriceButton = styled.div`
  width: 80%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-radius: 20px;
  border: 1px solid #B2B2B2;
  margin-top:-5%;
  margin-bottom:-5%;
`;

export const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  min-height: 100px
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid #B2B2B2;
 letter-spacing: -2px;
 font-size: 18px;
 overflow-y: hidden;
`;

export const CancelButton = styled.button`
  width: 160px;
  height: 50px;
  background-color: #FFFFFF;
  color: #ee8814;
  border: 1px solid #ddd; 
  border-radius: 30px;
`;

export const CompleteButton = styled.button`
  width: 160px;
  height: 50px;
  background-color: #ee8814;
  color: #FFFFFF;
  border: none; 
  border-radius: 30px;
`;


export const PriceLabel = styled.span`
  color: #333;
  font-size: 18px;
`;

export const PriceValue = styled.span`
  color: #333;
  font-size: 18px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:20%;
  gap: 10%;
`;

export const SwiperContainer = styled.div`
  width: 100%; 
  height: 100px; 
  margin-top: 20px; 
`;

export const SlideImage = styled.img`
  width: 100%; 
  height: 100px;
  display: block; 
  
`;
export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right:50%;
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;