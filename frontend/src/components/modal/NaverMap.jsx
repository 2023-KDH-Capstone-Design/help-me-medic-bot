import React, { useEffect } from "react";

const { naver } = window;

const NaverMap = (props) => {
  const id = `map-${props.label.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    const map = new naver.maps.Map(id, {
      center: new naver.maps.LatLng(37.5112, 127.0981),
      zoom: 16,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.5112, 127.0981),
      map: map,
    });
  }, [id]);

  return <div id={id} style={{ width: "100%", height: "350px" }}></div>;
};

export default NaverMap;
