import React, { useState } from "react";
import * as C from "../../styles/CommonStyle";
import * as U from "../../styles/Login/SignupStyle";
import Back from "../../components/back";

function Signup() {
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [isIdValid, setIsIdValid] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);

  const handleRoleClick = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleIdChange = (e) => {
    const input = e.target.value;
    setUserId(input);

    if (input.length > 0 && input.length <= 4) {
      setIsIdValid(false);
    } else if (input.length > 4) {
      setIsIdValid(true);
    } else {
      setIsIdValid(null);
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

  return (
    <C.Page>
      <Back />
      <C.Center>
        <C.PageSpace>
          <U.Wrapper>
            <U.FieldContainer $marginBottom="0%">
              <U.InputGroup>
                <U.Input type="text" placeholder="아이디" value={userId} onChange={handleIdChange} />
                <U.DuplicateButton>중복확인</U.DuplicateButton>
              </U.InputGroup>
              <U.Message color={isIdValid === false ? "#ee8814" : "#808080"} $visible={isIdValid !== null}>
                {isIdValid === false
                  ? "사용 불가능한 아이디입니다."
                  : isIdValid === true
                  ? "사용 가능한 아이디입니다."
                  : ""}
              </U.Message>
            </U.FieldContainer>

            <U.FieldContainer $marginTop="0%">
              <U.InputGroup>
                <U.Input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
              </U.InputGroup>
            </U.FieldContainer>

            <U.FieldContainer $marginBottom="2%">
              <U.InputGroup>
                <U.Input
                  type="password"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </U.InputGroup>

              <U.Message color={isPasswordMatch === false ? "#ee8814" : "#808080"} $visible={isPasswordMatch !== null}>
                {isPasswordMatch === false
                  ? "비밀번호가 일치하지 않습니다."
                  : isPasswordMatch === true
                  ? "비밀번호가 일치합니다."
                  : ""}
              </U.Message>
            </U.FieldContainer>

            <U.FieldContainer $marginBottom="0px" $marginTop="10px">
              <U.InputGroup>
                <U.Input type="text" placeholder="이름" />
              </U.InputGroup>
            </U.FieldContainer>

            <U.FieldContainer $marginBottom="20px">
              <U.InputGroup>
                <U.Input type="number" placeholder="나이" />
              </U.InputGroup>
            </U.FieldContainer>

            <U.FieldContainer $align="center" $marginBottom="0%">
              <U.RoleButtonGroup>
                <U.RoleButton className={role === "seller" ? "selected" : ""} onClick={() => handleRoleClick("seller")}>
                  판매자
                </U.RoleButton>
                <U.RoleButton className={role === "buyer" ? "selected" : ""} onClick={() => handleRoleClick("buyer")}>
                  구매자
                </U.RoleButton>
              </U.RoleButtonGroup>
            </U.FieldContainer>

            <U.FieldContainer>
              <U.Button className="next">다음</U.Button>
            </U.FieldContainer>
          </U.Wrapper>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Signup;
