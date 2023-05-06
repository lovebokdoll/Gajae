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
            &nbsp;지도로 확인해보세요
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
