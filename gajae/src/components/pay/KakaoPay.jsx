import React, { useEffect, useState } from 'react';
import { paymentInsert } from '../../service/pay/pay';
import { resInsert, vacancyUpdate } from '../../service/reservation/reservation';

const KakaoPay = (effect, deps) => {
  const [localID, setLocalId] = useState('');
  const bookerName = localStorage.getItem('bookerName');
  const userEmail = localStorage.getItem('userEmail');
  const tel = localStorage.getItem('tel');

  const [resInfo, setResInfo] = useState({
    r_number: '',
    user_id: '',
    p_id: 11,
    r_start_date: '2023-04-25',
    r_end_date: '2023-04-27',
    r_mobile: '010-2410-1226',
    r_people: '2',
    r_eta: '14:00',
    r_ps: '금연 객실을 원합니다.',
    r_state: '예약완료',
    room_id: 1,
  });

  const getCookie = (name) => {
    const value = document.cookie;
    const parts = value.split(`${name}=`);
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop().split(';').shift());
    }
  };

  const totalPrice = getCookie('totalPrice'); //쿠키에서 가격호출
  const P_TITLE = getCookie('P_TITLE'); //쿠키에서 호텔명호출
  const roomType = decodeURIComponent(getCookie('roomtype'));

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
    const { IMP } = window;
    IMP.init([['imp68150140']]); // 결제 데이터 정의
    const data = {
      pg: 'kakaopay',
      pay_method: 'card',
      merchant_uid: `mid_${new Date().getTime()}`,
      name: P_TITLE,
      roomType,
      amount: totalPrice,
      custom_data: { name: '부가정보', desc: '세부 부가정보' },
      buyer_name: bookerName,
      buyer_tel: tel,
      buyer_email: userEmail,
    };
    console.log('onClickPayment.data ===> ', data);
    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const { success, error_msg } = response;
    console.log('response ===>', response);

    if (success) {
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
        const response = await paymentInsert(paymentData);
        console.log('payInsert response ===> ', response.data);
      };
      payInsert();

      const reservationInsert = async () => {
        const reservationData = {
          /*  R_NUMBER: '', 스프링에서 자동생성 - 기존예약번호랑 중복되는지는 reservationLogic에서 처리 */
          R_NUMBER: resInfo.r_number,
          USER_ID: localID,
          P_ID: resInfo.p_id,
          R_START_DATE: resInfo.r_start_date,
          R_END_DATE: resInfo.r_end_date,
          R_NAME: paymentData.buyer_name,
          R_MOBILE: resInfo.r_mobile,
          R_EMAIL: paymentData.buyer_email,
          R_PEOPLE: resInfo.r_people,
          R_ETA: resInfo.r_eta,
          R_PS: resInfo.r_ps,
          R_STATE: resInfo.r_state,
          PAY_NUMBER: paymentData.pay_number,
          ROOM_ID: resInfo.room_id,
        };
        console.log('reservationData ===>', reservationData);
        const response = await resInsert(reservationData);
        console.log('reservationResponse ===>', response.data);
      };
      reservationInsert();

      const vacancyDateUpdate = async () => {
        const dateMap = {
          P_ID: resInfo.p_id,
          ROOM_ID: resInfo.room_id,
          PAY_NUMBER: paymentData.pay_number,
        };
        const response = await vacancyUpdate(dateMap);
        console.log('vacancyResponse ===>', response);
      };
      vacancyDateUpdate();

      // window.location.href = '/pay/complete'; // 결제 성공 시 /pay/complete 페이지로 이동
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
