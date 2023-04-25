import {
  faComment,
  faCreditCard,
  faHeart,
  faHistory,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import Footer from "../../footer/Footer";
import {
  MSCLeftDIV,
  MSCRightDIV,
  MSContainer,
  MyPageLinkMove,
  SignOutButton,
} from "./styled-mypage";
import HostHeaderNav from "../HostHeaderNav";
import {
  MySettingsFlexByRow,
  MySettingsPageTitle,
} from "../../../pages/mypage/styled-mypage";
import MyHotelList from "./MyHotelList";

const MyHotelPage = () => {
  const hostId = localStorage.getItem("hostId");
  console.log(hostId);
  return (
    <>
      <HostHeaderNav />
      <MSContainer className="container">
        <MSCLeftDIV>
          {" "}
          <Nav defaultActiveKey="/home" className="flex-column">
            {/* <MyPageLinkMove to="/host/myhostpage">
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              개인 정보
            </MyPageLinkMove> */}
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
              <MyHotelList hostId={hostId} />
            </MySettingsPageTitle>
          </MySettingsFlexByRow>
        </MSCRightDIV>
      </MSContainer>
      <div style={{ height: "50px" }} />
      <Footer />
    </>
  );
};

export default MyHotelPage;
