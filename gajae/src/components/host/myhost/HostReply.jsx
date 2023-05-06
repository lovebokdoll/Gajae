import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import styled from "styled-components";

const HostReply = ({ comment }) => {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {comment &&
          comment.map((reply, index) => (
            <li key={index}>
              <SpeechBubbleDiv>
                <div
                  style={{
                    color: "#086eb8",
                    marginBottom: "0.3rem",
                    fontSize: "1.3rem",
                  }}
                >
                  <FontAwesomeIcon icon="fa-regular fa-comment-dots" />
                  &nbsp;호텔 답변 :
                </div>
                <div>{reply.REPLY_CONTENT}</div>
                <p
                  style={{
                    marginTop: "12%",
                    textAlign: "right",
                    color: "#006ce3",
                  }}
                >
                  {reply.REPLY_DATE}
                </p>
              </SpeechBubbleDiv>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HostReply;

const SpeechBubbleDiv = styled.div`
  /* layout */
  position: relative;
  width: 580px;
  height: 180px;

  /* looks */
  background-color: #f5f5f5;
  padding: 1.125em 1.5em;
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
