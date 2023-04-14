import React from "react";
import styled from "styled-components";
import HeaderNav1 from "../../components/header/HeaderNav1";

import Footer from "../../components/footer/Footer";
import { ContainerDiv } from "../../style/FormStyle";

const CardLi = styled.li`
  display: flex; /* 이름 같은 것들 이미지 옆으로 보내기 */
  border: 1px solid #ccc;
  width: 100%; /* flex속성일 때 사용할 수 있는 속성임 */
  margin-bottom: 0.5em;
  border-radius: 1em;
  padding: 0.2em 0;
  max-width: 30em; /* 너비가 넓어질 수 있는 제약 줌 */
`;
const AvatarImg = styled.img`
  width: 10em;
  height: 10em;
  padding: 1em; //이미지 안쪽 여백주기
  list-style: none;
  margin-right: 1em;
  margin-left: 0.5em;
`;

const NameH1 = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  margin-bottom: 0.2em;
`;
const CompanyP = styled.p`
  margin: 0;
  font-size: 1rem;
  margin-bottom: 1em;
`;
const TitleP = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 1em;
`;
const EmailP = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 1em;
`;
const MessageP = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 1em;
`;

const MyReviewPage2 = () => {
  return (
    <>
      <HeaderNav1 />
      <ContainerDiv>
        <CardLi className="안녕">
          <AvatarImg src="" alt="호텔이미지 " />
          <div className={{ width: "100%" }}>
            <NameH1>네임</NameH1>
            <CompanyP>회사</CompanyP>
            <TitleP>제목</TitleP>
            <EmailP>이메일</EmailP>
            <MessageP>메세지</MessageP>
          </div>
        </CardLi>
        <CardLi className="안녕">
          <AvatarImg src="" alt="호텔이미지" />
          <div className={{ width: "100%" }}>
            <NameH1>네임</NameH1>
            <CompanyP>회사</CompanyP>
            <TitleP>제목</TitleP>
            <EmailP>이메일</EmailP>
            <MessageP>메세지</MessageP>
          </div>
        </CardLi>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default MyReviewPage2;
