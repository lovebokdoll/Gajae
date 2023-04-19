import React, { useCallback, useState } from "react";
import {
  Background,
  Content,
  R_CardGroup,
  Title,
} from "../../../style/HostStyle";
import { Accordion, Card, Form } from "react-bootstrap";
import { hostpropertyInsertDB } from "../../../service/hostLogic";
import { useDispatch } from "react-redux";
import { setToastMessage } from "../../../redux/toastStatus/action";
import { useNavigate } from "react-router-dom";

const RegisterHotel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //시퀀스로 받아온 p_id
  const [tempid, setTempid] = useState("");
  const [tempidUpdate, setTempUpdate] = useState(false);
  const [p_title, setHostHotelTitle] = useState("");
  const [p_overview, setHostHotelOverview] = useState("");
  const [p_tel, setHostHotelTel] = useState("");
  const [p_postal, setHostzipcode] = useState("");
  const [p_address, setHostAddr] = useState("");
  const [p_refund, setHostHotelRefund] = useState("");
  const [p_scale, setHostHotelScale] = useState("");
  const [p_star, setHostHotelStar] = useState("");
  const [p_checkin, setHostHotelCheckin] = useState("");
  const [p_checkout, setHostHotelCheckout] = useState("");
  const [host_business_num, setHostBusinessNum] = useState("");
  //호텔등록하기 버튼
  const hotelInsert = async () => {
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
    //호텔insert
    const propertyres = await hostpropertyInsertDB(properties);
    //p_id시퀀스 출력
    console.log(propertyres.data);
    if (propertyres.data < 0) {
      dispatch(setToastMessage("숙소정보 등록 실패"));
      return;
    } else {
      dispatch(setToastMessage("숙소정보 등록에 성공하였습니다"));
      navigate("/host/registerRoom");
    }
    //시퀀스로 받아온 p_id담기
    setTempid(propertyres.data);
    setTempUpdate(true);
  };
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
  return (
    <>
      <Background>
        <Title>
          Gajae.com에
          <br /> 호텔 <br />
          등록하기
        </Title>
        <R_CardGroup>
          <Accordion.Header>호텔정보</Accordion.Header>
          호텔 정보를 간략하게 알려주세요
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
            <div className="d-grid gap-2 col-6 mx-auto">
              {/*HostZipCode의 내용이 버튼을 누를때 insert되어야 한다. */}
              <button
                className="btn btn-warning"
                type="button"
                onClick={hotelInsert}
              >
                등록하기
              </button>
            </div>
          </Card>
        </R_CardGroup>
      </Background>
    </>
  );
};

export default RegisterHotel;
