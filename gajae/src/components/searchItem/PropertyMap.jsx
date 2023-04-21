/* global kakao */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { markListDB } from "../../service/database";

const PropertyMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState([]);

  useEffect(() => {
    const getMapList = async () => {
      const response = await markListDB();
      const markList = response.data.map((item) => {
        console.log(response.data);
        return {
          P_MAPX: item.P_MAPX,
          P_MAPY: item.P_MAPY,
        };
      });
      setMap(markList);
    };
    getMapList();
  }, []);

  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.978),
      level: 10,
    };
    const kakaoMap = new kakao.maps.Map(container, options);

    // 마커 생성 및 추가
    map.forEach((item) => {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(item.P_MAPY, item.P_MAPX),
      });
      marker.setMap(kakaoMap);
    });

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
          width: "950px",
          height: "950px",
          marginBottom: "20px",
          border: "2px solid lightgray",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
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

export default PropertyMap;
