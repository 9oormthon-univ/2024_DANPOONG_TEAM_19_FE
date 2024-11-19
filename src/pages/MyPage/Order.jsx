import React from "react";
import * as C from "../../styles/CommonStyle";
import * as O from "../../styles/MyPage/OrderStyle";
import Plus from "../../assets/images/Mypage/plus.png";
import Test from "../../assets/images/Common/test.png";

function Order() {
  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <O.Product>
            <O.ProductImg src={Test}></O.ProductImg>
            <O.ProductTitle>Test</O.ProductTitle>
          </O.Product>
          <O.Container>
            <O.Line></O.Line>
            <O.ListTitle>주문자 목록</O.ListTitle>
          </O.Container>
          <O.List>
            <O.ListItem>
              <O.ListContent>
                <O.ListContainer>
                  <O.ListImg src={Test}></O.ListImg>
                  <O.ListText>Test</O.ListText>
                </O.ListContainer>
                <O.ListMore src={Plus}></O.ListMore>
              </O.ListContent>
            </O.ListItem>
          </O.List>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Order;
