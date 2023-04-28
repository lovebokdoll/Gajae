import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { hostReviewListDB } from "../../../service/hostLogic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyHotelReviewReply from "./MyHotelReviewReply";
import ReplyForm from "../../review/ReplyForm";
import { replyListDB } from "../../../service/reviewboardLogic";

const MyHotelReviewList = ({ hostId }) => {
  const [hostReviews, setHostReviews] = useState(); //고객의 리뷰리스트

  const [showModal, setShowModal] = useState(false); //모달창
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
  };

  const [currentPage, setCurrentPage] = useState(1); //페이지네이션 처리
  const pageNumber = [];

  //고객의 리뷰 리스트 불러오기
  useEffect(() => {
    const reviewList = async () => {
      const host = {
        HOST_ID: hostId,
      };
      const res = await hostReviewListDB(host);
      if (res) {
        setHostReviews(res.data);
        console.log(res.data);
      }
    };
    reviewList();
  }, [hostId]);
  //댓글 불러오기
  const [reply, setReply] = useState();

  useEffect(() => {
    const replyList = async () => {
      const host = {
        REVIEW_NUMBER: hostReviews[0].REVIEW_NUMBER,
      };
      try {
        const res = await replyListDB(host);
        if (res) {
          setReply(res.data);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    replyList();
  }, [hostReviews, reply]);

  console.log(reply);

  return (
    <>
      <BackDiv>
        <h3 style={{ fontWeight: "bold" }}>
          <FontAwesomeIcon
            icon="fa-solid fa-pen-to-square"
            style={{ color: "#1e3050" }}
          />
          &nbsp; 이용후기
        </h3>
        <TLineDiv></TLineDiv>
        <EmtyDiv></EmtyDiv>
        <ReviewList>
          {hostReviews &&
            hostReviews.map((review, index) => (
              <ReviewItem key={index}>
                <ReviewWrapper>
                  <ImageContainer>
                    <ImageWrapper>
                      <img
                        src={
                          /*     review.REVIEW_PHOTO
                            ? review.REVIEW_PHOTO
                            : */ "https://via.placeholder.com/150"
                        }
                        alt="placeholder image"
                      />
                    </ImageWrapper>
                  </ImageContainer>
                  <ContentWrapper>
                    <ReviewTitle>{review.REVIEW_TITLE}</ReviewTitle>
                    <RText>{review.REVIEW_GOOD}</RText>
                    <RText>{review.REVIEW_BAD}</RText>
                    <CardTimestamp>{review.REVIEW_DATE}</CardTimestamp>
                  </ContentWrapper>
                  <ReplyWrapper>
                    <button
                      type="button"
                      className="btn btn-warning"
                      style={{ marginBottom: "8%" }}
                      onClick={handleShow}
                    >
                      답변
                    </button>
                    {showModal && (
                      <MyHotelReviewReply
                        handleClose={handleClose}
                        showModal={showModal}
                        hostId={hostId}
                        hostReviews={hostReviews}
                      />
                    )}
                  </ReplyWrapper>
                </ReviewWrapper>
              </ReviewItem>
            ))}
          <ReplyForm reply={reply} />
        </ReviewList>
        <nav>
          <ul className="pagination justify-content-center">
            {pageNumber.map((page) => (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => setCurrentPage(page)}
                >
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

export default MyHotelReviewList;

const BackDiv = styled.div`
  display: block;
  flex-direction: column;
  margin-left: 50px;
  max-width: 1000px;
  min-height: 900px;
  max-height: 1000px;
  align-items: center;
  font-family: "KOTRA_GOTHIC";
`;

const ReviewList = styled.ul`
  margin: 0px;
  padding: 0;
  list-style-type: none;
`;

const ReviewItem = styled.li`
  border: 1px solid lightgrey;
  max-height: 600px;
`;

const ReviewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  max-width: 900px;
  position: relative;
  margin: 50px 0;
`;

const ImageWrapper = styled.div`
  margin-left: 30px;
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  margin-left: 20px;
`;

const ReplyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  margin-bottom: 10px;
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

const TLineDiv = styled.div`
  background-color: #1e3050;
  height: 7px;
  with: 100%;
`;

const EmtyDiv = styled.div`
  height: 50px;
`;

const SpeechBubbleDiv = styled.div`
  /* layout */
  position: relative;
  width: 600px;
  height: 200px;

  /* looks */
  background-color: #f5f5f5;
  padding: 1.125em 1.5em;
  font-size: 1.25em;
  border-radius: 1rem;

  &::before {
    /* layout */
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1.5em;
    /* looks */
    border: 0.75rem solid transparent;
    border-top: none;
    /* looks */
    border-bottom-color: #f5f5f5;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;
