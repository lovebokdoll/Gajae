import React, { useEffect, useState } from 'react';

const InicisPay = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const bookerName = localStorage.getItem('bookerName');
const userEmail = localStorage.getItem('userEmail');
const tel = localStorage.getItem('tel');

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return decodeURIComponent(parts.pop().split(';').shift());
  }
}
const totalPrice = getCookie('totalPrice');//쿠키에서 가격호출
const roomType = decodeURIComponent(getCookie('roomtype'));
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);

    const checkIsLoaded = () => {
      if (window.IMP) {
        setIsLoaded(true);
      } else {
        setTimeout(checkIsLoaded, 100);
      }
    };

    checkIsLoaded();

    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    }
  }, []);

  const onClickPayment = () => {
    if (!isLoaded) {
      return;
    }

    const { IMP } = window;
    IMP.init([['imp68150140']]); // 결제 데이터 정의
    const data = {
      pg: 'html5_inicis', // PG사 (필수항목)
      pay_method: 'card', // 결제수단 (필수항목)
      merchant_uid: `mid_${new Date().getTime()}`, 
      name: roomType, // 주문명 (필수항목) //쿠키 에서꺼내오기 
      amount: totalPrice, // 금액 (필수항목)
      custom_data: { name: '부가정보', desc: '세부 부가정보' },
      buyer_name: 'bookerName', // 구매자 이름// localstorage
      buyer_tel: 'tel', // 구매자 전화번호 (필수항목)
      buyer_email: 'userEmail', // 구매자 이메일 /localstorage
     
    };
    IMP.request_pay(data, callback);
  }

  const callback = (response) => {
    const { success, error_msg } = response;
    if (success) {
      alert('결제 성공');
      window.location.href = '/pay/complete'; // 결제 성공 시 /pay/complete 페이지로 이동
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  }

  return (
    <>
      <button onClick={onClickPayment} style={{ border: '0', background: 'none' }}>
        <img src='../images/inicis.png' alt="카카오페이로 결제하기" />
      </button>
    </>
  );
}

export default InicisPay;
