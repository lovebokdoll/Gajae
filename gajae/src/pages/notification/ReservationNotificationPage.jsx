import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import { resInformation } from '../../service/reservation/reservation';
import { paymentInformation } from '../../service/pay/pay';

const ReservationNotificationPage = () => {
  const userNickname = localStorage.getItem('userNickname');
  const pay_number = window.localStorage.getItem('pay_number');
  const r_number = window.localStorage.getItem('r_number');
  const [resInfo, setResInfo] = useState();
  const [paymentInfo, setPaymentInfo] = useState();

  useEffect(() => {
    const resInfoParameters = {
      PAY_NUMBER: 'imp_461239822482',
    };

    const paymentParameters = {
      PAY_NUMBER: 'imp_461239822482',
    };

    const getResInfo = async () => {
      const reservationResonse = await resInformation(resInfoParameters);
      console.log(reservationResonse.data);
      setResInfo(reservationResonse.data);
    };
    getResInfo();

    const getPaymentInfo = async () => {
      const paymentResponse = await paymentInformation(paymentParameters);
      console.log(paymentResponse.data);
      setPaymentInfo(paymentResponse.data);
    };
    getPaymentInfo();
  }, []);
  
  console.log(resInfo);
  console.log(paymentInfo);
  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <br />
      <div className="resThankYou" style={{ width: '100%', marginBottom: 10, fontSize: '1.7rem', color: 'black', textAlign: 'center' }}>
        <strong> {userNickname} </strong>님 감사합니다
        <br />
        아래와 같이 예약이 완료되었습니다.
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <br />
        <Card
          style={{ width: '1000px', height: '600px', background: '#f2f2f2', border: '4px solid rgb(251, 217, 21)', maxHeight: '600px' }}
        >
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
                maxHeight: '400px',
              }}
            />
            <Card.Body>
              <Card.Title style={{ display: 'flex', justifyContent: 'flex-end' }}></Card.Title>
              <Card.Text style={{ fontSize: 30 }}>
                {' '}
                {paymentInfo[0].MERCHANT_NAME} <br />
                객실유형 와야함{' '}
              </Card.Text>
              <Card.Text style={{ fontSize: 25 }}>
                <FontAwesomeIcon icon="fa-solid fa-location-dot" fade size="xs" style={{ color: '#1c2d4a' }} />
                숙소주소 와야함
              </Card.Text>
              <Card.Text style={{ fontSize: 30 }}> CHECKIN : 체크인 시간 </Card.Text>
              <Card.Text style={{ fontSize: 30 }}> CHECKOUT : 체크아웃 시간 </Card.Text>
            </Card.Body>
          </div>
          <div className="button-position" style={{ display: 'flex', justifyContent: 'center', marginTop: '60px', marginLeft: '630px' }}>
            <Link to="/mypage/reservations">
              <Button
                onClick={() => {}}
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: 'rgb(0,88,171)',
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
            {/*  <Link to="/">
              <Button
                style={{width: 150,height: 50,backgroundColor: 'rgb(0,88,171)',color: '#fff',fontWeight: 'bold',
                  transition: 'background-color 0.3s ease',border: 'none',cursor: 'pointer',marginLeft: '10px',}} >
                메인페이지로
              </Button>
            </Link> */}
          </div>
        </Card>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default ReservationNotificationPage;
