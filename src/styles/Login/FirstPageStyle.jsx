import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 55%; 
  width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Button = styled.button`
  width: 344px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.signup {
    background-color: #EE8814; 
    color: white;
  }

  &.signup:hover {
    background-color: #FFFFFF; 
  }

  &.login {
    background-color: #EE8814;
    color: white;
    margin-top: 20px;
  }

  &.login:hover {
    background-color: #FFFFFF; 
  }
`;

export const Image = styled.img`
  width: 175px;
  height: 37px;
  display: block;
  margin: 0 auto;
`;

export const Comment = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 65px;
`;  

