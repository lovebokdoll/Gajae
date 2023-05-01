/* global kakao */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { markListDB } from "../../service/database";
import "bootstrap/dist/css/bootstrap.min.css";

const PropertyMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState([]);
  console.log(mapRef);

  useEffect(() => {
    const mapContainer = mapRef.current;

    const options = {
      center: new kakao.maps.LatLng(37.5111, 127.0216),
      level: 7,
    };

    const kakaoMap = new kakao.maps.Map(mapContainer, options);

    kakao.maps.event.addListener(kakaoMap, "idle", function () {
      mapContainer.style.width = "100%";
      mapContainer.style.height = "100%";
      kakaoMap.relayout();
    });
    // 마커 생성 및 추가

    const infowindow = new kakao.maps.InfoWindow();
    map.forEach((item) => {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(item.P_MAPY, item.P_MAPX),
      });

      kakao.maps.event.addListener(marker, "click", function () {
        const infowindow = new kakao.maps.InfoWindow({
          content: `
          <div>
          <h5>${item.P_TITLE}</h5>
          <p>${item.P_STAR}</p>
        </div>
        `,
        });
        infowindow.open(kakaoMap, marker);
      });
      marker.setMap(kakaoMap);
      kakaoMap.relayout();
    });
  }, [map]);

  useEffect(() => {
    console.log("마커 생성중");
    const getMapList = async () => {
      const response = await markListDB();
      const markList = response.data.map((item) => {
        console.log(response.data);
        return {
          P_MAPX: item.P_MAPX,
          P_MAPY: item.P_MAPY,
          P_TITLE: item.P_TITLE,
          P_STAR: item.P_STAR,
        };
      });
      setMap(markList);
    };
    getMapList();
  }, []);

  return (
    <div>
      <div
        id="searchMap-container"
        style={{
          width: "400px",
          height: "400px",
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
