import React, { useState } from "react";
import HeaderNav1 from "../../header/HeaderNav1";
import { Accordion, Card, Form } from "react-bootstrap";
import HostZipCode from "./HostZipCode";
import { hostInsertDB } from "../../../service/hostLogic";
import {
  HostTable,
  HostTableItem1,
  HostTableItem2,
  HostTableItem3,
} from "../../../style/HostStyle";
import HostRoom from "./HostRoom";
import HostPhoto from "./HostPhoto";

const RegisterHouse = () => {
  const [p_postal, setHostzipcode] = useState("");
  const [p_address, setHostAddr] = useState("");
  const [host_addr_dtl, setHostAddrDtl] = useState("");
  const [post, setPost] = useState({
    zipcode: "",
    addr: "",
    addrDetail: "",
  });
  //클릭하는 함수 정의
  const hostZipcodeInsert = async () => {
    const information = {
      p_postal,
      p_address,
      // host_addr_dtl,
    };
    //const address = `${host_addr}${host_addr_dtl}`;
    console.log(information);
    // console.log("주소 합침:" + address);
    const res = await hostInsertDB(information);
    console.log(res.data);
    if (!res.data) {
      console.log("주소정보 등록 실패");
    } else {
      console.log("주소정보등록성공");
    }
  };
  return (
    <>
      <HeaderNav1 />
      <div style={{ width: "70%", margin: "10% auto" }}>
        <Accordion>
          <Accordion.Item eventKey="0">
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
                    onAddrDtlChange={setHostAddrDtl}
                    post={post}
                    setPost={setPost}
                  />
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          {/* ////////////////////숙소위치끝////////////////////////// */}
          {/* ////////////////////객실 시작////////////////////////// */}
          <HostRoom />
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
                      placeholder="호텔이름입력하기-p_title"
                    />
                  </Form.Group>
                </Form>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          {/* ////////////////////환불 정책 끝////////////////////////// */}
        </Accordion>
        <div class="d-grid gap-2 col-6 mx-auto">
          {/*HostZipCode의 내용이 버튼을 누를때 insert되어야 한다. */}
          <button
            class="btn btn-warning"
            type="button"
            onClick={hostZipcodeInsert}
          >
            등록하기
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterHouse;
