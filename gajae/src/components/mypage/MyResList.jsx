import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { myReservation } from '../../service/mypage/mypage';
import '../mypage/mypage_css/myRes.css';
import MyResRow from './MyResRow';
import { ResDiv, ResEmtyDiv, ResTLineDiv } from './mypage_css/styled-myres';

const MyResList = ({ userId }) => {
  const [reservationList, setReservationList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const resPerPage = 5;
  const pageNumber = [];

  if (reservationList) {
    for (let i = 1; i <= Math.ceil(reservationList.length / resPerPage); i++) {
      pageNumber.push(i);
    }
  }
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
        setReservationList(response.data);
      };
      getMyReservation();
    }
  }, []);

  return (
    <>
      <div className="myResListDiv">
        <h3 style={{ fontWeight: 'bold' }}>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" style={{ color: '#1e3050' }} />
          &nbsp; 여행 & 예약
          <ResTLineDiv></ResTLineDiv>
        </h3>
        <ResEmtyDiv></ResEmtyDiv>
        {reservationList &&
          reservationList
            .slice((currentPage - 1) * resPerPage, currentPage * resPerPage)
            .map((reservation) => <MyResRow key={reservation.R_NUMBER} reservation={reservation} />)}
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
      </div>
    </>
  );
};

export default MyResList;
