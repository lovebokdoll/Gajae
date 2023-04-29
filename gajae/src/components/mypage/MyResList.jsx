import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import '../mypage/mypage_css/myRes.css';
import { BackDiv, BtnWrapper, EmtyDiv, ReviewItem, ReviewList, ReviewWrapper, TLineDiv } from './mypage_css/styled-myres';
import { myReservation } from '../../service/mypage/mypage';

const MyResList = ({ userId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reservationList, setReservationList] = useState();
  const pageNumber = [];
  const resPerPage = 5;

  useEffect(() => {
    const tempID = window.localStorage.getItem('userId');
    if (tempID != null) {
      const myResParam = {
        USER_ID: tempID,
      };
      console.log(myResParam);

      const getMyReservation = async () => {
        const response = await myReservation(myResParam);
        console.log(response.data);
      };
      getMyReservation();
    }
  }, []);
  //페이징 처리
  for (let i = 1; i <= Math.ceil(reservationList?.length / resPerPage); i++) {
    pageNumber.push(i);
  }

  const indexOfLastReview = currentPage * resPerPage;
  const indexOfFirstReview = indexOfLastReview - resPerPage;
  const start = indexOfFirstReview;
  const end = indexOfLastReview;

  const resDelete = async () => {};
  return (
    <>
      <FontAwesomeIcon icon="fa-solid fa-house" />
      <FontAwesomeIcon icon="fa-regular fa-calendar-check" />
      <BackDiv>
        <h3 style={{ fontWeight: 'bold' }}>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" style={{ color: '#1e3050' }} />
          &nbsp; 여행 & 예약
        </h3>
        <TLineDiv></TLineDiv>
        <EmtyDiv></EmtyDiv>
      </BackDiv>
    </>
  );
};

export default MyResList;
