import React from "react";
import * as MB from "../styles/Components/MyPageBStyle";
import Test from "../assets/images/Common/test.png";
import Plus from "../assets/images/MyPage/plus.png";

function MypageB() {
  return (
    <MB.List>
      <MB.ListItem>
        <MB.ListContent>
          <MB.ListContainer>
            <MB.ListImg src={Test}></MB.ListImg>
            <MB.ListText>Test</MB.ListText>
          </MB.ListContainer>
          <MB.ListMore src={Plus}></MB.ListMore>
        </MB.ListContent>
      </MB.ListItem>
    </MB.List>
  );
}

export default MypageB;
