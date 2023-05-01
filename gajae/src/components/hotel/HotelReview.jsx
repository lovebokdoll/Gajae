import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewProgressBar from "../review/ReviewProgressBar";
import { CloseButton } from "react-bootstrap";
import HotelReviewReply from "./HotelReviewReply";
import HotelReviewEmpty from "./HotelReviewEmpty";

const HotelReview = ({ property, handleClose }) => {
  const [review, setReview] = useState();
  const [totalscore, setTotalscore] = useState();
  const [totalReviews, setTotalReviews] = useState(0);

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
      setTotalReviews(review.length);
    }
  }, [review]);

  return (
    <>
      {review && review.length > 0 ? (
        <>
          <TitleContainer>
            <BtnClose onClick={handleClose}></BtnClose>
            <RatingWrapper>
              <TRating>{totalscore}</TRating>&nbsp;
              <p>{totalReviews}개 이용후기</p>
            </RatingWrapper>
            <Title>100% 실제 이용후기 제공을 목표로 합니다 </Title>
          </TitleContainer>
          <hr />
          <BackDiv>
            <ReviewProgressBar review={review} />
            <ReviewList>
              {review &&
                review.map((review, index) => (
                  <li key={index}>
                    <ReviewWrapper>
                      <ImageContainer>
                        {/* 사용자 정보 가져오기 */}
                        <ImageWrapper>
                          {review.USER_PHOTO ? (
                            <UserImg src={review.USER_PHOTO} />
                          ) : (
                            <UserImg src="../images/default.png" />
                          )}
                        </ImageWrapper>
                        <UserInfo>
                          <p>
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                            &nbsp;&nbsp;
                            {review.USER_NICKNAME}&nbsp;
                            <img
                              src="/images/Flag_of_South_Korea.png"
                              style={{
                                border: "1px solid black",
                                height: "20px",
                              }}
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
                        </UserInfo>
                      </ImageContainer>
                      <ContentWrapper>
                        <ReviewTitle>{review.REVIEW_TITLE}</ReviewTitle>
                        <RText>
                          <FontAwesomeIcon
                            icon="fa-regular fa-face-smile"
                            style={{ color: "#99ff00" }}
                          />
                          &nbsp;&nbsp;
                          {review.REVIEW_GOOD}
                        </RText>
                        <RText>
                          <i className="fa-regular fa-face-frown"></i>
                          &nbsp;&nbsp;
                          {review.REVIEW_BAD}
                        </RText>
                        <ReviewImg>
                          <img
                            src={review.REVIEW_PHOTO}
                            style={{ width: "100%" }}
                          />
                        </ReviewImg>
                        <CardTimestamp>{review.REVIEW_DATE}</CardTimestamp>
                        {/* host의 댓글 */}
                        <ReplyWrapper>
                          <HotelReviewReply review={review} />
                        </ReplyWrapper>
                        <ButtonContainer>
                          <ButtonWrapper>
                            <Rating>{review.REVIEW_AVERAGE}</Rating>
                          </ButtonWrapper>
                        </ButtonContainer>
                      </ContentWrapper>
                    </ReviewWrapper>
                  </li>
                ))}
            </ReviewList>
          </BackDiv>
        </>
      ) : (
        <HotelReviewEmpty handleClose={handleClose} />
      )}
    </>
  );
};

export default HotelReview;

const BackDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;
const Title = styled.div`
  text-align: left;
  margin-left: 80px;
  font-size: 18px;
  font-weight: bold;
  color: #286a42;
  flex-grow: 1;
`;
const TRating = styled.button`
  width: 50px;
  height: 50px;
  font-weight: bold;
  background-color: #003580;
  color: white;
  padding: 5px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: none;
`;

const BtnClose = styled(CloseButton)`
  margin-right: 50px;
`;
const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  width: 900px;
  height: 600px;
  position: relative;
  margin: 0;
  padiing: 0;
  align-items: stretch;
  border-radius: 10px;
  border: 1px solid lightgray;
`;

const ReviewList = styled.ul`
  margin: 60px 0 0 0;
  padding: 0;
  list-style-type: none;
`;

const ImageContainer = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  flex-basis: 33.333333%;
  font-size: 1rem;
`;
const ImageWrapper = styled.div`
  flex: 0 0 30.333333%;
  display: flex;
  width: 160px;
  height: 200px;
  margin-top: 30px;
`;

const UserImg = styled.img`
  width: 100%;
  margin-bottom: 5px;
  border-radius: 50%;
`;
const UserInfo = styled.div`
  margin-top: 30px;
`;

const ContentWrapper = styled.div`
  flex: 0 0 66.666667%;
  padding: 0;
  height: 200px;
  margin-top: 30px;
  margin-right: 45px;
`;

const ReviewTitle = styled.h5`
  font-size: 1.4rem;
  font-weight: bold;
`;

const RText = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
`;

const CardTimestamp = styled.p`
  font-size: 1rem;
  color: #006ce3;
  margin-top: 4px;
  margin-bottom: auto;
  text-align: right;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 10px;
  display: flex;
  align-items: center;
  padding-right: 2px; /* 버튼과 콘텐츠 사이의 간격을 띄우기 위해 추가 */
`;

const Rating = styled.button`
  background-color: #003580;
  margin-left: auto;
  color: white;
  padding: 5px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  width: 40px;
  height: 40px;
`;

const ReplyWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

const ReviewImg = styled.div`
  height: 200px;
  width: 200px;
`;
