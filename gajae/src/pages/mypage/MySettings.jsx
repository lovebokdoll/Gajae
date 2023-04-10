import React from 'react';
import { Nav } from 'react-bootstrap';
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
} from './styled-mypage';

const MySettings = () => {
  return (
    <>
      <HeaderNav1 />
      <MSContainer className="container">
        <MSCLeftDIV>
          {' '}
          <Nav defaultActiveKey="/home" className="flex-column">
            <Link>Active</Link>
            <Link>Active</Link>
            <Link>Active</Link>
            <Link>Link</Link>
            <Link>Link</Link>
            <Link>Disabled</Link>
          </Nav>
        </MSCLeftDIV>
        <MSCRightDIV>
          <MySettingsFlexByRow>
            <MySettingsPageTitle>
              <MSPTTitle>개인정보</MSPTTitle>
              <MSPTComment>정보를 업데이트하고 각 정보가 어떻게 활용되는지 알아보세요.</MSPTComment>
            </MySettingsPageTitle>
          </MySettingsFlexByRow>
          <MySettingsRow>1</MySettingsRow>
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
