import React from "react";
import styled from "styled-components";

const PropertyReview = () => {
  return (
    <>
      <BackDiv>
        <hr />
        <h3>필터</h3>
        <hr />
        <h3>이용후기</h3>
        <ReviewWrapper>
          <ImageContainer>
            <ImageWrapper>
              <img
                src="https://via.placeholder.com/150"
                alt="placeholder image"
              />
            </ImageWrapper>
            <ImageDescription>
              <p>
                <i class="fa-regular fa-bed-front"></i>
              </p>
              <p>
                <i class="fa-regular fa-calendar"></i>
              </p>
              <p>
                <i class="fa-regular fa-people-simple"></i>
              </p>
            </ImageDescription>
          </ImageContainer>
          <ContentWrapper>
            <ReviewTitle>Card title</ReviewTitle>
            <RText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </RText>
            <RText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </RText>
            <CardTimestamp>Last updated 3 mins ago</CardTimestamp>
            <ButtonContainer>
              <ButtonWrapper>
                <Btn class="btn">
                  <i class="fa-solid fa-bars"></i>
                </Btn>
              </ButtonWrapper>
            </ButtonContainer>
          </ContentWrapper>
        </ReviewWrapper>
      </BackDiv>
    </>
  );
};
export default PropertyReview;

const BackDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px;
  max-width: 1200px;
  min-height: 650px;
  align-items: center;
`;
const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 700px;
  height: 500px;
  position: relative;
  margin: 50px 0 50px 0;
`;

const ImageWrapper = styled.div`
  flex: 0 0 33.333333%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  flex: 0 0 66.666667%;
  padding: 1rem;
`;

const ReviewTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
`;

const RText = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`;

const CardTimestamp = styled.p`
  font-size: 0.875rem;
  color: gray;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  font-size: 16px;
  border: none;
  cursor: pointer;
  border: 1px solid lightgray;
  background-color: white;
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 2px; /* 버튼과 콘텐츠 사이의 간격을 띄우기 위해 추가 */
`;

const ImageDescription = styled.div`
  flex: 0 0 33.333333%;
  width: 100%;
  padding: 0.5rem; /* 기존 코드: 1rem */
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33.333333%;
`;
