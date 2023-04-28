import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { replyListDB } from "../../service/reviewboardLogic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReplyForm = ({ reply }) => {
  console.log(reply);
  return (
    <>
      {reply &&
        reply.length > 0 &&
        reply.map((res, index) => (
          <SpeechBubbleDiv key={index}>
            <div style={{ color: "#086eb8" }}>
              <FontAwesomeIcon icon="fa-regular fa-comment-dots" />
              &nbsp;호텔 답변 :
            </div>
            <div>{res.REPLY_CONTENT}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ marginTop: "12%" }}>{res.REPLY_DATE}</div>
            </div>
          </SpeechBubbleDiv>
        ))}
    </>
  );
};

export default ReplyForm;

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
