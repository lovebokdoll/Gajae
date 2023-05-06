import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCreditCard, faHeart, faHistory, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import { MSCLeftDIV, MSCRightDIV, MSContainer, MyPageLinkMove, SignOutButton } from './styled-mypage';
import HeaderNav2 from '../../components/header/HeaderNav2';
const MyNotificationsPage = () => {
  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <MSContainer className="container">
        <MSCLeftDIV>
          {' '}
          <Nav defaultActiveKey="/home" className="flex-column">
            <MyPageLinkMove to="/mypage/settings">
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              개인 정보
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/reservations">
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faHistory} />
              </span>
              예약내역
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/review">
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faComment} />
              </span>
              이용후기
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/payment">
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faCreditCard} />
              </span>
              결제정보
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/wishlist">
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              위시리스트
            </MyPageLinkMove>
            <SignOutButton>
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              로그아웃
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
                  <span>{window.localStorage.getItem('userEmail')} </span>
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
