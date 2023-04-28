import React, { useCallback, useEffect, useRef, useState } from "react";
import HeaderNav1 from "../../components/header/HeaderNav1";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { myReviewDB, reviewUpdateDB } from "../../service/reviewboardLogic";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageUpload from "../../components/review/ImageUpload";
import ReviewScore from "../../components/review/ReviewScore";

export const ReviewUpdate = () => {
  const param = useLocation();
  const reviewNumber = new URLSearchParams(param.search).get("review_number");

  const [title, setTitle] = useState("");
  const [reviewgood, setReviewgood] = useState("");
  const [reviewbad, setReviewbad] = useState("");
  const [service, setService] = useState(0);
  const [facility, setFacility] = useState(0);
  const [clean, setClean] = useState(0);
  const [cost, setCost] = useState(0);
  const [location, setLocation] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageBad, setErrorMessageBad] = useState("");

  const textareaRef = useRef(null);

  useEffect(() => {
    const myReview = async () => {
      const review = {
        REVIEW_NUMBER: reviewNumber,
      };
      const res = await myReviewDB(review);
      console.log(res.data);
      const temp = JSON.stringify(res.data); // 문자열 전화
      const jsonDoc = JSON.parse(temp); // 배열 접근 처리
      console.log(jsonDoc);
      setTitle(jsonDoc[0].REVIEW_TITLE);
      setReviewgood(jsonDoc[0].REVIEW_GOOD);
      setReviewbad(jsonDoc[0].REVIEW_BAD);
      setImageUrl(jsonDoc[0].REVIEW_PHOTO);
      setService(jsonDoc[0].REVIEW_SERVICE);
      setFacility(jsonDoc[0].REVIEW_FACILITY);
      setClean(jsonDoc[0].REVIEW_CLEAN);
      setCost(jsonDoc[0].REVIEW_LOCATION);
      setLocation(jsonDoc[0].REVIEW_COST);
    };
    myReview();
  }, []);
  console.log(imageUrl);
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

  const reviewUpdate = async () => {
    if (title.trim === "||content.trim()===")
      return alert("게시글 수정에 실패했습니다. ");
    const review = {
      REVIEW_NUMBER: reviewNumber,
      REVIEW_TITLE: title,
      REVIEW_GOOD: reviewgood,
      REVIEW_BAD: reviewbad,
      REVIEW_PHOTO: imageUrl,
      REVIEW_SERVICE: service,
      REVIEW_FACILITY: facility,
      REVIEW_CLEAN: clean,
      REVIEW_COST: cost,
      REVIEW_LOCATION: location,
    };
    const res = await reviewUpdateDB(review);
    if (!res.data) return alert("게시글 수정에 실패하였습니다.");
    window.location.href = "/mypage/review";
  };

  const getImage = (image) => {
    setImageUrl(image);
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
        <ContentDiv>
          <TopDiv style={{ backgroundColor: "white" }}>
            <span style={{ margin: "10%" }}>
              <FontAwesomeIcon icon="fa-solid fa-door-open" />
              다녀왔던 장소에 대한 팁이 있다면? 최근 여행을 평가해주세요
            </span>
          </TopDiv>
          <HeaderDiv>
            <Title>Review Update</Title>
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
                <Custom_btn type="button" onClick={reviewUpdate}>
                  글쓰기
                </Custom_btn>
              </div>
              <Textarea
                id="dataset-title"
                type="text"
                value={title}
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
                value={reviewgood}
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
                value={reviewbad}
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
                <ImageUpload imageUrl={imageUrl} getImage={getImage} />
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
        </ContentDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default ReviewUpdate;

const TopDiv = styled.div`
  text-align: left;
  width: 850px;
  margin: 40px 0 10px 0;
  border: 1px solid;
  padding: 10px;
  backgroundcolor: white;
`;
const HeaderDiv = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin-top: 25px;
  justify-content: center;
  margin-bottom: 10px;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "KOTRA_GOTHIC";
  margin-bottom: 50px;
  align-items: center;
  background-color: #f5f5f5;
`;
const ContentDiv = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 20px;
  padding: 10px;
  width: 850px;
  justify-content: space-between;
`;

export const Hr = styled.hr`
  border-top: 1px solid black;
  height: 1px;
  background-color: black;
`;
export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  marginleft: "10px";
`;
export const ErrorDiv = styled.div`
  color: red;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid lightGray;
  padding: 5px;
  &:focus {
    outline: 2px solid #2e9afe;
  }
`;

export const Custom_btn = styled.button`
background-color: #fff;
color: #0d6efd;
height: 30px;
border: 1px solid #0d6efd;
border-radius: 5px;
padding: 5px 10px;
font-size: 16px;
cursor: pointer;
display: inline-flex; /* 수정된 부분 */
align-items: center; /* 수정된 부분 */
&:hover {
  background-color: #007bff;
  color: #fff;
  `;
