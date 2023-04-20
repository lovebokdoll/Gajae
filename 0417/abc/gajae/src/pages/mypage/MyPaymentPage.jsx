import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import { faComment, faCreditCard, faHeart, faHistory, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from './styled-mypage';
import { Button, Form, Nav } from 'react-bootstrap';
import './paymentpage.css';

const MyPaymentPage = () => {
  const [isCardAdd, setIsCardAdd] = useState(false);
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
              <MSPTTitle>결제정보</MSPTTitle>
              <MSPTComment>더욱 간편한 예약을 위해 결제 수단을 안전하게 추가하거나 삭제하세요.</MSPTComment>
            </MySettingsPageTitle>
          </MySettingsFlexByRow>
          <MySettingsRow>
            <div class="payment-info">
              <div class="payment-title">결제정보</div>
              <div class="card-info">
                <div class="card-number">카드번호</div>
                <div class="expiration-date">유효기간</div>
              </div>
              <div class="delete-btn">
                <button>삭제</button>
              </div>
            </div>
          </MySettingsRow>
          <MySettingsRow>
            <MySettingsRowLayout>
              {!isCardAdd && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ display: 'inline-block', width: '200px', marginLeft: '25%' }}>다른 카드로 결제</span>
                  <Button onClick={() => setIsCardAdd(true)}>카드추가</Button>
                </div>
              )}
              {isCardAdd && (
                <div>
                  <Button
                    style={{ marginLeft: '15px' }}
                    onClick={() => {
                      setIsCardAdd(false);
                    }}
                  >
                    취소
                  </Button>
                  <div>a</div>
                  <Form>
                    <label>카드 소유주 성명</label>
                    <input></input>
                    <label>카드 번호</label>
                    <input></input>
                    <label>유효기간</label>
                    <input></input>
                    <input type="button" />
                  </Form>
                </div>
              )}
            </MySettingsRowLayout>
          </MySettingsRow>
        </MSCRightDIV>
      </MSContainer>
      <Footer />
    </>
  );
};

export default MyPaymentPage;
