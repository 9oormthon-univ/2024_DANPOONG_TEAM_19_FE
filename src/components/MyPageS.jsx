import React, { useState, useEffect } from "react";
import * as MS from "../styles/Components/MyPageSStyle";
import ModalDelete from "./ModalDelete";
import ModalManagement from "./ModalManagement";
import More from "../assets/images/Common/more.png";

function MyPageS() {
  const [isModalOpenD, setIsModalOpenD] = useState(false);
  const [isModalVisibleD, setIsModalVisibleD] = useState(false);
  const [isModalOpenM, setIsModalOpenM] = useState(false);
  const [isModalVisibleM, setIsModalVisibleM] = useState(false);

  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await API.get("/mypage/allproduct");
      setItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const openModalD = () => {
    setIsModalOpenD(true);
    setIsModalVisibleD(true);
  };
  const closeModalD = () => {
    setIsModalVisibleD(false);
    setTimeout(() => {
      setIsModalOpenD(false);
    }, 400);
  };
  const openModalM = () => {
    setIsModalOpenM(true);
    setIsModalVisibleM(true);
  };
  const closeModalM = () => {
    setIsModalVisibleM(false);
    setTimeout(() => {
      setIsModalOpenM(false);
    }, 400);
  };

  return (
    <MS.List>
      {items.map((item) => (
        <MS.ListItem key={item.id}>
          <MS.ListImg src={item.images?.[0]?.imageUrl}></MS.ListImg>
          <MS.ListText>
            <MS.ListTitle>{item.title}</MS.ListTitle>
            <MS.ListMore src={More} onClick={openModalM}></MS.ListMore>
            {isModalOpenM && <ModalManagement onClose={closeModalM} isModalVisibleM={isModalVisibleM} />}
          </MS.ListText>
          <MS.LsitPrice>12,000원</MS.LsitPrice>
          <MS.ListButton>
            <MS.Button onClick={openModalD}>삭제</MS.Button>
            {isModalOpenD && <ModalDelete onClose={closeModalD} isModalVisibleD={isModalVisibleD} />}
            <MS.ListLine></MS.ListLine>
            <MS.Button style={{ fontWeight: "bold", color: "#000000" }}>수정</MS.Button>
          </MS.ListButton>
        </MS.ListItem>
      ))}
    </MS.List>
  );
}

export default MyPageS;
