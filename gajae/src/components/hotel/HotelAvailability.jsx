import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./hotel.css";

import { useNavigate } from "react-router-dom";
import HotelSearchBar from "./HotelSearchBar";
import HotelAvailabilityRow from "./HotelAvailabilityRow";
import { BButton } from "../../style/FormStyle";

/**
 * 옵션정보&요금 - 숙소정보
 * @param {*} param0
 * @returns
 */
const HotelAvailability = forwardRef(({ row, props }, ref) => {
  //const [roomType, setRoomType] = useState(item);
  console.log(row);
  const navigate = useNavigate();
  const onReservation = () => {
    console.log("지금예약버튼 클릭 -> 결제확인페이지로 이동");
  };

  return (
    <>
      <div
        className="title"
        ref={(availabilityRef) => (ref.corrent[0] = availabilityRef)}
      >
        예약 가능 여부
      </div>
      <BButton onClick={onReservation}>지금예약</BButton>
      <div>{row.P_ROOM_TYPE}</div>
      <div> {row.P_PRICE}</div>
      {/* <HotelAvailabilityRow item={item} /> */}
    </>
  );
});

export default HotelAvailability;
