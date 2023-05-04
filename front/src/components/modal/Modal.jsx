import React from "react";

const Modal = () => {
  return (
    <>
      <label htmlFor="my-modal" className="btn sticky bottom-4">
        OO 병원
      </label>
      <input
        type="checkbox"
        id="my-modal"
        className="modal-toggle flex items-center"
      />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">O O 병 원</h3>
          <p className="py-4">OO 병원에 관한 정보입니다.</p>
        </label>
      </label>
    </>
  );
};

export default Modal;
