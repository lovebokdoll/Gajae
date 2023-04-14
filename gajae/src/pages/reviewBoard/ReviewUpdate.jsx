import React, { useCallback, useEffect, useState } from "react";
import ReviewScore from "./ReviewScore";
import {
  BButton,
  ContainerDiv,
  FormDiv,
  HeaderDiv,
} from "../../style/FormStyle";
import HeaderNav1 from "../../components/header/HeaderNav1";
import ImageUpload from "./ImageUpload";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { reviewListDB, reviewUpdatetDB } from "../../service/reviewboardLogic";
import styled from "styled-components";

export const ReviewUpdate = () => {
  const { REVIEW_NUMBER } = useParams();

  const [title, setTitle] = useState("");
  const [reviewgood, setReviewgood] = useState("");
  const [reviewbad, setReviewbad] = useState("");
  const [service, setService] = useState(0);
  const [facility, setFacility] = useState(0);
  const [clean, setClean] = useState(0);
  const [cost, setCost] = useState(0);
  const [location, setLocation] = useState(0);

  useEffect(() => {
    const reviewnum = async () => {
      console.log(res.data);
      const review = {
        REVIEW_NUMBER: REVIEW_NUMBER,
      };
      const res = await reviewListDB(review);
      const temp = JSON.stringify(res.data); // 문자열 전화
      const jsonDoc = JSON.parse(temp); // 배열 접근 처리
      setTitle(jsonDoc[0].QNA_TITLE);
      setReviewgood(jsonDoc[0].REVIEW_GOOD);
      setReviewbad(jsonDoc[0].REVIEW_BAD);
      setService(jsonDoc[0].SERVICE_RATING);
      setFacility(jsonDoc[0].FACILTY_RATING);
      setClean(jsonDoc[0].CLEAN_RATING);
      setCost(jsonDoc[0].COST_RATING);
      setLocation(jsonDoc[0].LOCATION_RATING);
    };
    reviewnum();
  }, []);

  const handleTitle = useCallback((value) => {
    setTitle(value);
  }, []);

  const handleGood = useCallback((value) => {
    setReviewgood(value);
  }, []);

  const handleBad = useCallback((value) => {
    setReviewbad(value);
  }, []);

  const handleReviewScore = useCallback(
    (setter) => (value) => {
      setter(Number(value));
    },
    []
  );

  /*   const reviewUpdate = async () => {
    if (title.trim() === "||reviewgood.trim()===")
      return alert("게시글 수정에 실패했습니다.");
    const review = {
      /////////////////////////////// 다시 작성해야해
      REVIEW_NUMBER: 0,
      R_NUMBER: 0,
      P_ID: "3",
      REVIEW_TITLE: title,
      REVIEW_GOOD: reviewgood,
      REVIEW_BAD: reviewbad,
      REVIEW_DATE: 0,
      USER_NICKNAME: "상수박아",
      SERVICE_RATING: service,
      FACILTY_RATING: facility,
      CLEAN_RATING: clean,
      COST_RATING: cost,
      LOCATION_RATING: location,
    };
    const res = await reviewUpdatetDB(review);
    if (!res.data) return alert("게시판 수정에 실패하였습니다.");
    // navigate("/qna/list");
  }; */
  const Hr = styled.hr`
    border-top: 1px solid black;
    height: 1px;
    background-color: black;
  `;
  const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    marginleft: "10px";
    text-decoration: underline;
  `;
  return (
    <>
      <HeaderNav1 />
      <ContainerDiv>
        <HeaderDiv>
          <Title>글수정</Title>
          <Hr />
        </HeaderDiv>

        <FormDiv>
          <div style={{ width: "100%", maxWidth: "2000px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "3px",
              }}
            >
              <h5>제목</h5>
              <BButton>글쓰기</BButton>
            </div>
            <input
              id="dataset-title"
              type="text"
              maxLength="50"
              placeholder="제목을 입력하세요."
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
              onChange={(e) => {
                handleTitle(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            />
            <h3>상세내용</h3>
            <hr style={{ margin: "10px 0px 10px 0px" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h4>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icon/emoji_smile_icon_185055.png"
                  }
                  alt="좋았던 점 아이콘"
                  style={{ width: "1em", height: "1em" }}
                />
                좋았던 점
              </h4>
              <h6>20/100</h6>
            </div>
            <Textarea
              id="dataset-good"
              /* ref={textareaRef} */
              maxLength="50"
              placeholder="이용하신 상품의 자세한 리뷰를 남겨주세요."
              style={{
                width: "100%",
                height: "100px",
                border: "1px solid lightGray",
                marginBottom: "5px",
              }}
              onChange={(e) => {
                handleGood(e.target.value);
              }}
              /*  onBlur={handleInputBlur} */
            />
            {/* <ErrorDiv>{errorMessage}</ErrorDiv> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h4>
                {" "}
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/icon/emoji_frown_icon_160176.png"
                  }
                  alt="아쉬운 점 아이콘"
                  style={{ width: "1em", height: "1em" }}
                />
                아쉬운 점
              </h4>
              <h6>20자 이상</h6>
            </div>
            <Textarea
              id="dataset-bad"
              maxLength="50"
              placeholder="이용하신 상품의 자세한 리뷰를 남겨주세요."
              style={{
                width: "100%",
                height: "100px",
                border: "1px solid lightGray",
                marginBottom: "5px",
              }}
              onChange={(e) => {
                handleBad(e.target.value);
              }}
              /*  onBlur={handleInputBlurBad} */
            />
            {/*   <ErrorDiv>{errorMessageBad}</ErrorDiv> */}
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5px",
              }}
            ></div>
            <div
              style={{
                display: "block",
                height: "700px",
                border: "1px solid lightGray",
                borderRadius: "10px",
                minHeight: "60px",
                padding: "5px",
              }}
            >
              {/*----------------------------------첨부파일-------------------------------------*/}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  alignItems: "center",
                }}
              ></div>
              <ImageUpload />
              <hr />
              {/*--------------------------------리뷰점수-------------------------------------  */}
              <ReviewScore
                handleReviewScore={handleReviewScore}
                service={service}
                setService={setService}
                facility={facility}
                setFacility={setFacility}
                clean={clean}
                setClean={setClean}
                cost={cost}
                setCost={setCost}
                location={location}
                setLocation={setLocation}
              />
            </div>
          </div>
        </FormDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
};
export default ReviewUpdate;

const ErrorDiv = styled.div`
  color: red;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid lightGray;
  padding: 5px;
  &:focus {
    outline: 2px solid #2e9afe;
  }
`;
