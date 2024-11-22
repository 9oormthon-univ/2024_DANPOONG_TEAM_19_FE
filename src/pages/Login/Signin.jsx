import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../../styles/CommonStyle";
import * as I from "../../styles/Login/SigninStyle";
import Anyone from "../../assets/images/Login/Anyone.png";
import Back from "../../components/back";
import useLogin from "../../hooks/Login/useLogin"; // 로그인 훅 임포트

function Signin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();
  const navigate = useNavigate(); // useNavigate 선언

  const handleSubmit = async () => {
    if (!id || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    const success = await login(id, password);
    if (success) {
      alert("로그인 성공!");
      navigate("/home"); // 성공 시 홈으로 이동
    } else {
      alert("로그인 실패. 다시 시도해주세요.");
    }
  };

  return (
    <C.Page>
      <Back />
      <C.Center>
        <C.PageSpace>
          <I.Wrapper>
            <I.Image src={Anyone} alt="Anyone" />
            <I.InputContainer>
              <I.Input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <I.Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </I.InputContainer>
            <I.Button
              className="signin"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "로그인 중..." : "완료"}
            </I.Button>
            {error && <I.ErrorMessage>{error}</I.ErrorMessage>}
          </I.Wrapper>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Signin;
