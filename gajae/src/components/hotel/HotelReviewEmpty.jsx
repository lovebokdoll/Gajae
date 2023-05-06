import React from "react";
import { CloseButton } from "react-bootstrap";
import styled from "styled-components";

const HotelReviewEmpty = ({ handleClose }) => {
  return (
    <>
      <TitleContainer>
        <BtnClose onClick={handleClose}></BtnClose>
        <Title>
          "첫 리뷰어가 되어보세요! 이 숙소는 아직 리뷰가 없습니다. <br />
          다른 이용자들을 위해 여러분의 경험을 공유해주세요!"
        </Title>
      </TitleContainer>
      <hr />
      <BackDiv></BackDiv>
    </>
  );
};

export default HotelReviewEmpty;

const BackDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;
const Title = styled.div`
  text-align: left;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #286a42;
  flex-grow: 1;
`;

const BtnClose = styled(CloseButton)`
  margin-right: 50px;
`;
