import React, { useState } from "react";
import { Accordion, Card, Form } from "react-bootstrap";
import {
  HostTable,
  HostTableItem1,
  HostTableItem2,
  HostTableItem3,
} from "../../../style/HostStyle";
import { useCallback } from "react";
import { useEffect } from "react";

const HostFac = ({ selectedRooms, setSelectedRooms, onScaleChange }) => {
  const handleFacRoom = (e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_ROOM: checked
        ? [...selectedRooms.FAC_ROOM, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_ROOM.filter((val) => val !== value),
    }));
  };
  const handleFacRestaruant = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_RESTARUANT: checked
        ? [...selectedRooms.FAC_RESTARUANT, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_RESTARUANT.filter((val) => val !== value),
    }));
  }, []);
  const handleFacSecurity = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_SECURITY: checked
        ? [...selectedRooms.FAC_SECURITY, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_SECURITY.filter((val) => val !== value),
    }));
  }, []);
  const handleFacBathroom = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_BATHROOM: checked
        ? [...selectedRooms.FAC_BATHROOM, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_BATHROOM.filter((val) => val !== value),
    }));
  }, []);
  const handleFacParking = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_PARKING: checked
        ? [...selectedRooms.FAC_PARKING, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_PARKING.filter((val) => val !== value),
    }));
  }, []);
  const handleFacBed = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_BED: checked
        ? [...selectedRooms.FAC_BED, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_BED.filter((val) => val !== value),
    }));
  }, []);
  const handleFacLiving = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_LIVING: checked
        ? [...selectedRooms.FAC_LIVING, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_LIVING.filter((val) => val !== value),
    }));
  }, []);
  const handleFacMedia = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_MEDIA: checked
        ? [...selectedRooms.FAC_MEDIA, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_MEDIA.filter((val) => val !== value),
    }));
  }, []);
  const handleFacInternet = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_INTERNET: checked
        ? [...selectedRooms.FAC_INTERNET, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_INTERNET.filter((val) => val !== value),
    }));
  }, []);
  const handleFacService = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_SERVICE: checked
        ? [...selectedRooms.FAC_SERVICE, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_SERVICE.filter((val) => val !== value),
    }));
  }, []);
  const handleFacGeneral = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_GENERAL: checked
        ? [...selectedRooms.FAC_GENERAL, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_GENERAL.filter((val) => val !== value),
    }));
  }, []);
  const handleFacLanguage = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_LANGUAGE: checked
        ? [...selectedRooms.FAC_LANGUAGE, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_LANGUAGE.filter((val) => val !== value),
    }));
  }, []);
  const handleFacKitchen = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_KITCHEN: checked
        ? [...selectedRooms.FAC_KITCHEN, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_KITCHEN.filter((val) => val !== value),
    }));
  }, []);
  const handleFacReception = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      FAC_RECEPTION: checked
        ? [...selectedRooms.FAC_RECEPTION, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.FAC_RECEPTION.filter((val) => val !== value),
    }));
  }, []);
  const handleFacExtras = useCallback((e) => {
    const value = e.target.id;
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ...selectedRooms,
      P_EXTRA: checked
        ? [...selectedRooms.P_EXTRA, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.P_EXTRA.filter((val) => val !== value),
    }));
  }, []);

  useEffect(() => {
    console.log("선택된 체크박스:" + selectedRooms.FAC_ROOM);
    console.log("선택된 체크박스:" + selectedRooms.FAC_RESTARUANT);
    console.log("선택된 체크박스:" + selectedRooms.P_EXTRA);
  }, [selectedRooms]);

  return (
    <div>
      <Accordion.Item eventKey="4">
        <Accordion.Header>시설</Accordion.Header>
        호텔의 시설에 대하여 선택해주세요
        <Accordion.Body>
          <Card style={{ width: "55rem", margin: "5% auto" }}>
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
                      "방음 시설",
                      "의류 건조대",
                      "옷걸이",
                      "스타일러",
                    ].map((type) => (
                      <div key={`FAC_ROOM-${type}`} className="mb-1">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacRoom}
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
                      <div key={`FAC_RESTARUANT-${type}`} className="mb-2">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacRestaruant}
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
                      <div key={`FAC_SECURITY-${type}`} className="mb-3">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacSecurity}
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
                      <div key={`FAC_BATHROOM-${type}`} className="mb-4">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacBathroom}
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
                      <div key={`FAC_PARKING-${type}`} className="mb-5">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacParking}
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
                      <div key={`FAC_BED-${type}`} className="mb-6">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacBed}
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
                      <div key={`FAC_LIVING-${type}`} className="mb-7">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacLiving}
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
                      <div key={`FAC_MEDIA-${type}`} className="mb-8">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacMedia}
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
                      <div key={`FAC_INTERNET-${type}`} className="mb-9">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacInternet}
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
                      <div key={`FAC_SERVICE-${type}`} className="mb-10">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacService}
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
                      <div key={`FAC_GENERAL-${type}`} className="mb-11">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacGeneral}
                        />
                      </div>
                    ))}
                  </Form>
                </HostTableItem2>
                <HostTableItem3>
                  <div>언어</div>
                  <Form>
                    {["한국어", "영어", "일본어", "중국어"].map((type) => (
                      <div key={`FAC_LANGUAGE-${type}`} className="mb-12">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacLanguage}
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
                      <div key={`FAC_KITCHEN-${type}`} className="mb-13">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacKitchen}
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
                      <div key={`FAC_RECEPTION-${type}`} className="mb-14">
                        <Form.Check
                          type="checkbox"
                          id={`${type}`}
                          label={type}
                          onClick={handleFacReception}
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
                  <div key={`P_EXTRAS-${type}`} className="mb-15">
                    <Form.Check
                      type="checkbox"
                      id={`${type}`}
                      label={type}
                      onClick={handleFacExtras}
                    />
                  </div>
                ))}
              </Form>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default HostFac;
