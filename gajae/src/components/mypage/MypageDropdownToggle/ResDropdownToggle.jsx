import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Modal, ModalFooter, ModalHeader } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import styled from "styled-components";

const ResDropdownToggle = ({ reservation }) => {
  console.log("rdt ===>", reservation);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  console.log(reservation);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const R_NUMBER = reservation.R_NUMBER;

  const writeReview = () => {
    window.location.href = `/review/write?r_number=${R_NUMBER}`;
  };

  const resDelete = () => {
    handleClose();
  };

  return (
    <>
      <div className="dropdown">
        <ResBtn
          className="btn btn-custom dropdown-toggle border-0"
          type="button"
          onClick={toggleDropdown}
        >
          <i className="fa-solid fa-bars"></i>
        </ResBtn>
        {isDropdownOpen && (
          <div
            className={isDropdownOpen ? "dropdown-menu show" : "dropdown-menu"}
          >
            <DropdownItem onClick={writeReview}>이용후기 작성</DropdownItem>
            <DropdownItem onClick={() => handleShow()}>삭제</DropdownItem>
          </div>
        )}
      </div>
      <ResAlertModal show={showModal} onHide={handleClose}>
        <ResAlertHeader>
          <FontAwesomeIcon
            icon="fa-regular fa-trash-can"
            style={{ color: "#1E3050" }}
          />
        </ResAlertHeader>
        <ResActionContainer>
          <p></p>
          <p>예약 내역을 삭제하시면 이후에 확인 하실 수 없습니다.</p>
        </ResActionContainer>
        <ResFooter>
          <ResDeleteButton onClick={resDelete}>삭제</ResDeleteButton>
          <ResCancelButton onClick={handleClose}>취소</ResCancelButton>
        </ResFooter>
      </ResAlertModal>
    </>
  );
};

export default ResDropdownToggle;

const ResBtn = styled.button`
  margin: 10px 10px 0 0;
  font-size: 26px;
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

const ResAlertModal = styled(Modal)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    border: none;
  }
`;

const ResAlertHeader = styled(ModalHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 30px;
  border: none;
`;

const ResActionContainer = styled.div`
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

const ResFooter = styled(ModalFooter)`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;
const ResDeleteButton = styled.button`
  background-color: #dc3545;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  margin-right: 10px;
`;

const ResCancelButton = styled.button`
  background-color: #1e3050;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
`;
