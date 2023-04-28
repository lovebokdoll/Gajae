import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import InicisPay from '../../components/pay/InicisPay';
import KakaoPay from '../../components/pay/KakaoPay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { MarginBottomDiv10, MarginBottomDiv15, MarginBottomDiv3, MarginBottomDiv5 } from './styled-pay';
import CountrySelector from '../../components/pay/CountrySelector';
import { convertEndDate, convertStartDate, countNights, dayOfWeek } from '../../service/reservation/resInformation';
import PaymentSide from '../../components/pay/PaymentSide';
import { MGDIV } from '../login/styled-loginpage';
const PaymentPage = () => {
  const [resNumber, setResNumber] = useState(Cookies.get('resNumber') || '');
  const [agreed, setAgreed] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (value) => {
    setSelectedCountry(value);
  };

  const p_title = Cookies.get('p_title');
  const p_checkin = Cookies.get('p_checkin');
  const p_checkout = Cookies.get('p_checkout');
  const resRoomType = Cookies.get('resRoomType');
  const selectedRoomNumber = Cookies.get('selectedRoomNumber');
  const resPrice = Cookies.get('resPrice');
  const resAddress = Cookies.get('resAddress');
  const resStartDate = Cookies.get('startDate');
  const resEndDate = Cookies.get('endDate');
  const resPeople = Cookies.get('resPeople');
  const resName = Cookies.get('resName');

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [diffDays, setDiffDays] = useState();
  const [startAndEndDays, setStartAndEndDays] = useState([]);
  const receivedStartDate = new Date(resStartDate);
  const receivedEndDate = new Date(resEndDate);

  useEffect(() => {
    setStartDate(convertStartDate(resStartDate));
    setEndDate(convertEndDate(resEndDate));
    setDiffDays(countNights(receivedStartDate, receivedEndDate));
    setStartAndEndDays(dayOfWeek(receivedStartDate, receivedEndDate));
  }, []);

  const resMobileChange = (event) => {
    let phoneNumber = event.target.value;
    phoneNumber = phoneNumber.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
    phoneNumber = phoneNumber.slice(0, 11); // 11자리 이상일 경우 초과분 제거
    const regex = phoneNumber.length === 11 ? /(\d{3})(\d{4})(\d{4})/ : /(\d{3})(\d{3,4})(\d{4})/;
    phoneNumber = phoneNumber.replace(regex, '$1-$2-$3');
    Cookies.set('resNumber', phoneNumber);
    setResNumber(phoneNumber);
  };

  const handleAgreeChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!agreed) {
      alert('개인정보 수집에 동의해주세요.');
      return;
    }

    // 결제 처리 로직
    alert(`결제가 완료되었습니다. ${resName}님, 감사합니다!`);
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <br />
      <div className="Container" >

        <Form className='inner-outter1' style={{ display: 'flex', justifyContent: 'center', height: 700 }} onSubmit={handleSubmit}>
        <PaymentSide />
          <Card className="personal-info" style={{ width: '50rem', backgroundColor: 'rgb(214,230,245)' }}>
            <div className="innner1" style={{ paddingLeft: '40px'}}>
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
                <h3>예약 내역 확인</h3>
              <p>선택 호텔: {p_title}</p>
              <p>주소: {resAddress}</p>
              <p>선택 객실: {resRoomType}</p>
              <p>
                체크인: {startDate} {p_checkin} 부터
              </p>
              <p>
                체크아웃: {endDate} {p_checkout} 까지
              </p>
              <p>총 숙박 기간: {diffDays}박</p>
              <p>객실 수: {selectedRoomNumber}</p>
              <p>투숙 인원: 성인 {resPeople}명</p>
            </div>
              </div>
          
          </Card>
        </Form>
      {/* end of inner-outter1 */}
        <br />

        <Form className='inner-outter3' style={{ display: 'flex', justifyContent: 'center', height: 95 }}>
          <Card className="agree-checkbox" style={{ width: '50rem', alignContent: 'center', backgroundColor: 'rgb(214,230,245)' }}>
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
              <span style={{ fontSize: 30, marginRight: 200, border: '1,solid,black' }}> 결제하실 금액 {resPrice} 원</span>
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
