import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyPageDropDown from '../mypage/MyPageDropDown';
import './headerNav1.css';
import { CurrencyButton, NationButton } from './styled-header';

const HeaderNav1 = () => {
  const navigate = useNavigate();

  const { userAuth } = useSelector((state) => state);

  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(window.localStorage.getItem('userId'));
  }, []);

  return (
    <>
      <div className="navContainer">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" style={{ color: 'white' }} className="nav-link">
                  <img id="main_logo" src="../images/ex3.png" alt="대체_텍스트" />
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CurrencyButton>
                    <span>KRW</span>
                  </CurrencyButton>
                  <NationButton>
                    <img src="/images/korea.svg.png"></img>
                  </NationButton>
                  {userId ? (
                    <MyPageDropDown />
                  ) : (
                    <>
                      <Link to="/signup" style={{ color: 'white', marginRight: '10px' }} className="nav-link">
                        가입하기
                      </Link>
                      <Link to="/login" style={{ color: 'white', marginRight: '10px' }} className="nav-link">
                        로그인
                      </Link>
                    </>
                  )}
                  <Link to="/host" style={{ color: 'white', marginRight: '10px' }} className="nav-link">
                    숙소등록
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default HeaderNav1;
