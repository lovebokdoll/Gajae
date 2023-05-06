import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ResDropdownToggle from './MypageDropdownToggle/ResDropdownToggle';
import { ResBtnWrapper, ResDiv, ResItem, ResList, ResWrapper } from './mypage_css/styled-myres';

const MyResRow = ({ reservation }) => {
  console.log('reservation ===>', reservation);
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumber = [];
  const resPerPage = 5;

  //페이징 처리
  for (let i = 1; i <= Math.ceil(reservation?.length / resPerPage); i++) {
    pageNumber.push(i);
  }
  console.log('reservation ===>', reservation);

  const indexOfLastReview = currentPage * resPerPage;
  const indexOfFirstReview = indexOfLastReview - resPerPage;
  const resDelete = async () => {};

  useEffect(() => {}, []);
  const startDate = new Date(reservation.R_START_DATE);
  const formattedStartDate = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate
    .getDate()
    .toString()
    .padStart(2, '0')}`;

  const endDate = new Date(reservation.R_END_DATE);

  const formattedEndDate = `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate
    .getDate()
    .toString()
    .padStart(2, '0')}`;

  const weekday = ['일', '월', '화', '수', '목', '금', '토'];

  const startDayOfWeek = weekday[startDate.getDay()];
  const endDayOfWeek = weekday[endDate.getDay()];

  const lat = reservation.P_MAPY; // 위도
  const lng = reservation.P_MAPX; // 경도

  // 위도 계산
  const latDeg = Math.floor(Math.abs(lat));
  const latMin = ((Math.abs(lat) - latDeg) * 60).toFixed(3);
  const latDir = lat >= 0 ? 'N' : 'S';

  // 경도 계산
  const lngDeg = Math.floor(Math.abs(lng));
  const lngMin = ((Math.abs(lng) - lngDeg) * 60).toFixed(3);
  const lngDir = lng >= 0 ? 'E' : 'W';

  const gps = `${latDir} ${latDeg}° ${latMin}, ${lngDir} ${lngDeg}° ${lngMin}`;

  const taxRate = 0.1; // 10% 세율
  console.log(reservation);
  return (
    <ResDiv>
      <ResList>
        <ResItem>
          {/* 수정 삭제 버튼이 있는 컴포넌트 */}
          <ResBtnWrapper>
            <ResDropdownToggle className="resDropdown" reservation={reservation} />
          </ResBtnWrapper>
          <ResWrapper>
            <div className="hotelInfoFirst">
              <div className="hotelInfoDiv">
                <span>
                  <img className="resHotelImage" src={reservation.P_PHOTO} alt="placeholder_image" />
                </span>
                <div className="hotelName" style={{ width: '600px', fontSize: '0.9em' }}>
                  <FontAwesomeIcon icon="fa-solid fa-house" />
                  <span className="myResInfoPtitle" style={{ margin: '0px 0px 0px 0px', fontSize: '1.1em' }}>
                    {' '}
                    &nbsp;{reservation.P_TITLE}
                    &nbsp;{' '}
                    {Array.from({ length: reservation.P_STAR }, (_, index) => (
                      <FontAwesomeIcon style={{ fontSize: '0.8em', color: 'yellow' }} icon={faStar} key={index} />
                    ))}
                    <span
                      className="resDateSpan"
                      style={{
                        float: 'right',
                        marginRight: '15px',
                        fontSize: '0.9em',
                      }}
                    >
                      {' '}
                      <FontAwesomeIcon icon="fa-regular fa-calendar-check" />
                      {reservation.R_DATE}
                    </span>
                  </span>
                  <p className="myResInfoAddress" style={{ margin: '0px 0px 1px 0px', fontSize: '0.8em' }}>
                    주소:&nbsp;{reservation.P_ADDRESS}, 대한민국
                  </p>
                  <p className="myResInfoTel" style={{ margin: '0px 0px 1px 0px', fontSize: '0.8em' }}>
                    전화:&nbsp;{reservation.P_TEL}
                  </p>
                  <p className="myResInfoGps" style={{ margin: '0px 0px 0px 0px', fontSize: '0.8em' }}>
                    GPS 좌표계:&nbsp;{gps}
                  </p>{' '}
                  <p className="myResInfoTel" style={{ margin: '0px 0px 1px 0px', fontSize: '0.8em' }}>
                    객실유형: {reservation.ROOM_TYPE} ({reservation.ROOM_OPTION})
                  </p>
                  <p className="myResInfoDateCheck" style={{ margin: '0px 0px 1px 0px', fontSize: '0.8em' }}>
                    체크인: {reservation.R_START_DATE}&nbsp;({startDayOfWeek}
                    )&nbsp;{reservation.P_CHECKIN}부터 &nbsp;-&nbsp;체크아웃: {reservation.R_END_DATE}&nbsp;({endDayOfWeek})&nbsp;
                    {reservation.P_CHECKOUT}까지
                  </p>
                  <p className="myResInfoTel" style={{ margin: '0px 0px 1px 0px', fontSize: '0.8em' }}>
                    예약자 번호: {reservation.R_MOBILE}
                  </p>
                  <p className="myResInfoDateState" style={{ margin: '0px 0px 1px 0px', fontSize: '0.8em' }}>
                    예약상태: {reservation.R_STATE}
                  </p>
                  <p className="myResInfoTel" style={{ margin: '0px 0px 1px 0px', fontSize: '0.75em' }}></p>
                </div>
              </div>
              <div className="resPrice1" style={{ marginTop: '5px', fontSize: '0.75em' }}>
                요금{' '}
                <span className="resPrice1Span" style={{ float: 'right', marginRight: '10px' }}>
                  {reservation.PAID_AMOUNT.toLocaleString()}&nbsp;(
                  {reservation.CURRENCY})
                </span>
              </div>
              <div className="resOption" style={{ fontSize: '0.75em' }}>
                숙박옵션 1개 ({(taxRate * 100).toLocaleString()}% 세금)
                <span className="resOptionSpan" style={{ float: 'right', marginRight: '10px' }}>
                  {Math.round(reservation.PAID_AMOUNT * 0.1).toLocaleString()}
                </span>
              </div>
              <div className="resPrice2" style={{ fontSize: '0.75em' }}>
                요금{' '}
                <span className="expectedPrice" style={{ float: 'right', marginRight: '10px' }}>
                  예상요금&nbsp;{reservation.PAID_AMOUNT.toLocaleString()}
                  &nbsp;({reservation.CURRENCY})
                </span>
              </div>{' '}
              <div className="resPayOption" style={{ fontSize: '0.75em' }}>
                결제상태
                <span className="resPayOptionSpan" style={{ float: 'right', marginRight: '10px' }}>
                  {reservation.STATUS === 'paid' && <span>결제완료</span>}
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.4em' }}>
                  표시된 최종 요금은 숙소 측에 지불할 요금입니다. Gajae.com은 예약, 행정 및 기타 수수료를 고객님께 청구하지 않습니다.
                  신용카드 회사에서 해외 사용 수수료를 부과할 수 있습니다.
                </span>
                <br />
                <hr style={{ margin: '0px 5px 0px 0px', marginBottom: '0px' }} />
                <span style={{ fontSize: '0.4em' }}>
                  결제 관련 정보 {reservation.P_TITLE}에서 요금 결제 일체를 담당합니다. 이 숙박 업체에서 사용 가능한 결제
                  수단:&nbsp;신용카드,&nbsp;
                  {reservation.PG_PROVIDER}
                </span>
                <hr style={{ margin: '0px 5px 0px 0px', marginBottom: '0px' }} />
                <span style={{ fontSize: '0.4em' }}>
                  {' '}
                  통화 및 환율 정보 {reservation.P_TITLE}에서 결제일 시점의 환율에 따라 {reservation.CURRENCY} 통화로 결제하시게 됩니다.{' '}
                  <div>
                    현재 {reservation.CURRENCY}의 통화로 표기된 금액은 금일 {reservation.CURRENCY} 환율을 바탕으로 추산된 수치입니다.
                  </div>{' '}
                </span>
              </div>
            </div>
          </ResWrapper>
        </ResItem>
      </ResList>
      <div>
        <nav>
          <ul className="pagination justify-content-center">
            {pageNumber.map((page) => (
              <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                <a href="#" className="page-link" onClick={() => setCurrentPage(page)}>
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </ResDiv>
  );
};

export default MyResRow;
