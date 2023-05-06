import {
  faComment,
  faHistory,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import {
  MSCLeftDIV,
  MSCRightDIV,
  MSContainer,
  MyPageLinkMove,
  SignOutButton,
} from "../mypage/styled-mypage";
import {
  MySettingsFlexByRow,
  MySettingsPageTitle,
} from "../mypage/styled-mypage";
import Footer from "../../components/footer/Footer";
import HostHeaderNav from "../../components/host/HostHeaderNav";
import { useNavigate } from "react-router-dom";
import MyHotelReview from "../../components/host/myhost/MyHotelReview";
import styled from "styled-components";

const MyHotelReviewPage = () => {
  const navigate = useNavigate();
  const hostId = localStorage.getItem("hostId");
  console.log(hostId);
  const signOut = () => {
    console.log("signOut");
    window.localStorage.clear();
    navigate("/host");
  };
  return (
    <>
      <HostHeaderNav />
      <MSContainer className="container">
        <MSCLeftDIV>
          {" "}
          <Nav defaultActiveKey="/home" className="flex-column">
            <MyPageLinkMove to="/host/myhostpage">
              <span style={{ paddingRight: "5px" }}>
                <i className="fa-solid fa-minus"></i>
              </span>
              메인
            </MyPageLinkMove>
            <MyPageLinkMove to="/host/myhotelpage">
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon icon={faHistory} />
              </span>
              등록내역
            </MyPageLinkMove>
            <MyPageLinkMove to="/host/myhotelreview">
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon icon={faComment} />
              </span>
              내 호텔후기
            </MyPageLinkMove>

            <SignOutButton onClick={signOut}>
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              로그아웃
            </SignOutButton>
          </Nav>
        </MSCLeftDIV>
        <MSCRightDIV>
          <MySettingsFlexByRow>
            <MySettingsPageTitle>
              <MyHotelReview hostId={hostId} />
            </MySettingsPageTitle>
          </MySettingsFlexByRow>
        </MSCRightDIV>
      </MSContainer>
      <Footer />
    </>
  );
};

export default MyHotelReviewPage;
