import React from "react";
import Modal from "react-bootstrap/Modal";
import MapForm from "./MapForm";

interface MapModalProps {
  handleCloseModal: () => void;
  showModal: boolean;
}

const MapModal = (props: MapModalProps) => {
  const { handleCloseModal, showModal } = props;
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Map</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MapForm />
      </Modal.Body>
    </Modal>
  );
};

export default MapModal;
