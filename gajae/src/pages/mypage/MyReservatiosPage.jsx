import React from 'react';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import { R_DIV } from './styled-reservations';

const MyReservatiosPage = () => {
  return (
    <>
      <HeaderNav1 />
      <div className="container">
        <R_DIV>
          <h2>여행 & 예약</h2>
        </R_DIV>
      </div>
      <Footer />
    </>
  );
};

export default MyReservatiosPage;