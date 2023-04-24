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
    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: "#003580", border: "none", fontWeight: "bold", borderRadius: "5px", padding: "10px 20px" }}>
      MYPAGE
    </Dropdown.Toggle>
  
    <Dropdown.Menu style={{ backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "5px", minWidth: "100px", textAlign: "center" }}>
  <Link to="/mypage" style={{ color: "#333", textDecoration: "none", display: "block", marginBottom: "5px" }}>계정 관리</Link>
  <Link to="/mypage/reservations" style={{ color: "#333", textDecoration: "none", display: "block", marginBottom: "5px" }}>여행 & 예약</Link>
  <Link to="/mypage/payment" style={{ color: "#333", textDecoration: "none", display: "block", marginBottom: "5px" }}>결제정보</Link>
  <Link to="/mypage/review" style={{ color: "#333", textDecoration: "none", display: "block", marginBottom: "5px" }}>이용후기</Link>
  <Link to="/mypage/wishlist" style={{ color: "#333", textDecoration: "none", display: "block", marginBottom: "5px" }}>위시리스트</Link>
  <button onClick={signOut} style={{ backgroundColor: "transparent", border: "none", color: "#333", textDecoration: "none", cursor: "pointer", display: "block",margin:"0 auto"  }}>LOGOUT</button>
</Dropdown.Menu>

  </Dropdown>
  );
};

export default MyPageDropDown;
