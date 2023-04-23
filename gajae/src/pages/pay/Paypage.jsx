import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import HeaderNav1 from '../../components/header/HeaderNav1'
import InicisPay from '../../components/pay/InicisPay'
import Payment from '../../components/pay/KakaoPay'
import HeaderNav2 from '../../components/header/HeaderNav2'
import Cookies from 'js-cookie'
import { Card } from 'react-bootstrap'

const PayPage = () => { // Payapge 대신 PayPage로 수정
  const [checked, setChecked] = useState(false);
  
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };//

  const totalPrice = Cookies.get("totalPrice");
  const P_CHECKIN = Cookies.get("P_CHECKIN");
  const P_CHECKOUT = Cookies.get("P_CHECKOUT");
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (event) => {
    // 입력값에서 하이픈(-)을 제거하고 저장합니다.
    const inputPhoneNumber = event.target.value.replace(/-/g, '');
    let formattedPhoneNumber = '';

    // 입력값이 숫자로만 이루어져 있을 경우, 하이픈을 추가하여 변환합니다.
    if (!isNaN(inputPhoneNumber)) {
      if (inputPhoneNumber.length <= 3) {
        formattedPhoneNumber = inputPhoneNumber;
      } else if (inputPhoneNumber.length <= 7) {
        formattedPhoneNumber = inputPhoneNumber.slice(0, 3) + '-' + inputPhoneNumber.slice(3);
      } else {
        formattedPhoneNumber = inputPhoneNumber.slice(0, 3) + '-' + inputPhoneNumber.slice(3, 7) + '-' + inputPhoneNumber.slice(7, 11);
      }
    }

    setPhoneNumber(formattedPhoneNumber);
    return (
      <>
        <HeaderNav1 />
        <HeaderNav2 />
        <br />
        <Card className="card mx-auto" style={{ backgroundColor: "rgb(214,230,245)", width: '70rem', height: '300px' }}>
          <div className="card-body">
            <div style={{ fontSize: 30, fontWeight: 'bold', height: '350px' }}>
              개인정보 입력
            </div>
            <hr />
            <Card className="row" style={{ border: "2px solid black" }}>
              <div className="inside-card1" style={{ border: "2px solid black", backgroundColor: 'white', width: '800px' }}>
                <div className="bookernamecontains">
                  <label style={{ fontSize: 30 }}>예약자 이름</label><br />
                  <hr />
                  <input
                    type="text"
                    className="bookername"
                    name="name"
                    value={localStorage.getItem('bookerName') || ''}
                    style={{ width: '60%', height: 50 }}
                  />
                </div>
                <div className="bookertelcontains">
                  <label style={{ fontSize: 30 }}>연락받으실 전화번호</label><br />
                  <input
                    type="text"
                    className="bookertel"
                    name="tel"
                    maxLength="13"
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{3,4}"
                    placeholder="000-0000-0000"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    style={{ width: '60%', height: 50 }}
                  />
                </div>
                <div className="bookeremailcontains">
                  <label style={{ fontSize: 30 }}>예약자 이메일</label><br />
                  <hr />
                  <input
                    type="text"
                    className="bookeremail"
                    name="email"
                    value={localStorage.getItem('bookerEmail') || ''}
                    style={{ width: '60%', height: 50 }}
                  />
                </div>
                <div className="terms">
                  <label style={{ fontSize: 20 }}>
                    <input type="checkbox" name="terms" checked={checked} onChange={handleCheckboxChange} />
                    개인정보 수집 및 이용에 대한 안내 (필수)
                  </label>
                  <div style={{ marginTop: 10 }}>
                    <a href="/terms" target="_blank" style={{ textDecoration: 'underline' }}>전문 보기</a>
                  </div>
                </div>
              </div>
            </Card>
            <br />
            <div className="row" style={{ marginLeft: '800px' }}>
              <div style={{ marginRight: '20px' }}>
                <InicisPay amount={totalPrice} />
              </div>
              <Payment amount={totalPrice} />
            </div>
          </div>
        </Card>
        <br />
        <Footer />
      </>
    );
  };
}
  export default PayPage