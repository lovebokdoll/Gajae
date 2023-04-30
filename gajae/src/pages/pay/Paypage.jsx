import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import CountrySelector from '../../components/pay/CountrySelector';
import InicisPay from '../../components/pay/InicisPay';
import KakaoPay from '../../components/pay/KakaoPay';
import PaymentSide from '../../components/pay/PaymentSide';
import { convertEndDate, convertStartDate, countNights, dayOfWeek } from '../../service/reservation/resInformation';
import { MGDIV } from '../login/styled-loginpage';
import { MarginBottomDiv10, MarginBottomDiv3 } from './styled-pay';
const PaymentPage = () => {
  const [resNumber, setResNumber] = useState('');
  const [agreed, setAgreed] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (value) => {
    setSelectedCountry(value);
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

  const resMobileChange = (event) => {
    let phoneNumber = event.target.value;
    phoneNumber = phoneNumber.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
    phoneNumber = phoneNumber.slice(0, 11); // 11자리 이상일 경우 초과분 제거
    const regex = phoneNumber.length === 11 ? /(\d{3})(\d{4})(\d{4})/ : /(\d{3})(\d{3,4})(\d{4})/;
    phoneNumber = phoneNumber.replace(regex, '$1-$2-$3');
    console.log(phoneNumber);
    setResNumber(phoneNumber);
    Cookies.set('resNumber', phoneNumber);
    console.log(resNumber);
  };

  useEffect(() => {
    // Cookies.set('resNumber', resNumber);
    const userMobile = window.localStorage.getItem('userMobile');
    if (userMobile) {
      const formattedMobile = userMobile.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
      Cookies.set('resNumber', formattedMobile);
      setResNumber(formattedMobile);
    }
  }, []);

  const handleAgreeChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!agreed) {
      alert('개인정보 수집에 동의해주세요.');
      return;
    }
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <br />
 

      <div className="Container">
        <Form className="inner-outter1" style={{ display: 'flex', justifyContent: 'center', height: 800 }} onSubmit={handleSubmit}>
          <PaymentSide paymentSideData={paymentSideData} />
          <Card className="personal-info" style={{ width: '50rem', backgroundColor: 'rgb(214,230,245)' }}>
            <div className="innner1" style={{ paddingLeft: '30px',paddingTop:'10px' }}>
              <Card className='cardname' style={{paddingLeft:'15px'}}>
              <h3 x style={{ paddingTop: '10px' }}>
                {' '}
                개인정보 입력{' '}
              </h3>
              <div style={{ width: '600px', height: '90px', border: '1px solid grey', marginBottom: '15px' }}>
                <span>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  이제 거의 마무리되었어요! * 필수 정보만 마저 입력하시면 됩니다. 호텔 측에서 알아볼 수 있도록 로마자로 상세 정보를
                  작성해주세요{' '}
                </span>
              </div>
              <MarginBottomDiv10 />
              <label>
                국가/지역 <span style={{ color: 'red' }}>*</span>
              </label>
              <CountrySelector countrySelect={handleCountrySelect} />
              <MarginBottomDiv10 />
              <div>
                <label>
                  전화번호(가능한 경우 휴대폰) <span style={{ color: 'red' }}>*</span>
                </label>
                <MarginBottomDiv3 />
                <input
                  type="tel"
                  value={resNumber}
                  onChange={resMobileChange}
                  required
                  style={{
                    width: '256.32px',
                    height: '32px',
                    borderWidth: '1px',
                    padding: '4px 24px 4px 8px',
                    lineHeight: '20px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bui_color_white)',
                  }}
                  />
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#333333' }}>숙박 시설에서 연락을 드릴 수 있습니다.</span>
                </div>
                  </div>
                  </Card>
            
                <hr />

                <Card className='reservate-check' style={{borderRadius:'10px',padding:'16px'}}> 
                <h3>예약 내역 확인</h3>
                <p>선택 호텔: {paymentSideData.p_title}</p>
                <p>주소: {paymentSideData.resAddress}</p>
                <p>선택 객실: {paymentSideData.resRoomType}</p>
                <p> 체크인: {paymentSideData.startDate} {`(${paymentSideData.startAndEndDays[0]})`} {paymentSideData.p_checkin}부터
                </p>
                <p>
                  체크아웃: {paymentSideData.endDate} {`(${paymentSideData.startAndEndDays[1]})`} {paymentSideData.p_checkout}까지
                </p>
                <p>총 숙박 기간: {paymentSideData.diffDays}박</p>
                <p>객실 수: {paymentSideData.selectedRoomNumber}</p>
                <p>투숙 인원: 성인 {paymentSideData.resPeople}명</p>
                </Card>
            </div>
          </Card>
        </Form>
        {/* end of inner-outter1 */}
        <br />

 {/* 개인정보 동의 */}
  <Form className="inner-outter3" style={{ height: 95 }}>
  <Card className="agree-checkbox" style={{ 
    width: '50rem', 
    alignContent: 'center', 
    backgroundColor: 'rgb(214,230,245)',
    margin: 'auto',
    marginRight: '50px' // 오른쪽으로 50px 이동
  }}>
    <h3 style={{ paddingLeft: '40px' }}>개인정보 동의</h3>
    <div className="innner3" style={{ paddingLeft: '40px' }}>
      <input type="checkbox" id="agreed" checked={agreed} onChange={handleAgreeChange} required />
      <label htmlFor="agreed">개인정보 수집에 동의합니다.</label>
      <br />
      <span style={{ fontWeight: 'bold' }}> 동의버튼을 누르셔야만 결제버튼이 생깁니다.</span>
    </div> 
     </Card>
    </Form>



        {/* inner-outter3 */}

        <br />
        {agreed && (
          <div>
            <span className="pay-button" style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ fontSize: 30, marginRight: 200, border: '1,solid,black' }}> 결제하실 금액 {paymentSideData.resPrice} 원</span>
              <span className="Pay" style={{ display: 'flex', justifyContent: 'flex-end', width: 500 }}>
                <InicisPay />
                <KakaoPay />
              </span>
            </span>
          </div>
        )}
      </div>
      <MGDIV></MGDIV>
      <MGDIV></MGDIV>

      <Footer />
    </>
  );
};

export default PaymentPage;
