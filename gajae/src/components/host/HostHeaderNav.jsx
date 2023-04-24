import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MyPageDropDown from "../mypage/MyPageDropDown";
import styled from "styled-components";
import "./hostheaderNav.css";
const HeaderButton = styled.button`
  color: white;
  background-color: #003580;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

const HostHeaderNav = () => {
  const navigate = useNavigate();

  const { userAuth } = useSelector((state) => state);

  const [hostId, setHostId] = useState();

  useEffect(() => {
    setHostId(window.localStorage.getItem("hostId"));
  }, []);

  return (
    <>
      <Navbar id="headercontainer" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" style={{ color: "white" }} className="nav-link">
                <img id="main_logo" src="../images/ex3.png" alt="대체_텍스트" />
              </Link>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HeaderButton>
                  <img src="/images/korea.svg.png"></img>
                </HeaderButton>
                {hostId ? <MyPageDropDown /> : <></>}
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
    </>
  );
};

export default HostHeaderNav;
