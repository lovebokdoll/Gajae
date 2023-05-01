import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import { MyPageDIV, MyPageH2, MyPageLink, MyPageLinkDIV, MyPageLinkSPAN, MyPageUL } from './styled-mypage';

const Mypage = () => {
  const [userID, setUserID] = useState('');

  useEffect(() => {
    const tempID = window.localStorage.getItem('userId');
    console.log(tempID);
    setUserID(tempID);
  }, []);

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <>
        <div style={{ margin: '30px 0px 0px 0px' }}></div>
        <div className="mypageContainer" style={{ width: '1060px', margin: '0 auto' }}>
          <div className="setting">
            <h1 className="mypageH1" style={{ margin: '0px 0px 0px 10px' }}>
              계정 설정
            </h1>
          </div>
          <div style={{ margin: '0px 0px 0px 10px' }}>GAJAE.COM을 더욱 편리하게 이용해보세요!</div>
          <MyPageUL>
            <div
              className="mypageLine1"
              style={{
                width: '1084px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <MyPageDIV>
                <MyPageLink to="/mypage/settings">
                  <MyPageH2>개인 정보</MyPageH2>
                  <MyPageLinkDIV>정보를 업데이트하고 각 정보가 어떻게 활용되는지 알아보세요.</MyPageLinkDIV>
                  <MyPageLinkSPAN>개인 정보 관리</MyPageLinkSPAN>
                </MyPageLink>
              </MyPageDIV>
              <MyPageDIV>
                <MyPageLink to={`/mypage/reservations`}>
                  <MyPageH2>예약 내역</MyPageH2>
                  <MyPageLinkDIV>예약 내역을 확인하고 이용후기를 작성해주세요.</MyPageLinkDIV>
                  <MyPageLinkSPAN>예약 내역 관리</MyPageLinkSPAN>
                </MyPageLink>
              </MyPageDIV>
            </div>
            <div
              className="mypageLine2"
              style={{
                width: '1084px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
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
            </div>
            <div
              className="mypageLine3"
              style={{
                width: '1084px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
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
            </div>
          </MyPageUL>
        </div>
      </>
      <div className="mypageAbsoluteDiv" style={{ height: '70px' }}></div>
      <Footer />
    </>
  );
};

export default Mypage;
