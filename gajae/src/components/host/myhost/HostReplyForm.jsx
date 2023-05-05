import React, { useEffect, useState } from "react";
import { replyInsertDB } from "../../../service/host/hostReview/hostReply";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Modal, ModalFooter, ModalHeader } from "react-bootstrap";

const HostReplyForm = ({
  showModal,
  onHide,
  hostId,
  reviewNumber,
  setComment,
}) => {
  const [reply, setReply] = useState("");

  const handleContent = (value) => {
    setReply(value);
  };

  const replyInsert = async () => {
    const hostreply = {
      HOST_ID: hostId,
      REPLY_CONTENT: reply,
      REVIEW_NUMBER: reviewNumber,
    };
    const res = await replyInsertDB(hostreply);
    console.log(res.data);
    const newComment = res.data;

    setComment((comment) => [...comment, newComment[0]]);
    console.log(setComment);
    setReply("");
    onHide();
  };

  return (
    <>
      <AlertModal show={showModal} onHide={onHide}>
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
              value={reply}
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
          <CancelButton onClick={onHide}>취소</CancelButton>
        </Footer>
      </AlertModal>
    </>
  );
};

export default HostReplyForm;

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

const Footer = styled(ModalFooter)`
  display: flex;
  justify-content: center;
  margin-top: 24px;
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
