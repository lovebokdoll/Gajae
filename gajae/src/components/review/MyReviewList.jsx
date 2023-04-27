import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { reviewDeleteDB, reviewListDB } from '../../service/reviewboardLogic';
import Dropdowntoggle from '../../components/review/Dropdowntoggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyReviewList = ({ userId }) => {
  const [myreview, setMyreview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumber = [];
  const reviewsPerPage = 5;

  useEffect(() => {
    const reviewList = async () => {
      const user = {
        USER_ID: userId,
      };
      const res = await reviewListDB(user);
      if (res) {
        setMyreview(res.data);
        console.log(res.data);
      }
    };
    reviewList();
  }, [userId]);

  const onDelete = async (reviw_number) => {
    try {
      const deleteReview = {
        REVIEW_NUMBER: reviw_number,
      };
      const res = await reviewDeleteDB(deleteReview);
      const updatedReviews = myreview.filter((review) => review.REVIEW_NUMBER !== reviw_number);
      setMyreview(updatedReviews);
    } catch (error) {}
  };

  //페이징 처리
  for (let i = 1; i <= Math.ceil(myreview?.length / reviewsPerPage); i++) {
    pageNumber.push(i);
  }

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const start = indexOfFirstReview;
  const end = indexOfLastReview;

  return (
    <>
      <BackDiv>
        <h3 style={{ fontWeight: 'bold' }}>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" style={{ color: '#1e3050' }} />
          &nbsp; 이용후기
        </h3>
        <TLineDiv></TLineDiv>
        <ReviewList>
          {myreview.slice(start, end).map((review, index) => (
            <ReviewItem key={index}>
              <ColorDiv></ColorDiv>
              {/* 수정 삭제 버튼이 있는 컴포넌트 */}
              <BtnWrapper>
                <Dropdowntoggle review={review} onDelete={onDelete} />
              </BtnWrapper>
              <ReviewWrapper>
                <ImageContainer>
                  <ImageWrapper>
                    <img src="../images/오션뷰.jpg" alt="placeholder image" />
                  </ImageWrapper>
                  <ImageDescription>
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-house" />
                      &nbsp;&nbsp;
                      {review.P_TITLE} - {review.ROOM_TYPE}
                    </p>
                    <p>
                      <FontAwesomeIcon icon="fa-regular fa-calendar-check" />
                      &nbsp;&nbsp;
                      {review.R_START_DATE} ~ {review.R_END_DATE}
                    </p>
                  </ImageDescription>
                </ImageContainer>
                <ContentWrapper>
                  <ReviewTitle>{review.REVIEW_TITLE}</ReviewTitle>
                  <RText>
                    <FontAwesomeIcon icon="fa-regular fa-face-smile" style={{ color: '#99ff00' }} />
                    &nbsp;&nbsp;
                    {review.REVIEW_GOOD}
                  </RText>
                  <RText>
                    <FontAwesomeIcon icon="fa-regular fa-face-frown" />
                    &nbsp;&nbsp;
                    {review.REVIEW_BAD}
                  </RText>
                  <img src="{review.REVIEW_PHOTO}" />
                  <CardTimestamp>{review.REVIEW_DATE}</CardTimestamp>
                </ContentWrapper>
              </ReviewWrapper>
            </ReviewItem>
          ))}
        </ReviewList>
        <nav>
          <ul className="pagination justify-content-center">
            {pageNumber.map((page) => (
              <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                <a href="#" className="page-link" onClick={() => setCurrentPage(page)}>
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </BackDiv>
    </>
  );
};
export default MyReviewList;

const BackDiv = styled.div`
  display: block;
  flex-direction: column;
  margin-left: 50px;
  max-width: 800px;
  min-height: 650px;
  align-items: center;
  font-family: 'KOTRA_GOTHIC';
`;

const ReviewList = styled.ul`
  margin: 0;
  padding: 0;
`;
const ReviewItem = styled.li`
  margin: 0;
  pading: 0;
  list-style-type: none;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 500px;
  height: 230px;
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
  margin-left: 30px;
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
  float: rigth;
  align-items: center;
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
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33.333333%;
`;

const ColorDiv = styled.div`
  background-color: lightgray;
  height: 1px;
  with: 100%;
`;

const BtnWrapper = styled.div`
  float: right;
  background-color: white;
  padding: 10px;
`;

const TLineDiv = styled.div`
  background-color: #1e3050;
  height: 7px;
  with: 100%;
`;
