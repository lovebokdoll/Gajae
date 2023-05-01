import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const HotelReviewReply = ({ review }) => {
  return (
    <>
      <SpeechBubbleDiv>
        <div style={{ color: "#086eb8" }}>
          <FontAwesomeIcon icon="fa-regular fa-comment-dots" />
          &nbsp;호텔 답변 :
        </div>
        <div>{review.REPLY_CONTENT}</div>
        <p style={{ marginTop: "8%", textAlign: "right", color: "#006ce3" }}>
          {review.REPLY_DATE}
        </p>
      </SpeechBubbleDiv>
    </>
  );
};

export default HotelReviewReply;

const SpeechBubbleDiv = styled.div`
  /* layout */
  position: relative;
  width: 600px;
  height: 140px;

  /* looks */
  background-color: #f5f5f5;
  padding: 1.125em 1.5em;
  font-size: 1em;
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
