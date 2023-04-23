import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import HeaderNav1 from '../../components/header/HeaderNav1'
import InicisPay from '../../components/pay/InicisPay'
import Payment from '../../components/pay/KakaoPay'
import HeaderNav2 from '../../components/header/HeaderNav2'
import Cookies from 'js-cookie'
import { Card } from 'react-bootstrap'

const Payapge = () => {
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
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <br />
      <div className="card mx-auto" style={{ backgroundColor: "rgb(214,230,245)", width: '70rem',height:'300px' }}>
  <div className="card-body">
    <div style={{fontSize:30, fontWeight:'bold'}}>개인정보 입력</div>
    <hr />
    <div className="row">
    <div className="bookernamecontains">
  <label style={{fontSize:30}}>예약자 이름</label><br/>
  <input type="text" className="bookername" name="name" value={localStorage.getItem('bookerName') || ''} style={{ width: '60%',height:50 }} />
</div>
<div className="bookertelcontains">
<label style={{fontSize:30}}>연락받으실 전화번호</label>
<br/>
<input
      type="text"
      className="bookertel"
      name="tel"
      maxLength="13"
      pattern="[0-9]{3}-[0-9]{4}-[0-9]{3,4}"
      placeholder="000-0000-0000"
      style={{ width: "60%" ,height:50}}
      value={phoneNumber}
      onChange={handleInputChange}
    />
</div>
    </div>
  </div>
</div>
<br />
<div className="card mx-auto" style={{ backgroundColor: "rgb(214,230,245)", width: '70rem',height:'300px',marginRight:10}}>
  <div className="card-body">
  <div style={{fontSize:30, fontWeight:'bold'}}>예약 정보</div>
    <hr />
    <div className="row justify-content-center" style={{ fontSize: 40, maxWidth: '800px', backgroundColor: 'white' }}>
  <Card className="p-3" style={{ margin: 'auto' }}>
    <div className="row">
      <div className="col">
        <p>날짜: YYYY MM DD</p>
        <hr />
        <p>체크인: {P_CHECKIN}부터</p>
      </div>
      <div className="col">
        <p>날짜: YYYY MM DD</p>
        <hr />
        <p>체크아웃: {P_CHECKOUT}까지</p>
      </div>
    </div>
  </Card>
</div>



  </div>
 

</div>
<br />
<div className="card mx-auto" style={{ backgroundColor: "rgb(214,230,245)", width: '70rem',height:'250px',marginRight:10}}>
  <div className="card-body">
    <h4>예약 완료에 필요한 절차입니다.</h4>
    <hr/>
    <div>
      본인은 Gajae.com 개인정보 보호정책에 명시된 바와 같이 필수적인 개인정보 수집 및 사용에 동의합니다. *<br />
      본인은 Gajae.com 개인정보 보호정책에 명시된 바와 같이 필수로 요구되는 개인정보를 대한민국 국내외 제3자에 전송하는 것에 동의합니다. *
    </div>
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        이 사항에 동의합니다. <span style={{fontColor:'red'}}> 필수 (동의를 하셔야 결제 버튼이 활성화됩니다.) </span>
      </label>
      <hr/>
<div className='totalCost' style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'right', }}>
  결제하실 총 금액: {totalPrice} 원
</div>
    </div>
  </div>
</div>

      <br />
      <div className="paybutton" style={{ display: "flex", justifyContent: "center" }}>
  {checked && (
    <>
      <Payment />
      <InicisPay />
    </>
  )}
</div>
<br/>
<Footer/>
</>

  )
}

export default Payapge
