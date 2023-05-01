import React from "react";
import {
  CloseButton,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import PropertyMap from "./PropertyMap";
import styled from "styled-components";

const MapModal = (props) => {
  const { show, closeModal } = props;

  return (
    <>
      <KaMapModal className="hotelsMapModal" show={props.show}>
        <ModalHeader closeButton onHide={closeModal}>
          <MTitle>
            &nbsp;
            <i className="fa-solid fa-location-dot"></i>&nbsp; 지친 일상에서
            벗어나 여유로운 숙박을 즐겨보세요
          </MTitle>
        </ModalHeader>
        <ModalBody style={{ height: "450px" }}>
          <PropertyMap />
        </ModalBody>
      </KaMapModal>
    </>
  );
};

export default MapModal;

const KaMapModal = styled(Modal)`
  &.hotelsMapModal .modal-dialog {
    width: 700px;
    max-width: 100%;
  }
`;

const MTitle = styled(ModalTitle)`
  align-items: center;
  justify-content: space-between;
  padding-right: 35px;
  margin-letf: auto;
  font-size: 1.2rem;
`;
