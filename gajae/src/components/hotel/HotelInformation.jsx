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
        <div className="div1">
          <img src="./images/소노벨 변산1.webp" className="hotelImage" />
          <div className="div2">
            <span className="hotel_title">{row.P_TITLE}</span>
            <div className="hotel_address">
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                fade
                size="xs"
                style={{ color: "#1c2d4a" }}
              />
              {row.P_ADDRESS}
            </div>
            <div className="hotel_overview">
              <div
                dangerouslySetInnerHTML={{
                  __html: row.P_OVERVIEW?.split(".").join(".<br>"),
                }}
              ></div>
              <Button
                className="reserveBtn"
                variant="outline-info"
                onClick={reserve}
              >
                지금 예약하세요!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelInformation;
