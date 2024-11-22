import React from "react";
import * as C from "../../styles/CommonStyle";
import * as M from "../../styles/MyPage/MyPageStyle";
import MyPageB from "../../components/MyPageB";
import MyPageS from "../../components/MyPageS";
import ProfileImage from "../../assets/images/Mypage/profile.png";
import Back from "../../components/back";

function MyPage() {
  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <Back />
          <M.Profile>
            <M.ProfileImg src={ProfileImage} alt="Profile"></M.ProfileImg>
            <M.ProfileText>Test</M.ProfileText>
          </M.Profile>
          <M.Division>
            <M.DivisionTitle>상품관리</M.DivisionTitle>
            <M.DivisionLine>
              <div />
            </M.DivisionLine>
          </M.Division>
          <M.Content>
            <MyPageS></MyPageS>
          </M.Content>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default MyPage;
