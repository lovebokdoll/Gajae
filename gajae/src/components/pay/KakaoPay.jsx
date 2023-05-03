import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paymentInsert } from '../../service/pay/pay';
import { resInsert } from '../../service/reservation/reservation';

const KakaoPay = (effect, deps) => {
  const thirtyMinutesFromNow = new Date(Date.now() + 10 * 60 * 3000);
  const navigate = useNavigate();
  const [localID, setLocalId] = useState('');

  const [resPrice, setResPrice] = useState(Cookies.get('resPrice'));
  const [resTitle, setResTitle] = useState(Cookies.get('p_title'));
  const [resRoomType, setResRoomType] = useState(Cookies.get('resRoomType'));
  const [resName, setResName] = useState(Cookies.get('resName'));
  const [resEmail, setResEmail] = useState(Cookies.get('resEmail'));
  const [resNumber, setResNumber] = useState(Cookies.get('resNumber'));
  const [resStartDate, setResStartDate] = useState(Cookies.get('startDate'));
  const [resEndDate, setResEndDate] = useState(Cookies.get('endDate'));
  const [resPeople, setResPeople] = useState(Cookies.get('resPeople'));
  const [p_id, setP_id] = useState(Cookies.get('p_id'));
  const [room_id, setRoom_id] = useState(Cookies.get('resRoomId'));

  const [resInfo, setResInfo] = useState({
    resTitle: resTitle,
    resRoomType: resRoomType,
    resPrice: resPrice,
    resName: resName,
    resEmail: resEmail,
    resMobile: resNumber,
    resStartDate: resStartDate,
    resEndDate: resEndDate,
    resPeople: resPeople,
    r_state: '예약확정', //
    r_eta: '아직 모름',
    r_ps: '별도 요청 사항 없음',
    p_id: p_id,
    room_id: room_id,
  });

  useEffect(() => {
    setLocalId(window.localStorage.getItem('userId'));
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    console.log('resInfo ===> ', resInfo);

    if (
      !resInfo.resTitle ||
      !resInfo.resRoomType ||
      !resInfo.resPrice ||
      !resInfo.resName ||
      !resInfo.resEmail ||
      !resInfo.resMobile ||
      !resInfo.resStartDate ||
      !resInfo.resEndDate ||
      !resInfo.resPeople ||
      !resInfo.r_state ||
      !resInfo.r_eta ||
      !resInfo.r_ps ||
      !resInfo.p_id ||
      !resInfo.room_id
    ) {
      alert('예약 정보가 충분하지 않습니다. 모든 필수 정보를 입력해주세요.');
      return;
    }

    const { IMP } = window;
    IMP.init([['imp68150140']]); // 결제 데이터 정의
    const data = {
      pg: 'kakaopay',
      pay_method: 'card',
      merchant_uid: `mid_${new Date().getTime()}`,
      name: resTitle,
      roomType: resRoomType,
      amount: resPrice,
      custom_data: { name: '부가정보', desc: '세부 부가정보' },
      buyer_name: resName,
      buyer_tel: resNumber,
      buyer_email: resEmail,
    };
    console.log('onClickPayment.data ===> ', data);
    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const { success, error_msg } = response;
    console.log('response ===>', response);

    if (success) {
      console.log('resInfo ===>', resInfo);
      console.log('success:response ===>', response);
      if (response.bank_name === null) {
        response.bank_name = '';
      }
      if (response.card_name === null) {
        response.card_name = '';
      }
      const paymentData = {
        pay_number: response.imp_uid,
        apply_num: response.apply_num,
        bank_name: response.bank_name,
        buyer_addr: response.buyer_addr,
        buyer_email: response.buyer_email,
        buyer_name: response.buyer_name,
        buyer_postcode: response.buyer_postcode,
        buyer_tel: response.buyer_tel,
        card_name: response.card_name,
        card_number: response.card_number,
        card_quota: response.card_quota,
        currency: response.currency,
        merchant_uid: response.merchant_uid,
        merchant_name: response.name,
        paid_amount: response.paid_amount,
        paid_at: response.paid_at,
        pay_method: response.pay_method,
        pg_provider: response.pg_provider,
        pg_tid: response.pg_tid,
        pg_type: response.pg_type,
        receipt_url: response.receipt_url,
        status: response.status,
        success: response.success,
      };
      console.log('paymentData ===>', paymentData);

      const payInsert = async () => {
        const paymentResponse = await paymentInsert(paymentData);
        console.log('payInsert response ===> ', paymentResponse.data);

        const reservationData = {
          USER_ID: localID,
          P_ID: parseInt(resInfo.p_id),
          R_START_DATE: resInfo.resStartDate,
          R_END_DATE: resInfo.resEndDate,
          R_NAME: paymentData.buyer_name,
          R_MOBILE: resInfo.resMobile,
          R_EMAIL: paymentData.buyer_email,
          R_PEOPLE: resInfo.resPeople,
          R_ETA: resInfo.r_eta,
          R_PS: resInfo.r_ps,
          R_STATE: resInfo.r_state,
          PAY_NUMBER: paymentData.pay_number,
          ROOM_ID: parseInt(resInfo.room_id),
        };
        console.log('reservationData ===>', reservationData);

        const reservationResponse = await resInsert(reservationData);
        console.log('reservationResponse = 예약번호(PK) ===>', reservationResponse.data);
        console.log('R_NUMBER ===>', reservationResponse.data);
        console.log('PAY_NUMBER ===>', response.imp_uid);
        console.log('P_ID ===>', resInfo.p_id);
        console.log('ROOM_ID ===>', resInfo.room_id);

        Cookies.set('RES_RESNUM', reservationResponse.data, { expires: thirtyMinutesFromNow });
        Cookies.set('RES_PAYNUM', response.imp_uid, { expires: thirtyMinutesFromNow });
        Cookies.set('RES_PID', resInfo.p_id, { expires: thirtyMinutesFromNow });
        Cookies.set('RES_ROOMID', resInfo.room_id, { expires: thirtyMinutesFromNow });
      };
      payInsert();
      navigate('/reservation/notification');
    } else {
      alert(`결제 실패 : ${error_msg} 다시 시도해주시길바랍니다`);
    }
  };

  return (
    <>
      <button onClick={onClickPayment} style={{ border: '0', background: 'none' }}>
        <img src="../images/paylogo.png" alt="카카오페이로 결제하기" />
      </button>
    </>
  );
};

export default KakaoPay;
