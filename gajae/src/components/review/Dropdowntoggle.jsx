import React, { useEffect, useState } from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Dropdowntoggle = ({ hotel, review, onEdit, onDelete }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [hostId, setHostId] = useState();
  useEffect(() => {
    setHostId(window.localStorage.getItem("hostId"));
  }, []);
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
        >
          <i className="fa-solid fa-bars"></i>
        </Btn>
        <div
          className={isDropdownOpen ? "dropdown-menu show" : "dropdown-menu"}
        >
          {hostId ? (
            <DropdownItem onClick={() => onEdit(hotel.P_ID)}>수정</DropdownItem>
          ) : (
            <DropdownItem onClick={() => onEdit(review.REVIEW_NUMBER)}>
              수정
            </DropdownItem>
          )}

          <DropdownItem onClick={onDelete}>삭제</DropdownItem>
        </div>
      </div>
    </>
  );
};

export default Dropdowntoggle;

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
