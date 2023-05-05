/* global kakao */
import React, { useEffect, useRef, useState } from "react";

const HotelDetailMap = ({ row }) => {
  const mapx = row.P_MAPX;
  const mapy = row.P_MAPY;
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

    kakao.maps.event.addListener(kakaoMap, "idle", function () {
      container.style.width = "100%";
      container.style.height = "100%";
      kakaoMap.relayout();
    });
  }, [map]);

  return (
    <div>
      <div
        id="map-container"
        style={{
          width: "400px",
          height: "400px",
          marginBottom: "20px",
          border: "2px solid lightgray",
        }}
      >
        <div
          ref={mapRef}
          style={{
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HotelDetailMap;
