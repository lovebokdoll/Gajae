import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const HotelReview = ({ property }) => {
  console.log(property);
  console.log(property[0].P_ID);
  const [review, setReview] = useState();
  const [totalscore, setTotalscore] = useState();
  //특정숙박업소마다 reviewList 가져와서 랜더링
  useEffect(() => {
    const p_reviewList = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_SPRING_IP +
            `review/p_reviewList?P_ID=${property[0].P_ID}`
        );
        setReview(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    p_reviewList();
  }, [property]);

  useEffect(() => {
    if (review) {
      const scores = review.map((review) => review.REVIEW_AVERAGE);
      const sum = scores.reduce((a, b) => a + b, 0);
      const avg = sum / scores.length;
      setTotalscore(avg);
    }
  }, [review]);

  return (
    <>
      <BackDiv>
        <TitleContainer>
          <TRating>{totalscore}</TRating>
          <Title> 이용후기 </Title>
        </TitleContainer>
        <ReviewList>
          {review &&
            review.map((review, index) => (
              <li key={index}>
                <ReviewWrapper>
                  <ImageContainer>
                    <ImageWrapper>
                      <img
                        src="https://via.placeholder.com/150"
                        alt="placeholder image"
                      />
                    </ImageWrapper>
                    <ImageDescription>호텔정보</ImageDescription>
                  </ImageContainer>
                  <PropertyContainer>
                    <PropertyDescription>
                      <p>{review.USER_ID}</p>
                      <p>
                        <StyledIcon className="fa-regular fa-calendar"></StyledIcon>
                        {review.NUM_NIGHTS}박
                      </p>
                      <p>
                        <i className="fa-solid fa-people-group"></i>
                      </p>
                    </PropertyDescription>
                  </PropertyContainer>
                  <ContentWrapper>
                    <ReviewTitle>{review.REVIEW_TITLE}</ReviewTitle>
                    <RText>
                      <i className="fa-regular fa-face-smile"></i>
                      {review.REVIEW_GOOD}
                    </RText>
                    <RText>
                      <i className="fa-regular fa-face-frown"></i>
                      {review.REVIEW_BAD}
                    </RText>
                    <CardTimestamp>{review.REVIEW_DATE}</CardTimestamp>
                    <ButtonContainer>
                      <ButtonWrapper>
                        <Rating>{review.REVIEW_AVERAGE}</Rating>
                      </ButtonWrapper>
                    </ButtonContainer>
                  </ContentWrapper>
                </ReviewWrapper>
                <hr />
              </li>
            ))}
        </ReviewList>
      </BackDiv>
    </>
  );
};

export default HotelReview;

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
  height: 200px;
  position: relative;
  margin: 0;
  padiing: 0;
  align-items: stretch;
`;

const ContentWrapper = styled.div`
  flex: 0 0 66.666667%;
  padding: 0;
  height: 200px;
`;

const ReviewTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
`;

const RText = styled.p`
  margin-top: 30px;
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

const PropertyDescription = styled.div`
  flex: 0 0 33.333333%;
  width: 100%;
  padding: 0.5rem; /* 기존 코드: 1rem */
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const PropertyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33.333333%;
`;

const ReviewList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const StyledIcon = styled.i`
  color: syblue;
  margin-right: 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33.333333%;
`;

const ImageWrapper = styled.div`
  flex: 0 0 33.333333%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ImageDescription = styled.div`
  flex: 0 0 33.333333%;
  width: 100%;
  padding: 0.5rem; /* 기존 코드: 1rem */
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const Rating = styled.button`
  background-color: #003580;
  margin-left: auto;
  color: white;
  padding: 5px;

  font-weight: bold;
  border: none;

  width: 40px;
  height: 40px;
`;

const TRating = styled.button`
  background-color: #003580;
  margin-left: 30px;
  color: white;
  padding: 5px;

  font-weight: bold;
  border: none;
`;

const Title = styled.div`
  margin-left: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;
