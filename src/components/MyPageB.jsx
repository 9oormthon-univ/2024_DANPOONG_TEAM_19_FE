import React, { useState, useEffect } from "react";
import API from "../hooks/api";

import * as MB from "../styles/Components/MyPageBStyle";

import Plus from "../assets/images/Mypage/plus.png";
import ModalProgressB from "../components/ModalProgressB";

function MypageB() {
  const [items, setItems] = useState([]);
  const [selectedPurchaseId, setSelectedPurchaseId] = useState(null);
  const [isModalOpenP, setIsModalOpenP] = useState(false);
  const [isModalVisibleP, setIsModalVisibleP] = useState(false);

  const openModalP = (purchaseId) => {
    setSelectedPurchaseId(purchaseId);
    setIsModalOpenP(true);
    setIsModalVisibleP(true);
  };
  const closeModalP = () => {
    setIsModalVisibleP(false);
    setTimeout(() => {
      setIsModalOpenP(false);
      setSelectedPurchaseId(null);
    }, 400);
  };

  const getItems = async () => {
    try {
      const response = await API.get("/mypage/allpurchase/consumer");
      setItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <MB.List>
      {items.map((item) => (
        <MB.ListItem key={item.id}>
          <MB.ListContent>
            <MB.ListContainer>
              <MB.ListImg src={item.images?.[0]?.imageUrl}></MB.ListImg>
              <MB.ListText>{item.title}</MB.ListText>
            </MB.ListContainer>
            <MB.ListMore src={Plus} onClick={() => openModalP(item.purchases?.[0]?.purchaseId)}></MB.ListMore>
          </MB.ListContent>
        </MB.ListItem>
      ))}
      {isModalOpenP && (
        <ModalProgressB onClose={closeModalP} isModalVisibleP={isModalVisibleP} purchaseId={selectedPurchaseId} />
      )}
    </MB.List>
  );
}

export default MypageB;
