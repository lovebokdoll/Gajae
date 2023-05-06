import React, { useEffect, useState } from "react";
import { hostReviewListDB } from "../../../service/host/hostReview/hostReview";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyHotelReview = ({ hostId }) => {
  const [hostReviews, setHostReviews] = useState([]);

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

  console.log(hostReviews);
  return (
    <>
      <BackDiv>
        <h3 style={{ fontWeight: "bold" }}>
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            bounce
            style={{ color: "#010813" }}
          />
          &nbsp; 내 호텔후기
        </h3>
        <EmtyDiv></EmtyDiv>
        <RvList>
          {hostReviews &&
            hostReviews.map((review, index) => (
              <li key={index}>
                <RvItem>
                  <Link
                    to={`/reviewNumber/${review.REVIEW_NUMBER}`}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      marginLeft: "3rem",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                      }}
                    >
                      <FontAwesomeIcon
                        icon="fa-solid fa-check"
                        style={{ color: "#20365a" }}
                      />
                      &nbsp;&nbsp;&nbsp;&nbsp; 제목&nbsp;:&nbsp;
                      {review.REVIEW_TITLE}
                    </span>
                  </Link>
                  <span style={{ display: "flex", flexBasis: "30%" }}>
                    작성일&nbsp;:&nbsp;{review.REVIEW_DATE}
                  </span>
                </RvItem>
              </li>
            ))}
        </RvList>
      </BackDiv>
    </>
  );
};

export default MyHotelReview;

const EmtyDiv = styled.div`
  height: 20px;
`;

const BackDiv = styled.div`
  display: block;
  flex-direction: column;
  width: 700px;
  height: auto;
  align-items: center;
  margin-left: 2rem;
`;

const RvList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
`;

const RvItem = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: row; // 가로 방향으로 정렬
  justify-content: space-between;
  align-items: center; // 위아래 가운데 정렬
  border-radius: 10px;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  height: 70px;
  box-shadow: 0px 2px 5px rgba(24, 48, 83);
  transition: all 0.2s ease-in-out; // 애니메이션을 부드럽게 처리하기 위한 transition 추가
  &:hover {
    transform: scale(1.05); // 마우스 오버시 요소 크기를 105%로 늘림
    cursor: pointer; // 커서 모양을 포인터로 변경
  }
`;
