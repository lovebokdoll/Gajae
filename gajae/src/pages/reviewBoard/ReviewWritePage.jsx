import React, { useEffect, useRef } from "react";
import {
  ContainerDiv,
  Custom_btn,
  FormDiv,
  HeaderDiv,
  Hr,
  Title,
} from "../../style/FormStyle";
import HeaderNav1 from "../../components/header/HeaderNav1";
import Footer from "../../components/footer/Footer";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reviewInsertDB } from "../../service/reviewboardLogic";
import ReviewScore from "./ReviewScore";
import ImageUpload from "./ImageUpload";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *
 * @returns  글쓰기 페이지
 */
const ReviewWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); //사용자가 입력한 제목 담기
  const [reviewgood, setReviewgood] = useState(""); //사용자가 입력한 내용 담기
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageBad, setErrorMessageBad] = useState("");
  const [reviewbad, setReviewbad] = useState("");
  const [service, setService] = useState(0);
  const [facility, setFacility] = useState(0);
  const [clean, setClean] = useState(0);
  const [cost, setCost] = useState(0);
  const [location, setLocation] = useState(0);
  const textareaRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const handleTitle = (value) => {
    setTitle(value);
  };

  const handleGood = (value) => {
    setReviewgood(value);
  };

  const handleBad = (value) => {
    setReviewbad(value);
  };

  const handleReviewScore = useCallback(
    (setter) => (value) => {
      setter(Number(value));
    },
    []
  );
  const getImage = (imageUrl) => {
    setImageUrl(imageUrl);
    console.log(imageUrl);
  };

  const reviewInsert = async () => {
    const review = {
      REVIEW_NUMBER: 0,
      R_NUMBER: 0,
      REVIEW_TITLE: title,
      REVIEW_GOOD: reviewgood,
      REVIEW_BAD: reviewbad,
      REVIEW_DATE: 0,
      REVIEW_PHOTO: imageUrl,
      REVIEW_SERVICE: service,
      REVIEW_FACILITY: facility,
      REVIEW_CLEAN: clean,
      REVIEW_COST: cost,
      REVIEW_LOCATION: location,
    };
    const res = await reviewInsertDB(review);
    console.log(res.data);
    navigate("/mypage/review");
  };

  const handleInputBlur = () => {
    if (reviewgood.length <= 20) {
      setErrorMessage("20자 이상 입력하세요.");
    } else if (reviewgood.length > 100) {
      setErrorMessage("100자 이하로 입력하세요.");
    } else {
      setErrorMessage("");
    }
  };
  /* 디자인 적인 요소   */
  const handleInputBlurBad = () => {
    if (reviewbad.length <= 20) {
      setErrorMessageBad("20자 이상 입력하세요.");
    } else if (reviewgood.length > 100) {
      setErrorMessageBad("100자 이하로 입력하세요.");
    } else {
      setErrorMessageBad("");
    }
  };

  return (
    <>
      <HeaderNav1 />
      <ContainerDiv>
        <div
          style={{
            textAlign: "center",
            margin: "50px 0",
            border: "1px solid",
            padding: "10px",
            backgroundColor: "white",
          }}
        >
          <span style={{ margin: "10%" }}>
            <FontAwesomeIcon icon="fa-solid fa-door-open" />
            다녀왔던 장소에 대한 팁이 있다면? 최근 여행을 평가해주세요
          </span>
        </div>
        <HeaderDiv>
          <Title>Review</Title>
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
              <Custom_btn type="button" onClick={reviewInsert}>
                글쓰기
              </Custom_btn>
            </div>
            <Textarea
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
                marginBottom: "10px",
              }}
            />
            <h5>상세내용</h5>
            <hr style={{ margin: "10px 0px 20px 0px" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h6>
                <i className="fa-regular fa-face-smile"></i>
                좋았던 점
              </h6>
              <h6>20/100</h6>
            </div>
            <Textarea
              id="dataset-good"
              ref={textareaRef}
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
              onBlur={handleInputBlur}
            />
            <ErrorDiv style={{ marginTop: "5px" }}>{errorMessage}</ErrorDiv>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
                marginTop: "10px",
              }}
            >
              <h6>
                <i className="fa-regular fa-face-frown"></i>
                아쉬운 점
              </h6>
              <h6>20자 이상</h6>
            </div>
            <Textarea
              id="dataset-bad"
              ref={textareaRef}
              maxLength="50"
              placeholder="이용하신 상품의 자세한 리뷰를 남겨주세요."
              style={{
                width: "100%",
                height: "100px",
                border: "1px solid lightGray",
                marginBottom: "10px",
              }}
              onChange={(e) => {
                handleBad(e.target.value);
              }}
              onBlur={handleInputBlurBad}
            />
            <ErrorDiv>{errorMessageBad}</ErrorDiv>
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
                border: "1px solid lightGray",
                borderRadius: "10px",
                minHeight: "60px",
                padding: "5px",
                transition: "height 0.3s ease-in-out",
                backgroundColor: "white",
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
              <ImageUpload getImage={getImage} />
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

export default ReviewWritePage;

const ErrorDiv = styled.div`
  color: red;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid lightGray;
  padding: 5px;
  &:focus {
    outline: 5px solid #e7f1ff;
  }
`;

const TipDiv = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  font-family: "KOTRA_GOTHIC";
  justify-content: space-between;
  align-items: center; /* 수평 중앙 정렬 */
  width: 90%;
  margin: 30px;
  border: 1px solid #e7e7e7;
`;
