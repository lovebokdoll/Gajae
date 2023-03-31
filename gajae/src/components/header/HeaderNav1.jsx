import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderNav1 = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" style={{ color: 'white' }} className="nav-link">
                GAJAE.COM
              </Link>
              <Link to="/mypage" style={{ color: 'white' }} className="nav-link">
                마이페이지
              </Link>
              <Link to="/signup" style={{ color: 'white' }} className="nav-link">
                가입하기
              </Link>
              <Link to="/login" style={{ color: 'white' }} className="nav-link">
                로그인
              </Link>
              <Link to="/board" style={{ color: 'white' }} className="nav-link">
                게시판
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav1;
