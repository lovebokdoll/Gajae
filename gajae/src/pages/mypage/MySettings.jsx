/* global daum*/
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import { userUpdateDB } from '../../service/user/user';
import { setToastMessage } from '../../redux/toastStatus/action';
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkboxLable = ['없음', '남자', '여자'];

  const [user, setUser] = useState({
    USER_ID: '',
    USER_ADDRESS: '',
    USER_GENDER: '',
  });
  const [isNameChange, setIsNameChange] = useState(false);

  const Checkbox = checkboxLable.map((item, index) => (
    <Form.Check
      inline
      label={item}
      value={item}
      name="group1"
      type="radio"
      checked={user.USER_GENDER === item ? true : false}
      readOnly
      id={`inline-radio-${item}`}
      key={index}
      onClick={(e) => {
        setUser({ ...user, USER_GENDER: e.target.value });
      }}
    />
  ));

  useEffect(() => {
    const tempID = window.localStorage.getItem('userId');
    console.log(tempID);
    setUser({ ...user, USER_ID: tempID });
    console.log(user);
  }, [setUser]);

  const searchAddress = (event) => {
    console.log(user);
    event.preventDefault();
    new daum.Postcode({
      oncomplete: function (data) {
        let searchedAddress = '';
        if (data.userSelectedType === 'R') {
          searchedAddress = data.roadAddress; //도로명
        } else {
          searchedAddress = data.jibunAddress; //지번
        }
        console.log(data);
        console.log(searchedAddress);
        document.querySelector('#user_address').value = searchedAddress;
        setUser({ ...user, USER_ADDRESS: searchedAddress });
      },
    }).open();
  };

  const handleName = () => {
    setIsNameChange(true);
  };

  const handleAddress = useCallback((event) => {
    setUser({ USER_ADDRESS: event });
  }, []);

  const handleSave = () => {
    setIsNameChange(false);
  };

  const updateAddress = async () => {
    console.log(user);
    const response = await userUpdateDB(user);

    console.log(response.data);
    if (response.data === 1) {
      dispatch(setToastMessage('주소 수정 성공~'));
      window.location.reload();
    } else {
      dispatch(setToastMessage('주소 수정 실패~'));
    }
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
          <MySettingsRow>
            {' '}
            <div>
              닉네임 <span>다른 사람에게 공개할 닉네임을 입력해주세요</span> <Button onClick={handleName}>수정</Button>
            </div>
          </MySettingsRow>
          <MySettingsRow>
            {' '}
            <div>
              이메일 주소{' '}
              <span>
                loveseesee@naver.com <br />
                예약 확정 이메일이 이곳으로 전송됩니다.
              </span>{' '}
              <Button onClick={handleName}>수정</Button>
            </div>
          </MySettingsRow>
          <MySettingsRow>
            {' '}
            <div>
              전화번호 <span>다른 사람에게 공개할 닉네임을 입력해주세요</span> <Button onClick={handleName}>수정</Button>
            </div>
          </MySettingsRow>
          <MySettingsRow>
            {' '}
            <div>
              생년월일 <span>생년월일을 입력해주세요</span> <Button onClick={handleName}>수정</Button>
            </div>
          </MySettingsRow>
          <MySettingsRow>
            {' '}
            <div>
              국적 <span>대한민국</span> <Button onClick={handleName}>수정</Button>
            </div>
          </MySettingsRow>
          <MySettingsRow>
            {' '}
            <div>
              성별 <span>성별2</span>
              <div>
                <label style={{ margin: 0 }}>
                  {' '}
                  성별
                  <div style={{ marginTop: 10 }} key={`inline-radio`} className="mb-3">
                    {Checkbox}
                  </div>
                </label>
              </div>
              <Button onClick={handleName}>수정</Button>
            </div>
          </MySettingsRow>
          <MySettingsRow>
            {' '}
            <div>
              주소 <span>주소주소</span>
              <input
                type="text"
                id="user_address"
                name="user_address"
                className="form-control"
                placeholder="Enter address"
                onChange={(event) => handleAddress(event.target.value)}
              />
              <div style={{ height: '10px' }}></div>
              <Button onClick={searchAddress}>주소검색</Button>
              <div style={{ height: '10px' }}></div>
              <Button onClick={updateAddress}>주소수정</Button>
            </div>
          </MySettingsRow>
        </MSCRightDIV>
      </MSContainer>
      <Footer />
    </>
  );
};

export default MySettings;
