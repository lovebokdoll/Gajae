import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/footer/Footer";
import HeaderNav1 from "../../components/header/HeaderNav1";
import HeaderNav2 from "../../components/header/HeaderNav2";
import HotelAvailability from "../../components/hotel/HotelAvailability";
import HotelFacilities from "../../components/hotel/HotelFacilities";
import HotelInformation from "../../components/hotel/HotelInformation";
import HotelPolicies from "../../components/hotel/HotelPolicies";
import ScrollToComponent from "../../components/scroll/ScrollToComponent";
import { json } from "react-router-dom";
import { hotelListDB } from "../../service/hotelReservLogic";

/**
 *
 * @returns 예약 가능 옵션보기 페이지
 */
const HotelPage = () => {
  //스크롤기능구현 배열 ref생성
  const scrollRef = useRef([]);
  // const hotelFacilities = useRef();
  // const hotelPolicies = useRef();

  //호텔정보 담기
  const [property, setProperty] = useState([{}]);
  //호텔정보 담기
  useEffect(() => {
    const getHotel = async () => {
      const datas = {};
      const response = await hotelListDB(datas);
      console.log(response.data);
      setProperty(response.data);
    };
    getHotel();
  }, []);
  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      {/*scrollRef의 배열을 props로 넘겨준다 */}
      <ScrollToComponent scrollRef={scrollRef} />

      {property.map((row, index) => (
        <HotelInformation key={index} row={row} />
      ))}
      {/* 이동할 컴포넌트에 ref로 넘겨준다 */}
      {property.map((row, index) => (
        <HotelAvailability key={index} row={row} ref={scrollRef} />
      ))}
      {property.map((row, index) => (
        <HotelFacilities key={index} row={row} ref={scrollRef} />
      ))}
      {property.map((row, index) => (
        <HotelPolicies key={index} row={row} ref={scrollRef} />
      ))}
      <Footer />
    </>
  );
};

export default HotelPage;
