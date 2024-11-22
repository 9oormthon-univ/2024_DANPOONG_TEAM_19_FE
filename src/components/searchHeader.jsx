import React from "react";
import * as S from "../styles/Components/searchHeaderStyle";
import search from "../assets/images/Header/search.svg";
import alarm from "../assets/images/Header/alarm.svg";

const SearchHeader = () => {
  return (
    <>
      <S.HeaderContainer>
        <S.SearchContainer>
          <S.SearchInput />
          <S.SearchIcon src={search} alt="Search Icon" />
        </S.SearchContainer>
        <S.RightIcons>
          <S.Icon src={alarm} alt="Alarm" />
        </S.RightIcons>
      </S.HeaderContainer>
      <S.Separator />
    </>
  );
};

export default SearchHeader;
