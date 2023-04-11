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

  return (
    <>
      <div>
        <div className="hotel-container">
          <div className="images-container">
            <img src="./images/소노벨 변산1.webp" className="hotelImage" />
          </div>
          <div className="hotel-informations">
            {" "}
            <div className="hotel_title">{row.P_TITLE}</div>{" "}
            <div className="hotel_addr_">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelInformation;
