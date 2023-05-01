import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import MyHotelPage from "./MyHotelPage";

const HostPageDropDown = () => {
  const navigate = useNavigate();
  const signOut = () => {
    console.log("signOut");
    window.localStorage.clear();
    navigate("/host");
    window.location.reload();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{
          backgroundColor: "#003580",
          border: "none",
          fontWeight: "bold",
          borderRadius: "5px",
          padding: "10px 20px",
        }}
      >
        HOSTPAGE
      </Dropdown.Toggle>
      <Dropdown.Menu
        style={{
          backgroundColor: "#f5f5f5",
          padding: "10px",
          borderRadius: "5px",
          minWidth: "100px",
          textAlign: "center",
        }}
      >
        <Link
          to="/host/myhostpage"
          style={{
            color: "#333",
            textDecoration: "none",
            display: "block",
            marginBottom: "5px",
          }}
        >
          관리하기
        </Link>
        <br />
        <button
          onClick={signOut}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#333",
            textDecoration: "none",
            cursor: "pointer",
            display: "block",
            margin: "0 auto",
          }}
        >
          LOGOUT
        </button>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HostPageDropDown;
