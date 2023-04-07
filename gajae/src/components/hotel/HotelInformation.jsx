import React, { useEffect, useState } from "react";
import "./hotel.css";
import { hotelListDB } from "../../service/hotelReservLogic";
import { BButton } from "../../style/FormStyle";
import HotelAvailability from "./HotelAvailability";
import HotelAvailabilityRow from "./HotelAvailabilityRow";
import { Button } from "react-bootstrap";
/**
 * 호텔정보
 * @param {*} param0
 * @returns
 */
const HotelInformation = ({ row }) => {
  const reserve = () => {
    console.log("지금예약버튼");

    //navigate("/");
  };

  return (
    <>
      <div>
        <span className="hotel_title">{row.P_TITLE}</span>
        <Button variant="outline-info" onClick={reserve}>
          지금 예약하세요!
        </Button>
        <div className="hotel_address">{row.P_ADDRESS}</div>
        <div className="hotel_overview">{row.P_OVERVIEW}</div>
      </div>
    </>
  );
};

export default HotelInformation;
