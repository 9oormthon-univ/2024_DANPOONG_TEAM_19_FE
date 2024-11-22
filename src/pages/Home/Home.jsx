import React from "react";
import { Link } from "react-router-dom";
import * as C from "../../styles/CommonStyle";
import * as H from "../../styles/Home/HomeStyle";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useAllProducts from "../../hooks/Home/useAllProducts"; // 생성한 Hook 가져오기

function Home() {
  const { products, loading, error } = useAllProducts(); // Hook에서 상태 가져오기

  if (loading) return <p>로딩 중...</p>; // 로딩 상태 처리
  if (error) return <p>에러 발생: {error}</p>; // 에러 상태 처리

  return (
    <H.Page>
      <Header />
      <H.Center>
        <H.PageSpace>
          <H.GridContainer>
            {products.map((product) => (
              <Link to={`/detail/${product.productId}`} key={product.productId}> {/* productId로 링크 */}
                <H.Box>
                  <H.Image src={product.imgUrl} alt={product.title} />
                  <H.Description>
                    <H.TopRow>
                      <H.Name>{product.title}</H.Name>
                      <H.Uploader>{product.sellerName}</H.Uploader>
                      <H.MoreButton>⋮</H.MoreButton>
                    </H.TopRow>
                    <H.BottomRow>
                      <H.Price>{product.price.toLocaleString()}원</H.Price>
                    </H.BottomRow>
                  </H.Description>
                </H.Box>
              </Link>
            ))}
          </H.GridContainer>
        </H.PageSpace>
        <Link to="/upload">
          <H.UploadButton alt="Upload" />
        </Link>
        <Footer />
      </H.Center>
    </H.Page>
  );
}

export default Home;
