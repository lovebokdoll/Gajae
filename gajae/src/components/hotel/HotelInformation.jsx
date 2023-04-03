import React, { useEffect, useState } from "react";
import "./hotel.css";
import { hotelListDB } from "../../service/hotelReservLogic";
import { BButton } from "../../style/FormStyle";
import HotelAvailability from "./HotelAvailability";
import HotelAvailabilityRow from "./HotelAvailabilityRow";
/**
 * 호텔정보
 * @param {*} param0
 * @returns
 */
const HotelInformation = ({ row }) => {
  /* useEffect(() => {
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
        p_room_type: jsonDoc[0].P_ROOM_TYPE,
        p_price: jsonDoc[0].P_PRICE,
      });
    };
    hotelList();
  }, []);*/
  //console.log(hotel);
  const reserve = () => {
    console.log("지금예약버튼");

    //navigate("/");
  };

  return (
    <>
      <div className="title">호텔정보를 나타내는 페이지입니다.</div>
      <BButton onClick={reserve}>지금예약하세요!</BButton>
      <div className="hotel_title">{row.P_TITLE}</div>
      <div className="hotel_address">{row.P_ADDRESS}</div>
      <div className="hotel_overview">{row.P_OVERVIEW}</div>
    </>
  );
};

export default HotelInformation;
