import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axios/axios_instance";
import * as MB from "../styles/Components/MyPageBStyle";

import Plus from "../assets/images/Mypage/plus.png";
import ModalProgressB from "../components/ModalProgressB";

function MypageB() {
  const [items, setItems] = useState([]);
  const [selectedPurchaseId, setSelectedPurchaseId] = useState(null);
  const [isModalOpenP, setIsModalOpenP] = useState(false);
  const [isModalVisibleP, setIsModalVisibleP] = useState(false);
  const [selectedPurchaseTitle, setSelectedPurchaseTitle] = useState(null);

  const openModalP = (purchaseId, title) => {
    //console.log("선택된 purchaseId:", purchaseId);
    setSelectedPurchaseId(purchaseId);
    setSelectedPurchaseTitle(title);
    setIsModalOpenP(true);
    setIsModalVisibleP(true);
  };

  // 모달 닫기
  const closeModalP = () => {
    setIsModalVisibleP(false);
    setTimeout(() => {
      setIsModalOpenP(false);
      setSelectedPurchaseId(null); // 초기화
      setSelectedPurchaseTitle(null);
    }, 400);
  };

  // 데이터 가져오기
  const getItems = async () => {
    try {
      const response = await axiosInstance.get("/api/core/mypage/allpurchase/consumer");
      setItems(response.data);
      //console.log("구매 데이터:", response.data);
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
        <MB.ListItem key={item.purchaseId}>
          <MB.ListContent>
            <MB.ListContainer>
              <MB.ListImg src={item.imgUrl || "/default-image.png"} alt="상품 이미지" />
              <MB.ListText>{item.title}</MB.ListText>
            </MB.ListContainer>
            {/* 구매 ID를 기반으로 모달 열기 */}
            <MB.ListMore src={Plus} onClick={() => openModalP(item.purchaseId, item.title)} alt="모달 열기" />
            {isModalOpenP && selectedPurchaseId === item.purchaseId && (
              <ModalProgressB
                onClose={closeModalP}
                isModalVisibleP={isModalVisibleP}
                purchaseId={selectedPurchaseId}
                title={selectedPurchaseTitle}
              />
            )}
          </MB.ListContent>
        </MB.ListItem>
      ))}
    </MB.List>
  );
}

export default MypageB;
