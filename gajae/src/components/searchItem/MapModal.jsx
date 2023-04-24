import React from "react";
import { CloseButton, Modal, ModalHeader, ModalTitle } from "react-bootstrap";
import PropertyMap from "./PropertyMap";
import styled from "styled-components";

const MapModal = (props) => {
  const { showModal, closeModal } = props;

  return (
    <>
      <Modal
        show={props.show}
        fullscreen={true}
        onHide={props.handleClose}
        style={{ maxWidth: "1000px" }}
      >
        <MHeader>
          <MTitle>
            <i className="fa-solid fa-location-dot"></i>&nbsp; 지친 일상에서
            벗어나 여유로운 숙박을 즐겨보세요.
          </MTitle>
          <CBtn onClick={closeModal} />
        </MHeader>
        <Modal.Body style={{ display: "flex", alignItems: "center" }}>
          <PropertyMap />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MapModal;

const MHeader = styled(ModalHeader)`
  height: 40px;
  background-color: white;
`;

const MTitle = styled(ModalTitle)`
  display: flex;
  align-items: center;
  margin-letf: auto;
  font-size: 1rem;
`;

const CBtn = styled(CloseButton)`
  margin-left: auto;
  color: white;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
