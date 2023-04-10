import React from "react";
import {
  BButton,
  ContainerDiv,
  DragFileWrapper,
  FormDiv,
  HeaderDiv,
  ImageWrapper,
  UploadBoxWrapper,
} from "../../style/FormStyle";
import HeaderNav1 from "../../components/header/HeaderNav1";
import Footer from "../../components/footer/Footer";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reviewInsertDB } from "../../service/reviewboardLogic";
import ReviewScore from "./ReviewScore";
import firebaseApp from "../../service/firebase";
import { uploadBytes, ref, getStorage, getDownloadURL } from "firebase/storage";
import ImageUpload from "./ImageUpload";

/**
 *
 * @returns  글쓰기 페이지
 */
const ReviewWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); //사용자가 입력한 제목 담기
  const [reviewgood, setReviewgood] = useState(""); //사용자가 입력한 내용 담기
  const [reviewbad, setReviewbad] = useState("");
  const [service, setService] = useState(0);
  const [facility, setFacility] = useState(0);
  const [clean, setClean] = useState(0);
  const [cost, setCost] = useState(0);
  const [location, setLocation] = useState(0);

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
  const reviewInsert = async () => {
    console.log(reviewInsert);
    const review = {
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
    const res = await reviewInsertDB(review);
    console.log(res.data);
  };
  //성공 시 페이지 이동 처리 부분
  //navigate("/review");

  return (
    <>
      <HeaderNav1 />
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{ marginLeft: "10px" }}>Review</h3>
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
              <BButton onClick={reviewInsert}>글쓰기</BButton>
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
              <h4>좋았던 점</h4>
              <h6>20자 이상</h6>
            </div>
            <input
              id="dataset-pw"
              type="text"
              maxLength="50"
              placeholder="이용하신 상품의 자세한 리뷰를 남겨주세요."
              style={{
                width: "100%",
                height: "80px",
                border: "1px solid lightGray",
                marginBottom: "5px",
              }}
              onChange={(e) => {
                handleGood(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h4>아쉬운 점</h4>
              <h6>20자 이상</h6>
            </div>
            <input
              id="dataset-pw"
              type="text"
              maxLength="50"
              placeholder="이용하신 상품의 자세한 리뷰를 남겨주세요."
              style={{
                width: "100%",
                height: "80px",
                border: "1px solid lightGray",
                marginBottom: "5px",
              }}
              onChange={(e) => {
                handleBad(e.target.value);
              }}
            />
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
                height: "500px",
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

export default ReviewWritePage;
