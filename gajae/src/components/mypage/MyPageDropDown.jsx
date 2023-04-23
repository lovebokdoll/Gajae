import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyPageDropDown = () => {
  const signOut = () => {
    console.log("signOut");
    window.localStorage.clear();
    window.location.reload();
  };
  //호스트
  const [hostId, setHostId] = useState();
  useEffect(() => {
    setHostId(window.localStorage.getItem("hostId"));
  }, []);
  //사용자
  const [userId, setUserId] = useState();
  useEffect(() => {
    setUserId(window.localStorage.getItem("userId"));
  }, []);

  const renderUserLinks = () => {
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
  const renderHostLinks = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          HOST MYPAGE
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Link to="/host/myhostpage">계정 관리</Link>
          <br />
          <Link to="/host/myhotelpage">숙소 관리</Link>
          <br />
          <button onClick={signOut}>LOGOUT</button>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        MYPAGE
      </Dropdown.Toggle>
      {userId && (
        <Dropdown.Menu>
          {renderUserLinks()}
          <button onClick={signOut}>LOGOUT</button>
        </Dropdown.Menu>
      )}
      {hostId && (
        <Dropdown.Menu>
          {renderHostLinks()}
          <button onClick={signOut}>LOGOUT</button>
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default MyPageDropDown;
