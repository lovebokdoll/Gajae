import React from "react";
/**
 * 사용자가 선택한 호텔에 대한 시설정보를 보여준다
 * @param {*} param0
 * @returns
 */
const HotelFacilities = ({ row }) => {
  return (
    <>
      <div className="title">시설</div>

      <div>객실 수 : {row.FAC_ROOM}</div>
      <div>주차여부 : {row.FAC_RESTARUANT}</div>
      <div>조리가능여부 : {row.FAC_SECURITY}</div>
      <div>레스토랑 : {row.FAC_BATHROOM}</div>
      <div>부대시설 : {row.FAC_PARKING}</div>
      <div>편의시설 : {row.FAC_LIVING}</div>
      <div>미디어 / 테크놀로지 : {row.FAC_MEDIA}</div>
      <div>인터넷 : {row.FAC_INTERNET}</div>
      <div>일반 : {row.FAC_GENERAL}</div>
      <div>지원 가능한 언어 : {row.FAC_LANGUAGE}</div>
      <div>주방 : {row.FAC_KITCHEN}</div>
      <div>리셉션 서비스 : {row.FAC_RECEPTION}</div>
    </>
  );
};

export default HotelFacilities;
