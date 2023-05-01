import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import HostFac from "./HostFac";
import HostHeaderNav from "../HostHeaderNav";
import Swal from "sweetalert2";
import { Background, Titlehotelfac } from "../../../style/HostStyle";
const RegisterRoom = () => {
  //숙소등록 - 체크박스 처리

  //모달 창
  const Toast = Swal.mixin({
    toast: true,
    position: "center-center",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

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
