/* global kakao*/
import React, { useEffect, useRef, useState } from 'react';
import { BButton } from '../../style/FormStyle';
import { searchListDB } from '../../service/database';
import Cookies from 'js-cookie';

const PropertyListMap = (prams,pMap) => {
  const { kakao } = window;

  
  const kakaomap = useRef();
  const [map, setMap] = useState();
  Cookies.get('P_ADDRESS',prams.P_ADDRESS)

  useEffect(() => {
    const getMapList = async () => {
      const pMap = {
      P_MAPY : pMap.P_MAPY,
      P_MAPX : pMap.P_MAPX,
      };
      const response = await searchListDB(pMap);
      setMap(response.data);
      console.log(response.data);
    };
    getMapList();
  }, []);

  const [positions, setPositions] = useState([
    {
      latlng: new kakao.maps.LatLng(pMap.P_MAPY, pMap.P_MAPX,),
    },
  ]);
  console.log(positions)

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: positions[0].latlng,
      level: 4,
    };

    if (!map) {
      setMap(new kakao.maps.Map(container, options));
    } else {
      if (positions[1]) {
        map.setCenter(positions[1].latlng);
      }
    }

    //마커 표시하기
    for (let i = 0; i < positions.length; i++) {
      //마커생성하기
      const marker = new kakao.maps.Marker({
        map: map, //마커를 표시할 지도
        position: positions[i].latlng, //마커의위치
      });
      //마커에 표시할 인포윈도우 생성하기
      const infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content,
      });
      //마커에 이벤트를 등록하는 함수를 만들고 즉시호출되도록 클로저를 만듦
      //클로저를 추가하지 않으면 마커가 여러개 있을 때 마지막에만 이벤트가 적용이 되니 주의할것
      (function (marker, infowindow) {
        //마커에 마우스오버이벤트를 등록하고 mouseover시 infoWindow를 표시함
        kakao.maps.event.addListener(marker, 'mouseover', function () {
          infowindow.open(map, marker);
        });
        //마커에 mouseout이벤트 등록마우스 아웃시 인포윈도우 닫기처리함
        kakao.maps.event.addListener(marker, 'mouseout', function () {
          infowindow.close();
        });
      })(marker, infowindow);
    }
  }, [positions, map]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        <div
          id="map"
          ref={kakaomap}
          style={{
            width: '700px',
            height: '500px',
            marginBottom: '20px',
            border: '2px solid lightgray',
            borderRadius: '20px',
          }}
        ></div>
        <BButton type="botton">현재위치</BButton>
      </div>
    </>
  );
};

export default PropertyListMap;
