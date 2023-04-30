import React from 'react';

const ReservationNotification = ({ reservationTime, reservationName }) => {
  
  return (
    <div className="reservation-notification">
      <h3>예약이 완료되었습니다!</h3>
      <p>예약 시간: {reservationTime}</p>
      <p>예약자 이름: {reservationName}</p>
    </div>
  );
};

export default ReservationNotification;
