import React from 'react';
import HeaderNav1 from '../header/HeaderNav1';
import Footer from '../footer/Footer';
import { Button } from 'react-bootstrap';
import PropertyCard from '../searchItem/PropertyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ReservationDetail = () => {
return (
<>
<HeaderNav1 />
<br />
<br />
<div style={{display:'flex', justifyContent:'center'}}>
  <div className="card" style={{ width: '60rem', backgroundColor: "rgb(214,230,245)" }}>
    
<h2>상세정보를 입력하세요</h2>
<div className="card" style={{ width: '60rem', backgroundColor: "rgb(214,230,245)" }}>
<div className="card-body">
<h5 className="card-title"> 길동님 거의 마무리가 되었어요!</h5>
<form>
<div className="form-group">
<label>성(영문): </label>
<input type="text" className="form-control" name="name" />
</div>
<div className="form-group">
<label>이름(영문):</label>
<input type="text" className="form-control" name="name" />
</div>
<div className="form-group">
<label>이메일주소:*</label>
<input type="text" className="form-control" name="email" />
</div>
</form>
</div>
</div>
<br/>
<div className="card" style={{ width: '60rem', backgroundColor: "rgb(214,230,245)" }}>
  <div className="card-body">
    <h5 className="card-title">룸타입 : 로즈마리룸</h5>
    <FontAwesomeIcon icon="fa-solid fa-ban-smoking" style={{ fontSize:29,color: "#ff0200" }} />
    <FontAwesomeIcon icon="fa-solid fa-wifi" style={{ fontSize:29,color: "#ff0200" }} />
    <FontAwesomeIcon icon="fa-solid fa-cart-flatbed-suitcase" style={{ fontSize:29,color: "#ff0200" }} />
    <FontAwesomeIcon icon="fa-solid fa-tv" style={{ fontSize:29,color: "#ff0200" }} />
    <hr />
    <div className="card" style={{ width: '49rem' }}>
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
    <hr/>
    <div className="card" style={{ width: '49rem' }}>
      <div className="card-body">
      <h4>별도요청사항</h4>
      <p>별도 요청 사항을 보장해드릴 수는 없으나, 숙소 측에서 서비스 제공을 위해 최선의 노력을 다할 것입니다.
      예약을 완료한 후에도 별도 요청 사항을 보내실 수 있으니 참고 바랍니다. </p>   
      <p>아래에 요청 사항을 작성해 주시기 바랍니다. (<strong>*선택 사항</strong>)</p>
<textarea style={{width:740}}>
  type here
</textarea>
      </div>
    </div>

    <div className="d-flex justify-content-between align-items-center">
      <span style={{fontSize:35}}>결제금액: $ 122 </span>
      <Button variant="info"><Link to="/pay">결제하기</Link></Button>
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