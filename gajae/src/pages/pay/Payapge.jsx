import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import HeaderNav1 from '../../components/header/HeaderNav1'
import InicisPay from '../../components/pay/InicisPay'
import Payment from '../../components/pay/Payment'
import PropertyCard from '../../components/searchItem/PropertyCard'

const Payapge = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <HeaderNav1 />
      <br />
      <PropertyCard />
      <br />
      <br />
      <div className="card mx-auto" style={{ backgroundColor: "rgb(214,230,245)", width: '60rem' }}>
  <div className="card-body">
    <h4>개인정보 입력</h4>
    <hr />
    <div className="row">
      <div className="form-group">
        <label>예약자 이름</label>
        <input type="text" className="form-control" name="name" />
      </div>
      <div className="form-group">
        <label>연락받으실 전화번호</label>
        <input type="text" className="form-control" name="name" />
      </div>
    </div>
  </div>
</div>
<br />
<div className="card mx-auto" style={{ backgroundColor: "rgb(214,230,245)", width: '60rem' }}>
  <div className="card-body">
    <h4>예약 정보</h4>
    <hr />
    <div className="row">
      <div className="col">
        <p>체크인</p>
        <p>날짜</p>
        <p>YYYY MM DD</p>
        <p>15시부터</p>
      </div>
      <div className="col"></div>
      <div className="col">
        <p>체크아웃</p>
        <p>날짜</p>
        <p>YYYY MM DD</p>
        <p>12시까지</p>
      </div>
    </div>
  </div>
</div>
<br />
<div className="card mx-auto" style={{ backgroundColor: "rgb(214,230,245)", width: '60rem' }}>
  <div className="card-body">
    <h4>예약 완료에 필요한 절차입니다.</h4>
    <p>
      본인은 Booking.com 개인정보 보호정책에 명시된 바와 같이 필수적인 개인정보 수집 및 사용에 동의합니다. *<br />
      본인은 Booking.com 개인정보 보호정책에 명시된 바와 같이 필수로 요구되는 개인정보를 대한민국 국내외 제3자에 전송하는 것에 동의합니다. *
    </p>
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        이 사항에 동의합니다. (동의를 하셔야 결제 버튼이 활성화됩니다.)
      </label>
    </div>
  </div>
</div>

      <br />
      {checked && (//체크를 하면 결제버튼 활성화
  <>
    <Payment />
    <InicisPay />
  </>
)}
<Footer/>
</>

  )
}

export default Payapge
