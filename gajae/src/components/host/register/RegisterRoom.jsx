import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { hostextraInsertDB, hostfacInsertDB } from "../../../service/hostLogic";
import { useLocation, useNavigate } from "react-router-dom";
import HostFac from "./HostFac";
import HostHeaderNav from "../HostHeaderNav";
import Swal from "sweetalert2";

const RegisterRoom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const p_id = params.get("p_id");
  console.log(p_id);
  //URL로 받아온 p_id담기
  const [tempid, setTempid] = useState();
  //어떤 값 담기는지 확인하기 이전 hotel이랑 같은 p_id찍혀야 한다.
  const [tempidUpdate, setTempUpdate] = useState(false);
  //숙소등록 - 체크박스 처리
  const [selectedRooms, setSelectedRooms] = useState({
    FAC_ROOM: "",
    FAC_RESTARUANT: "",
    FAC_SECURITY: "",
    FAC_BATHROOM: "",
    FAC_PARKING: "",
    FAC_LIVING: "",
    FAC_MEDIA: "",
    FAC_INTERNET: "",
    FAC_SERVICE: "",
    FAC_GENERAL: "",
    FAC_LANGUAGE: "",
    FAC_BED: "",
    FAC_KITCHEN: "",
    FAC_RECEPTION: "",
    P_EXTRA: "",
  });
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
  console.log(selectedRooms);
  const hostInsert = async () => {
    //적어도 하나를 선택해야 한다.
    const checked = Object.values(
      selectedRooms["FAC_ROOM"] &&
        selectedRooms["FAC_RESTARUANT"] &&
        selectedRooms["FAC_SECURITY"] &&
        selectedRooms["FAC_BATHROOM"] &&
        selectedRooms["FAC_PARKING"] &&
        selectedRooms["FAC_LIVING"] &&
        selectedRooms["FAC_MEDIA"] &&
        selectedRooms["FAC_INTERNET"] &&
        selectedRooms["FAC_SERVICE"] &&
        selectedRooms["FAC_GENERAL"] &&
        selectedRooms["FAC_LANGUAGE"] &&
        selectedRooms["FAC_BED"] &&
        selectedRooms["FAC_KITCHEN"] &&
        selectedRooms["FAC_RECEPTION"] &&
        selectedRooms["P_EXTRA"]
    ).some((value) => value !== "");
    if (!checked) {
      Toast.fire({
        icon: "warning", // Alert 타입
        title: "숙소정보 등록에 실패하였습니다. <br/>체크박스를 선택해주세요", // Alert 제목
        timer: 1000,
        timerProgressBar: false,
      });
      return;
    } else {
      Toast.fire({
        icon: "success", // Alert 타입
        title: "숙소정보 등록에 성공하였습니다.", // Alert 제목
        timer: 1000,
        timerProgressBar: false,
      });
    }
    setTempid(p_id);
    setTempUpdate(true);
  };
  const insertFacilities = async () => {
    if (tempidUpdate) {
      const facilities = {
        P_ID: tempid,
        FAC_ROOM: selectedRooms.FAC_ROOM.toString(),
        FAC_RESTARUANT: selectedRooms.FAC_RESTARUANT.toString(),
        FAC_SECURITY: selectedRooms.FAC_SECURITY.toString(),
        FAC_BATHROOM: selectedRooms.FAC_BATHROOM.toString(),
        FAC_PARKING: selectedRooms.FAC_PARKING.toString(),
        FAC_BED: selectedRooms.FAC_BED.toString(),
        FAC_LIVING: selectedRooms.FAC_LIVING.toString(),
        FAC_MEDIA: selectedRooms.FAC_MEDIA.toString(),
        FAC_INTERNET: selectedRooms.FAC_INTERNET.toString(),
        FAC_SERVICE: selectedRooms.FAC_SERVICE.toString(),
        FAC_GENERAL: selectedRooms.FAC_GENERAL.toString(),
        FAC_LANGUAGE: selectedRooms.FAC_LANGUAGE.toString(),
        FAC_KITCHEN: selectedRooms.FAC_KITCHEN.toString(),
        FAC_RECEPTION: selectedRooms.FAC_RECEPTION.toString(),
      };
      const extra = {
        P_ID: tempid,
        P_EXTRA: selectedRooms.P_EXTRA.toString(),
      };
      console.log(facilities);
      console.log(extra);
      //숙소시설insert
      await hostfacInsertDB(facilities);
      await hostextraInsertDB(extra);
      //  navigate("/host/end");
    }
  };
  insertFacilities();
  return (
    <>
      <HostHeaderNav />
      <div style={{ width: "70%", margin: "10% auto" }}>
        <Accordion>
          <HostFac
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
          />
        </Accordion>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-warning"
            type="button"
            onClick={hostInsert}
          >
            등록하기
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterRoom;
