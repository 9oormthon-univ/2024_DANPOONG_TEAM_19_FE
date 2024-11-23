import React, { useState, useEffect } from "react";
import * as F from "../styles/Components/FooterStyle";
import { useNavigate, useLocation } from "react-router-dom";

import homeDefault from "../assets/images/Footer/homeD.svg";
import homeActive from "../assets/images/Footer/homeA.svg";
import educationDefault from "../assets/images/Footer/educationD.svg";
import educationActive from "../assets/images/Footer/eduacationA.svg";
import myPageDefault from "../assets/images/Footer/mypageD.svg";
import myPageActive from "../assets/images/Footer/mypageA.svg";

const Footer = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/home") || path === "/search") {
      setActiveMenu("home");
    } else if (path.startsWith("/education")) {
      setActiveMenu("education");
    } else if (path.startsWith("/mypage")) {
      setActiveMenu("mypage");
    } else {
      setActiveMenu("");
    }
  }, [location.pathname]);

  const handleMenuClick = (menu) => {
    if (menu !== activeMenu) {
      setActiveMenu(menu);
    }
    navigate(`/${menu}`); // 무조건 이동
  };

  return (
    <F.FooterContainer>
      <F.MenuItemWrapper>
        <F.MenuItem
          onClick={() => handleMenuClick("home")}
          src={activeMenu === "home" ? homeActive : homeDefault}
          alt="Home"
        />
        <F.MenuText active={activeMenu === "home"}>홈</F.MenuText>
      </F.MenuItemWrapper>

      <F.MenuItemWrapper>
        <F.MenuItem
          onClick={() => handleMenuClick("education")}
          src={activeMenu === "education" ? educationActive : educationDefault}
          alt="Education"
        />
        <F.MenuText active={activeMenu === "education"}>교육</F.MenuText>
      </F.MenuItemWrapper>

      <F.MenuItemWrapper>
        <F.MenuItem
          onClick={() => handleMenuClick("mypage")}
          src={activeMenu === "mypage" ? myPageActive : myPageDefault}
          alt="My Page"
        />
        <F.MenuText active={activeMenu === "mypage"}>마이페이지</F.MenuText>
      </F.MenuItemWrapper>
    </F.FooterContainer>
  );
};

export default Footer;
