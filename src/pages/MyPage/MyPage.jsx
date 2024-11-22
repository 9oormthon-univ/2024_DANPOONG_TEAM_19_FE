import React, { useState, useEffect } from "react";
import * as C from "../../styles/CommonStyle";
import * as M from "../../styles/MyPage/MyPageStyle";
import MyPageB from "../../components/MyPageB";
import MyPageS from "../../components/MyPageS";
import ProfileImage from "../../assets/images/Mypage/profile.png";
import Back from "../../components/back";
import Footer from "../../components/Footer";
import MypageB from "../../components/MyPageB";

const consumerToken = import.meta.env.VITE_CON_TOKEN;
const sellerToken = import.meta.env.VITE_SEL_TOKEN;

function MyPage() {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const currentToken = localStorage.getItem("authToken");
    if (currentToken === consumerToken) {
      setUserType("consumer");
    } else if (currentToken === sellerToken) {
      setUserType("seller");
    }
  }, []);

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
            <M.DivisionTitle>
              {" "}
              {userType === "consumer" ? "구매관리" : userType === "seller" ? "상품관리" : ""}
            </M.DivisionTitle>
            <M.DivisionLine>
              <div />
            </M.DivisionLine>
          </M.Division>
          <M.Content>
            <MypageB></MypageB>
          </M.Content>
          <Footer />
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default MyPage;
