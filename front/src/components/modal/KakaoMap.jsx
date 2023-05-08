import React, { useEffect } from "react";

const { kakao } = window;

const KakaoMap = (props) => {
  const id = `map-${props.label.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    const container = document.getElementById(id);
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, [id]);

  return <div id={id} style={{ width: "500px", height: "500px" }}></div>;
};

export default KakaoMap;
