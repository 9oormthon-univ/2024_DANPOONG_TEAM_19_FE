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
  const { login, loading } = useLogin(); // error 제거
  const navigate = useNavigate(); // useNavigate 선언

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 방지

    if (!id || !password) {
      alert("아이디와 비밀번호를 입력해주세요."); // 알림 표시
      return;
    }

    try {
      const success = await login(id, password);
      if (success) {
        alert("로그인 성공!");
        navigate("/home"); // 성공 시 홈으로 이동
      } else {
        alert("로그인 실패. 다시 시도해주세요."); // 로그인 실패 시 알림 표시
      }
    } catch (err) {
      console.error("로그인 중 오류 발생:", err);
      alert("알 수 없는 오류가 발생했습니다. 다시 시도해주세요."); // 오류 발생 시 알림 표시
    }
  };

  return (
    <C.Page>
      <Back />
      <C.Center>
        <C.PageSpace>
          <form onSubmit={handleSubmit}>
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
                type="submit"
                disabled={loading}
              >
                {loading ? "로그인 중..." : "완료"}
              </I.Button>
            </I.Wrapper>
          </form>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Signin;
