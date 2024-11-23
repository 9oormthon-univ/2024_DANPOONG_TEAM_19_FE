import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../../styles/CommonStyle";
import * as S from "../../styles/Home/SearchStyle";
import Delete from "../../assets/images/Common/delete.png";
import SearchHeader from "../../components/searchHeader";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();

  const LOCAL_STORAGE_KEY = "searchHistory"; // Search 전용 로컬스토리지 키

  // 로컬스토리지에서 초기 검색 기록 불러오기
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setSearchHistory(storedHistory);
  }, []);

  // 검색 버튼 클릭 시 처리
  const handleSearch = () => {
    if (inputValue.trim()) {
      // 1. 최근 검색 기록 업데이트
      const updatedHistory = [inputValue, ...searchHistory];
      const uniqueHistory = Array.from(new Set(updatedHistory)); // 중복 제거
      setSearchHistory(uniqueHistory);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(uniqueHistory));

      // 2. Home으로 이동하며 keyword 전달
      navigate(`/home?keyword=${encodeURIComponent(inputValue)}`);

      // 3. 입력 필드 초기화
      setInputValue("");
    }
  };

  // 검색 기록 삭제
  const handleDelete = (item) => {
    const updatedHistory = searchHistory.filter((history) => history !== item);
    setSearchHistory(updatedHistory);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedHistory));
  };

  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <SearchHeader inputValue={inputValue} setInputValue={setInputValue} onSearch={handleSearch} />
          <S.Search>
            <S.SearchTitle>최근 검색</S.SearchTitle>
            <S.SearchContent>
              {searchHistory.map((item, index) => (
                <S.SearchItem key={index}>
                  <S.SearchText>{item}</S.SearchText>
                  <S.SearchDelete src={Delete} alt="Delete" onClick={() => handleDelete(item)} />
                </S.SearchItem>
              ))}
            </S.SearchContent>
          </S.Search>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Search;
