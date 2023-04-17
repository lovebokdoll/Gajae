import React, { useState } from "react";
import HeaderNav1 from "../header/HeaderNav1";
import { Accordion, Card, Form } from "react-bootstrap";
import HostZipCode from "./HostZipCode";
import { hostInsertDB } from "../../service/hostLogic";
import {
  HostTable,
  HostTableItem1,
  HostTableItem2,
  HostTableItem3,
} from "../../style/HostStyle";

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
      host_addr_dtl,
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
          <Accordion.Item eventKey="1">
            <Accordion.Header>객실</Accordion.Header>
            첫번째 객실에 대한 정보를 입력해주세요 이후에 다른 객실도 추가
            등록하실 수 있습니다.
            <Accordion.Body>
              <Card style={{ width: "55rem", margin: "5% auto" }}>
                <Card.Body>
                  <Card.Title>호텔이름을 입력해 주세요</Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="호텔이름입력하기-p_title"
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
                <Card.Body>
                  <Card.Title>객실유형을 입력해 주세요</Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="객실유형 입력하기-Room Type"
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
                <Card.Body>
                  <Card.Title>이 객실의 수용인원은 몇명인가요?</Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="수용인원 입력하기-Room Capacity"
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
                <Card.Body>
                  <Card.Title>
                    이 객실에는 어떤 시설/용품이 구비되어 있나요?
                  </Card.Title>
                  <HostTable>
                    <HostTableItem1>
                      <div>객실 내 시설</div>
                      <Form>
                        {[
                          "침대 옆 콘센트",
                          "옷걸이",
                          "방음 시설",
                          "의류 건조대",
                          "옷걸이",
                          "스타일러",
                        ].map((type) => (
                          <div key={`FAC_ROOM-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_ROOM-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem1>
                    <HostTableItem2>
                      <div>식음료</div>
                      <Form>
                        {[
                          "과일(유료)",
                          "와인/샴페인(유료)",
                          "키즈밀(유료)",
                          "특별 식단 메뉴(요청 시)",
                          "스낵 바",
                          "객실 내 조식 서비스",
                          "레스토랑",
                          "커피숍(숙소 부지 내)",
                          "전통 찻집",
                        ].map((type) => (
                          <div key={`FAC_RESTARUANT-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_RESTARUANT-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem2>
                    <HostTableItem3>
                      <div>보안</div>
                      <Form>
                        {[
                          "소화기",
                          "CCTV",
                          "화염 경보",
                          "보안 알람",
                          "화염경보",
                          "카드키 출입",
                          "열쇠 출입",
                          "안전 금고",
                          "숙소 외부 CCTV",
                        ].map((type) => (
                          <div key={`FAC_SECURITY-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_SECURITY-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem3>
                  </HostTable>

                  <HostTable>
                    <HostTableItem1>
                      <div>화장실</div>
                      <Form>
                        {[
                          "화장지",
                          "타월",
                          "유료 수건/침대 시트",
                          "욕조 또는 샤워기",
                          "전용 욕실",
                          "슬리퍼",
                          "무료 세면도구",
                          "어매니티",
                          "비데",
                        ].map((type) => (
                          <div key={`FAC_BATHROOM-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_BATHROOM-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem1>
                    <HostTableItem2>
                      <div>주차여부</div>
                      <Form>
                        {[
                          "주차가 불가능합니다.",
                          "호텔 인근(사전 예약 불필요) 공영 주차장이 무료로 이용 가능합니다.",
                          "장애인 주차",
                          "호텔 인근 (사전 예약 불필요) 공영 주차장이 시간당 3000원으로 이용 가능합니다.",
                        ].map((type) => (
                          <div key={`FAC_PARKING-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_PARKING-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem2>
                    <HostTableItem3>
                      <div>침실시설</div>
                      <Form>
                        {[
                          "린넨",
                          "알람 시계",
                          "추가 침구류 제공(유료)",
                          "트윈 침대",
                        ].map((type) => (
                          <div key={`FAC_BED-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_BED-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem3>
                  </HostTable>
                  <HostTable>
                    <HostTableItem1>
                      <div>거실시설</div>
                      <Form>
                        {["업무용 책상", "스탠드"].map((type) => (
                          <div key={`FAC_LIVING-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_LIVING-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem1>
                    <HostTableItem2>
                      <div>미디어</div>
                      <Form>
                        {[
                          "평면TV",
                          "TV",
                          "전화기",
                          "넷플릭스",
                          "노트북 대여",
                          "위성채널",
                          "케이블 채널",
                        ].map((type) => (
                          <div key={`FAC_MEDIA-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_MEDIA-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem2>
                    <HostTableItem3>
                      <div>인터넷</div>
                      <Form>
                        {[
                          "유선 인터넷 호텔 객실 내에서 무료입니다.",
                          "Wi-Fi 호텔 객실 내에서 무료입니다.",
                          "Wi-Fi 호텔 전 구역에서 무료입니다.",
                        ].map((type) => (
                          <div key={`FAC_INTERNET-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_INTERNET-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem3>
                  </HostTable>
                  <HostTable>
                    <HostTableItem1>
                      <div>서비스</div>
                      <Form>
                        {[
                          "하우스키핑 (매일)",
                          "팩스/복사",
                          "유료 렌터카 서비스",
                          "다림질 서비스",
                          "드라이클리닝",
                          "유료세탁",
                          "프런트 데스크",
                          "모닝콜 서비스",
                          " 24시간 프런트 데스크",
                          "회의/연회 시설",
                        ].map((type) => (
                          <div key={`FAC_SERVICE-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_SERVICE-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem1>
                    <HostTableItem2>
                      <div>일반</div>
                      <Form>
                        {[
                          "에어컨",
                          "전 구역 금연",
                          "난방 시설",
                          "엘리베이터",
                          "장애인 편의시설",
                          "가족 객실",
                          "미니마트(숙소 부지 내)",
                          "모기장",
                        ].map((type) => (
                          <div key={`FAC_GENERAL-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_GENERAL-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem2>
                    <HostTableItem3>
                      <div>언어</div>
                      <Form>
                        {["한국어", "영어", "일본어", "중국어"].map((type) => (
                          <div key={`FAC_LANGUAGE-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_LANGUAGE-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem3>
                  </HostTable>
                  <HostTable>
                    <HostTableItem1>
                      <div>부엌</div>
                      <Form>
                        {[
                          "커피 포트",
                          "냉장고",
                          "식탁",
                          "주방식기",
                          "건조기",
                          "전자레인지",
                          "청소도구",
                          "토스터",
                        ].map((type) => (
                          <div key={`FAC_KITCHEN-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_KITCHEN-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem1>
                    <HostTableItem2>
                      <div>리셉션</div>
                      <Form>
                        {[
                          "사물함",
                          "컨시어지 서비스",
                          "수하물 보관소",
                          "24시간 프런트 데스크",
                          "익스프레스 체크인/체크아웃",
                          "청구서(인보이스) 제공 숙소",
                        ].map((type) => (
                          <div key={`FAC_RECEPTION-${type}`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`FAC_RECEPTION-${type}`}
                              label={type}
                            />
                          </div>
                        ))}
                      </Form>
                    </HostTableItem2>
                  </HostTable>
                </Card.Body>
                <Card.Body>
                  <Card.Title>이 객실에는 어떤 부대시설이 있나요?</Card.Title>
                  <Form>
                    {[
                      "바베큐장",
                      "수영장",
                      "족구장",
                      "노래방",
                      "세미나실",
                      "배드민턴",
                      "자전거대여",
                      "야외탁자",
                      "파라솔",
                      "정원",
                      "연못",
                      "등산로",
                      "야외수영장",
                    ].map((type) => (
                      <div key={`P_EXTRAS-${type}`} className="mb-2">
                        <Form.Check
                          type="checkbox"
                          id={`P_EXTRAS-${type}`}
                          label={type}
                        />
                      </div>
                    ))}
                  </Form>
                </Card.Body>
                <Card.Body>
                  <Card.Title>이 객실의 1박 요금을 설정하세요.</Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="객실요금 입력하기-Room Price"
                      />
                    </Form.Group>
                  </Form>
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
