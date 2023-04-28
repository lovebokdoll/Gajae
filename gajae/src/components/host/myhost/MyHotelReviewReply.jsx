import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal, ModalFooter, ModalHeader } from "react-bootstrap";
import styled from "styled-components";
import { replyInsertDB } from "../../../service/reviewboardLogic";

const MyHotelReviewReply = ({
  handleClose,
  showModal,
  hostReviews,
  hostId,
  handleReply,
}) => {
  const [content, setContent] = useState("");

  const handleContent = (value) => {
    setContent(value);
  };
  const reviewNumber = hostReviews[0].REVIEW_NUMBER;

  const replyInsert = async () => {
    const reply = {
      HOST_ID: hostId,
      REPLY_CONTENT: content,
      REVIEW_NUMBER: reviewNumber,
    };
    const res = await replyInsertDB(reply);
    console.log(res.data);
    handleClose();
  };

  return (
    <>
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
          <CancelButton onClick={handleClose}>취소</CancelButton>
        </Footer>
      </AlertModal>
    </>
  );
};

export default MyHotelReviewReply;

const AlertModal = styled(Modal)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    border: none;
  }
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
