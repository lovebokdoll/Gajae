import React, { useState } from "react";
import { Modal, ModalFooter, ModalHeader } from "react-bootstrap";
import styled from "styled-components";
import { replyUpdateDB } from "../../../service/host/hostReview/hostReply";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HostReplyUpdate = ({ editShowModal, onHide, comment, setComment }) => {
  const [editContent, setEditContent] = useState("");

  const handleContent = (value) => {
    setEditContent(value);
  };
  console.log(comment);
  const replyUpdate = async () => {
    const updatedReply = {
      REPLY_NUMBER: comment[0].REPLY_NUMBER,
      REPLY_CONTENT: editContent,
    };
    const res = await replyUpdateDB(updatedReply);
    setComment((prevState) => {
      const newComment = [...prevState];
      newComment[0].REPLY_CONTENT = editContent;
      return newComment;
    });
    onHide();
    /* window.location.href = "/host/myhotelreview"; */
  };
  return (
    <>
      <AlertModal show={editShowModal} onHide={onHide}>
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
          <SaveButton onClick={replyUpdate}>수정</SaveButton>
          <CancelButton onClick={onHide}>취소</CancelButton>
        </Footer>
      </AlertModal>
    </>
  );
};

export default HostReplyUpdate;

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
