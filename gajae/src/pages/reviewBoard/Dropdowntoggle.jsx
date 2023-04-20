import React, { useState } from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Dropdowntoggle = ({ review, onEdit, onDelete }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          <DropdownItem onClick={() => onEdit(review.REVIEW_NUMBER)}>
            수정
          </DropdownItem>
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
