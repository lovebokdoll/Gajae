import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import MyPayment from './MyPayment';
import MyReservatiosPage from './MyReservatiosPage';
import MyReviewTimelinePage from './MyReviewTimelinePage';
import MySettings from './MySettings';
import MyWishListPage from './MyWishListPage';

/**
 *
 * MySettings - 계정관리
 * MyReservatiosPage - 예약내역
 * MyReviewTimelinePage - 이용후기
 * MyWishListPage - 위시리스트
 * MyPayment - 결제정보
 * @returns 마이페이지 (Mypage)
 */
const Mypage = () => {
  /**
   * 로그아웃 기능 함수
   */
  const logout = () => {
    console.log('logout 클릭');
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <MySettings />
      <MyReservatiosPage />
      <MyReviewTimelinePage />
      <MyWishListPage />
      <MyPayment />
      <Button onClick={logout}>Logout</Button>
      <Footer />
    </>
  );
};

export default Mypage;
