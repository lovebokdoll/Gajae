import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const PaymentLoginStatus = () => {
  return (
    <>
      <div className="card" style={{ width: '60rem', height: '6rem', backgroundColor: 'rgb(214,230,245)' }}>
        <div className="card-body">
          <div style={{ width: '658px', height: '82px' }}>
            <div>
              {' '}
              <span>
                <FontAwesomeIcon icon={faInfoCircle} />
                &nbsp;로그인 하셨습니다.
              </span>{' '}
              <p style={{ marginLeft: '22px' }}>loveseesee@naver.com</p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default PaymentLoginStatus;
