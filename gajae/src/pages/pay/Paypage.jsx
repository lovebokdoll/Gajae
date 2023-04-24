import React, { useState } from "react";
import HeaderNav1 from "../../components/header/HeaderNav1";
import HeaderNav2 from "../../components/header/HeaderNav2";
import Footer from "../../components/footer/Footer";
import { Card, Form } from "react-bootstrap";
import Cookies from 'js-cookie'
import InicisPay from "../../components/pay/InicisPay";
import KakaoPay from "../../components/pay/KakaoPay";

function PaymentPage() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreed, setAgreed] = useState(false);

  const totalPrice = Cookies.get("totalPrice");
  const P_TITLE = Cookies.get("P_TITLE");
  const roomtype = Cookies.get("roomtype");
  const P_CHECKIN = Cookies.get("P_CHECKIN");
  const P_CHECKOUT = Cookies.get("P_CHECKOUT");
  const P_ADDRESS = Cookies.get("P_ADDRESS");

  
  
  const bookerName = localStorage.getItem('bookerName');

  const handleNameChange = (event) => {
    const newName = event.target.value.substring(0, 10);
    localStorage.setItem('bookerName', newName);
    setName(newName);
  };
  

  const handlePhoneNumberChange = (event) => {
    let phoneNumber = event.target.value;
    phoneNumber = phoneNumber.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
    phoneNumber = phoneNumber.slice(0, 11); // 11자리 이상일 경우 초과분 제거
    const regex = phoneNumber.length === 11 ? /(\d{3})(\d{4})(\d{4})/ : /(\d{3})(\d{3,4})(\d{4})/;
    phoneNumber = phoneNumber.replace(regex, '$1-$2-$3');
    setPhoneNumber(phoneNumber);
  };

  const handleAgreeChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!agreed) {
      alert("개인정보 수집에 동의해주세요.");
      return;
    }
  
    // 결제 처리 로직
    alert(`결제가 완료되었습니다. ${name}님, 감사합니다!`);
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <br/>
      <div className="Container">
      <Form style={{  display: "flex", justifyContent: "center", height: 180 }} onSubmit={handleSubmit}>
          <Card className="personal-info" style={{width:'60rem',backgroundColor: "rgb(214,230,245)"}}>
          <div className="innner1" style={{paddingLeft:'40px'}}>
            <h3 x> 개인정보 입력 </h3>
            <label htmlFor="name">예약자 이름</label>
<br />
<input 
  type="text" 
  id="name" 
  value={name || bookerName || ''} 
  onChange={handleNameChange} 
  required 
/>
            <div>
              <label>예약자 전화번호</label>
              <br />
              <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} required />
            </div>
          </div>
          </Card>
        </Form>
      <br/>
      <Form style={{ display: "flex", justifyContent: "center" }} >
      <Card className="reservate-info" style={{width:'60rem',backgroundColor: "rgb(214,230,245)"}}>
        <div className="innner2" style={{paddingLeft:'40px'}}>
          <h3>예약 내역 확인</h3>
          <p>호텔명: {P_TITLE}</p>
          <p>룸타입: {roomtype}</p>
          <p>주소: {P_ADDRESS}</p>
          <p>날짜 : </p>
          <p>체크인: {P_CHECKIN}</p>
          <p>체크아웃: {P_CHECKOUT}</p>
        </div>
      </Card>
      </Form>
      <br />
      <Form style={{ display: "flex", justifyContent: "center" ,height:95}} >

      <Card className="agree-checkbox" style={{width:'60rem' , alignContent:'center',backgroundColor: "rgb(214,230,245)"}}>
        <h3 style={{paddingLeft:'40px'}}>개인정보 동의</h3>
        <div className="innner3" style={{paddingLeft:'40px'}}>
          <input type="checkbox" id="agreed" checked={agreed} onChange={handleAgreeChange} required  />
          <label htmlFor="agreed">개인정보 수집에 동의합니다.</label><br/>
          <span style={{fontWeight:'bold'}}> 동의버튼을 누르셔야만 결제버튼이 생깁니다.</span>
        </div>
      </Card>
      </Form>
      <br/>
      {agreed && (
  <div>
    <span className="pay-button" style={{display:'flex',justifyContent:'center'}}>
      <span style={{fontSize:30,marginRight:200, border:'1,solid,black'}}> 결제하실 금액 {totalPrice} 원</span>
    <span className="Pay" style={{display:"flex",justifyContent:'flex-end',width:500}}>      
    <InicisPay />
    <KakaoPay />
    </span>
    </span>
  </div>
)}

      </div> 
      <br/>
      <Footer />
    </>
  );
  
}

export default PaymentPage;