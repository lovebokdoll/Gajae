import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import HeaderNav1 from '../header/HeaderNav1';
import HeaderNav2 from '../header/HeaderNav2';
import { convertEndDate, convertStartDate, countNights, dayOfWeek } from '../../service/reservation/resInformation';
import PaymentSide from '../pay/PaymentSide';
import PaymentLoginStatus from '../pay/PaymentLoginStatus';
import PaymentPropertyCard from '../pay/PaymentPropertyCard';
/*
DB에서넘어온 정보와, lOGIN에서 넘어온 정보,
HotelAvailabilityRow 에서 선택한, 
예약 상세정보와 로그인정보가 넘어온다.
*/

const ReservationDetail = () => {
  const [initialName, setInitialName] = useState('');
  const [initialEmail, setInitialEmail] = useState('');
  const [initialNickname, setInitialNickname] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    setInitialName(localStorage.getItem('userName'));
    setInitialEmail(localStorage.getItem('userEmail'));
    setInitialNickname(localStorage.getItem('userNickname'));
    Cookies.set('resName', localStorage.getItem('userName'));
    Cookies.set('resEmail', localStorage.getItem('userEmail'));
  }, []);

  const resNameChange = (event) => {
    setName(event.target.value);
    const resName = event.target.value;
    console.log('name ===>', name);
    console.log('resName ===>', resName);
    Cookies.set('resName', resName);
  };

  const resEmailChange = (event) => {
    setEmail(event.target.value);
    const resEmail = event.target.value;
    console.log('email ===>', email);
    console.log('resEmail ===>', resEmail);
    Cookies.set('resEmail', resEmail);
  };

  const resStartDate = Cookies.get('startDate');
  const resEndDate = Cookies.get('endDate');
  const receivedStartDate = new Date(resStartDate);
  const receivedEndDate = new Date(resEndDate);

  const [paymentSideData, setPaymentSideData] = useState({
    p_title: Cookies.get('p_title'),
    p_checkin: Cookies.get('p_checkin'),
    p_checkout: Cookies.get('p_checkout'),
    resRoomType: Cookies.get('resRoomType'),
    selectedRoomNumber: Cookies.get('selectedRoomNumber'),
    resPrice: Cookies.get('resPrice'),
    resAddress: Cookies.get('resAddress'),
    startDate: convertStartDate(Cookies.get('startDate')),
    endDate: convertEndDate(Cookies.get('endDate')),
    diffDays: countNights(receivedStartDate, receivedEndDate),
    startAndEndDays: dayOfWeek(receivedStartDate, receivedEndDate),
    resPeople: Cookies.get('resPeople'),
  });

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PaymentSide paymentSideData={paymentSideData} />
        <div className="card1" style={{ width: '958px', backgroundColor: 'rgb(214,230,245)', margin: '0px 0px 0px 12.5px' }}>
          <div className="space-div" style={{ width: '20px' }}></div>
          <PaymentPropertyCard />
          <PaymentLoginStatus initialEmail={initialEmail} />
          <div className="card" style={{ width: '60rem', backgroundColor: 'white' }}>
            <div className="card-inner" style={{ width: '60rem', backgroundColor: 'rgb(214,230,245)' }}>
              <div className="card-body">
                <div
                  className="card-Detail"
                  style={{ backgroundColor: 'white', borderRadius: '10px', width: '782px', fontSize: '30px', padding: '20px' }}
                >
                  <div style={{ fontSize: '30px' }}>상세정보를 입력하세요</div>
                  <br />
                  <hr />
                  <span className="card-title" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    <strong> {initialNickname}</strong>님 거의 마무리가 되었어요!
                  </span>
                  {/* 별명 출력 */}
                  <form>
                    <div className="booker-name">
                      <label className="form-label" style={{ fontSize: '20px' }}>
                        {' '}
                        예약자 이름 *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="실명을 입력해주세요."
                        style={{ width: '60%', fontSize: '20px' }}
                        value={name || initialName}
                        onChange={resNameChange}
                      />
                    </div>
                    <label className="form-label" style={{ fontSize: '20px' }}>
                      {' '}
                      예약자 E-MAIL *
                    </label>
                    <br />
                    <input
                      type="text"
                      className="booker-email form-control"
                      id="email"
                      name="email"
                      style={{ width: '60%', fontSize: '20px' }}
                      value={email || initialEmail}
                      onChange={resEmailChange}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="card" style={{ width: '60rem', backgroundColor: 'rgb(214,230,245)' }}>
            <div className="card-body">
              {/* end of 상세정보*/}
              <div className="card" style={{ width: '49rem' }}>
                <div className="card-body">
                  <div style={{ fontSize: 30 }}>예약 정보</div>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <div className="rev-infocard" style={{ fontSize: 20 }}>
                        <ul>
                          <li>
                            체크인: {paymentSideData.startDate} {paymentSideData.p_checkin} ({paymentSideData.startAndEndDays[0]}) 부터
                            <br />
                            체크아웃:{paymentSideData.endDate} {paymentSideData.p_checkout} ({paymentSideData.startAndEndDays[1]})까지
                          </li>
                          <li>
                            ({paymentSideData.startAndEndDays[0]}) ~ ({paymentSideData.startAndEndDays[1]}){' '}
                          </li>
                          <li>총 숙박 기간: {paymentSideData.diffDays}박</li>
                          <hr style={{ width: '47rem' }} />
                          <li>선택 숙소: {paymentSideData.p_title}</li>
                          <li>선택 객실: {paymentSideData.resRoomType}</li>
                          <li>호텔 주소: {paymentSideData.resAddress} </li>
                          <li>체크인: {paymentSideData.p_checkin} </li>
                          <li>체크아웃: {paymentSideData.p_checkout}</li>
                          <li>객실 수: {paymentSideData.selectedRoomNumber}</li>
                          <li>투숙 인원: 성인 {paymentSideData.resPeople} 명</li>
                          <li>선택한 인원에 적합한 객실입니다!</li>
                          {/* 쿠키에서 꺼내오기*/}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card" style={{ width: '49rem' }}>
                <div className="card-body">
                  <div style={{ fontSize: 30 }}> 별도 요청사항 </div> {/* 사용자가 작성했을시 host에게 전달 되고 2차때 할 예정*/}
                  <hr />
                  <div className="info">
                    별도 요청 사항을 보장해드릴 수는 없으나, 숙소 측에서 서비스 제공을 위해 최선의 노력을 다할 것입니다.
                    <br />
                    예약을 완료한 후에도 별도 요청 사항을 보내실 수 있으니 참고 바랍니다.{' '}
                  </div>
                  <div>
                    아래에 요청 사항을 작성해 주시기 바랍니다. (<strong>* 선택 사항</strong>)
                  </div>
                  <textarea style={{ width: 740 }}>여기에 입력하세요</textarea>
                </div>
              </div>
              <br />

              <div className="d-flex justify-content-between align-items-center">
                <div className="text" style={{ width: '300px' }}>
                  <span style={{ fontSize: 40, fontWeight: 'bold' }}>결제요금 </span>
                  <br />
                  <span className="won" style={{ fontSize: '30px', fontWeight: 'bold' }}>
                    {Number(paymentSideData.resPrice).toLocaleString() + '원'}
                  </span>
                  <span>
                    <br /> * 추가 요금이 발생할 수 있습니다.
                  </span>
                </div>
                {/* 결제 쿠키에서 꺼내기 */}
                <Button
                  variant="info"
                  style={{ textDecoration: 'none', borderBottom: 'none', border: 'none', backgroundColor: 'transparent' }}
                >
                  <Link to="/pay">
                    <img src="../images/결제페이지로.png" alt="결제하기" />
                  </Link>
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
