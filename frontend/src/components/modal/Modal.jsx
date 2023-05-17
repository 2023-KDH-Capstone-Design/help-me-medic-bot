import React from "react";
import ReactDOM from "react-dom";

import NaverMap from "./NaverMap";

const ModalOverlay = (props) => {
  const { label } = props;
  const id = `modal-${label.toLowerCase().replace(/\s+/g, "-")}`;
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
          <h3 className="text-lg font-bold">{label}</h3>
          <p className="py-4">{`${label}에 관한 정보입니다.`}</p>
          <NaverMap label={label} />
        </label>
      </label>
    </>
  );
};
const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay label={props.label} />,
    document.getElementById("overlay-root")
  );
};

export default Modal;
