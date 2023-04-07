import React from "react";
/**
 * 시설
 * @param {*} param0
 * @returns
 */
const HotelFacilities = ({ row }) => {
  return (
    <>
      <div className="title">시설</div>

      <div>객실 수 : {row.P_ROOMCOUNT}</div>
      <div>주차여부 : {row.P_PARKING}</div>
      <div>조리가능여부 : {row.P_KITCHEN}</div>
      <div>레스토랑 : {row.P_RESTAURANT}</div>
      <div>부대시설 : {row.P_EXTRA}</div>
      <div>편의시설 : {row.P_DETAIL}</div>
    </>
  );
};

export default HotelFacilities;
