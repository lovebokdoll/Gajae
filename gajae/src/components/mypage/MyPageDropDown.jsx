import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faCreditCard, faPen, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../mypage/mypage_css/myPageDropDown.css';
const MyPageDropDown = () => {
  const signOut = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle className="mypageDropdownToggle" variant="success" id="dropdown-basic">
        {/* {window.localStorage.getItem('userNickname')} */}MYPAGE
      </Dropdown.Toggle>
      <Dropdown.Menu className="mypageDropdownMenu">
        <Link className="mypageLink" to="/mypage">
          <FontAwesomeIcon icon={faUser} style={{ width: '20px', marginRight: '13px' }} />
          계정 관리
        </Link>
        <Link className="mypageLink" to="/mypage/reservations">
          <FontAwesomeIcon icon={faCalendarAlt} style={{ width: '20px', marginRight: '13px' }} />
          여행 & 예약
        </Link>
        <Link className="mypageLink" to="/mypage/payment">
          <FontAwesomeIcon icon={faCreditCard} style={{ width: '20px', marginRight: '13px' }} />
          결제정보
        </Link>
        <Link className="mypageLink" to="/mypage/review">
          <FontAwesomeIcon icon={faPen} style={{ width: '20px', marginRight: '13px' }} />
          이용후기
        </Link>
        <Link className="mypageLink" to="/mypage/wishlist">
          <FontAwesomeIcon icon={faHeart} style={{ width: '20px', marginRight: '13px' }} />
          위시리스트
        </Link>
        <button onClick={signOut} className="mypageLogout">
          <FontAwesomeIcon icon={faSignOutAlt} style={{ width: '20px' }} />
          <span style={{ margin: '0px 57px 0px 15px' }}>LOGOUT</span>
        </button>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyPageDropDown;
