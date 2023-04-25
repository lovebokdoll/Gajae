import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setModalTrue } from "../../redux/modalStatus/action";
import "../header/headerNav1.css";
import { CurrencyButton, NationButton } from "../header/styled-header";
import { setNationModalTrue } from "../../redux/nationStatus/action";
import HostPageDropDown from "./myhost/HostPageDropDown";

const HostHeaderNav = () => {
  const [hostId, setHostId] = useState();

  const dispatch = useDispatch();

  const handleCurrencyModal = () => {
    dispatch(setModalTrue("Choose your currency"));
  };
  const handleNationModal = () => {
    dispatch(setNationModalTrue("Choose your nation"));
  };

  useEffect(() => {
    setHostId(window.localStorage.getItem("hostId"));
  }, []);

  return (
    <>
      <div className="navContainer">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" style={{ color: "#003580" }} className="nav-link">
                  <img
                    id="main_logo"
                    src="../images/001.png"
                    alt="대체_텍스트"
                  />
                </Link>
                <div className="GiveGap" style={{ width: 342 }}>
                  {" "}
                </div>{" "}
                {/* 로고랑 KRW사이 GAP지우면 안됨*/}
                <div
                  className="header-reduxitem"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CurrencyButton onClick={handleCurrencyModal}>
                    <span>KRW</span>
                  </CurrencyButton>
                  <NationButton onClick={handleNationModal}>
                    <img src="/images/Flag_of_South_Korea.png"></img>
                  </NationButton>
                  {hostId ? <HostPageDropDown /> : <></>}
                  <Link
                    to="/host"
                    style={{ color: "white", marginRight: "10px" }}
                    className="nav-link"
                  >
                    숙소등록
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default HostHeaderNav;
