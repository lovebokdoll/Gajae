import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalTrue } from '../../redux/modalStatus/action';
import MyPageDropDown from '../mypage/MyPageDropDown';
import './headerNav1.css';
import { CurrencyButton, NationButton } from './styled-header';
import { setNationModalTrue } from '../../redux/nationStatus/action';

const HeaderNav1 = () => {
  const [userId, setUserId] = useState();

  const dispatch = useDispatch();

  const handleCurrencyModal = () => {
    dispatch(setModalTrue('Choose your currency'));
  };
  const handleNationModal = () => {
    dispatch(setNationModalTrue('Choose your nation'));
  };

  useEffect(() => {
    setUserId(window.localStorage.getItem("userId"));
  }, []);

  return (
    <>
      <div className="navContainer">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Link to="/" style={{ color: '#003580' }} className="nav-link">
              <img id="main_logo" src="../images/001.png" alt="대체_텍스트" />
              </Link>
          <div className='GiveGap'style={{width: 342}}> 
          <Link to="/notice" style={{ color: 'white', marginTop : '38px',marginLeft : '20px', fontSize : '16px' }} className="nav-link">
                        자주 묻는 질문
                      </Link>
          </div> {/* 로고랑 KRW사이 GAP지우면 안됨*/}
                <div className='header-reduxitem' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                  <CurrencyButton onClick={handleCurrencyModal}>
                    <span>KRW</span>
                  </CurrencyButton>
                  <NationButton onClick={handleNationModal}>
                    <img src="/images/Flag_of_South_Korea.png"></img>
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
                  <Link to="/qnalist" style={{ color: 'white', marginRight: '10px'}} className="nav-link">
                    1 : 1 문의
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