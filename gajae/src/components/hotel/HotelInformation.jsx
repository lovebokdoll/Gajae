import React, { useEffect, useState } from "react";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HotelDetailMapModal from "./HotelDetailMapModal";
/**
 * 호텔정보를 나타낸다.
 * @param {*} param0
 * @returns
 */
const HotelInformation = ({ row }) => {
  const [showModal, setShowModal] = useState(false); //모달창

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  console.log(row);
  return (
    <>
      <div>
        <div className="hotelContainer">
          <div className="images-container">
            <img className="hotel-Image" src={row.P_PHOTO}></img>
            <button
              id="mapbtn"
              type="mapbotton"
              className="me-2 mb-2"
              data-bs-dismiss="modal"
              data-bs-target="#fullScreenModal"
              style={{ height: "60px", width: "200px" }}
              onClick={openModal}
            >
              지도에서 보기
            </button>
            <HotelDetailMapModal
              show={showModal}
              closeModal={closeModal}
              row={row}
            />
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
