import React from "react";
import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";

const ReviewProgressBar = ({ review }) => {
  console.log(review);
  return (
    <>
      <GridContainer class="grid-container">
        <GridItem class="grid-item item1">
          <ItemContentWrapper>
            <LabelWrapper style={{ flex: 1 }}>친절도</LabelWrapper>
            <LabelWrapper style={{ textAlign: "right" }}>8.9</LabelWrapper>
          </ItemContentWrapper>
          <ProgressBar variant="ProgressBar" now={40} />
        </GridItem>
        <GridItem class="grid-item item2">
          <ItemContentWrapper>
            <LabelWrapper>시설</LabelWrapper>
            <LabelWrapper style={{ textAlign: "right" }}>8.9</LabelWrapper>
          </ItemContentWrapper>
          <ProgressBar variant="ProgressBar" now={60} />
        </GridItem>
        <GridItem class="grid-item item3">
          <ItemContentWrapper>
            <LabelWrapper>청결도</LabelWrapper>
            <LabelWrapper style={{ textAlign: "right" }}>8.9</LabelWrapper>
          </ItemContentWrapper>
          <ProgressBar variant="ProgressBar" now={40} />
        </GridItem>
        <GridItem class="grid-item item4">
          <ItemContentWrapper>
            <LabelWrapper>가성비</LabelWrapper>
            <LabelWrapper style={{ textAlign: "right" }}>8.9</LabelWrapper>
          </ItemContentWrapper>
          <ProgressBar variant="ProgressBar" now={40} />
        </GridItem>
        <GridItem class="grid-item item5">
          <ItemContentWrapper>
            <LabelWrapper>위치</LabelWrapper>
            <LabelWrapper style={{ textAlign: "right" }}>8.9</LabelWrapper>
          </ItemContentWrapper>
          <ProgressBar variant="warning" now={40} />
        </GridItem>
      </GridContainer>
    </>
  );
};

export default ReviewProgressBar;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3개의 열, 각 열은 같은 너비
  grid-template-rows: repeat(5, 1fr); // 5개의 행, 각 행은 같은 높이
  gap: 10px; // 디브간의 간격
  border: 1px solid #ccc; // 그리드에 테두리 씌우기
  width: 900px;
  height: 180px;
`;

const GridItem = styled.div`
  background-color: whigt;
  margin-left: 10px;
`;
const LabelWrapper = styled.div`
  font-size: 18px;
  flex: 1;
`;
const ItemContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 10px 0px;
`;
