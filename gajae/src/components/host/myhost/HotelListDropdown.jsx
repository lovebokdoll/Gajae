import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Modal, ModalFooter, ModalHeader } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HotelListDropdown = ({ hotel, onEdit }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const getStatus = () => {
    if (hotel.STATUS == "Y") {
      setStatus("영업중");
    } else {
      setStatus("영업중지");
    }
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const handleEditClick = () => {
  //   window.location.href = `/host/update?hotel_id=${hotel.id}`;
  // };

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
            <DropdownItem>{status}</DropdownItem>
          </div>
        )}
      </div>
      <AlertModal show={showModal} onHide={handleClose}>
        <AlertHeader>
          <FontAwesomeIcon
            icon="fa-regular fa-trash-can"
            style={{ color: "#1E3050" }}
          />
        </AlertHeader>
        <ActionContainer>
          <p>호텔을 삭제하시겠습니까?</p>
          <p>삭제 후에는 이 호텔이 더 이상 나타나지 않습니다.</p>
        </ActionContainer>
        <Footer>
          <DeleteButton>삭제</DeleteButton>
          <CancelButton onClick={handleClose}>취소</CancelButton>
        </Footer>
      </AlertModal>
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

const AlertModal = styled(Modal)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    border: none;
  }
`;

const AlertHeader = styled(ModalHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 30px;
  border: none;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "KOTRA_GOTHIC";
  text-align: center;
  p {
    margin: 0 0 8px;
  }
`;

const Footer = styled(ModalFooter)`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;
const DeleteButton = styled.button`
  background-color: #dc3545;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  margin-right: 10px;
`;

const CancelButton = styled.button`
  background-color: #1e3050;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
`;
