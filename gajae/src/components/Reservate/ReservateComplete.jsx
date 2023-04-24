import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import HeaderNav1 from '../header/HeaderNav1';
import HeaderNav2 from '../header/HeaderNav2';

const ReservateComplete = () => {
  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <br />
      <div style={{ marginLeft: 200, fontSize: 50 }}>예약 완료되었습니다.</div>
      <div
        className="reservatecomplete-card"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card style={{ width: '1200px', height: '800px' }}>
          <Card.Img
            variant="top"
            src="../images/서울하야트.jpg"
            style={{ position: 'relative', width: '40%', top: '10px', left: '10px' }}
          />
          <Card.Body>
            <Card.Title
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            ></Card.Title>
            <Card.Text>카드 내용 1</Card.Text>
            <Card.Text>카드 내용 2</Card.Text>
            <Card.Text>카드 내용 3</Card.Text>
            <Card.Text>카드 내용 4</Card.Text>
            <Link to="/mypage/reservations">
              <button
                style={{
                  width: 350,
                  height: 75,
                  backgroundColor: 'rgb(0,53,128)',
                  color: '#fff',
                  fontWeight: 1100,
                }}
              >
                내 예약내역보기
              </button>
            </Link>
            <Link to="/">
              <button
                style={{
                  width: 350,
                  height: 75,
                  backgroundColor: 'rgb(0,53,128)',
                  color: '#fff',
                  fontWeight: 1100,
                }}
              >
                메인페이지로
              </button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default ReservateComplete;
