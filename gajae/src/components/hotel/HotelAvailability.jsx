import React, { useEffect, useState } from "react";
import { roomtypeListDB } from "../../service/hotelReservLogic";
import "./hotel.css";

import HotelAvailabilityRow from "./HotelAvailabilityRow";

/**
 * 여기서 룸타입가져오기 -  pid참조해서 가져오기
 * log.p_id 해서 가져오기
 * 옵션정보&요금 - 숙소정보
 * @param {*} param0
 * @returns
 */
const HotelAvailability = () => {
  const [roomType, setRoomType] = useState([]);
  useEffect(() => {
    const roomTypeList = async () => {
      const room = {
        P_ID: 1000,
      };
      const response = await roomtypeListDB(room);
      setRoomType(response.data);
      console.log(response.data);
    };
    roomTypeList();
  }, []);
  return (
    <>
      <div className="title">예약 가능 여부</div>

      <div>
        <HotelAvailabilityRow roomType={roomType} />
      </div>
    </>
  );
};

export default HotelAvailability;
