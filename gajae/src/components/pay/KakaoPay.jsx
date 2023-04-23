import React, { useEffect } from 'react';

const KakaoPay = (effect, deps) => {
  const bookerName = localStorage.getItem('bookerName');
  const userEmail = localStorage.getItem('userEmail');
  const tel = localStorage.getItem('tel');
  
  function getCookie(name) {
    const value = document.cookie;
    const parts = value.split(`${name}=`);
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop().split(';').shift());
    }
  }
  
  const totalPrice = getCookie('totalPrice');//쿠키에서 가격호출
  const P_TITLE = getCookie('P_TITLE');//쿠키에서 호텔명호출
  const roomType = decodeURIComponent(getCookie('roomtype'));
  
useEffect(() => {
const jquery = document.createElement("script");
jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
const iamport = document.createElement("script");
iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
document.head.appendChild(jquery);
document.head.appendChild(iamport);
return () => {
document.head.removeChild(jquery); document.head.removeChild(iamport);
}
}, []);

const onClickPayment = () => {
const { IMP } = window;
IMP.init([['imp68150140']]); // 결제 데이터 정의
const data = {
pg: 'kakaopay',
pay_method: 'card',
merchant_uid: `mid_${new Date().getTime()}`,
name: P_TITLE,roomType,
amount: totalPrice,
custom_data: { name: '부가정보', desc: '세부 부가정보' },
buyer_name: bookerName,
buyer_tel: tel,
buyer_email: userEmail,
};
IMP.request_pay(data, callback);
}

const callback = (response) => {
const {success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status} = response;
console.log('response ===>', response);
console.log('response.data ===>', response.data);
if (success) {
console.log('success:response ===>', response);
console.log('success:response.data ===>', response.data);
 // window.location.href = '/pay/complete'; // 결제 성공 시 /pay/complete 페이지로 이동

} else {
  alert(`결제 실패 : ${error_msg} 다시 시도해주시길바랍니다`); 

}
}

return (
<>
<button onClick={onClickPayment} style={{ border: '0', background: 'none' }}>
<img src='../images/paylogo.png' alt="카카오페이로 결제하기" />
</button>

</>
);
};

export default KakaoPay;