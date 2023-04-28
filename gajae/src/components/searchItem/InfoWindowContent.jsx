import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InfoWindowContent = ({ title, star }) => {
  console.log(title);
  console.log(star);
  const starIcons = Array.from({ length: parseInt(star) }, (_, i) => (
    <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FEBB02" }} />
  ));
  return (
    <div
      style={{
        width: "200px",
        textAlign: "center",
        backgroundColor: "#F8F8F8",
        borderRadius: "40px",
        padding: "10px",
        opacity: "0.9",
      }}
    >
      <h5 style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h5>
      <p style={{ fontSize: "16px" }}>{starIcons}</p>
      <a href="호텔 홈페이지 주소" style={{ fontSize: "14px", color: "blue" }}>
        홈페이지
      </a>
    </div>
  );
};

export default InfoWindowContent;
