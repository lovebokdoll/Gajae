import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import HostFac from "./HostFac";
import HostHeaderNav from "../HostHeaderNav";

const RegisterRoom = () => {
  return (
    <>
      <HostHeaderNav />
      <div style={{ width: "70%", margin: "10% auto" }}>
        <Accordion>
          <HostFac />
        </Accordion>
      </div>
    </>
  );
};

export default RegisterRoom;
