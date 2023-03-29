import React from 'react';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import HotelAvailability from '../../components/hotel/HotelAvailability';
import HotelFacilities from '../../components/hotel/HotelFacilities';
import HotelPolicies from '../../components/hotel/HotelPolicies';

/**
 *
 * @returns 예약 가능 옵션보기 페이지
 */
const HotelPage = () => {
  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <HotelAvailability />
      <HotelFacilities />
      <HotelPolicies />
      <Footer />
    </>
  );
};

export default HotelPage;
