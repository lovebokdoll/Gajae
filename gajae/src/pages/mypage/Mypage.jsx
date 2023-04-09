import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import { MyPageDIV, MyPageH2, MyPageLink, MyPageLinkDIV, MyPageLinkSPAN, MyPageUL } from './styled-mypage';

const Mypage = () => {
  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <>
        <div className="container">
          <div>
            <h1>계정 설정</h1>
          </div>
          <div>GAJAE.COM을 더욱 편리하게 이용해보세요!</div>
          <MyPageUL>
            <MyPageDIV>
              <MyPageLink to="/mypage/settings">
                <MyPageH2>개인 정보</MyPageH2>
                <MyPageLinkDIV>정보를 업데이트하고 각 정보가 어떻게 활용되는지 알아보세요.</MyPageLinkDIV>
                <MyPageLinkSPAN>개인 정보 관리</MyPageLinkSPAN>
              </MyPageLink>
            </MyPageDIV>
            <MyPageDIV>
              <MyPageLink to="/mypage/reservations">
                <MyPageH2>예약 내역</MyPageH2>
                <MyPageLinkDIV>예약 내역을 확인하고 이용후기를 작성해주세요.</MyPageLinkDIV>
                <MyPageLinkSPAN>예약 내역 관리</MyPageLinkSPAN>
              </MyPageLink>
            </MyPageDIV>
            <MyPageDIV>
              <MyPageLink to="/mypage/review">
                <MyPageH2>이용후기</MyPageH2>
                <MyPageLinkDIV>여행객이 작성한 이용후기를 확인하고 새로운 여행을 떠나보세요.</MyPageLinkDIV>
                <MyPageLinkSPAN>이용 후기 관리</MyPageLinkSPAN>{' '}
              </MyPageLink>
            </MyPageDIV>
            <MyPageDIV>
              <MyPageLink to="/mypage/payment">
                <MyPageH2>결제 정보</MyPageH2>
                <MyPageLinkDIV>더욱 간편한 예약을 위해 결제 수단을 안전하게 추가하거나 삭제하세요.</MyPageLinkDIV>
                <MyPageLinkSPAN>결제 정보 관리</MyPageLinkSPAN>
              </MyPageLink>
            </MyPageDIV>
            <MyPageDIV>
              <MyPageLink to="/mypage/wishlist">
                <MyPageH2>위시리스트</MyPageH2>
                <MyPageLinkDIV>위시리스트를 확인하고 위시리스트를 공유해보세요.</MyPageLinkDIV>
                <MyPageLinkSPAN>위시리스트 관리</MyPageLinkSPAN>
              </MyPageLink>
            </MyPageDIV>
            <MyPageDIV>
              <MyPageLink to="/mypage/notifications">
                <MyPageH2>이메일 알림</MyPageH2>
                <MyPageLinkDIV>이메일로 어떤 내용을 수신하고 싶은지 설정하세요.</MyPageLinkDIV>
                <MyPageLinkSPAN>알림 관리</MyPageLinkSPAN>
              </MyPageLink>
            </MyPageDIV>
            <MyPageDIV>
              <Button>
                <MyPageH2>로그아웃</MyPageH2>
              </Button>
            </MyPageDIV>
          </MyPageUL>
        </div>
      </>
      <Footer />
    </>
  );
};

export default Mypage;
