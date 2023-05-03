import React from "react";
import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";

const ReviewProgressBar = ({ review }) => {
  console.log(review);
  let cleanScore = 0;
  let facilityScore = 0;
  let serviceScore = 0;
  let costScore = 0;
  let locationScore = 0;

  let numReviews = 0;
  console.log(review);

  if (Array.isArray(review) && review.length > 0) {
    review.forEach((item) => {
      cleanScore += item.REVIEW_CLEAN;
      facilityScore += item.REVIEW_FACILITY;
      locationScore += item.REVIEW_LOCATION;
      serviceScore += item.REVIEW_SERVICE;
      costScore += item.REVIEW_COST;
      numReviews += 1;
    });
  }
  console.log(cleanScore);

  //각 학몽의 총합을 리뷰의 총 개수로 나누어 평균
  const avgCleanScore = Math.floor(cleanScore / numReviews);
  const avgServiceScore = Math.floor(serviceScore / numReviews);
  const avgCostScore = Math.floor(costScore / numReviews);
  const avgLocationScore = Math.floor(locationScore / numReviews);
  const avgFacilityScore = Math.floor(facilityScore / numReviews);

  console.log(avgCleanScore);
  console.log(avgLocationScore);
  return (
    <>
      <GridContainer class="grid-container">
        <GridItem class="grid-item item1">
          <ItemContentWrapper>
            <LabelWrapper style={{ flex: 1 }}>친절도</LabelWrapper>
            <LabelWrapper style={{ textAlign: "right" }}>
              {avgServiceScore}
            </LabelWrapper>
          </ItemContentWrapper>
          <ProgressBar variant="ProgressBar" now={avgServiceScore * 10} />
        </GridItem>
        <GridItem class="grid-item item2">
          <ItemContentWrapper>
            <LabelWrapper>시설</LabelWrapper>
            <LabelWrapper style={{ textAlign: "right" }}>
              {avgFacilityScore}
            </LabelWrapper>
          </ItemContentWrapper>
          <ProgressBar variant="ProgressBar" now={avgFacilityScore * 10} />
        </GridItem>
        <GridItem class="grid-item item3">
          <ItemContentWrapper>
            <LabelWrapper>청결도</LabelWrapper>
            <LabelWrapper style={{ textAlign: "right" }}>
              {avgCleanScore}
            </LabelWrapper>
          </ItemContentWrapper>
          <ProgressBar variant="ProgressBar" now={avgCleanScore * 10} />
        </GridItem>
        <GridItem class="grid-item item4">
          <ItemContentWrapper>
            <LabelWrapper>가성비</LabelWrapper>
            <LabelWrapper style={{ textAlign: "right" }}>
              {avgCostScore}
            </LabelWrapper>
          </ItemContentWrapper>
          <ProgressBar variant="ProgressBar" now={avgCostScore * 10} />
        </GridItem>
        <GridItem class="grid-item item5">
          <ItemContentWrapper>
            <LabelWrapper>위치</LabelWrapper>
            <LabelWrapper style={{ textAlign: "right" }}>
              {avgLocationScore}
            </LabelWrapper>
          </ItemContentWrapper>
          <ProgressBar variant="ProgressBar" now={avgLocationScore * 10} />
        </GridItem>
      </GridContainer>
      <p style={{ fontSize: "0.8rem", textAlign: "right" }}>
        평점은 소수점을 버리고 정수로 계산됩니다{" "}
      </p>
    </>
  );
};

export default ReviewProgressBar;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3개의 열, 각 열은 같은 너비
  grid-template-rows: repeat(5, 1fr); // 5개의 행, 각 행은 같은 높이
  gap: 10px; // 디브간의 간격
  width: 900px;
  height: 180px;
`;

const GridItem = styled.div`
  background-color: whigt;
  margin-left: 20px;
`;
const LabelWrapper = styled.div`
  font-size: 0.9rem;
  flex: 1;
`;
const ItemContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0px 20px 0px;
`;
