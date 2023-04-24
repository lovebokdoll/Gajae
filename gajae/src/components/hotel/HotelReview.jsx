import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewProgressBar from "../review/ReviewProgressBar";
import { CloseButton } from "react-bootstrap";

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

  console.log(review);

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
      <TitleContainer>
        <BtnClose></BtnClose>
        <Title> 이용후기 </Title>
        <TRating>{totalscore}</TRating>
      </TitleContainer>
      <hr />
      <BackDiv>
        <ReviewProgressBar review={review} />
        <ReviewList>
          <hr />
          {review &&
            review.map((review, index) => (
              <li key={index}>
                <ReviewWrapper>
                  <ImageContainer>
                    {/* 사용자 정보 가져오기 */}
                    <ImageWrapper>
                      <UserImg src="../images/default.png" />
                    </ImageWrapper>
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-user" />
                      &nbsp;&nbsp;
                      {review.USER_NICKNAME}&nbsp;&nbsp;
                      <img
                        src="/images/korea.svg.png"
                        style={{ border: "1px solid black" }}
                      ></img>
                    </p>
                    <p>
                      <FontAwesomeIcon icon="fa-regular fa-calendar" />
                      &nbsp;&nbsp;{review.NUM_NIGHTS}박
                    </p>
                    <p>
                      <i className="fa-solid fa-people-group"></i>
                      &nbsp;&nbsp;{review.R_PEOPLE}명
                    </p>
                  </ImageContainer>
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
  padding: 10px;
  align-items: center;
  //overflow: auto; /* 혹은 scroll */
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  flex-grow: 1;
`;
const TRating = styled.button`
  font-weight: bold
  background-color: #003580;
  color: white;
  margin-right: 100px;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  border: none;
  border-radius: 10px;
`;

const BtnClose = styled(CloseButton)`
  margin-right: 50px;
`;
const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  width: 900px;
  height: 260px;
  position: relative;
  margin: 0;
  padiing: 0;
  align-items: stretch;
`;

const ReviewList = styled.ul`
  margin: 100px 0 0 0;
  padding: 0;
  list-style-type: none;
`;

const ImageContainer = styled.div`
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  flex-basis: 33.333333%;
`;
const ImageWrapper = styled.div`
  flex: 0 0 33.333333%;
  display: flex;
  margin-left: 30px;
`;

const UserImg = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
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

const StyledIcon = styled.i`
  color: syblue;
  margin-right: 5px;
`;

const ImageDescription = styled.div`
  flex: 0 0 33.333333%;
  width: 100%;
  padding: 0.5rem; /* 기존 코드: 1rem */
  font-size: 0.8rem;
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3개의 열, 각 열은 같은 너비
  grid-template-rows: repeat(5, 1fr); // 5개의 행, 각 행은 같은 높이
  gap: 10px; // 디브간의 간격
  border: 1px solid #ccc; // 그리드에 테두리 씌우기
`;

const GridItem = styled.div`
  background-color: whigt;
  border: 1px solid #ccc;
`;
const LabelWrapper = styled.div`
  flex: 1;
`;
const ItemContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
