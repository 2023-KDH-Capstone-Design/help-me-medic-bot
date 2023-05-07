import React from "react";

const Modal = (props) => {
  const { label } = props;
  const id = `modal-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <>
      <label htmlFor={id} className="btn btn-outline btn-primary rounded-xl">
        {label}
      </label>
      <input
        type="checkbox"
        id={id}
        className="modal-toggle flex items-center"
      />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor={id}>
          <h3 className="text-lg font-bold">{label}</h3>
          <p className="py-4">{`${label}에 관한 정보입니다.`}</p>
        </label>
      </label>
    </>
  );
};

export default Modal;
