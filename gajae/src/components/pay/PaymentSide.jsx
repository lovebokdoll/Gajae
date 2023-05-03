import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
const PaymentSide = ({ paymentSideData }) => {
  console.log('PaymentSide ===>', paymentSideData);
  return (
    <aside style={{ width: '371.66px', height: '1500px' }}>
      <section
        className="paySideResSection"
        style={{ width: '371.66px', height: '489px', boxSizing: 'border-box', border: '1px solid lightgray', margin: '0px 0px 10px 0px' }}
      >
        <div style={{ width: '352.98px', height: '455px' }}>
          <h2 style={{ margin: '20px 10px 10px 25px' }}>내 예약 정보</h2>
          <div style={{ width: '282.92px', height: '110px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '156.83px', height: '92px', padding: '0px 16px 0px 0px', margin: '0px 0px 20px 25px' }}>
              <div style={{ fontSize: '1.05em' }}>체크인</div>
              <time>
                <span style={{ fontSize: '0.9em' }}>
                  {paymentSideData.startDate} ({paymentSideData.startAndEndDays[0]})
                </span>
                <br />
                <span style={{ fontSize: '0.9em' }}>{paymentSideData.p_checkin}부터</span>
              </time>
            </div>
            <div style={{ width: '156.83px', height: '92px', padding: '0px 0px 0px 16px' }}>
              <div style={{ fontSize: '1.05em' }}>체크아웃</div>
              <time>
                <span style={{ fontSize: '0.89em' }}>
                  {' '}
                  {paymentSideData.endDate} ({paymentSideData.startAndEndDays[1]})
                </span>
                <br />
                <span style={{ fontSize: '0.89em' }}>{paymentSideData.p_checkout}까지</span>
              </time>
            </div>
          </div>
          <div style={{ margin: '0px 0px 15px 25px' }}>
            <div>총 숙박 기간:</div>
            <div>{paymentSideData.diffDays}박</div>
          </div>
          <hr style={{ width: '320px', margin: '0px 0px 15px 25px' }} />
          <div style={{ width: '282.98px', height: '230px' }}>
            <div style={{ width: '282.98px', height: '112px' }}>
              <div style={{ width: '282.98px', height: '20px', margin: '0px 0px 10px 25px' }}>선택 객실</div>
              <ul style={{ width: '282.98px', height: '53px', margin: '0px 0px 20px 0px', padding: '0px 0px 0px 25px' }}>
                {' '}
                <div style={{ width: '282.98px', height: '20px', fontSize: '0.9em', margin: '0px 0px 2px 0px' }}>
                  {paymentSideData.resRoomType} x 1 (MAX 24 hour stay)
                </div>
                <div style={{ width: '282.98px', height: '60px', fontSize: '0.9em' }}>
                  Early Check-In 13:00 and Late Check-Out 13:00 Non-Smoking x 1
                </div>
              </ul>
              <ul style={{ width: '282.98px', height: '70px', padding: '0px 0px 0px 25px' }}>
                {' '}
                <div style={{ width: '282.98px', height: '20px', fontSize: '0.9em', margin: '0px 0px 10px 0px' }}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#00CC99' }} />
                  선택한 인원에 적합한 객실입니다.
                </div>
                <div style={{ width: '290.98px', height: '44px' }}>
                  <button>다른 객실로 변경</button>
                </div>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="paySidePriceSection"
        style={{ width: '371.66px', height: '401px', padding: '24px', boxSizing: 'border-box', border: '1px solid lightgray' }}
      >
        <div style={{ width: '345.98px', height: '367px' }}>
          <h2 style={{ margin: '0px 0px 10px 0px' }}>결제 요금 내역</h2>
          <div>
            <div style={{ width: '322.98px', height: '48px' }}>
              <li
                style={{
                  width: '328.98px',
                  height: '20px',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '0px 0px 5px 0px',
                }}
              >
                <div>기존요금</div>
                <div>{Math.round(paymentSideData.resPrice * 1.1).toLocaleString()}</div>
              </li>

              <li style={{ width: '328.98px', height: '20px', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                <div>GAJAE.COM에서 부담</div>
                <div>{Math.round(paymentSideData.resPrice * 0.1).toLocaleString()}</div>
              </li>
            </div>
            <div style={{ width: '314.98px', height: '1px' }}></div>
            <div
              className="priceColorDiv"
              style={{
                width: '368.9px',
                height: '84px',
                padding: '16px',
                marginLeft: '-24px',
                marginRight: '-16px',
                marginTop: '5px',
                border: '0',
                backgroundColor: '#ebf3ff',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginRight: 'auto' }}>&nbsp;&nbsp;결제금액</div>
                <div style={{ marginLeft: 'auto' }}>{Number(paymentSideData.resPrice).toLocaleString()}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                {' '}
                <FontAwesomeIcon icon={faPlus} />
                &nbsp;추가 요금이 발생할 수 있습니다.
              </div>
            </div>
            <h2 style={{ margin: '15px 0px 0px 0px' }}>요금 정보</h2>
            <div style={{ width: '282.98px', height: '123px' }}>
              <div className="64div" style={{ width: '282.98px', height: '50px' }}>
                {' '}
                <div style={{ width: '322.98px', height: '48px', display: 'flex', alignItems: 'center', margin: '5px 0px 0px 3px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ height: '24px', display: 'flex', alignItems: 'center' }}>세금 및 기타비용 포함</div>
                    <div style={{ height: '24px', display: 'flex', alignItems: 'center' }}>
                      <div style={{ flex: 1, fontSize: '0.9em' }}>10% 부가가치세(VAT)</div>
                      <div style={{ flex: 'none', marginLeft: '16px' }}>{Math.round(paymentSideData.resPrice * 0.1).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: '282.98px', height: '37.5px', margin: '0px 0px 0px 5px' }}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#00CC99' }} /> 도시세 제외
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default PaymentSide;
