import React, { useCallback } from "react";
import {
  ContainerDiv,
  Custom_btn,
  FormDiv,
  Hr,
  Title,
} from "../../style/FormStyle";
import HeaderNav1 from "../../components/header/HeaderNav1";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { qnaInsertDB } from "../../service/database";
import MyFilter from "./MyFilter";

/**
 *
 * @returns  글쓰기 페이지
 */
const QnAWritePage = () => {
  const navigate = useNavigate();
  const [QNA_TITLE, setTitle] = useState(""); //사용자가 입력한 제목 담기
  const [QNA_CONTENT, setContent] = useState(""); //사용자가 입력한 내용 담기
  const [QNA_TYPE, setTitleType] = useState("");

  const[types]= useState(['문의','결제','취소','예약']); //qna_type의 라벨값

  const handleTitle = useCallback((e) => {
    setTitle(e);
  },[]);

  const handleType =useCallback((e) => {
    setTitleType(e);
  },[]);

  const handleContent = (value) => {
    setContent(value);
  };

  const userId = localStorage.getItem("userId");

  const qnaInsert = async () => {
    const qna = {
      USER_ID: userId, // 로그인한 사용자의 ID
      QNA_TITLE: QNA_TITLE, // 작성한 글의 제목
      QNA_CONTENT: QNA_CONTENT, // 작성한 글의 내용
      QNA_TYPE: QNA_TYPE, // 작성한 글의 유형
    };
    const res = await qnaInsertDB(qna);
    console.log(res.data);
    navigate("/qnalist");
  };



  
  return (
    <>
      <HeaderNav1 />
      <ContainerDiv>
              <Title style={{marginTop : '40px'}}>QnA</Title>
          <Hr />
        <FormDiv>
          <div style={{ width: "100%"}}>
              <MyFilter title={QNA_TYPE} types={types} handleType={handleType}></MyFilter>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "3px",
              }}
            >
              <h5>제목</h5>
              <Custom_btn type="button" onClick={qnaInsert}>
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
            <h5>내용</h5>
            <Textarea
              id="dataset-title"
              type="text"
              maxLength="50"
              placeholder="내용을 입력하세요."
              style={{
                width: "100%",
                height: "300px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
              onChange={(e) => {
                handleContent(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
            </div>
          </div>
        </FormDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default QnAWritePage;

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid lightGray;
  padding: 5px;
`;