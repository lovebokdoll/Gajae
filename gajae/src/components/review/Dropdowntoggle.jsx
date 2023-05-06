import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Modal, ModalFooter, ModalHeader } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import styled from 'styled-components';

const Dropdowntoggle = ({ review, onDelete }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEditClick = () => {
    window.location.href = `/review/update?review_number=${review.REVIEW_NUMBER}`;
  };

  const handleDeleteClick = () => {
    onDelete(review.REVIEW_NUMBER);
    handleClose();
  };

  return (
    <>
      <div className="dropdown">
        <Btn className="btn btn-custom dropdown-toggle border-0" type="button" onClick={toggleDropdown}>
          <i className="fa-solid fa-bars"></i>
        </Btn>
        {isDropdownOpen && (
          <div className={isDropdownOpen ? 'dropdown-menu show' : 'dropdown-menu'}>
            <DropdownItem onClick={handleEditClick}>수정</DropdownItem>
            <DropdownItem onClick={handleShow}>삭제</DropdownItem>
          </div>
        )}
      </div>
      <AlertModal show={showModal} onHide={handleClose}>
        <AlertHeader>
          <FontAwesomeIcon icon="fa-regular fa-trash-can" style={{ color: '#1E3050' }} />
        </AlertHeader>
        <ActionContainer>
          <p>리뷰를 삭제하시겠습니까?</p>
          <p>삭제 후에는 이 리뷰가 더 이상 나타나지 않습니다.</p>
        </ActionContainer>
        <Footer>
          <DeleteButton onClick={handleDeleteClick}>삭제</DeleteButton>
          <CancelButton onClick={handleClose}>취소</CancelButton>
        </Footer>
      </AlertModal>
    </>
  );
};

export default Dropdowntoggle;

const Btn = styled.button`
  margin: 10px 10px 0 0;
  font-size: 26px;
  border: none;
  cursor: pointer;
  border: 1px solid lightgray;
  background-color: white;
  &::after {
    content: '';
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
  font-family: 'KOTRA_GOTHIC';
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
