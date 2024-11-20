import React, { useState } from "react";
import * as MB from "../styles/Components/MyPageBStyle";
import Test from "../assets/images/Common/test.png";
import Plus from "../assets/images/MyPage/plus.png";
import ModalProgressB from "../components/ModalProgressB";

function MypageB() {
  const [isModalOpenP, setIsModalOpenP] = useState(false);
  const [isModalVisibleP, setIsModalVisibleP] = useState(false);

  const openModalP = () => {
    setIsModalOpenP(true);
    setIsModalVisibleP(true);
  };
  const closeModalP = () => {
    setIsModalVisibleP(false);
    setTimeout(() => {
      setIsModalOpenP(false);
    }, 400);
  };

  return (
    <MB.List>
      <MB.ListItem>
        <MB.ListContent>
          <MB.ListContainer>
            <MB.ListImg src={Test}></MB.ListImg>
            <MB.ListText>Test</MB.ListText>
          </MB.ListContainer>
          <MB.ListMore src={Plus} onClick={openModalP}></MB.ListMore>
          {isModalOpenP && <ModalProgressB onClose={closeModalP} isModalVisibleP={isModalVisibleP} />}
        </MB.ListContent>
      </MB.ListItem>
    </MB.List>
  );
}

export default MypageB;
