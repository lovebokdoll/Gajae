import axios from 'axios';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './headerNav1.css';
const HeaderNav1 = ({ authLogic }) => {
  const navigate = useNavigate();

  const kakaoLogout = async () => {
    //insert here 로그아웃 처리
    await axios({
      method: 'get',
      url: `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&logout_redirect_uri=http://localhost:3000`,
    })
      .then((res) => {
        window.localStorage.removeItem('userId');
        window.localStorage.removeItem('nickname');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Navbar id="aaa" expand="lg">
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
              <Link to="/qna/list" style={{ color: 'white' }} className="nav-link">
                Q&A
              </Link>
              <div>
                <button onClick={kakaoLogout}>로그아웃</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav1;
