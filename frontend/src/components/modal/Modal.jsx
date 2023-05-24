import React from "react";
import ReactDOM from "react-dom";

import NaverMap from "./NaverMap";

const ModalOverlay = ({ id, hospital }) => {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative w-11/12 max-w-5xl">
          <label
            htmlFor={id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{hospital.label}</h3>
          <p
            className="py-4"
            dangerouslySetInnerHTML={{ __html: hospital.desc }}
          ></p>
          <NaverMap
            label={hospital.label}
            lat={hospital.lat}
            lng={hospital.lng}
          />
          <button className="btn btn-info mt-4">병원 길안내</button>
        </label>
      </label>
    </>
  );
};

const Modal = ({ hospital }) => {
  const id = `modal-${hospital.label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <>
      <label htmlFor={id} className="btn btn-outline btn-primary rounded-xl">
        {hospital.label}
      </label>
      {ReactDOM.createPortal(
        <ModalOverlay id={id} hospital={hospital} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
