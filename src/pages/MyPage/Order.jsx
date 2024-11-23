import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axios/axios_instance";
import * as C from "../../styles/CommonStyle";
import * as O from "../../styles/MyPage/OrderStyle";
import Plus from "../../assets/images/Mypage/plus.png";
import ProfileImg from "../../assets/images/Mypage/profile.png";
import Back from "../../components/back";
import Footer from "../../components/Footer";
import ModalProgressS from "../../components/ModalProgressS";

function Order() {
  const { productId } = useParams(); // productId를 URL에서 가져옴
  const [buyers, setBuyers] = useState([]); // 주문자 목록
  const [product, setProduct] = useState(null); // 선택된 상품 정보
  const [isModalOpenP, setIsModalOpenP] = useState(false);
  const [isModalVisibleP, setIsModalVisibleP] = useState(false);
  const [selectedPurchaseId, setSelectedPurchaseId] = useState(null);
  const [selectedBuyerName, setSelectedBuyerName] = useState(null);

  const openModalP = (purchaseId, consumerName) => {
    console.log("선택된 purchaseId:", purchaseId);
    console.log("선택된 name:", consumerName);
    setSelectedPurchaseId(purchaseId);
    setSelectedBuyerName(consumerName);
    setIsModalOpenP(true);
    setIsModalVisibleP(true);
  };

  // 모달 닫기
  const closeModalP = () => {
    setIsModalVisibleP(false);
    setTimeout(() => {
      setIsModalOpenP(false);
      setSelectedPurchaseId(null); // 초기화
      setSelectedBuyerName(null);
    }, 400);
  };

  // 주문자 목록 가져오기
  const getOrderDetails = async () => {
    try {
      const response = await axiosInstance.get(`/api/core/mypage/allpurchase/seller/${productId}`);
      setBuyers(response.data); // 주문자 목록 설정
      console.log(response.data);
    } catch (error) {
      console.error("주문자 데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  // 상품 정보 가져오기
  const getProductDetails = async () => {
    try {
      const response = await axiosInstance.get(`/api/core/mypage/allproduct`);
      const productData = response.data.find((item) => item.productId === parseInt(productId));
      setProduct(productData);
      console.log(productData);
    } catch (error) {
      console.error("상품 데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    getOrderDetails();
    getProductDetails();
  }, [productId]);

  return (
    <C.Page>
      <Back />
      <C.Center>
        <C.PageSpace>
          {product && (
            <O.Product>
              <O.ProductImg src={product.images?.[0]?.imageUrl} alt="상품 이미지" />
              <O.ProductTitle>{product.title || "상품 제목 없음"}</O.ProductTitle>
            </O.Product>
          )}
          <O.Container>
            <O.Line></O.Line>
            <O.ListTitle>주문자 목록</O.ListTitle>
          </O.Container>
          <O.List>
            {buyers.map((buyer) => (
              <O.ListItem key={buyer.consumerId}>
                <O.ListContent>
                  <O.ListContainer>
                    <O.ListImg src={ProfileImg} alt="profile" />
                    <O.ListText>{buyer.consumerName}</O.ListText>
                  </O.ListContainer>
                  <O.ListMore src={Plus} onClick={() => openModalP(buyer.purchaseId, buyer.consumerName)} />
                  {isModalOpenP && selectedPurchaseId === buyer.purchaseId && (
                    <ModalProgressS
                      onClose={closeModalP}
                      isModalVisibleP={isModalVisibleP}
                      purchaseId={selectedPurchaseId}
                      consumerName={selectedBuyerName}
                    />
                  )}
                </O.ListContent>
              </O.ListItem>
            ))}
          </O.List>
        </C.PageSpace>
      </C.Center>
      <Footer />
    </C.Page>
  );
}

export default Order;
