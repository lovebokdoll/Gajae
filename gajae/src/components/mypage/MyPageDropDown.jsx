import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyPageDropDown = () => {
  const signOut = () => {
    console.log('signOut');
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        MYPAGE
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Link to="/mypage">계정 관리</Link>
        <br />
        <Link to="/mypage/reservations">여행 & 예약</Link>
        <br />
        <Link to="/mypage/payment">결제정보</Link>
        <br />
        <Link to="/mypage/review">이용후기</Link>
        <br />
        <Link to="/mypage/wishlist">위시리스트</Link>
        <br />
        <button onClick={signOut}>LOGOUT</button>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyPageDropDown;
