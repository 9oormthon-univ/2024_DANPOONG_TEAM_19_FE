import React from "react";
import * as C from "../../styles/CommonStyle";
import * as I from "../../styles/Login/SigninStyle";
import Anyone from "../../assets/images/Login/Anyone.png";
import Back from "../../components/back";

function Signin() {
  return (
    <C.Page>
      <Back />
      <C.Center>
        <C.PageSpace>
          <I.Wrapper>
            <I.Image src={Anyone} alt="Anyone" />
            <I.InputContainer>
              <I.Input type="text" placeholder="아이디" />
              <I.Input type="password" placeholder="비밀번호" />
            </I.InputContainer>
            <I.Button className="signin">완료</I.Button>
          </I.Wrapper>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Signin;
