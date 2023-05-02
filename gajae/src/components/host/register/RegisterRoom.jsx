import React, { useState } from "react";
import HostFac from "./HostFac";
import HostHeaderNav from "../HostHeaderNav";
import Swal from "sweetalert2";
import "../host.css";
import { Background, Titlehotelfac } from "../../../style/HostStyle";
const RegisterRoom = () => {
  return (
    <>
      <Background>
        <HostHeaderNav />
        <Titlehotelfac> 호텔의 시설을 선택해주세요. </Titlehotelfac>
        <div style={{ width: "70%", margin: "2% auto" }}>
          <HostFac />
        </div>
      </Background>
    </>
  );
};

export default RegisterRoom;
