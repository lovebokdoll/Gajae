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
import MyHotelReviewList from "../../components/host/myhost/MyHotelReviewList";
import Footer from "../../components/footer/Footer";
import HostHeaderNav from "../../components/host/HostHeaderNav";

const MyHotelReviewPage = () => {
  const hostId = localStorage.getItem("hostId");

  return (
    <>
      <HostHeaderNav />
      <MSContainer className="container">
        <MSCLeftDIV>
          {" "}
          <Nav defaultActiveKey="/home" className="flex-column">
            <MyPageLinkMove to="/host/myhostpage">
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              개인 정보
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

            <SignOutButton>
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
              <MyHotelReviewList hostId={hostId} />
            </MySettingsPageTitle>
          </MySettingsFlexByRow>
        </MSCRightDIV>
      </MSContainer>
      <Footer />
    </>
  );
};

export default MyHotelReviewPage;
