import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import HeaderNav1 from "../../components/header/HeaderNav1";
import HeaderNav2 from "../../components/header/HeaderNav2";
import HotelAvailability from "../../components/hotel/HotelAvailability";
import HotelFacilities from "../../components/hotel/HotelFacilities";
import HotelPolicies from "../../components/hotel/HotelPolicies";
import { hotelListDB } from "../../service/database";

/**
 *
 * @returns 예약 가능 옵션보기 페이지
 */
const HotelPage = () => {
  const [hotel, setHotelList] = useState({
    p_title: 0,
    p_tel: "",
    p_address: "",
    p_overview: "",
    p_detail: "",
  });
  useEffect(() => {
    const hotelList = async (hotel) => {
      const res = await hotelListDB(hotel);
      console.log(res.data);
      const result = JSON.stringify(res.data);
      console.log(result);
      const jsonDoc = JSON.parse(result);
      console.log(jsonDoc);
      setHotelList({
        p_title: jsonDoc[0].P_TITLE,
        p_tel: jsonDoc[0].P_TEL,
        p_address: jsonDoc[0].P_ADDRESS,
        p_overview: jsonDoc[0].P_OVERVIEW,
        p_detail: jsonDoc[0].P_DETAIL,
      });
    };
    hotelList();
  }, []);
  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <HotelAvailability hotel={hotel} />
      <HotelFacilities hotel={hotel} />
      <HotelPolicies hotel={hotel} />
      <Footer />
    </>
  );
};

export default HotelPage;
