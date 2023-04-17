import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyPageDropDown from '../mypage/MyPageDropDown';
import './headerNav1.css';

const HeaderButton = styled.button`
  background-color: transparent;
`;
const HeaderNav1 = () => {
  const navigate = useNavigate();

  const { userAuth } = useSelector((state) => state);

  const [userId, setUserId] = useState();
  const [userNickname, setUserNickname] = useState();
  const [userBirth, setUserBirth] = useState();
  const [user_auth, setUser_Auth] = useState();
  const [userEmail, setUserEmail] = useState();

  const signOut = async () => {
    //logout(userAuth.auth);
    window.localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    setUserId(window.localStorage.getItem('userId'));
    setUserNickname(window.localStorage.getItem('userNickname'));
    setUserBirth(window.localStorage.getItem('userBirth'));
    setUser_Auth(window.localStorage.getItem('userAuth'));
    setUserEmail(window.localStorage.getItem('userEmail'));
    console.log(userAuth.auth);
    console.log(userId);
    console.log(userNickname);
    console.log(userBirth);
    console.log(user_auth);
    console.log(userEmail);
  }, [userId]);

  return (
    <>
      <Navbar id="headercontainer" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" style={{ color: 'white' }} className="nav-link">
              <img src="../images/ex3.png" alt="대체_텍스트" />
              </Link>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
              <HeaderButton>
                <span>KRW</span>
              </HeaderButton>
              <HeaderButton>
                <img src="images/korea.svg.png"></img>
              </HeaderButton>
              <Link to="/signup" style={{ color: 'black', marginRight: '10px' }} className="nav-link">
                가입하기
              </Link>
              <Link to="/login" style={{ color: 'black', marginRight: '10px' }} className="nav-link">
                로그인
              </Link>
              {userId && <MyPageDropDown />}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav1;
