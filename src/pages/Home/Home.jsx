import React from "react";
import { Link } from "react-router-dom";
import * as C from "../../styles/CommonStyle";
import * as H from "../../styles/Home/HomeStyle";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Upload from "../../assets/images/Home/upload.svg";
import Back from "../../components/back";
import useAllProducts from "../../hooks/Home/useAllProducts";

function Home() {
  const { products, loading, error } = useAllProducts();

  return (
    <C.Page>
      <Header />
      <C.Center>
        <C.PageSpace>
          <H.GridContainer>
            {products.map((product) => (
              <Link to={`/detail/${product.productId}`} key={product.productId}>
                {" "}
                {/* productId로 링크 */}
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
        </C.PageSpace>
        <Link to="/upload">
          <H.UploadButton src={Upload} alt="Upload" />
        </Link>
        <Footer />
      </C.Center>
    </C.Page>
  );
}

export default Home;
