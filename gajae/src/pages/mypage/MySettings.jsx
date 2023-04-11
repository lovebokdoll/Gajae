import React, { useEffect, useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import {
  MSCLeftDIV,
  MSContainer,
  MSCRightDIV,
  MSPTComment,
  MSPTTitle,
  MySettingsFlexByRow,
  MySettingsPageTitle,
  MySettingsRow,
  MySettingsRowLayout,
} from './styled-mypage';

const MySettings = () => {
  const [isNameChange, setIsNameChange] = useState(false);

  useEffect(() => {}, [isNameChange]);

  const handleName = () => {
    setIsNameChange(true);
  };

  const handleSave = () => {
    setIsNameChange(false);
  };
  return (
    <>
      <HeaderNav1 />
      <MSContainer className="container">
        <MSCLeftDIV>
          {' '}
          <Nav defaultActiveKey="/home" className="flex-column">
            <Link to="/mypage/settings">개인 정보</Link>
            <Link to="/mypage/reservations">예약내역</Link>
            <Link to="/mypage/review">이용후기</Link>
            <Link to="/mypage/payment">결제정보</Link>
            <Link to="/mypage/wishlist">위시리스트</Link>
            <Button>로그아웃</Button>
          </Nav>
        </MSCLeftDIV>
        <MSCRightDIV>
          <MySettingsFlexByRow>
            <MySettingsPageTitle>
              <MSPTTitle>개인정보</MSPTTitle>
              <MSPTComment>정보를 업데이트하고 각 정보가 어떻게 활용되는지 알아보세요.</MSPTComment>
            </MySettingsPageTitle>
          </MySettingsFlexByRow>
          <MySettingsRow>
            <MySettingsRowLayout>
              <div>
                이름 <span>YOON HOJAE</span> <Button onClick={handleName}>수정</Button>
              </div>
              {isNameChange && <input id="user_name" name="user_name" placeholder="이름"></input> && (
                <Button onClick={handleSave}>저장</Button>
              )}
            </MySettingsRowLayout>
          </MySettingsRow>
          <MySettingsRow>2</MySettingsRow>
          <MySettingsRow>3</MySettingsRow>
          <MySettingsRow>4</MySettingsRow>
          <MySettingsRow>5</MySettingsRow>
          <MySettingsRow>6</MySettingsRow>
          <MySettingsRow>7</MySettingsRow>
          <MySettingsRow>8</MySettingsRow>
        </MSCRightDIV>
      </MSContainer>
      <Footer />
    </>
  );
};

export default MySettings;
