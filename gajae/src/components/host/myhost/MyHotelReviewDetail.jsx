import { useParams } from "react-router-dom";
import {
  hostReviewDeleteDB,
  hostReviewDetailDB,
} from "../../../service/host/hostReview/hostReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import HostReplyForm from "./HostReplyForm";
import HostReply from "./HostReply";
import styled from "styled-components";
import HeaderNav2 from "../../header/HeaderNav2";
import HeaderNav1 from "../../header/HeaderNav1";
import Footer from "../../footer/Footer";
import HostReplyUpdate from "./HostReplyUpdate";
import Swal from "sweetalert2";
import { replyListDB } from "../../../service/host/hostReview/hostReply";

const MyHotelReviewDetail = () => {
  const { reviewNumber } = useParams();
  const hostId = localStorage.getItem("hostId");
  const [hostReviews, setHosteview] = useState([]);

  const [comment, setComment] = useState([]);

  const [showModal, setShowModal] = useState(false); //새 댓글 모달창
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [editShowModal, setEditShowModal] = useState(false);
  //모달창, 수정 모달창
  const handleEditShow = () => {
    if (comment.length > 0) {
      setEditShowModal(true);
    }
  };
  const handleEditClose = () => setEditShowModal(false);

  useEffect(() => {
    const reviewList = async () => {
      const review = {
        REVIEW_NUMBER: reviewNumber,
      };
      const res = await hostReviewDetailDB(review);
      if (res) {
        setHosteview(res.data);
        console.log(res.data);
      }
    };
    reviewList();
  }, [comment]);

  const getReply = useCallback(async () => {
    const res = await replyListDB({ REVIEW_NUMBER: reviewNumber });
    setComment(res.data);
  }, [reviewNumber]);

  useEffect(() => {
    getReply();
  }, [getReply, reviewNumber]);

  const handleDelete = async () => {
    const hostreply = {
      REPLY_NUMBER: comment[0].REPLY_NUMBER,
    };
    await hostReviewDeleteDB(hostreply);
    Swal.fire({
      title: "삭제가 완료되었습니다.",
      icon: "success",
    });
    window.location.href = "/host/myhotelreview";
  };
  const handleback = () => {
    window.location.href = "/host/myhotelreview";
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <BackDiv>
        <ReviewList>
          <button
            type="button"
            className="btn info"
            style={{
              marginBottom: "0.8rem",
              backgroundColor: "#1e3050",
              color: "white",
              marginLeft: "auto",
              display: "flex",
            }}
            onClick={handleback}
          >
            뒤로
          </button>
          {hostReviews &&
            hostReviews.map((review, index) => (
              <ReviewItem key={index}>
                <ReviewWrapper>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      textAlign: "left",
                      marginLeft: "1rem",
                      padding: "0.2rem",
                    }}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-hotel" />
                    &nbsp;&nbsp;{review.P_TITLE}
                  </div>
                  <hr
                    style={{
                      width: "100%",
                      margin: "0",
                      padding: "0",
                      border: "none",
                      borderTop: "2px solid lightgray",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "1.2rem",
                      textAlign: "left",
                      marginLeft: "1rem",
                      padding: "0.2rem",
                    }}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    &nbsp;&nbsp;고객의 리뷰
                  </div>
                  <hr
                    style={{
                      width: "100%",
                      margin: "0",
                      border: "none",
                      borderTop: "2px solid lightgray",
                    }}
                  />
                  <WrapperDiv>
                    <ImageContainer>
                      <img
                        src={
                          review.REVIEW_PHOTO
                            ? review.REVIEW_PHOTO
                            : "https://via.placeholder.com/150"
                        }
                        alt="placeholder image"
                      />
                    </ImageContainer>
                    <ContentWrapper>
                      <ReviewTitle>{review.REVIEW_TITLE}</ReviewTitle>
                      <RText>{review.REVIEW_GOOD}</RText>
                      <RText>{review.REVIEW_BAD}</RText>
                      <CardTimestamp>{review.REVIEW_DATE}</CardTimestamp>
                    </ContentWrapper>
                  </WrapperDiv>
                  <ReplyWrapper>
                    <ButtonContainer>
                      {comment.length ? (
                        <button
                          type="button"
                          className="btn info"
                          style={{
                            marginBottom: "8%",
                            backgroundColor: "#1e3050",
                            color: "white",
                          }}
                          onClick={handleEditShow}
                        >
                          수정
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-warning"
                          style={{ marginBottom: "8%" }}
                          onClick={handleShow}
                        >
                          답변
                        </button>
                      )}{" "}
                      <HostReplyUpdate
                        editShowModal={editShowModal}
                        onHide={handleEditClose}
                        reviewNumber={reviewNumber}
                        hostId={hostId}
                        comment={comment}
                        setComment={setComment}
                      />
                      <HostReplyForm
                        showModal={showModal}
                        onHide={handleClose}
                        reviewNumber={reviewNumber}
                        hostId={hostId}
                        setComment={setComment}
                      />
                      {comment.length ? (
                        <button
                          type="button"
                          className="btn info"
                          style={{
                            marginBottom: "8%",
                            backgroundColor: "#dc3545",
                            color: "white",
                          }}
                          onClick={() => handleDelete()}
                        >
                          삭제
                        </button>
                      ) : null}
                    </ButtonContainer>
                  </ReplyWrapper>
                </ReviewWrapper>
                <ReplyWrapper>
                  <HostReply comment={comment} />
                </ReplyWrapper>
              </ReviewItem>
            ))}
        </ReviewList>
      </BackDiv>
      <Footer />
    </>
  );
};

export default MyHotelReviewDetail;

const BackDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 900px;
  max-height: 1400px;
  margin-top: 1px;
  align-items: center;
  justify-content: center;
`;

const ReviewList = styled.ul`
  margin-top: 0px;
  padding: 0;
  list-style-type: none;
`;

const ReviewItem = styled.li`
  border: 1px solid lightgrey;
  width: 700px;
  border-radius: 10px;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 1rem 1rem 1rem;
  width: 650px;
`;

const ImageContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  width: 200px;
  height: 200px;
  flex-basis: 28%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  flex: 50%;
  margin-left: 1rem;
`;

const ReplyWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 0;
  margin-bottom: 1rem;
`;

const ReviewTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
`;

const RText = styled.p`
  font-size: 1rem;
`;

const CardTimestamp = styled.p`
  font-size: 0.875rem;
  color: gray;
  color: #006ce3;
  text-align: right;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: block;
  margin-right: 4rem;
  width: 100%;
  text-align: right;
  height: 40px;
`;
