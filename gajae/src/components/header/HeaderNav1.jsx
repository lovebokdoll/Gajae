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
            <a href="/" class="nav-link">
            <img src="../images/000.png" alt="대체_텍스트" /></a>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Link to="/mypage" style={{ color: 'black', marginRight: '10px' }} className="nav-link">
    마이페이지
  </Link>
  <Link to="/signup" style={{ color: 'black', marginRight: '10px' }} className="nav-link">
    가입하기
  </Link>
  <Link to="/login" style={{ color: 'black', marginRight: '10px' }} className="nav-link">
    로그인
  </Link>
  <Link to="/board" style={{ color: 'black', marginRight: '10px' }} className="nav-link">
    게시판
  </Link>
</div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav1;
