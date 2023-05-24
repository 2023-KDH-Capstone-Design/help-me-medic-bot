import React, { useState } from "react";

import profileImage from "../../assets/images/kimdamae.jpg";
import Modal from "../modal/Modal";

const hospData = [
  {
    label: "세브란스병원",
    desc: "세브란스병원은 서울특별시 서대문구 신촌동에 위치한 병원이다. 연세대학교 의료원 산하의 병원이며 3차 급여기관이자 대한민국의 상급 종합병원이다.<br />주소: 서울특별시 서대문구 신촌동 연세로 50-1<br />다음 장소에 위치: 연세대학교 신촌캠퍼스<br />연락처: 02-2228-1004<br />창립: 1885년<br />모회사: 연세의료원<br />영업시간: 영업 종료 ⋅ 수 오전 8:30에 영업 시작<br />종류: 3차 의료급여기관<br />",
    lat: 37.5623446,
    lng: 126.9408265,
  },
  {
    label: "서울아산병원",
    desc: "서울아산병원 줄여서 AMC는 HD현대그룹 소속의 대한민국의 상급종합병원이다. 정주영이 설립하였으며, 총 2,715 병상을 보유하고 있다. 49개 진료과, 33개 전문센터, 6개의 전문 클리닉 및 암병원, 심장병원, 어린이병원을 운영하고 있다.<br />주소: 서울특별시 송파구 올림픽로43길 88<br />영업시간: 24시간 영업<br />창립: 1989년 6월 23일<br />모회사: 아산사회복지재단<br />침대 수: 2,732<br />국가: 대한민국<br />병상수: 2715개<br />상급기관: 현대중공업그룹, 아산사회복지재단<br />종류: 3차 의료급여기관<br />",
    lat: 37.5265762,
    lng: 127.107935,
  },
  {
    label: "서울대학교병원",
    desc: "주소: 서울특별시 종로구 대학로 101<br />영업시간: 영업 중 ⋅ 오후 6:00에 영업 종료<br />연락처: 1588-5700<br />",
    lat: 37.5797151,
    lng: 126.9990168,
  },
];

const ResChatBubble = ({ message }) => {
  const [hospList, setHospList] = useState(hospData);

  return (
    <>
      <div className="chat chat-start ml-2">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={profileImage} alt="face" />
          </div>
        </div>
        <div className="chat-bubble">{message}</div>
      </div>
      {
        <div className="flex flex-col items-start gap-1 ml-14">
          {hospList.map((hosp, index) => (
            <Modal key={index} hospital={hosp} />
          ))}
        </div>
      }
    </>
  );
};

export default ResChatBubble;
