import React, { useEffect, useState } from "react";
import HeaderNav1 from "../../header/HeaderNav1";
import { Accordion, Card, Form } from "react-bootstrap";
import HostZipCode from "./HostZipCode";
import {
  hostfacInsertDB,
  hostpropertyInsertDB,
} from "../../../service/hostLogic";
import HostRoom from "./HostRoom";
import HostPhoto from "./HostPhoto";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setToastMessage } from "../../../redux/toastStatus/action";
import { useLocation } from "react-router-dom";

const RegisterRoom = ({ tempid }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  //시퀀스로 받아온 p_id
  const temphotelid = location.state.value;
  //어떤 값 담기는지 확인하기 이전 hotel이랑 같은 p_id찍혀야 한다.
  console.log(temphotelid);
  //const [tempid, setTempid] = useState("");
  //setTempid(temphotelid);
  const [tempidUpdate, setTempUpdate] = useState("");
  //숙소등록 - 체크박스 처리
  const [selectedRooms, setSelectedRooms] = useState({
    FAC_ROOM: "",
    // FAC_RESTARUANT: [],
    // FAC_SECURITY: [],
    // FAC_BATHROOM: [],
    // FAC_PARKING: [],
    // FAC_LIVING: [],
    // FAC_MEDIA: [],
    // FAC_INTERNET: [],
    // FAC_SERVICE: [],
    // FAC_GENERAL: [],
    // FAC_LANGUAGE: [],
    // FAC_BED: [],
    // FAC_KITCHEN: [],
    // FAC_RECEPTION: [],
  });

  //클릭하는 함수 정의
  const hostInsert = async () => {
    if (selectedRooms.data < 0) {
      dispatch(setToastMessage("숙소정보 등록 실패"));
      return;
    } else {
      dispatch(setToastMessage("숙소정보 등록에 성공하였습니다"));
    }

  };
  //시설정보 입력하는 useEffect => tempid가 업데이트 될때마다 실행된다
  useEffect(() => {
    const insertFacilities = async () => {
      if (tempidUpdate) {
        const facilities = {
          P_ID: tempid,
          FAC_ROOM: selectedRooms.FAC_ROOM.toString(),
        };
        console.log(facilities);
        //숙소시설insert
        const facres = await hostfacInsertDB(facilities);
        console.log(facres.data);
      }
    };
    insertFacilities();
  }, [tempidUpdate]);

  return (
    <>
      <HeaderNav1 />
      <div style={{ width: "70%", margin: "10% auto" }}>
        <Accordion>
          <HostRoom
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
          />
          {/* ////////////////////객실 끝////////////////////////// */}
          {/* ////////////////////사진 시작////////////////////////// */}
          <HostPhoto />
          {/* ////////////////////사진 끝////////////////////////// */}
        </Accordion>
        <div className="d-grid gap-2 col-6 mx-auto">
          {/*HostZipCode의 내용이 버튼을 누를때 insert되어야 한다. */}
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
