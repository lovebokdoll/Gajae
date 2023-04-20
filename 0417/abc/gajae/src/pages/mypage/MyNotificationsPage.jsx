import React from 'react';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import {
  MSCLeftDIV,
  MSCRightDIV,
  MSContainer,
  MSPTComment,
  MSPTTitle,
  MyPageLinkMove,
  MySettingsFlexByRow,
  MySettingsPageTitle,
  MySettingsRow,
  MySettingsRowLayout,
  SignOutButton,
  UserDeactivateButton,
} from './styled-mypage';
import { Nav } from 'react-bootstrap';

const MyNotificationsPage = () => {
  return (
    <>
      <HeaderNav1 />
      <MSContainer className="container">
        <MSCLeftDIV>
          {' '}
          <Nav defaultActiveKey="/home" className="flex-column">
            <MyPageLinkMove to="/mypage/settings">
              <span style={{ paddingRight: '5px' }}>
                <img src="/images/korea.svg.png"></img>
              </span>
              개인 정보
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/reservations">
              <span></span>예약내역
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/review">
              <span></span>이용후기
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/payment">
              <span></span>결제정보
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/wishlist">
              <span></span>위시리스트
            </MyPageLinkMove>
            <SignOutButton>
              <span></span>로그아웃
            </SignOutButton>
          </Nav>
        </MSCLeftDIV>
        <MSCRightDIV>
          <h1>이메일 알림</h1>
          <h6>이메일로 어떤 내용을 수신하고 싶은지 설정하세요.</h6>
          <hr />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: '10px' }}>
              <br />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '150px' }}>이메일 수신 설정</div>
                <div style={{ marginLeft: '10px' }}>
                  <span>loveseesee@naver.com </span>
                  <br />
                  예약완료 시 예약확정 이메일이 이곳으로 전송됩니다.
                </div>
              </div>
            </div>
          </div>
        </MSCRightDIV>
      </MSContainer>
      <Footer />
    </>
  );
};

export default MyNotificationsPage;
