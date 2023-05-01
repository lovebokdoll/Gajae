import { faComment, faCreditCard, faHeart, faHistory, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react';
import { Nav } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import MyReviewList from '../../components/review/MyReviewList';
import {
  MSCLeftDIV,
  MSCRightDIV,
  MSContainer,
  MyPageLinkMove,
  MySettingsFlexByRow,
  MySettingsPageTitle,
  SignOutButton,
} from './styled-mypage';

const MyReviewPage = () => {
  const userId = localStorage.getItem('userId');

  return (
    <>
      <HeaderNav1 />
      <MSContainer>
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
          <MySettingsFlexByRow>
            <MySettingsPageTitle>
              <MyReviewList userId={userId} />
            </MySettingsPageTitle>
          </MySettingsFlexByRow>
        </MSCRightDIV>
      </MSContainer>
      <Footer />
    </>
  );
};

export default MyReviewPage;
