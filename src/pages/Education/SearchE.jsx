import React, { useState, useEffect } from "react";
import * as C from "../../styles/CommonStyle";
import * as SE from "../../styles/Education/SearchEStyle";
import Delete from "../../assets/images/Common/delete.png";
import SearchHeader from "../../components/searchHeader";
import Footer from "../../components/Footer";

function SearchE() {
  const [inputValue, setInputValue] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const LOCAL_STORAGE_KEY = "searchEHistory"; // SearchE 전용 로컬스토리지 키

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

      // 2. 페이지 이동
      window.location.href = `/education?query=${encodeURIComponent(inputValue)}`;

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
          <SE.Search>
            <SE.SearchTitle>최근 검색</SE.SearchTitle>
            <SE.SearchContent>
              {searchHistory.map((item, index) => (
                <SE.SearchItem key={index}>
                  <SE.SearchText>{item}</SE.SearchText>
                  <SE.SearchDelete src={Delete} alt="Delete" onClick={() => handleDelete(item)} />
                </SE.SearchItem>
              ))}
            </SE.SearchContent>
          </SE.Search>
          <Footer />
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default SearchE;
