import React from "react";

/**
 * 호텔정책 , 규칙
 * @returns
 */
const HotelPolicies = ({ row }) => {
  return (
    <>
      <div className="title">하우스룰</div>
      <div className="container">
        <div>{row.P_REFUND}</div>
        <div>{row.P_PARKING}</div>
        <div>{row.P_SCALE}</div>
        <div>{row.P_MAXPEOPLE}</div>
        <div>체크인:{row.P_CHECKIN}</div>
        <div>체크아웃:{row.P_CHECKOUT}</div>
      </div>
    </>
  );
};

export default HotelPolicies;
