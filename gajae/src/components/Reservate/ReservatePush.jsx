import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import './push.css';
function ReservationPush() {
  const [resStartDate, setResStartDate] = useState(Cookies.get('startDate'));
  const [resEndDate, setResEndDate] = useState(Cookies.get('endDate'));
  const [resTitle, setResTitle] = useState(Cookies.get('p_title'));

  useEffect(() => {
    const reservationTimer = setTimeout(() => {
      Swal.close();
    }, 300000); // 5 minutes

    return () => clearTimeout(reservationTimer);
  }, []);

  useEffect(() => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '예약이 완료되었습니다!',
      html: `날짜: ${resStartDate} - ${resEndDate}<br/>장소: ${resTitle}`,
      background: '#ffffff',
      showCloseButton: true,
      timer: 300000, // 5 minutes
      timerProgressBar: true,
      customClass: {
        content: 'reservation-alert',
        closeButton: 'reservation-close-button'
      }
    });
  }, []);

  return null;
}

export default ReservationPush;

