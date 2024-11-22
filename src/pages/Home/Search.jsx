import React from "react";
import * as C from "../../styles/CommonStyle";
import * as S from "../../styles/Home/SearchStyle";
import Delete from "../../assets/images/Common/delete.png";
import SearchHeader from "../../components/searchHeader";

function SearchE() {
  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <SearchHeader />
          <S.Search>
            <S.SearchTitle>최근 검색</S.SearchTitle>
            <S.SearchContent>
              <S.SearchItem>
                <S.SearchText>뜨개 키링 만들기</S.SearchText>
                <S.SearchDelete src={Delete} alt="Delete"></S.SearchDelete>
              </S.SearchItem>
            </S.SearchContent>
          </S.Search>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default SearchE;
