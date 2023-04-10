import React, { useEffect, useState } from "react";
import "./hotel.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * 호텔정보를 나타낸다.
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
        <Button className="reserveBtn" variant="outline-info" onClick={reserve}>
          지금 예약하세요!
        </Button>
        <div className="hotel_address">
          <FontAwesomeIcon
            icon="fa-solid fa-location-dot"
            fade
            size="xs"
            style={{ color: "#1c2d4a" }}
          />
          {row.P_ADDRESS}
        </div>
        <div className="hotel_overview">{row.P_OVERVIEW}</div>
      </div>
    </>
  );
};

export default HotelInformation;
