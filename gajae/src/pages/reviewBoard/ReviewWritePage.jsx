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
import { ToastContainer } from "react-bootstrap";

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
  const [cleanliness, setCleanliness] = useState(0);
  const [cost, setCost] = useState(0);
  const [location, setLocation] = useState(0);

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

  const handleService = useCallback((value) => {
    setService(Number(value));
  }, []);
  const handleFacility = useCallback((value) => {
    setFacility(Number(value));
  }, []);
  const handleCleanliness = useCallback((value) => {
    setCleanliness(Number(value));
  }, []);
  const handleCost = useCallback((value) => {
    setCost(Number(value));
  }, []);
  const handleLocation = useCallback((value) => {
    setLocation(Number(value));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 리뷰를 서버에 보내는 로직
  };

  const reviewInsert = async () => {
    console.log("reviewInsert");
    const review = {
      REVIEW_NUMBER: 0,
      R_NUMBER: 0,
      P_ID: "3",
      REVIEW_TITLE: title,
      REVIEW_GOOD: reviewgood,
      REVIEW_BAD: reviewbad,
      REVIEW_DATE: 0,
      USER_NICKNAME: "상수박아",
      REVIEW_SERVICE: service,
      REVIEW_FACILITY: facility,
      REVIEW_CLEAN: cleanliness,
      REVIEW_COST: cost,
      REVIEW_LOCATION: location,
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
                marginBottom: "3px",
              }}
            >
              <h5>제목</h5>
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
              {/*첨부파일 이미지 보이는곳 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  alignItems: "center",
                }}
              >
                <div class="input-group mb-3">
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile02"
                  />
                  <label class="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>
              {/*--------------------------------리뷰점수-------------------------------------  */}
              <form onSubmit={handleSubmit}>
                <label>
                  친절도:
                  <select
                    value={service}
                    onChange={(e) => {
                      handleService(e.target.value);
                    }}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </label>
                <label>
                  시설:
                  <select
                    value={facility}
                    onChange={(e) => handleFacility(e.target.value)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </label>
                <label>
                  청결도:
                  <select
                    value={cleanliness}
                    onChange={(e) => handleCleanliness(e.target.value)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </label>
                <label>
                  가성비:
                  <select
                    value={cost}
                    onChange={(e) => handleCost(e.target.value)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="8">9</option>
                    <option value="8">10</option>
                  </select>
                </label>
                <label>
                  위치:
                  <select
                    value={location}
                    onChange={(e) => handleLocation(e.target.value)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
        </FormDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default ReviewWritePage;
