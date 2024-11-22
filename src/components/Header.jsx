import React from "react";
import * as H from "../styles/Components/HeaderStyle";
import anyone from "../assets/images/Header/Anyone.png";
import search from "../assets/images/Header/search.svg";
import alarm from "../assets/images/Header/alarm.svg";

const Header = () => {
  return (
    <>
      <H.HeaderContainer>
        <H.Logo src={anyone} alt="Anyone Logo" />
        <H.RightIcons>
          <H.Icon src={search} alt="Search" />
          <H.Icon src={alarm} alt="Alarm" />
        </H.RightIcons>
      </H.HeaderContainer>
      <H.Separator />
    </>
  );
};

export default Header;
