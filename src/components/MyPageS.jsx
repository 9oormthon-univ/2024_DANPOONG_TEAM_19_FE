import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axios/axios_instance";
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
  const [selectedIndex, setSelectedIndex] = useState(null);

  const getItems = async () => {
    try {
      const response = await axiosInstance.get("/api/core/mypage/allproduct");
      setItems(response.data);
      console.log("상품 데이터:", response.data);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const openModalD = (index) => {
    console.log("선택된 상품 인덱스:", index);
    setSelectedIndex(index);
    setIsModalOpenD(true);
    setIsModalVisibleD(true);
  };

  const closeModalD = () => {
    setIsModalVisibleD(false);
    setTimeout(() => {
      setIsModalOpenD(false);
      setSelectedIndex(null); // 선택된 인덱스 초기화
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

  const handleDeleteSuccess = (deletedIndex) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== deletedIndex));
  };

  return (
    <MS.List>
      {items.map((item, index) => (
        <MS.ListItem key={index}>
          <MS.ListImg src={item.images?.[0]?.imageUrl || "/default-image.png"}></MS.ListImg>
          <MS.ListText>
            <MS.ListTitle>{item.title}</MS.ListTitle>
            <MS.ListMore src={More} onClick={openModalM}></MS.ListMore>
            {isModalOpenM && <ModalManagement onClose={closeModalM} isModalVisibleM={isModalVisibleM} />}
          </MS.ListText>
          <MS.LsitPrice>{item.price.toLocaleString()}원</MS.LsitPrice>
          <MS.ListButton>
            <MS.Button onClick={() => openModalD(index)}>삭제</MS.Button>
            {isModalOpenD && selectedIndex === index && (
              <ModalDelete
                onClose={closeModalD}
                isModalVisibleD={isModalVisibleD}
                index={selectedIndex}
                onDeleteSuccess={handleDeleteSuccess}
              />
            )}
            <MS.ListLine></MS.ListLine>
            <MS.Button style={{ fontWeight: "bold", color: "#000000" }}>수정</MS.Button>
          </MS.ListButton>
        </MS.ListItem>
      ))}
    </MS.List>
  );
}

export default MyPageS;
