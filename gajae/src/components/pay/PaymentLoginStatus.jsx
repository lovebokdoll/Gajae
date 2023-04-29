import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const PaymentLoginStatus = () => {
  return (
    <>
      <div className="card" style={{ width: '60rem', height: '8rem', backgroundColor: 'rgb(214,230,245)' }}>
        <div className="card-body">
        <div className="Login-text" style={{ display: 'flex', alignItems: 'center', width: '658px', height: '82px', backgroundColor: 'white', borderRadius: '10px' }}>
         <img src="./images/newlogo.png" alt="" width="120px" height="90px" style={{ marginRight: '22px' }} />
         <div style={{ fontSize: '20px' }}>
         <FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#1a61db",}} />
           <span style={{ marginLeft:'10px'}}>로그인 하셨습니다.</span>
           <div >loveseesee@naver.com </div>
         </div>
        </div>

        </div>
      </div>
      <br />
    </>
  );
};

export default PaymentLoginStatus;
