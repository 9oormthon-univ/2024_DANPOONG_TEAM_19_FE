import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import { axiosInstance } from "../axios/axios_instance";
import * as MS from "../styles/Components/MyPageSStyle";
import ModalDelete from "./ModalDelete";
import ModalManagement from "./ModalManagement";
import More from "../assets/images/Common/more.png";

function MyPageS() {
  const navigate = useNavigate(); // useNavigate 초기화
  const [isModalOpenD, setIsModalOpenD] = useState(false);
  const [isModalVisibleD, setIsModalVisibleD] = useState(false);
  const [isModalOpenM, setIsModalOpenM] = useState(false);
  const [isModalVisibleM, setIsModalVisibleM] = useState(false);

  const [items, setItems] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

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

  const openModalD = (productId) => {
    console.log("선택된 productId:", productId);
    setSelectedProductId(productId);
    setIsModalOpenD(true);
    setIsModalVisibleD(true);
  };

  const closeModalD = () => {
    setIsModalVisibleD(false);
    setTimeout(() => {
      setIsModalOpenD(false);
      setSelectedProductId(null); // 초기화
    }, 400);
  };

  const openModalM = (productId) => {
    console.log("선택된 productId:", productId);
    setSelectedProductId(productId);
    setIsModalOpenM(true);
    setIsModalVisibleM(true);
  };

  const closeModalM = () => {
    setIsModalVisibleM(false);
    setTimeout(() => {
      setIsModalOpenM(false);
      setSelectedProductId(null); // 초기화
    }, 400);
  };

  const handleDeleteSuccess = (deletedProductId) => {
    setItems((prevItems) => prevItems.filter((item) => item.productId !== deletedProductId));
  };

  const handleAsk = (productId) => {
    console.log("수정으로 이동 - productId:", productId);
    navigate(`/detail/${productId}`); // productId로 이동
  };

  return (
    <MS.List>
      {items.map((item) => (
        <MS.ListItem key={item.productId}>
          <MS.ListImg src={item.images?.[0]?.imageUrl || "/default-image.png"}></MS.ListImg>
          <MS.ListText>
            <MS.ListTitle>{item.title}</MS.ListTitle>
            <MS.ListMore src={More} onClick={() => openModalM(item.productId)}></MS.ListMore>
            {isModalOpenM && selectedProductId === item.productId && (
              <ModalManagement
                onClose={closeModalM}
                isModalVisibleM={isModalVisibleM}
                productId={selectedProductId} // productId 전달
              />
            )}
          </MS.ListText>
          <MS.LsitPrice>
            {item.price.toLocaleString()}
            <div style={{ fontFamily: "EliceDigitalBaeum_Bold", fontSize: "20px" }}>원</div>
          </MS.LsitPrice>
          <MS.ListButton>
            <MS.Button onClick={() => openModalD(item.productId)}>삭제</MS.Button>
            {isModalOpenD && selectedProductId === item.productId && (
              <ModalDelete
                onClose={closeModalD}
                isModalVisibleD={isModalVisibleD}
                productId={selectedProductId} // productId 전달
                onDeleteSuccess={handleDeleteSuccess}
              />
            )}
            <MS.ListLine></MS.ListLine>
            <MS.Button
              onClick={() => handleAsk(item.productId)} // productId를 전달
              style={{ fontWeight: "bold", color: "#000000" }}
            >
              수정
            </MS.Button>
          </MS.ListButton>
        </MS.ListItem>
      ))}
    </MS.List>
  );
}

export default MyPageS;
