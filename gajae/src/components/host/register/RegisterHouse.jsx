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

const RegisterHouse = () => {
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
  const [host_business_num, setHostBusinessNum] = useState("");
  const [p_postal, setHostzipcode] = useState("");
  const [p_address, setHostAddr] = useState("");
  const [p_title, setHostHotelTitle] = useState("");
  const [p_overview, setHostHotelOverview] = useState("");
  const [p_tel, setHostHotelTel] = useState("");
  const [p_refund, setHostHotelRefund] = useState("");
  const [p_scale, setHostHotelScale] = useState("");
  const [p_star, setHostHotelStar] = useState("");
  const [p_checkin, setHostHotelCheckin] = useState("");
  const [p_checkout, setHostHotelCheckout] = useState("");
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
      p_title,
      p_address,
      p_overview,
      p_tel,
      p_refund,
      p_scale,
      p_star,
      p_checkin,
      p_checkout,
      host_business_num,
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

  //사업자번호 입력받기
  const handleBusinessNum = useCallback((e) => {
    setHostBusinessNum(e);
    console.log(e);
  }, []);
  const handleTitle = useCallback((e) => {
    setHostHotelTitle(e);
    console.log(e);
  }, []);
  const handleOverview = useCallback((e) => {
    setHostHotelOverview(e);
    console.log(e);
  }, []);
  const handleTel = useCallback((e) => {
    setHostHotelTel(e);
    console.log(e);
  }, []);
  const handleRefund = useCallback((e) => {
    setHostHotelRefund(e);
    console.log(e);
  }, []);
  return (
    <>
      <HeaderNav1 />
      <div style={{ width: "70%", margin: "10% auto" }}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>호텔정보</Accordion.Header>
            호텔 정보를 간략하게 알려주세요
            <Accordion.Body>
              <Card style={{ width: "55rem", margin: "5% auto" }}>
                <Card.Body>
                  <Card.Title>사업자번호를 입력해주세요</Card.Title>
                  <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="사업자번호입력하기"
                        onChange={(e) => {
                          handleBusinessNum(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
                <Card.Body>
                  <Card.Title>호텔의 이름을 알려주세요</Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="호텔이름 입력하기-p_title"
                        onChange={(e) => {
                          handleTitle(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
                <Card.Body>
                  <Card.Title>호텔의 전화번호을 알려주세요</Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="호텔전화번호 입력하기"
                        onChange={(e) => {
                          handleTel(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
                <Card.Body>
                  <Card.Title>호텔에 대해 설명해주세요</Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="호텔설명하기"
                        onChange={(e) => {
                          handleOverview(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>

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

export default RegisterHouse;
