import React, { useState } from "react";
import HostFac from "./HostFac";
import HostHeaderNav from "../HostHeaderNav";
import { Background, Titlehotelfac } from "../../../style/HostStyle";
const RegisterRoom = () => {
  //숙소등록 - 체크박스 처리
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
