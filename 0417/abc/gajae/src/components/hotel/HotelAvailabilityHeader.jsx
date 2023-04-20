import React, { useEffect, useState } from "react";
import "./hotel.css";

import HotelSearchBar from "./HotelSearchBar";

/**
 *SearchBar 보여줌
 * @param {*} param0
 * @returns
 */
const HotelAvailabilityHeader = () => {
  return (
    <>
      <div className="availabilitytitle">예약 가능 여부</div>
      <div>
        <HotelSearchBar />
      </div>
    </>
  );
};

export default HotelAvailabilityHeader;
