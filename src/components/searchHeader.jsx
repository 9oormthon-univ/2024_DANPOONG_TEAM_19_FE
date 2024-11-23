import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/Components/searchHeaderStyle";
import search from "../assets/images/Header/search.svg";
import alarm from "../assets/images/Header/alarm.svg";

const SearchHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputValue.trim()) {
      navigate(`/education?query=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <>
      <S.HeaderContainer>
        <S.SearchContainer>
          <S.SearchInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="검색어를 입력하세요..."
          />
          <S.SearchIcon src={search} alt="Search Icon" onClick={handleSearch} />
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
