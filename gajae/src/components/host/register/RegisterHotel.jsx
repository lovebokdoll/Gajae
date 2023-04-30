import React, { useCallback, useState } from "react";
import {
  Background,
  CardCheckIn,
  CardCheckOut,
  CardTime,
  R_CardGroup_hotel,
  Titlehotel,
  Titlehotel_content,
} from "../../../style/HostStyle";
import { Button, Card, Form } from "react-bootstrap";
import { hostpropertyInsertDB } from "../../../service/hostLogic";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import HostZipCode from "./HostZipCode";
import { useEffect } from "react";
import ImageUpload from "../../review/ImageUpload";
import HostHeaderNav from "../HostHeaderNav";
import Footer from "../../footer/Footer";
import Swal from "sweetalert2";

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
  const [p_mapy, setHostMapy] = useState("");
  const [p_mapx, setHostMapx] = useState("");
  const [p_refund, setHostHotelRefund] = useState("");
  const [p_scale, setHostHotelScale] = useState("");
  const [p_star, setHostHotelStar] = useState("");
  const [p_checkin, setHostHotelCheckin] = useState("");
  const [p_checkout, setHostHotelCheckout] = useState("");
  const [p_photo, setImageUrl] = useState("");
  const [host_business_num, setHostBusinessNum] = useState("");
  const [selectedRooms, setSelectedRooms] = useState({
    ROOM_ID: "",
  });

  const [post, setPost] = useState({
    zipcode: "",
    addr: "",
  });
  const tempBusinessNum = window.localStorage.getItem("hostBusinessNum");
  const getImage = (imageUrl) => {
    setImageUrl(imageUrl);
    console.log(imageUrl);
  };
  //모달 창
  const Toast = Swal.mixin({
    toast: true,
    position: "center-center",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  //호텔등록하기 버튼
  const hotelInsert = async () => {
    const properties = {
      p_title,
      p_overview,
      p_tel,
      p_postal,
      p_address,
      p_mapx: p_mapx,
      p_mapy: p_mapy,
      p_refund,
      p_scale,
      p_star,
      p_checkin,
      p_checkout,
      p_photo,
      room_id: selectedRooms.ROOM_ID,
      host_business_num: tempBusinessNum,
    };
    console.log(properties);
    //호텔insert
    const propertyres = await hostpropertyInsertDB(properties);
    //p_id시퀀스 출력 - 성공 한 경우 채번된 p_id를 반환한다.
    console.log(propertyres.data);
    if (propertyres.data < 0) {
      Toast.fire({
        icon: "warning", // Alert 타입
        title: "호텔정보 등록에 실패하였습니다.빈 공란을 모두 채워주세요!", // Alert 제목
        timer: 900,
        timerProgressBar: false,
      });
      return;
    } else {
      Toast.fire({
        icon: "success", // Alert 타입
        title: "호텔정보 등록에 성공하였습니다. 숙소 등록페이지로 이동합니다.", // Alert 제목
        timer: 900,
        timerProgressBar: false,
      });
      setTimeout(() => {
        setTempid(propertyres.data);
        console.log(`tempid: ${propertyres.data}`);
        navigate(`/host/registerRoom?p_id=${propertyres.data}`);
      }, 1500);
    }
  };
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
  //성급선택
  const handleStar = useCallback((e) => {
    const value = e.target.id;
    console.log(value);
    const checked = e.target.checked;
    console.log(e.target.checked);
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      if (checkbox.id !== value) {
        checkbox.checked = false;
      }
    });
    setHostHotelStar(value);
  }, []);
  console.log(p_star);
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
      <Background>
        <HostHeaderNav />
        <Titlehotel> 호텔등록을 시작합니다! </Titlehotel>
        <Titlehotel_content> 호텔 정보를 알려주세요. </Titlehotel_content>
        <R_CardGroup_hotel>
          <Card>
            <Card.Body>
              <Card.Title>
                <i class="fa-solid fa-check"></i>사업자번호를 입력해주세요
              </Card.Title>
              <hr style={{ border: "1px solid gray" }} />
              <Form>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder={tempBusinessNum}
                    disabled
                  />
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body>
              <Card.Title>
                {" "}
                <i class="fa-solid fa-check"></i>호텔의 이름을 알려주세요
              </Card.Title>
              <hr style={{ border: "1px solid gray" }} />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="호텔이름 입력하기"
                    onChange={(e) => {
                      handleTitle(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Body>
              <Card.Title>
                {" "}
                <i class="fa-solid fa-check"></i>호텔의 전화번호를 알려주세요
              </Card.Title>
              <hr style={{ border: "1px solid gray" }} />
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
              <Card.Title>
                <i class="fa-solid fa-location-dot fa-fade"></i>호텔의 위치를
                알려주세요
              </Card.Title>
              <hr style={{ border: "1px solid gray" }} />
              <HostZipCode
                onZipcodeChange={setHostzipcode}
                onAddrChange={setHostAddr}
                post={post}
                setPost={setPost}
                setHostMapx={setHostMapx}
                setHostMapy={setHostMapy}
                p_mapy={p_mapy}
                p_mapx={p_mapx}
              />
            </Card.Body>
            <Card.Body>
              <Card.Title>
                {" "}
                <i class="fa-solid fa-check"></i>호텔의 성급을 선택해주세요
              </Card.Title>
              <hr style={{ border: "1px solid gray" }} />
              <Form>
                {[
                  { label: "5성급", value: "5" },
                  { label: "4성급", value: "4" },
                  { label: "3성급", value: "3" },
                  { label: "2성급", value: "2" },
                  { label: "1성급", value: "1" },
                ].map((type) => (
                  <div key={`P_STAR-${type.value}`} className="mb-1">
                    <Form.Check
                      type="checkbox"
                      id={`${type.value}`}
                      label={type.label}
                      onClick={handleStar}
                    />
                  </div>
                ))}
              </Form>
            </Card.Body>
            <Card.Body>
              <Card.Title>
                {" "}
                <i class="fa-solid fa-check"></i>호텔에 대해 설명해주세요
              </Card.Title>
              <hr style={{ border: "1px solid gray" }} />
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
            <CardTime>
              <CardCheckIn>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <i class="fa-regular fa-clock"></i>호텔의 체크인시간을
                    알려주세요
                  </Card.Title>
                  <hr style={{ border: "1px solid gray" }} />
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="호텔 체크인시간 입력하기"
                        onChange={(e) => {
                          handleCheckin(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </CardCheckIn>
              <CardCheckOut>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <i class="fa-solid fa-clock"></i>호텔의 체크아웃시간을
                    알려주세요
                  </Card.Title>
                  <hr style={{ border: "1px solid gray" }} />
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="호텔 체크아웃시간 입력하기"
                        onChange={(e) => {
                          handleCheckOut(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </CardCheckOut>
            </CardTime>
            <Card.Body>
              <Card.Title>
                {" "}
                <i class="fa-solid fa-check"></i>호텔의 룸타입을 선택해주세요.
              </Card.Title>
              <hr style={{ border: "1px solid gray" }} />
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
              <Card.Title>
                {" "}
                <i class="fa-solid fa-check"></i>호텔의 규모를 알려주세요
              </Card.Title>
              <hr style={{ border: "1px solid gray" }} />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="호텔규모 작성하기"
                    onChange={(e) => {
                      handleScale(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
            {/*============== 호텔사진등록================ */}
            <Card.Body>
              <Card.Title>
                {" "}
                <i class="fa-solid fa-check"></i>호텔의 사진을 등록해주세요
              </Card.Title>
              <hr style={{ border: "1px solid gray" }} />
              <ImageUpload getImage={getImage} />
            </Card.Body>
            {/*=============== 호텔사진등록 =================*/}
            <Card.Body>
              <Card.Title>
                {" "}
                <i class="fa-solid fa-check"></i>호텔의 환불규정을 알려주세요
              </Card.Title>
              <hr style={{ border: "1px solid gray" }} />

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="호텔환불규정 작성하기"
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
                type="button"
                class="btn btn-warning"
                onClick={hotelInsert}
                style={{ marginBottom: "8%" }}
              >
                등록하기
              </button>
            </div>
          </Card>
        </R_CardGroup_hotel>
      </Background>
      <Footer />
    </>
  );
};

export default RegisterHotel;
