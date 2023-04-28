import React from "react";
import { Modal } from "react-bootstrap";
import HotelDetailMap from "./HotelDetailMap";

const HotelDetailMapModal = (props) => {
  const { showModal, closeModal, row } = props;
  return (
    <>
      <Modal show={props.show} onHide={props.closeModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            &nbsp;&nbsp;<i class="fa-solid fa-map-location-dot"></i>
            &nbsp;&nbsp;&nbsp;&nbsp; 지도를 드래그하거나 확대/축소하여 원하는
            위치를 자세히 살펴보세요.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HotelDetailMap row={props.row} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HotelDetailMapModal;
