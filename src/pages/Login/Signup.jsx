import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../../styles/CommonStyle";
import * as U from "../../styles/Login/SignupStyle";
import Back from "../../components/back";
import useSignup from "../../hooks/Login/useSignup";
import useCheckDuplicate from "../../hooks/Login/useCheckDuplicate";

function Signup() {
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [isIdValid, setIsIdValid] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const { signup, loading, error, success } = useSignup();
  const { checkDuplicate, isChecking, error: checkError } = useCheckDuplicate();

  const handleDuplicateCheck = async () => {
    if (userId.length < 4) {
      alert("아이디는 4글자 이상으로 입력해주세요.");
      return;
    }

    const result = await checkDuplicate(userId);

    if (result === false) {
      setIsIdValid(true);
      console.log("사용 가능한 아이디입니다.");
    } else {
      setIsIdValid(false);
      console.log("사용 불가능한 아이디입니다.");
    }
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);

    if (confirmPassword.length > 0) {
      setIsPasswordMatch(input === confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const input = e.target.value;
    setConfirmPassword(input);
    setIsPasswordMatch(input === password);
  };

  const handleSubmit = async () => {
    if (!userId || !password || !name || !age || !role) {
      alert("모든 필드를 입력하세요.");
      return;
    }

    if (isIdValid === false || isPasswordMatch === false) {
      alert("유효하지 않은 정보입니다.");
      return;
    }

    const data = {
      id: userId,
      password,
      name,
      age: parseInt(age, 10),
      role: role,
    };

    console.log("회원가입 요청 데이터:", data);

    try {
      const response = await signup(data);
      if (response) {
        console.log("회원가입 성공!");
        navigate("/select");
      }
    } catch (err) {
      console.error("회원가입 실패:", err);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <C.Page>
      <Back />
      <C.Center>
        <C.PageSpace>
          <U.Wrapper>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <U.FieldContainer $marginBottom="16px">
                <U.InputGroup>
                  <U.Input
                    type="text"
                    placeholder="아이디"
                    value={userId}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
                      setUserId(e.target.value);
                    }}
                  />
                  <U.DuplicateButton onClick={handleDuplicateCheck} disabled={isChecking}>
                    {isChecking ? "확인 중..." : "중복확인"}
                  </U.DuplicateButton>
                </U.InputGroup>
                <U.Message
                  color={isIdValid === false ? "#ee8814" : "#808080"}
                  $visible={isIdValid !== null || userId.length < 4}
                >
                  {userId.length < 4
                    ? "아이디는 4글자 이상으로 적어주세요."
                    : isIdValid === false
                    ? "사용 불가능한 아이디입니다."
                    : isIdValid === true
                    ? "사용 가능한 아이디입니다."
                    : ""}
                </U.Message>
                {checkError && <U.Message color="#ff4d4d">{checkError}</U.Message>}
              </U.FieldContainer>

              <U.FieldContainer $marginBottom="16px">
                <U.InputGroup>
                  <U.Input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ fontFamily: "Number" }}
                  />
                </U.InputGroup>
              </U.FieldContainer>

              <U.FieldContainer $marginBottom="16px">
                <U.InputGroup>
                  <U.Input
                    type="password"
                    placeholder="비밀번호 확인"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    style={{ fontFamily: "Number" }}
                  />
                </U.InputGroup>
                <U.Message color={isPasswordMatch === false ? "#ee8814" : "#808080"} $visible={true}>
                  {isPasswordMatch === false
                    ? "비밀번호가 일치하지 않습니다."
                    : isPasswordMatch === true
                    ? "비밀번호가 일치합니다."
                    : ""}
                </U.Message>
              </U.FieldContainer>

              <U.FieldContainer $marginBottom="16px">
                <U.InputGroup>
                  <U.Input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
                </U.InputGroup>
              </U.FieldContainer>

              <U.FieldContainer $marginBottom="16px">
                <U.InputGroup>
                  <U.Input
                    type="number"
                    placeholder="나이"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={{ fontFamily: "Number" }}
                  />
                </U.InputGroup>
              </U.FieldContainer>

              <U.FieldContainer $marginBottom="24px">
                <U.RoleButtonGroup>
                  <U.RoleButton
                    className={role === "seller" ? "selected" : ""}
                    onClick={() => setRole("seller")}
                    type="button"
                  >
                    판매자
                  </U.RoleButton>
                  <U.RoleButton
                    className={role === "consumer" ? "selected" : ""}
                    onClick={() => setRole("consumer")}
                    type="button"
                  >
                    구매자
                  </U.RoleButton>
                </U.RoleButtonGroup>
              </U.FieldContainer>

              <U.FieldContainer>
                <U.Button className="next" type="submit" disabled={loading}>
                  {loading ? "처리 중..." : "다음"}
                </U.Button>
                {error && <U.Message color="#ff4d4d">{error}</U.Message>}
                {success && <U.Message color="#4caf50">회원가입 성공!</U.Message>}
              </U.FieldContainer>
            </form>
          </U.Wrapper>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Signup;
