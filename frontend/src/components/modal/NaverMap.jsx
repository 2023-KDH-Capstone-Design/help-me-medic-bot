import React, { useEffect } from "react";

const { naver } = window;

const NaverMap = (props) => {
  const id = `map-${props.label.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        const map = new naver.maps.Map(id, {
          center: new naver.maps.LatLng(lat, lng),
          zoom: 15,
        });

        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(lat, lng),
          map: map,
        });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, [id]);

  return <div id={id} style={{ width: "100%", height: "350px" }}></div>;
};

export default NaverMap;
