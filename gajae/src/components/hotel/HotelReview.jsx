import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  // text-align: center;
  background-color: #b0daff;
  // padding: 0.5em;
  position: relative;
  font-family: "Pretendard-Regular";
  font-size: 30px;
`;
const GradeBtn = styled.button`
 / position: absolute;
  left: 0.5em;
  /top: 100%;
  margin:1em;
  padding: 0.2em;
  border-bottom-right-radius: 20%;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  background-color: #0071c2;
  outline: 0;
  border: 0;
  font-weight: bolder;
`;
const RateDiv = styled.div`
  width: 100%;
  position: relative;
  border-top: 2px;
  font-family: "Pretendard-Regular";
  font-size: 20px;
`;
const HotelReview = () => {
  return (
    <>
      <div className="title">이용후기</div>
      <GradeBtn>8.9</GradeBtn>
      <RateDiv>항목별 점수</RateDiv>

      {/* <div className="title">이용후기</div> */}
    </>
  );
};

export default HotelReview;
