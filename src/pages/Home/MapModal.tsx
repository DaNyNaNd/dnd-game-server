import React from "react";
import Popover from "@material-ui/core/Popover";
import MapForm from "./MapForm";

interface MapModalProps {
  handleCloseModal: () => void;
  showModal: boolean;
}

const MapModal = (props: MapModalProps) => {
  const { handleCloseModal, showModal } = props;
  return (
    <Popover open={showModal} onClose={handleCloseModal}>
      Add New Map
      <MapForm />
    </Popover>
  );
};

export default MapModal;
