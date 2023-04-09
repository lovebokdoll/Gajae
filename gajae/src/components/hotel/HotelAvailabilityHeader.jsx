import React, { useEffect, useState } from "react";
import { roomtypeListDB } from "../../service/hotelReservLogic";
import "./hotel.css";

import HotelAvailabilityRow from "./HotelAvailabilityRow";
import HotelSearchBar from "./HotelSearchBar";

/**
 *SearchBar 보여줌
 * @param {*} param0
 * @returns
 */
const HotelAvailabilityHeader = () => {
  return (
    <>
      <div className="title">예약 가능 여부</div>
      <div>
        <HotelSearchBar />
      </div>
    </>
  );
};

export default HotelAvailabilityHeader;
