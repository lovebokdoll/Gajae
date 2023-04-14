import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  BButton,
  ContainerDiv,
  FormDiv,
  HeaderDiv,
} from "../../style/FormStyle";
import HeaderNav1 from "../../components/header/HeaderNav1";
import Footer from "../../components/footer/Footer";
/**
 *
 * @returns 이용후기 게시판
 */
const ReviewBoradPage = () => {
  const navigate = useNavigate();

  const writeReview = () => {
    navigate("write");
  };

  return (
    <>
      <HeaderNav1 />
      <ContainerDiv>
        <HeaderDiv>
          <h3 style={{ marginLeft: "10px" }}>Review</h3>
        </HeaderDiv>
        <FormDiv>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "40px",
              }}
            >
              {/* 로그인해야만 글쓰기 버튼이 보이게 되어있음. */}
              {sessionStorage.getItem("auth") === "teacher" && (
                <BButton
                  style={{ width: "80px", height: "38px" }}
                  onClick={() => {
                    navigate(`/qna/write`);
                  }}
                >
                  글쓰기
                </BButton>
              )}
            </div>
            <Table responsive hover style={{ minWidth: "800px" }}>
              <thead>
                <tr>상수</tr>
              </thead>
              <tbody>상수</tbody>
            </Table>
          </div>
          <div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          ></div>
        </FormDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default ReviewBoradPage;
