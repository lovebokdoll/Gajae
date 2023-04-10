import React from "react";
import styled from "styled-components";
import HeaderNav1 from "../../components/header/HeaderNav1";

import Footer from "../../components/footer/Footer";

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

const MyReviewPage = () => {
  return (
    <>
      <HeaderNav1 />
      <ProductItem>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <Info>
          <Title>안녕</Title>
          <Description>안녕</Description>
        </Info>
      </ProductItem>
      <Footer />
    </>
  );
};

export default MyReviewPage;
