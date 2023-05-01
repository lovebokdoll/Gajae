import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { hostReviewListDB } from "../../../service/host/hostReview/hostReview";
import {
  replyInsertDB,
  replyListDB,
  replyUpdateDB,
} from "../../../service/reviewboardLogic";
import { Modal, ModalFooter, ModalHeader } from "react-bootstrap";
import ReplyForm from "./ReplyForm";

const MyHotelReviewList = ({ hostId }) => {
  const [hostReviews, setHostReviews] = useState([]); //고객의 리뷰리스트

  const [reply, setReply] = useState([]);

  const [showModal, setShowModal] = useState(false); //새 댓글 모달창
  const [editShowModal, setEditShowModal] = useState(false);

  const handleEditShow = () => setEditShowModal(true);
  const handleEditClose = () => {
    setEditShowModal(false);
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
  };

  const [currentPage, setCurrentPage] = useState(1); //페이지네이션 처리
  const pageNumber = [];

  const getReply = async (reviewNumber) => {
    const res = await replyListDB({ REVIEW_NUMBER: reviewNumber });
    if (res) {
      setReply(res.data);
    }
  };
  //댓글
  const [content, setContent] = useState("");

  const handleContent = (value) => {
    setContent(value);
    console.log(content);
  };
  const reviewNumber =
    hostReviews.length > 0 ? hostReviews[0].REVIEW_NUMBER : null;

  const replyInsert = async () => {
    const reply = {
      HOST_ID: hostId,
      REPLY_CONTENT: content,
      REVIEW_NUMBER: reviewNumber,
    };
    const res = await replyInsertDB(reply);
    console.log(res.data);

    await getReply(reviewNumber);

    handleClose();
  };
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

        if (res.data.length > 0) {
          await getReply(res.data[0].REVIEW_NUMBER);
        }
      }
    };
    reviewList();
  }, [hostId]);

  //댓글 수정
  const [editContent, setEditContent] = useState("");

  const handleEditReply = (reply) => {
    console.log(reply);
    setEditContent(reply[0].REPLY_CONTENT);
    console.log(editContent);
    handleEditShow(); // 모달창을 열어줌
  };

  // 수정된 내용을 DB에 저장하는 함수
  const replyUpdate = async () => {
    const updatedReply = {
      REPLY_NUMBER: reply[0].REPLY_NUMBER,
      REPLY_CONTENT: editContent,
    };
    const res = await replyUpdateDB(updatedReply);
    console.log(res.data);

    await getReply(reviewNumber);

    handleEditClose();
  };
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
                      {reply && reply.length > 0 ? (
                        <button
                          type="button"
                          className="btn btn-warning"
                          style={{ marginBottom: "8%" }}
                          onClick={() => handleEditReply(reply)}
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
                      )}
                    </ButtonContainer>
                    {showModal && (
                      <AlertModal show={showModal} onHide={handleClose}>
                        <AlertHeader>
                          &nbsp;&nbsp;&nbsp;
                          <FontAwesomeIcon
                            icon="fa-solid fa-quote-right"
                            style={{ color: "#1e3050" }}
                          />
                        </AlertHeader>
                        <ActionContainer>
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a comment here"
                              id="floatingTextarea"
                              style={{ width: "430px", height: "400px" }}
                              value={content}
                              onChange={(e) => {
                                handleContent(e.target.value);
                              }}
                            ></textarea>
                            <label htmlFor="floatingTextarea">
                              &nbsp; 답변을 작성해주세요!
                            </label>
                          </div>
                        </ActionContainer>
                        <Footer>
                          <SaveButton onClick={replyInsert}>저장</SaveButton>
                          <CancelButton onClick={handleClose}>
                            취소
                          </CancelButton>
                        </Footer>
                      </AlertModal>
                    )}
                    {reply && (
                      <EditModal show={editShowModal} onHide={handleClose}>
                        <EditHeader>
                          &nbsp;&nbsp;&nbsp;
                          <FontAwesomeIcon
                            icon="fa-solid fa-quote-right"
                            style={{ color: "#1e3050" }}
                          />
                        </EditHeader>
                        <ActionContainer>
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a comment here"
                              id="floatingTextarea"
                              style={{ width: "430px", height: "400px" }}
                              value={editContent}
                              onChange={(e) => {
                                setEditContent(e.target.value);
                              }}
                            ></textarea>
                            <label htmlFor="floatingTextarea">
                              &nbsp; 답변을 작성해주세요!
                            </label>
                          </div>
                        </ActionContainer>
                        <Footer>
                          <SaveButton onClick={replyUpdate}>수정</SaveButton>
                          <CancelButton onClick={handleEditClose}>
                            취소
                          </CancelButton>
                        </Footer>
                      </EditModal>
                    )}
                  </ReplyWrapper>
                </ReviewWrapper>
                <ReplyWrapper>
                  <ReplyForm reply={reply} />
                </ReplyWrapper>
              </ReviewItem>
            ))}
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
  max-height: 1400px;
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
  width: 700px;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  position: relative;
`;

const ContentWrapper = styled.div`
  margin-top: 1.8rem;
  width: 500px;
  height: 170px;
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
  bottom: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 200px;
  height: 180px;
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
const AlertModal = styled(Modal)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    border: none;
  }
`;
const EditModal = styled(Modal)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    border: none;
  }
`;
const EditHeader = styled(ModalHeader)`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 10px;
  font-size: 24px;
  border: none;
`;

const AlertHeader = styled(ModalHeader)`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 10px;
  font-size: 24px;
  border: none;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "KOTRA_GOTHIC";
  text-align: center;
  p {
    margin: 0 0 8px;
  }
`;

const Footer = styled(ModalFooter)`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const SaveButton = styled.button`
  background-color: #dc3545;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  margin-right: 10px;
`;

const CancelButton = styled.button`
  background-color: #1e3050;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: block;
  margin-right: 4rem;
  width: 100%;
  text-align: right;
  height: 40px;
`;
