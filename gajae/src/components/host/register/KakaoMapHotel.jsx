/* global kakao */
import React, { useEffect, useRef, useState } from "react";

const KakaoMapHotel = ({ p_mapy, p_mapx }) => {
  const mapx = p_mapx || 127.0329085;
  const mapy = p_mapy || 37.4989931;
  console.log(mapx, mapy);

  const mapRef = useRef(null);
  const [map, setMap] = useState([]);

  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(mapy, mapx),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(mapy, mapx),
    });
    marker.setMap(kakaoMap);
  }, [mapx, mapy]);

  return (
    <div>
      <div
        id="map-container"
        style={{
          width: "300px",
          height: "300px",
          marginBottom: "20px",
          border: "2px solid lightgray",
          borderRadius: "10px",
        }}
      >
        <div
          ref={mapRef}
          style={{
            width: "100%",
            height: "300px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default KakaoMapHotel;
