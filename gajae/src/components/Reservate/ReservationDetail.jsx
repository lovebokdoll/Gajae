import Cookies from "js-cookie";
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import HeaderNav1 from '../header/HeaderNav1';
import HeaderNav2 from '../header/HeaderNav2';
/*
DB에서넘어온 정보와, lOGIN에서 넘어온 정보,
HotelAvailabilityRow 에서 선택한, 
예약 상세정보와 로그인정보가 넘어온다.
*/

const ReservationDetail = () => {

  const bookerName = localStorage.getItem('bookerName');// 결제 페이지로 넘기는 이름 
  // 이메일 넘겨주는거 

   const userNickname = localStorage.getItem('user_nickname');//00님 얼마 안남았습니다. 을 위한 getItem
     const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
     console.log(email);//이메일 콘솔로 찍어보자 
 
     ////////////////////////////////////////////////정보 localstorage에 담기  ////////////////////////////////////
  
 //const checkin = Cookies.get("checkin");
  //const checkout = Cookies.get("checkout");// 다빈이 넘겨주면 쿠키값호출 
  const roomTypes = Cookies.get("roomtype");
  const selectedNumber = Cookies.get("selectedNumber");
  const totalPrice = Cookies.get("totalPrice");
  console.log(roomTypes); // roomtype 쿠키의 값 콘솔창에 출력
  console.log(selectedNumber); // selectedNumber 쿠키의 값 콘솔창에 출력
  console.log(totalPrice); // totalPrice 쿠키의 값 콘솔창에 출력->안찍히는듯 왜? 안 찍힐까  
  
////////////////////////////////////////////////쿠키 ////////////////////////////////////


return (
<>
      <HeaderNav1 />
      <HeaderNav2 />
      <br />
      <div style={{display:'flex', justifyContent:'center'}}>
        <div className="card" style={{ width: '60rem', backgroundColor: "rgb(214,230,245)" }}>
          <span style={{fontSize:30}}>상세정보를 입력하세요</span>
          <div className="card" style={{ width: '60rem', backgroundColor: "rgb(214,230,245)" }}>
            <div className="card-body">
              <span className="card-title" style={{fontSize:20}}> <strong> {userNickname} </strong>님 거의 마무리가 되었어요!</span> {/* 별명 출력 */}
<form>
  <div className="booker-name">
    <label style={{fontSize:20}}> 예약자 이름 *</label>
    <input
  type="text"
  className="form-control"
  name="name"
  placeholder="실명을 입력해주세요."
  style={{ width: "100%" }}
  onChange={(event) =>
    localStorage.setItem("bookerName", event.target.value)
  }
  defaultValue={localStorage.getItem("bookerName") || ""}
/>
  </div> {/* 로*스에 담겨서 결제 페이지로 뿌려줄 예정*/}
  <label style={{fontSize:20}}> 예약자 E-MAIL *</label> {/* 로*스에 담겨서 결제 페이지로 뿌려줄 예정*/}
  <input type="text" className="booker-email" id="email" name="email" style={{width: "100%"}} value={email} onChange={(e) => {
      localStorage.setItem('userEmail', e.target.value); 
      setEmail(e.target.value);
    }}
  />
</form>
  </div>
 </div>
<br/><div className="card" style={{ width: '60rem', backgroundColor: "rgb(214,230,245)" }}>
  <div className="card-body">
      {/* end of 상세정보*/}
    <div className="card" style={{ width: '49rem' }}>
      <div className="card-body">
        <div style={{fontSize:30 }}>예약 정보</div>
        <hr />
        <div className="row">
  <div className="col">
    <div style={{fontSize: 20}}>
      <div>날짜: {/* 사용자가 선택한 날짜 */}</div>
      <div>
        <div>숙소명: {roomTypes}</div>
        <div>주소: </div>
        <div>체크인: </div>
        <div>체크아웃: </div>
        <div>투숙객 수: 총 {selectedNumber} 명</div>{/* 쿠키에서 꺼내오기*/ }
      </div>
    </div>
  </div>
</div>

      </div> 
    </div>
    <hr/>
    <div className="card" style={{ width: '49rem' }}>
      <div className="card-body">
      <div style={{fontSize:30}}> 별도 요청사항 </div>  {/* 사용자가 작성했을시 host에게 전달 되고  2차때 할 예정*/}
      <hr/>
      <div>별도 요청 사항을 보장해드릴 수는 없으나, 숙소 측에서 서비스 제공을 위해 최선의 노력을 다할 것입니다.
      예약을 완료한 후에도 별도 요청 사항을 보내실 수 있으니 참고 바랍니다. </div>   
      <div>아래에 요청 사항을 작성해 주시기 바랍니다. (<strong>* 선택 사항</strong>)</div>
<textarea style={{width:740}}>
  여기에 입력하세요
</textarea>
      </div>
    </div>
    <div className="d-flex justify-content-between align-items-center">
    <span style={{fontSize:35, fontWeight:'bold'}}>결제금액:  {totalPrice} 원</span>{/* 결제 쿠키에서 꺼내기 */}
    <Button variant="info" style={{ textDecoration: 'none', borderBottom: 'none' }}>
        <Link to="/pay">결제하기</Link>
      </Button>
    </div>
  </div>
</div>
  </div>
</div>
  <Footer />
</>
);
};

export default ReservationDetail;