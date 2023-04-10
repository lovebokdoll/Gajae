import React from "react";
import ReviewScore from "./ReviewScore";
import {
  BButton,
  ContainerDiv,
  FormDiv,
  HeaderDiv,
} from "../../style/FormStyle";
import HeaderNav1 from "../../components/header/HeaderNav1";

export const ReviewUpdate = () => {
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
              <BButton onClick={handleImageUploade}>글쓰기</BButton>
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
              <ImageUpload
                onImageChange={handleImageUploade}
                imageUrl={imageUrl}
              />
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
