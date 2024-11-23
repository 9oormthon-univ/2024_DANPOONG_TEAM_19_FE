import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as H from "../styles/Components/HeaderStyle";
import anyone from "../assets/images/Header/Anyone.png";
import search from "../assets/images/Header/search.svg";
import alarm from "../assets/images/Header/alarm.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (location.pathname.endsWith("/home")) {
      navigate("/search");
    } else if (location.pathname.endsWith("/education")) {
      navigate("/education/search");
    }
  };

  const handleHome = () => {
    navigate("/home");
  };
  return (
    <>
      <H.HeaderContainer>
        <H.Logo src={anyone} onClick={handleHome} alt="Anyone Logo" />
        <H.RightIcons>
          <H.Icon src={search} onClick={handleSearch} alt="Search" />
          <H.Icon src={alarm} alt="Alarm" />
        </H.RightIcons>
      </H.HeaderContainer>
      <H.Separator />
    </>
  );
};

export default Header;
