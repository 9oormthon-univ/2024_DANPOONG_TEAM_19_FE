import React from "react";
import * as C from "../../styles/CommonStyle";
import * as SE from "../../styles/Education/SearchEStyle";
import Delete from "../../assets/images/Common/delete.png";
import SearchHeader from "../../components/searchHeader";

function SearchE() {
  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <SearchHeader />
          <SE.Search>
            <SE.SearchTitle>최근 검색</SE.SearchTitle>
            <SE.SearchContent>
              <SE.SearchItem>
                <SE.SearchText>뜨개 키링 만들기</SE.SearchText>
                <SE.SearchDelete src={Delete} alt="Delete"></SE.SearchDelete>
              </SE.SearchItem>
            </SE.SearchContent>
          </SE.Search>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default SearchE;
