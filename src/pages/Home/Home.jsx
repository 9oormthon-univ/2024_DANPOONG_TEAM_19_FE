import React from 'react';
import { Link } from 'react-router-dom';
import * as C from '../../styles/CommonStyle';
import * as H from '../../styles/Home/HomeStyle';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchHeader from '../../components/searchHeader';
import image from '../../assets/images/Home/image1.png';
import Upload from '../../assets/images/Home/upload.svg';
import Back from "../../components/back";

function Home() {
  const items = [
    { id: 1, image: image, name: '하트 키링', uploader: '김옥순', price: '12,000원' },
    { id: 2, image: image, name: '하트 키링', uploader: '김옥순', price: '12,000원' },
    { id: 3, image: image, name: '하트 키링', uploader: '김옥순', price: '12,000원' },
    { id: 4, image: image, name: '하트 키링', uploader: '김옥순', price: '12,000원' },
    { id: 5, image: image, name: '하트 키링', uploader: '김옥순', price: '12,000원' },
    { id: 6, image: image, name: '하트 키링', uploader: '김옥순', price: '12,000원' },
    { id: 7, image: image, name: '하트 키링', uploader: '김옥순', price: '12,000원' },
    { id: 8, image: image, name: '하트 키링', uploader: '김옥순', price: '12,000원' }
  ];

  return (
    <H.Page>
      <Header />
      <H.Center>
        <H.PageSpace>
          <H.GridContainer>
            {items.map(item => (
              <Link to="/detail"> 
                <H.Box key={item.id}>
                  <H.Image src={item.image} alt={item.name} />
                  <H.Description>
                    <H.TopRow>
                      <H.Name>{item.name}</H.Name>
                      <H.Uploader>{item.uploader}</H.Uploader>
                      <H.MoreButton>⋮</H.MoreButton>
                    </H.TopRow>
                    <H.BottomRow>
                      <H.Price>{item.price}</H.Price>
                    </H.BottomRow>
                  </H.Description>
                </H.Box>
              </Link>
            ))}
          </H.GridContainer>
        </H.PageSpace>
        <Link to="/upload">
          <H.UploadButton src={Upload} alt="Upload" />
        </Link>
        <Footer />
      </H.Center>
    </H.Page>
  );
}

export default Home;
