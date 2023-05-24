import React from "react";
import ReactDOM from "react-dom";

import NaverMap from "./NaverMap";

const ModalOverlay = ({ label, id }) => {
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
          <p className="py-4">
            세브란스병원은 서울특별시 서대문구 신촌동에 위치한 병원이다.
            연세대학교 의료원 산하의 병원이며 3차 급여기관이자 대한민국의 상급
            종합병원이다.
            <br />
            주소: 서울특별시 서대문구 신촌동 연세로 50-1
            <br />
            다음 장소에 위치: 연세대학교 신촌캠퍼스
            <br />
            연락처: 02-2228-1004
            <br />
            창립: 1885년
            <br />
            모회사: 연세의료원
            <br />
            영업시간: 영업 종료 ⋅ 수 오전 8:30에 영업 시작
            <br />
            종류: 3차 의료급여기관
            <br />
          </p>
          <NaverMap label={label} />
          <button className="btn btn-info mt-4">병원 길안내</button>
        </label>
      </label>
    </>
  );
};

const Modal = ({ label }) => {
  const id = `modal-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <>
      <label htmlFor={id} className="btn btn-outline btn-primary rounded-xl">
        {label}
      </label>
      {ReactDOM.createPortal(
        <ModalOverlay label={label} id={id} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
