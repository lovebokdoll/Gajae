import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import { resNotification } from '../../service/reservation/reservation';
import Cookies from 'js-cookie';

const ReservationNotificationPage = () => {
  const userNickname = localStorage.getItem('userNickname');

  /*   const [resNotificationData, setResNotificationData] = useState(); */

  const [resTitle, setResTitle] = useState(Cookies.get('p_title'));
  const [resPrice, setResPrice] = useState(Cookies.get('resPrice'));
  const [resStartDate, setResStartDate] = useState(Cookies.get('startDate'));
  const [resEndDate, setResEndDate] = useState(Cookies.get('endDate'));
  const [resAdd, setResAdd] = useState(Cookies.get('resAddress'));
  const [resRoomType, setResRoomType] = useState(Cookies.get('resRoomType'));
  const [resCheckin, setResCheckin] = useState(Cookies.get('p_checkin'));
  const [resCheckout, setResCheckout] = useState(Cookies.get('p_checkout'));

  useEffect(() => {
    const resNotificationParams = {
      PAY_NUMBER: Cookies.get('RES_PAYNUM'),
      R_NUMBER: Cookies.get('RES_RESNUM'),
      P_ID: Cookies.get('RES_PID'),
      ROOM_ID: Cookies.get('RES_ROOMID'),
    };
    console.log(resNotificationParams);
  }, []);

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      {/*   {resNotificationData && ( */}
      <>
        <br />
        <div className="resThankYou" style={{ width: '100%', marginBottom: 10, fontSize: '1.7rem', color: 'black', textAlign: 'center' }}>
          <strong> {userNickname} </strong>님 감사합니다. 아래와 같이 예약이 완료되었습니다.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <br />
          <Card
            style={{
              width: '1000px',
              height: '600px',
              background: 'white',
              maxHeight: '600px',
              boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="bottom-logo" style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>
              <img src="../images/LoginLogo.png" alt="bottomlogo" />
            </div>
            <div className="cardtop" style={{ marginLeft: '50px' }}>
              <Card.Img
                variant="top"
                style={{
                  position: 'relative',
                  width: '40%',
                  top: '10px',
                  left: '10px',
                  marginRight: '20px',
                  height: 'auto',
                  maxHeight: '400px',
                }}
              />
              <Card.Body>
                <Card.Title style={{ display: 'flex', justifyContent: 'flex-end' }}></Card.Title>
                <Card.Text style={{ fontSize: 30 }}>
                  {' '}
                  {/*  {resNotificationData[0].P_TITLE} */} {resTitle}
                  <br />
                  {/* {resNotificationData[0].ROOM_TYPE} */}
                </Card.Text>
                <Card.Text style={{ fontSize: 25 }}>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" fade size="xs" style={{ color: '#1c2d4a' }} />
                  {/*  {resNotificationData[0].P_ADDRESS} */} {resAdd}
                </Card.Text>
                <Card.Text style={{ fontSize: 30 }}>
                  {' '}
                  CHECKIN :{/*  {resNotificationData[0].P_CHECKIN} */} {resStartDate} {resCheckin} 부터
                </Card.Text>
                <Card.Text style={{ fontSize: 30 }}>
                  {' '}
                  CHECKOUT : {/* {resNotificationData[0].P_CHECKOUT} */} {resEndDate} {resCheckout} 까지
                </Card.Text>
                <div style={{ fontSize: '40px', fontWeight: 'bold' }}>
                  결제금액:{/*  {resNotificationData[0].PAID_AMOUNT}  */} {resPrice}원{' '}
                </div>
              </Card.Body>
            </div>
            <div className="button-position" style={{ display: 'flex', justifyContent: 'center', marginTop: '60px', marginLeft: '630px' }}>
              <Link to="/mypage/reservations">
                <Button
                  onClick={() => {}}
                  style={{
                    width: 150,
                    height: 50,
                    /*  backgrou2ndColor: 'rgb(0,88,171)', */
                    backgroundColor: '#ffc007',
                    color: '#fff',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '50px',
                    marginLeft: '130px',
                  }}
                >
                  내 예약내역보기
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        <br />{' '}
      </>
      {/* )} */}
      <Footer />
    </>
  );
};

export default ReservationNotificationPage;
