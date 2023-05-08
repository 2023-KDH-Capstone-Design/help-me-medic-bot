import React from "react";

import KakaoMap from "./KakaoMap";

const Modal = (props) => {
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
          <KakaoMap />
        </label>
      </label>
    </>
  );
};

export default Modal;
