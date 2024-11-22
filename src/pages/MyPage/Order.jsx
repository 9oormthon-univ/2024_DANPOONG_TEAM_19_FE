import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axios/axios_instance";
import * as C from "../../styles/CommonStyle";
import * as O from "../../styles/MyPage/OrderStyle";
import Plus from "../../assets/images/Mypage/plus.png";
import Test from "../../assets/images/Common/test.png";
import Back from "../../components/back";
import Footer from "../../components/Footer";

function Order() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [buyers, setBuyers] = useState([]);
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

  const getProductDetails = async () => {
    try {
      const response = await axiosInstance.get(`/api/core/mypage/allpurchase/seller/${productId}`);
      setProduct(response.data.product);
      setBuyers(response.data.consumer);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <Back />
          {product && (
            <O.Product>
              <O.ProductImg src={product.images?.[0]?.imageUrl}></O.ProductImg>
              <O.ProductTitle>{product.title}</O.ProductTitle>
            </O.Product>
          )}
          <O.Container>
            <O.Line></O.Line>
            <O.ListTitle>주문자 목록</O.ListTitle>
          </O.Container>
          <O.List>
            {buyers.map((buyer, index) => (
              <O.ListItem key={index}>
                <O.ListContent>
                  <O.ListContainer>
                    <O.ListImg src={buyer.profileImage}></O.ListImg>
                    <O.ListText>{buyer.name}</O.ListText>
                  </O.ListContainer>
                  <O.ListMore src={Plus} onClick={openModalP}></O.ListMore>
                  {isModalOpenP && <ModalProgressS onClose={closeModalP} isModalVisibleP={isModalVisibleP} />}
                </O.ListContent>
              </O.ListItem>
            ))}
          </O.List>
          <Footer />
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default Order;
