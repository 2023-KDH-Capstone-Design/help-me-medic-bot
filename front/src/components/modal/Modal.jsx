import React, { useState } from "react";

import ModalBasic from "./ModalBasic";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {!modalOpen && (
        <button className="btn-xs" onClick={openModal}>
          OO병원
        </button>
      )}
      {modalOpen && (
        <ModalBasic offCancel={closeModal} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default Modal;
