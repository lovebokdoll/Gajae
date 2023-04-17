import React, { useState } from "react";
import HeaderNav1 from "../header/HeaderNav1";
import HeaderNav2 from "../header/HeaderNav2";
import { Accordion, Card, Form, ListGroup } from "react-bootstrap";
import ZipCode from "./HostZipCode";
import HostZipCode from "./HostZipCode";
import { BButton } from "../../style/FormStyle";
import { hostInsertDB } from "../../service/hostLogic";

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
      //host_addr_dtl,
    };
    //const address = `${host_addr}${host_addr_dtl}`;
    console.log(information);
    // console.log("주소 합침:" + address);
    const res = await hostInsertDB(information);
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
          <Accordion.Item eventKey="1">
            <Accordion.Header>객실</Accordion.Header>
            첫번째 객실에 대한 정보를 입력해주세요 이후에 다른 객실도 추가
            등록하실 수 있습니다.
            <Accordion.Body>
              <Card style={{ width: "55rem", margin: "5% auto" }}>
                <Card.Body>
                  <Card.Title>객실유형을 선택해 주세요</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Body>
                  <Card.Title>
                    이런 유형의 객실을 몇개 운영 중이신가요?
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Body>
                  <Card.Title>이 객실에서는 어떤 침대가 제공되나요?</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Body>
                  <Card.Title>
                    이 객실에 숙박 가능한 인원은 몇 명인가요?
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Body>
                  <Card.Title>
                    이 객실에 숙박 가능한 인원은 몇 명인가요?
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Body>
                  <Card.Title>이 객실의 크기는 어떻게 되나요?</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Body>
                  <Card.Title>
                    이 객실에는 어떤 욕실용품/시설이 구비되어 있나요?
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Form>
                  {["radio"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                      />
                      <Form.Check
                        disabled
                        type={type}
                        label={`disabled ${type}`}
                        id={`disabled-default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
                <Card.Body>
                  <Card.Title>이 객실의 이름은 무엇인가요?</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Body>
                  <Card.Title>이 객실의 1박 요금을 설정하세요.</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          {/* ////////////////////객실 끝////////////////////////// */}
          {/* ////////////////////사진 시작////////////////////////// */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>사진</Accordion.Header>
            숙소의 사진을 추가해주세요.
            <Accordion.Body>
              <Card style={{ width: "55rem", margin: "5% auto" }}>
                <Card.Body>
                  <Card.Title>최소 3장의 사진을 업로드 해주세요.</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          {/* ////////////////////사진 끝////////////////////////// */}
          {/* ////////////////////환불 정책 시작////////////////////////// */}

          <Accordion.Item eventKey="3">
            <Accordion.Header>환불정책</Accordion.Header>
            숙소의 환불규정을 추가해주세요.
            <Accordion.Body>
              <Card style={{ width: "75rem" }}>
                <Card.Body>
                  <Card.Title>최소 3장의 사진을 업로드 해주세요.</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
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
