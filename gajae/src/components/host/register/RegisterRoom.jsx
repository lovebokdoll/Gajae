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

const RegisterRoom = () => {
  const dispatch = useDispatch();
  //시퀀스로 받아온 p_id
  const [tempid, setTempid] = useState("");
  const [tempidUpdate, setTempUpdate] = useState(false);
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
 
  const [host_addr_dtl, setHostAddrDtl] = useState("");
  const [post, setPost] = useState({
    zipcode: "",
    addr: "",
    addrDetail: "",
  });
  //클릭하는 함수 정의
  const hostInsert = async () => {
    const properties = {
      p_postal,
      p_address,
      p_refund,
      p_scale,
      p_star,
      p_checkin,
      p_checkout,
      // host_addr_dtl,
    };
    console.log(properties);
    //숙소정보 insert
    const propertyres = await hostpropertyInsertDB(properties);
    //p_id시퀀스 출력
    console.log(propertyres.data);
    if (propertyres.data < 0) {
      dispatch(setToastMessage("숙소정보 등록 실패"));
      return;
    } else {
      dispatch(setToastMessage("숙소정보 등록에 성공하였습니다"));
    }
    //시퀀스로 받아온 p_id담기
    setTempid(propertyres.data);
    setTempUpdate(true);
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

  const handleRefund = useCallback((e) => {
    setHostHotelRefund(e);
    console.log(e);
  }, []);
  return (
    <>
      <HeaderNav1 />
      <div style={{ width: "70%", margin: "10% auto" }}>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>등록하실 숙소는 어디에 있나요?</Accordion.Header>
            숙소정보 숙소명,주소,시설등 기본정보를 등록해주세요
            <Accordion.Body>
              <Card style={{ width: "55rem", margin: "5% auto" }}>
                <Card.Body>
                  <Card.Title>국가/지역</Card.Title>
                  <Form.Select aria-label="Default select example">
                    <option>국가/지역을 선택하세요</option>
                    <option value="1">대한민국</option>
                    <option value="2">미국</option>
                    <option value="3">일본</option>
                  </Form.Select>
                </Card.Body>
                <Card.Body>
                  <Card.Title>도로명,건물번호</Card.Title>
                  <HostZipCode
                    onZipcodeChange={setHostzipcode}
                    onAddrChange={setHostAddr}
                    //   onAddrDtlChange={setHostAddrDtl}
                    post={post}
                    setPost={setPost}
                  />
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          {/* ////////////////////숙소위치끝////////////////////////// */}
          {/* ////////////////////객실 시작////////////////////////// */}
          <HostRoom
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
            onScaleChange={setHostHotelScale}
            onCheckinChange={setHostHotelCheckin}
            onCheckoutChange={setHostHotelCheckout}
            onStarChange={setHostHotelStar}
          />
          {/* ////////////////////객실 끝////////////////////////// */}
          {/* ////////////////////사진 시작////////////////////////// */}
          <HostPhoto />
          {/* ////////////////////사진 끝////////////////////////// */}
          {/* ////////////////////환불 정책 시작////////////////////////// */}

          <Accordion.Item eventKey="3">
            <Accordion.Header>환불정책</Accordion.Header>
            숙소의 환불규정을 추가해주세요.
            <Accordion.Body>
              <Card style={{ width: "75rem" }}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="환불규정입력하기"
                      onChange={(e) => {
                        handleRefund(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          {/* ////////////////////환불 정책 끝////////////////////////// */}
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
