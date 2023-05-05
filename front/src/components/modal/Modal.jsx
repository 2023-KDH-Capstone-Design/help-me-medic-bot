import React from "react";

const Modal = (props) => {
  return (
    <>
      <label
        htmlFor="my-modal"
        className="btn btn-outline btn-primary rounded-xl"
      >
        {props.label}
      </label>
      <input
        type="checkbox"
        id="my-modal"
        className="modal-toggle flex items-center"
      />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">{props.label}</h3>
          <p className="py-4">{`${props.label}에 관한 정보입니다.`}</p>
        </label>
      </label>
    </>
  );
};

export default Modal;
