import React, { useEffect, useState } from "react";

const { naver } = window;

const NaverMap = (props) => {
  const id = `map-${props.label.toLowerCase().replace(/\s+/g, "-")}`;
  const [myLocation, setMyLocation] = useState({
    latitude: 37.5112,
    longitude: 127.0981,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setMyLocation({ latitude, longitude });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, []);

  const { latitude, longitude } = myLocation;

  useEffect(() => {
    const map = new naver.maps.Map(id, {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 15,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: map,
    });
  }, [id, latitude, longitude]);

  return <div id={id} style={{ width: "100%", height: "350px" }}></div>;
};

export default NaverMap;
