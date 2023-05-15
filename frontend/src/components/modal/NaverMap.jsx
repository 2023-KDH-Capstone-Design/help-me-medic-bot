import React, { useEffect } from "react";

const { naver, kakao } = window;

const NaverMap = (props) => {
  const id = `map-${props.label.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
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

        const kakaoService = new kakao.maps.services.Places();

        const request = {
          location: new kakao.maps.LatLng(lat, lng),
          radius: 10000,
          category_group_code: "HP8",
        };

        const keywords = "병원";

        kakaoService.keywordSearch(
          keywords,
          (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
              data.forEach((hospital) => {
                const hospitalMarker = new naver.maps.Marker({
                  position: new naver.maps.LatLng(hospital.y, hospital.x),
                  map: map,
                  title: hospital.place_name,
                });
              });
            }
          },
          request
        );
      });
    } else {
      window.alert("현재 위치를 알 수 없습니다.");
    }
  }, [id]);

  return <div id={id} style={{ width: "100%", height: "350px" }}></div>;
};

export default NaverMap;
