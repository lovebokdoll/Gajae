import React from "react";
import {
  BButton,
  ContainerDiv,
  FormDiv,
  HeaderDiv,
} from "../../style/FormStyle";
import HeaderNav1 from "../../components/header/HeaderNav1";
import Footer from "../../components/footer/Footer";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reviewInsertDB } from "../../service/reviewboardLogic";

/**
 *
 * @returns  글쓰기 페이지
 */
const ReviewWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); //사용자가 입력한 제목 담기
  const [reviewgood, setReviewgood] = useState(""); //사용자가 입력한 내용 담기
  const [reviewbad, setReviewbad] = useState("");

  const handleTitle = useCallback((value) => {
    setTitle(value);
  }, []);

  const handleGood = useCallback((value) => {
    //quilleditor에서 담김 - 태그포함된 정보
    setReviewgood(value);
  }, []);

  const handleBad = useCallback((value) => {
    //quilleditor에서 담김 - 태그포함된 정보
    setReviewbad(value);
  }, []);

  const reviewInsert = async () => {
    console.log("reviewInsert");
    const review = {
      REVIEW_NUMBER: 0,
      R_NUMBER: 0,
      P_ID: "상수한번더",
      REVIEW_TITLE: title,
      REVIEW_GOOD: reviewgood,
      REVIEW_BAD: reviewbad,
      REVIEW_DATE: "",
      USER_NICKNAME: "상수박아",
    };
    const res = await reviewInsertDB(review);
    console.log(res.data);
    //navigate("/review");
  };
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
                marginBottom: "5px",
              }}
            >
              <h3>제목</h3>
              <BButton
                onClick={() => {
                  reviewInsert();
                }}
              >
                글쓰기
              </BButton>
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
                marginBottom: "5px",
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
                height: "150px",
                border: "1px solid lightGray",
                borderRadius: "10px",
                minHeight: "60px",
                padding: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                }}
              >
                <h3>첨부파일</h3>
              </div>
              <input
                id="file-input"
                name="file_name"
                type="file"
                maxLength="50"
                className="visuallyhidden"
              />

              <div class="dropdown">
                <div class="btn-group">
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    직원 친절도
                  </button>
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    시설
                  </button>
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    청결도
                  </button>
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    가성비
                  </button>
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    위치점수
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FormDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default ReviewWritePage;
