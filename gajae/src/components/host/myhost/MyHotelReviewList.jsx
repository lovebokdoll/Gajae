import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Modal, ModalFooter, ModalHeader } from 'react-bootstrap';
import styled from 'styled-components';
import { hostReviewListDB } from '../../../service/host/hostReview/hostReview';
import ReplyForm from './ReplyForm';
import { replyInsertDB, replyListDB, replyUpdateDB } from '../../../service/host/hostReview/hostReply';

const MyHotelReviewList = ({ hostId }) => {
  const [hostReviews, setHostReviews] = useState([]); //고객의 리뷰리스트
  const [showModal, setShowModal] = useState(false); //새 댓글 모달창
  const [editShowModal, setEditShowModal] = useState(false);
  //모달창, 수정 모달창
  const handleEditShow = () => setEditShowModal(true);
  const handleEditClose = () => {
    setEditShowModal(false);
  };
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
  };

  const [reply, setReply] = useState(""); // 새댓글시
  const [content, setContent] = useState([]); //서버에서 가져온 댓글정보

  const handleContent = (value) => {
    setReply(value);
  };
  const reviewNumber =
    hostReviews.length > 0 ? hostReviews[0].REVIEW_NUMBER : null;
  const replyInsert = async () => {
    const hostreply = {
      HOST_ID: hostId,
      REPLY_CONTENT: reply,
      REVIEW_NUMBER: reviewNumber,
    };
    const res = await replyInsertDB(hostreply);
    console.log(res.data);
    await getReply(reviewNumber);
    handleClose();
  };

  const getReply = async (reviewNumber) => {
    const res = await replyListDB({ REVIEW_NUMBER: reviewNumber });
    console.log('res.data ===>', res.data);
    if (res) {
      setContent(res.data);
      console.log(res.data);
    }
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
  const [editContent, setEditContent] = useState('');

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
  console.log(content);

  console.log(hostReviews);
  const [currentPage, setCurrentPage] = useState(1); //페이지네이션 처리
  const pageNumber = [];
  return (
    <>
      <BackDiv>
        <h3 style={{ fontWeight: 'bold' }}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" bounce style={{ color: '#010813' }} />
          &nbsp; 이용후기
        </h3>
        <EmtyDiv></EmtyDiv>
        <ReviewList>
          {hostReviews &&
            hostReviews.map((review, index) => (
              <ReviewItem key={index}>
                <ReviewWrapper>
                  <div
                    style={{
                      fontSize: '1.2rem',
                      textAlign: 'left',
                      marginLeft: '1rem',
                      padding: '0.2rem',
                    }}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-hotel" />
                    &nbsp;&nbsp;{review.P_TITLE}
                  </div>
                  <hr
                    style={{
                      width: '100%',
                      margin: '0',
                      padding: '0',
                      border: 'none',
                      borderTop: '2px solid lightgray',
                    }}
                  />
                  <div
                    style={{
                      fontSize: '1.2rem',
                      textAlign: 'left',
                      marginLeft: '1rem',
                      padding: '0.2rem',
                    }}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    &nbsp;&nbsp;고객의 리뷰
                  </div>
                  <hr
                    style={{
                      width: '100%',
                      margin: '0',
                      border: 'none',
                      borderTop: '2px solid lightgray',
                    }}
                  />
                  <WrapperDiv>
                    <ImageContainer>
                      <img src={review.REVIEW_PHOTO ? review.REVIEW_PHOTO : 'https://via.placeholder.com/150'} alt="placeholder image" />
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
                          style={{ marginBottom: '8' }}
                          onClick={() => handleEditReply(reply)}
                        >
                          수정
                        </button>
                      ) : (
                        <button type="button" className="btn btn-warning" style={{ marginBottom: '8%' }} onClick={handleShow}>
                          답변
                        </button>
                      )}
                    </ButtonContainer>
                    {/* --------------모달창 입력 부분------------------ */}
                    {showModal && (
                      <AlertModal show={showModal} onHide={handleClose}>
                        <AlertHeader>
                          &nbsp;&nbsp;&nbsp;
                          <FontAwesomeIcon icon="fa-solid fa-quote-right" style={{ color: '#1e3050' }} />
                        </AlertHeader>
                        <ActionContainer>
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a comment here"
                              id="floatingTextarea"
                              style={{ width: "430px", height: "400px" }}
                              value={reply}
                              onChange={(e) => {
                                handleContent(e.target.value);
                              }}
                            ></textarea>
                            <label htmlFor="floatingTextarea">&nbsp; 답변을 작성해주세요!</label>
                          </div>
                        </ActionContainer>
                        <Footer>
                          <SaveButton onClick={replyInsert}>저장</SaveButton>
                          <CancelButton onClick={handleClose}>취소</CancelButton>
                        </Footer>
                      </AlertModal>
                    )}
                    {content && (
                      <EditModal show={editShowModal} onHide={handleClose}>
                        <EditHeader>
                          &nbsp;&nbsp;&nbsp;
                          <FontAwesomeIcon icon="fa-solid fa-quote-right" style={{ color: '#1e3050' }} />
                        </EditHeader>
                        <ActionContainer>
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a comment here"
                              id="floatingTextarea"
                              style={{ width: '430px', height: '400px' }}
                              value={editContent}
                              onChange={(e) => {
                                setEditContent(e.target.value);
                              }}
                            ></textarea>
                            <label htmlFor="floatingTextarea">&nbsp; 답변을 작성해주세요!</label>
                          </div>
                        </ActionContainer>
                        <Footer>
                          <SaveButton onClick={replyUpdate}>수정</SaveButton>
                          <CancelButton onClick={handleEditClose}>취소</CancelButton>
                        </Footer>
                      </EditModal>
                    )}
                  </ReplyWrapper>
                </ReviewWrapper>
                <ReplyWrapper>
                  <ReplyForm content={content} />
                </ReplyWrapper>
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

export default MyHotelReviewList;

const BackDiv = styled.div`
  display: block;
  flex-direction: column;
  margin-left: 20px;
  max-width: 1000px;
  min-height: 900px;
  max-height: 1400px;
  align-items: center;
`;

const ReviewList = styled.ul`
  margin: 0px;
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

const EmtyDiv = styled.div`
  height: 30px;
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
  font-family: 'KOTRA_GOTHIC';
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

const ButtonContainer = styled.div`
  display: block;
  margin-right: 4rem;
  width: 100%;
  text-align: right;
  height: 40px;
`;
