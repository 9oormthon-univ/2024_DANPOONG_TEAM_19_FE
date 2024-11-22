import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../axios/axios_instance";
import * as C from "../../styles/CommonStyle";
import * as M from "../../styles/MyPage/MyPageStyle";
import MyPageS from "../../components/MyPageS";
import ProfileImage from "../../assets/images/Mypage/profile.png";
import Back from "../../components/back";
import Footer from "../../components/Footer";
import MyPageB from "../../components/MyPageB";

function MyPage() {
  const [userType, setUserType] = useState("");

  const fetchUserType = async () => {
    try {
      const response = await axiosInstance.get("/api/core/mypage/who");
      setUserType(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("사용자 타입을 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    fetchUserType();
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
            <M.DivisionTitle>{userType === "consumer" ? "구매관리" : "상품관리"}</M.DivisionTitle>
            <M.DivisionLine>
              <div />
            </M.DivisionLine>
          </M.Division>
          <M.Content>{userType === "consumer" ? <MyPageB /> : <MyPageS />}</M.Content>
          <Footer />
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default MyPage;
