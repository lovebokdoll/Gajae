import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const PaymentLoginStatus = ({ initialEmail }) => {
  return (
    <>
      <div className="card" style={{ width: '60rem', height: '8rem', backgroundColor: 'rgb(214,230,245)' }}>
        <div className="card-body">
          <div
            className="Login-text"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '782px',
              height: '82px',
              backgroundColor: 'white',
              borderRadius: '10px',
            }}
          >
            <img src="/images/payment/abstract-user-flat-4.png" alt="" width="50px" height="50px" style={{ marginLeft: '15px' }} />
            <div style={{ fontSize: '20px' }}>
              {/*  <FontAwesomeIcon icon="fa-solid fa-user" style={{ color: '#1a61db' }} /> */}
              <span style={{ fontSize: '0.95em', marginLeft: '15px' }}>로그인 하셨습니다.</span>
              <div className="loginStatusEmailDiv" style={{ fontSize: '0.8em', color: 'grey', marginLeft: '15px' }}>
                {initialEmail}{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default PaymentLoginStatus;
