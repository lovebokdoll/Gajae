import React, { useEffect, useState } from "react";
import HeaderNav1 from "../../header/HeaderNav1";
import { Accordion } from "react-bootstrap";
import { hostextraInsertDB, hostfacInsertDB } from "../../../service/hostLogic";
import { useDispatch } from "react-redux";
import { setToastMessage } from "../../../redux/toastStatus/action";
import { useLocation, useNavigate } from "react-router-dom";
import HostFac from "./HostFac";
import HostHeaderNav from "../HostHeaderNav";

const RegisterRoom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  console.log(selectedRooms);
  const hostInsert = async () => {
    //적어도 하나를 선택해야 한다.
    const checked = Object.values(
      selectedRooms["FAC_ROOM"],
      selectedRooms["FAC_RESTARUANT"],
      selectedRooms["FAC_SECURITY"],
      selectedRooms["FAC_BATHROOM"],
      selectedRooms["FAC_PARKING"],
      selectedRooms["FAC_LIVING"],
      selectedRooms["FAC_MEDIA"],
      selectedRooms["FAC_INTERNET"],
      selectedRooms["FAC_SERVICE"],
      selectedRooms["FAC_GENERAL"],
      selectedRooms["FAC_LANGUAGE"],
      selectedRooms["FAC_BED"],
      selectedRooms["FAC_KITCHEN"],
      selectedRooms["FAC_RECEPTION"],
      selectedRooms["P_EXTRA"]
    ).some((value) => value !== "");
    if (!checked) {
      dispatch(setToastMessage("숙소정보 등록 실패"));
      return;
    } else {
      //  dispatch(setToastMessage("숙소정보 등록에 성공하였습니다"));
      navigate("/host/end");
    }
    setTempid(p_id);
    setTempUpdate(true);
  };
  //시설정보 입력하는 useEffect => tempid가 업데이트 될때마다 실행된다
  useEffect(() => {
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
        const facres = await hostfacInsertDB(facilities);
        const extres = await hostextraInsertDB(extra);
        // console.log(facres);
        console.log(extres);
      }
    };
    insertFacilities();
  }, [tempidUpdate]);

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
