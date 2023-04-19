import React, { useCallback, useState } from "react";
import {
  Background,
  R_CardGroup_hotel,
  Titlehotel,
  Titlehotel_content,
} from "../../../style/HostStyle";
import { Card, Form } from "react-bootstrap";
import { hostpropertyInsertDB } from "../../../service/hostLogic";
import { useDispatch } from "react-redux";
import { setToastMessage } from "../../../redux/toastStatus/action";
import { useNavigate } from "react-router-dom";
import HostZipCode from "./HostZipCode";
import HeaderNav1 from "../../header/HeaderNav1";
import { useEffect } from "react";

const RegisterHotel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //시퀀스로 받아온 p_id 저장하기
  const [tempid, setTempid] = useState("");
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
  const [selectedRooms, setSelectedRooms] = useState({
    ROOM_ID: "",
  });
  const [post, setPost] = useState({
    zipcode: "",
    addr: "",
    addrDetail: "",
  });
  //호텔등록하기 버튼

  const hotelInsert = async () => {
    const properties = {
      p_title,
      p_overview,
      p_tel,
      p_postal,
      p_address,
      p_refund,
      p_scale,
      p_star,
      p_checkin,
      p_checkout,
      room_id: selectedRooms.ROOM_ID,
      host_business_num,
    };
    console.log(properties);
    //호텔insert
    const propertyres = await hostpropertyInsertDB(properties);
    //p_id시퀀스 출력 - 성공 한 경우 채번된 p_id를 반환한다.
    console.log(propertyres.data);
    if (propertyres.data < 0) {
      dispatch(
        setToastMessage(
          "호텔정보 등록에 실패하였습니다.빈 공란을 모두 채워주세요!"
        )
      );
      return;
    } else {
      dispatch(
        setToastMessage(
          "호텔정보 등록에 성공하였습니다. 숙소 등록페이지로 이동합니다."
        )
      );
      setTempid(propertyres.data);
      console.log(propertyres.data);
      console.log(tempid);
      setTimeout(() => {
        console.log(`tempid: ${propertyres.data}`);
        console.log("페이지이동성공");
        //  navigate("/host/registerRoom");
      }, 1500);
    }
    //시퀀스로 받아온 p_id담기
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
  const handleStar = useCallback((e) => {
    setHostHotelStar(e);
  }, []);
  const handleCheckin = useCallback((e) => {
    setHostHotelCheckin(e);
  }, []);
  const handleCheckOut = useCallback((e) => {
    setHostHotelCheckout(e);
  }, []);
  const handleRefund = useCallback((e) => {
    setHostHotelRefund(e);
  }, []);
  const handleScale = useCallback((e) => {
    setHostHotelScale(e);
  }, []);
  //룸타입 선택
  const handleRoomType = (e) => {
    const value = e.target.id;
    console.log(value);
    const checked = e.target.checked;
    console.log(e.target.checked);
    setSelectedRooms((selectedRooms) => ({
      ROOM_ID: checked
        ? [...selectedRooms.ROOM_ID, value]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          selectedRooms.ROOM_ID.filter((val) => val !== value),
    }));
  };
  useEffect(() => {
    console.log("선택된 체크박스:" + selectedRooms.ROOM_ID);
  }, [selectedRooms]);
  return (
    <>
      <HeaderNav1 />
      <Background>
        <Titlehotel> 호텔등록을 시작합니다! </Titlehotel>
        <Titlehotel_content> 호텔 정보를 알려주세요. </Titlehotel_content>
        <R_CardGroup_hotel>
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
            <HostZipCode
              onZipcodeChange={setHostzipcode}
              onAddrChange={setHostAddr}
              post={post}
              setPost={setPost}
            />
            <Card.Body>
              <Card.Title>호텔의 성급을 알려주세요</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="호텔성급 입력하기"
                    onChange={(e) => {
                      handleStar(e.target.value);
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
            <Card.Body>
              <Card.Title>호텔의 룸타입을 선택해주세요.</Card.Title>
              <Form>
                {[
                  { label: "스위트룸", value: "1" },
                  { label: "트윈룸", value: "2" },
                  { label: "싱글룸", value: "3" },
                  { label: "트리플룸", value: "4" },
                  { label: "디럭스룸", value: "5" },
                  { label: "로얄", value: "6" },
                  { label: "스탠다드 싱글", value: "7" },
                  { label: "스탠다드 더블", value: "8" },
                  { label: "슈페리어 트윈룸", value: "9" },
                  { label: "슈페리어 싱글룸", value: "10" },
                ].map((type) => (
                  <div key={`ROOM_TYPE-${type.value}`} className="mb-1">
                    <Form.Check
                      type="checkbox"
                      id={`${type.value}`}
                      label={type.label}
                      onClick={handleRoomType}
                    />
                  </div>
                ))}
              </Form>
            </Card.Body>
            <Card.Body>
              <Card.Title>호텔에 체크인시간을 알려주세요</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="호텔설명하기"
                    onChange={(e) => {
                      handleCheckin(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body>
              <Card.Title>호텔에 체크아웃시간을 알려주세요</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="호텔설명하기"
                    onChange={(e) => {
                      handleCheckOut(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body>
              <Card.Title>호텔의 규모를 알려주세요</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="호텔설명하기"
                    onChange={(e) => {
                      handleScale(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body>
              <Card.Title>호텔에 환불규정을 알려주세요</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="호텔설명하기"
                    onChange={(e) => {
                      handleRefund(e.target.value);
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
        </R_CardGroup_hotel>
      </Background>
    </>
  );
};

export default RegisterHotel;
