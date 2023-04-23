import React from 'react';
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';
import HeaderNav1 from '../header/HeaderNav1';
import HeaderNav2 from '../header/HeaderNav2';
import Footer from '../footer/Footer';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReservateComplete = () => {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  };

  const P_TITLE = decodeURIComponent(getCookie('P_TITLE'));
  const roomType = decodeURIComponent(getCookie('roomtype'));
  const P_ADDRESS = Cookies.get('P_ADDRESS');
  const P_CHECKIN = Cookies.get("P_CHECKIN");//체크인
  const P_CHECKOUT = Cookies.get("P_CHECKOUT");//체크아웃
  const userNickname = localStorage.getItem('user_nickname');

  const handleOnClick = () => {
    Cookies.remove('P_TITLE');
    Cookies.remove('roomtype');
    Cookies.remove('P_ADDRESS');
    Cookies.remove('P_CHECKIN');
    Cookies.remove('P_CHECKOUT');
    Cookies.remove('ROOM_CAPACITY');
    Cookies.remove('OVERVIEW');
    Cookies.remove('P_ID');
    Cookies.remove('totalPrice');
    Cookies.remove('ROOM_PRICE');
    Cookies.remove('selectedNumber');
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <br />
      <div style={{ marginLeft: 160, marginBottom: 10, fontSize:30, color: 'black',textAlign:'center' }}> 
      <strong> {userNickname} </strong>님  감사합니다  
      <br/>예약이 아래와 같이 완료되었습니다.</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <br/>
      <Card style={{ width: '1000px', height: '600px', background: '#f2f2f2', border: '4px solid rgb(251, 217, 21)', maxHeight: '600px' }}>
      <div className="bottom-logo" style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
    <img src="../images/bottomlogo.png" alt="bottomlogo" />
  </div>
          <div className="cardtop" style={{ display: 'flex', alignItems: 'center' }}>
            <Card.Img
              variant="top"
              src="../images/서울하야트.jpg"
              style={{
                position: 'relative',
                width: '40%',
                top: '10px',
                left: '10px',
                marginRight: '20px',
                height: 'auto',
                maxHeight: '400px' 
              }}
            />
            <Card.Body>
              <Card.Title style={{ display: 'flex', justifyContent: 'flex-end' }}></Card.Title>
              <Card.Text style={{ fontSize: 30 }}> {P_TITLE} <br/>{roomType} </Card.Text>
              <Card.Text style={{ fontSize: 25 }}>  
               <FontAwesomeIcon
                  icon="fa-solid fa-location-dot"
                  fade
                  size="xs"
                  style={{ color: "#1c2d4a" }}
                />{P_ADDRESS} </Card.Text>
              <Card.Text style={{fontSize:30}}> CHECKIN : {P_CHECKIN} </Card.Text>
              <Card.Text style={{fontSize:30}}> CHECKOUT : {P_CHECKOUT} </Card.Text>
             
            </Card.Body>
          </div>
          <div className='button-position' style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' ,marginLeft: '630px'}}>
            <Link to="/mypage/reservations">
              <Button
               onClick={() => {
                Cookies.remove("P_TITLE");
                Cookies.remove("roomtype");
                Cookies.remove("P_ADDRESS");
                Cookies.remove("P_CHECKIN");
                Cookies.remove("P_CHECKOUT");
                Cookies.remove('ROOM_CAPACITY');
                Cookies.remove('OVERVIEW');
                Cookies.remove('P_ID');
                Cookies.remove('totalPrice');
                Cookies.remove('ROOM_PRICE');
                Cookies.remove('selectedNumber');
              }}
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: 'rgb(0,88,171)',
                  color: '#fff',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                내 예약내역보기
              </Button>
            </Link>
            <Link to="/">
              <Button
               onClick={() => {
                Cookies.remove("P_TITLE");
                Cookies.remove("roomtype");
                Cookies.remove("P_ADDRESS");
                Cookies.remove("P_CHECKIN");
                Cookies.remove("P_CHECKOUT");
                Cookies.remove('ROOM_CAPACITY');
                Cookies.remove('OVERVIEW');
                Cookies.remove('P_ID');
                Cookies.remove('totalPrice');
                Cookies.remove('ROOM_PRICE');
                Cookies.remove('selectedNumber');
              }}
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: 'rgb(0,88,171)',
                  color: '#fff',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  marginLeft: '10px'
                }}
              >
                메인페이지로
              </Button>
            </Link>
          </div>
         
        </Card>
      </div>
      <br/>
      <Footer />
    </>
  );
};

export default ReservateComplete;
