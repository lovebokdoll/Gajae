import React from "react";
import { Button, CloseButton, Modal } from "react-bootstrap";
import { Grid, styled } from "@material-ui/core";
import SearchBox from "./SearchBox";
import PropertyMap from "./PropertyMap";
import ModalSearchBox from "./ModalSearchBox";

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
        <Modal.Header className="bg-primary text-white">
          <Modal.Title
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <CloseButton onClick={closeModal} style={{ marginLeft: "auto" }} />
            다음에 머무를 숙소를 찾아보세요&nbsp;&nbsp;
            <i className="fa-solid fa-location-dot"></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", alignItems: "center" }}>
          <PropertyMap />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MapModal;
