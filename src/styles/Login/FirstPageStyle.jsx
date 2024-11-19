import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../../styles/CommonStyle";
import * as F from "../../styles/Login/FirstPageStyle";
import Anyone from "../../assets/images/Login/Anyone.png";

function FirstPage() {
  const navigate = useNavigate();

  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <F.Wrapper>
            <F.Image src={Anyone} alt="Anyone" />
            <F.Comment>로그인을 해주세요</F.Comment>
            <F.ButtonContainer>
              <F.Button className="signup" onClick={() => navigate("/signup")}>
                회원가입
              </F.Button>
              <F.Button className="login" onClick={() => navigate("/signin")}>
                로그인
              </F.Button>
            </F.ButtonContainer>
          </F.Wrapper>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default FirstPage;
