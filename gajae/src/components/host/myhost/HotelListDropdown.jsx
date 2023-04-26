import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Modal, ModalFooter, ModalHeader } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import styled from "styled-components";

const HotelListDropdown = ({ hotel, onEdit }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(hotel);
  const getStatus = () => {
    if (hotel.STATUS == "Y") {
      return "영업중";
    } else {
      return "영업중지";
    }
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="dropdown">
        <Btn
          className="btn btn-custom dropdown-toggle border-0"
          type="button"
          onClick={toggleDropdown}
          style={{ fontSize: "25px", margin: "10px" }}
        >
          <i className="fa-solid fa-bars"></i>
        </Btn>
        {isDropdownOpen && (
          <div
            className={isDropdownOpen ? "dropdown-menu show" : "dropdown-menu"}
          >
            <DropdownItem onClick={() => onEdit(hotel.P_ID)}>수정</DropdownItem>
            <DropdownItem>{getStatus()}</DropdownItem>
          </div>
        )}
      </div>
    </>
  );
};

export default HotelListDropdown;

const Btn = styled.button`
  font-size: 16px;
  border: none;
  cursor: pointer;
  border: 1px solid lightgray;
  background-color: white;
  &::after {
    content: "";
    transform: none;
    display: none;
  }
`;

