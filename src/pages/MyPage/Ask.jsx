import React from "react";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/MyPage/AskStyle";

function Ask() {
  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <A.Ask>
            <A.AskContent>
              <A.AskInput type="text" placeholder="문의를 남겨주세요."></A.AskInput>
            </A.AskContent>
            <A.AskButton>
              <A.Button>취소</A.Button>
              <A.Button style={{ backgroundColor: "#ee8814", color: "#ffffff", marginLeft: "20px" }}>완료</A.Button>
            </A.AskButton>
          </A.Ask>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Ask;
