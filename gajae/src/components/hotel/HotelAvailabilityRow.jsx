import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { Charge_title, TotalPrice } from "../../style/HotelStyle";
import { checkVacancyDB } from "../../service/hotelReservLogic";
import Swal from "sweetalert2";
import "./hotel.css";
/**
 * HotelPage에서 넘어온 정보를 이용하여 갯수만큼 화면에 뿌려준다.
 * 옵션정보&요금 - 숙소정보
 */

const HotelAvailabilityRow = ({ row }) => {
  const navigate = useNavigate();
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
  const [hotels, setHotels] = useState([]);
  //객실선택갯수를 담는 useState선언
  const [selectNumber, setSelectNumber] = useState([]);
  //객실숫자 * 요금값을 담는 useState
  //[selectNumber]값이 변경될때만 함수 재생성
  const [totalPrice, setTotalPrice] = useState(0);
  //쿠키에 선택된 룸타입, 갯수저장하는 useState
  const [selectRoom, setSelectRoom] = useState({});
  const [checkResRoom, setCheckResRoom] = useState([{}]);
  //쿠키에 선택된 룸Id저장하는 useState
  const [show, setShow] = useState(false);
  //선택한 모달창 담는 useState
  const [selectedModal, setSelectedRoomModal] = useState([]);
  const [selectedPriceModal, setSelectedPriceModal] = useState([]);
  const [selectedFacModal, setSelectedFacModal] = useState({});
  //쿠키에 선택된 룸Id저장하는 useState
  const [selectRoomId, setSelectRoomId] = useState({});
  const [localID, setLocalID] = useState();
  const p_id = Cookies.get("p_id");
  const startDate = Cookies.get("startDate");
  const endDate = Cookies.get("endDate");

  useEffect(() => {
    setLocalID(window.localStorage.getItem("userId"));
  }, []);
  const selectNum = useCallback(
    (index, value) => {
      setSelectNumber({ [index]: value });
    },
    [selectNumber]
  );
  useEffect(() => {
    let totalPrice = 0;
    //쿠키에 객체로 담아준다.
    const selectedRooms = {};
    const selectedRoomIds = {};
    for (let i = 0; i < hotels.length; i++) {
      const num = selectNumber[i] || 0;
      totalPrice += num * hotels[i].ROOM_PRICE;
      selectedRooms[hotels[i].ROOM_TYPE] = num;
      selectedRoomIds[hotels[i].ROOM_ID] = num;
    }
    setTotalPrice(totalPrice);
    //룸타입
    const temp = JSON.stringify(selectedRooms);
    const rooms = JSON.parse(temp);

    //룸ID
    const rid = JSON.stringify(selectedRoomIds);
    const rids = JSON.parse(rid);
    console.log(rids); //{1:0,2:0,10:1} 이렇게 담김 ==> 선택한 즉시 담기고 있음!! 이거 활용하면 될듯
    const selectedRoomTypes = Object.keys(rooms)
      .filter((room) => rooms[room] !== 0)
      .reduce((obj, key) => {
        obj[key] = rooms[key];
        return obj;
      }, {});

    const selectedRids = Object.keys(rids)
      .filter((rid) => rids[rid] !== 0)
      .reduce((obj, key) => {
        obj[key] = rids[key];
        return key;
      }, {});

    setSelectRoom(selectedRoomTypes);
    //룸아이디
    setSelectRoomId(selectedRids);
    Cookies.set("resRoomId", selectedRids);
    //넘어온 날짜 담기
    const checkRoomNDate = async () => {
      const checkRoom = {
        P_ID: p_id,
        ROOM_ID: selectedRids,
        START_DATE: startDate,
        END_DATE: endDate,
      };
      const response = await checkVacancyDB(checkRoom);
      console.log(response.data);
      setCheckResRoom(response.data);
    };
    checkRoomNDate();
  }, [hotels, selectNumber]);

  useEffect(() => {
    console.log(checkResRoom);
  }, [checkResRoom]);
  //선택한 방의 예약가능 / 불가능여부 확인

  useEffect(() => {
    const list = [];
    row.forEach((item) => {
      const obj = {
        ROOM_TYPE: item.ROOM_TYPE,
        ROOM_PRICE: item.ROOM_PRICE,
        ROOM_CAPACITY: item.ROOM_CAPACITY,
        ROOM_OPTION: item.ROOM_OPTION,
        ROOM_ID: item.ROOM_ID,
        FAC_ROOM: item.FAC_ROOM,
        FAC_RESTARUANT: item.FAC_RESTARUANT,
        FAC_SECURITY: item.FAC_SECURITY,
        FAC_BATHROOM: item.FAC_BATHROOM,
        FAC_PARKING: item.FAC_PARKING,
        FAC_BED: item.FAC_BED,
        FAC_LIVING: item.FAC_LIVING,
        FAC_MEDIA: item.FAC_MEDIA,
        FAC_INTERNET: item.FAC_INTERNET,
        FAC_SERVICE: item.FAC_SERVICE,
        FAC_GENERAL: item.FAC_GENERAL,
        FAC_LANGUAGE: item.FAC_LANGUAGE,
        FAC_KITCHEN: item.FAC_KITCHEN,
        FAC_RECEPTION: item.FAC_RECEPTION,
      };
      list.push(obj);
      console.log(item.ROOM_DETAIL);
    });
    setHotels(list);
  }, [row]);

  //지금예약버튼
  const onReservation = () => {
    if (totalPrice > 0) {
      if (localID == null) {
        Toast.fire({
          icon: "warning", // Alert 타입
          title: "로그인을 먼저 진행해주세요.", // Alert 제목
          timer: 1000,
          timerProgressBar: false,
        });
        return;
      }
      const roomIds = Object.keys(selectRoomId);
      const roomTypes = Object.keys(selectRoom);
      const selectedNumber = Object.values(selectRoom);
      console.log(roomIds);
      console.log(roomTypes);
      console.log(selectedNumber);
      for (let i = 0; i < roomTypes.length; i++) {
        const selecteNumber = selectedNumber[i];
        const selectRoomid = roomIds[i];
        Cookies.set("resRoomType", roomTypes); //한 꺼번에 두개를 담는게 아니라  하나씩 담는것 임
        Cookies.set("selectedRoomNumber", selecteNumber); // 인원 수 쿠키에 담음 Cookies.set("P_TITLE", row.P_TITLE);
        // Cookies.set("resRoomId", selectRoomid);
        //  console.log(Cookies.set("resRoomId", selectRoomid));
      }
      Cookies.set("resPrice", totalPrice); // 총액 쿠키에 담음
      console.log(checkResRoom[0].RES_YN);
      if (checkResRoom[0].RES_YN == "Y") {
        Toast.fire({
          icon: "warning", // Alert 타입
          title: "다른 객실을 선택해 주세요", // Alert 제목
          timer: 1000,
          timerProgressBar: false,
        });
        return;
      }
    }
    navigate("/reservate");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      {/* 룸타입별 내용 */}
      <div
        className="table-wrapper"
        style={{ width: "1200px", display: "flex", flexDirection: "row" }}
      >
        <span className="table-wrapper-item1" style={{ flexGrow: "1" }}>
          <table className="table caption-top table-hover ">
            <thead className="table-primary">
              <tr>
                <th scope="col">룸타입</th>
                <th scope="col">정원</th>
                <th scope="col">요금</th>
                <th scope="col">선택사항</th>
                <th scope="col">객실선택</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel, index) => (
                <tr key={index}>
                  <td>
                    <a
                      href="javascript:void(0);"
                      style={{
                        textDecoration: "none",
                      }}
                      onClick={() => {
                        setSelectedRoomModal(hotel.ROOM_TYPE);
                        setSelectedPriceModal(hotel.ROOM_PRICE);
                        setSelectedFacModal({
                          ROOM_DETAIL: hotel.ROOM_DETAIL,
                        });
                        handleShow();
                        console.log(hotel);
                      }}
                    >
                      {hotel.ROOM_TYPE}
                    </a>
                  </td>
                  <td>{hotel.ROOM_CAPACITY}명</td>
                  <td>{hotel.ROOM_PRICE}원</td>

                  <td>
                    {hotel.ROOM_OPTION?.split(",").map((option, index) => (
                      <div key={index}>{option}</div>
                    ))}
                  </td>
                  <td>
                    {/* 금액선택 토글 */}
                    <div className="table-wrapper-item2">
                      <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                          {selectNumber[index] || 0}{" "}
                          {/* index값이 존재하지 않을 경우 0으로 보여줌 */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => selectNum(index, 0)}>
                            0
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => selectNum(index, 1)}>
                            1
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </span>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title> {selectedModal}을 소개합니다</Modal.Title>
          </Modal.Header>
          {Object.keys(selectedFacModal).map((key) => (
            <Modal.Body key={key}>{selectedFacModal[key]}</Modal.Body>
          ))}
          {/* {selectedFacModal &&
            selectedFacModal.facilities &&
            selectedFacModal.facilities
              .join(",")
              .split(",")
              .map((item, index) => (
                <Modal.Body key={index}>{item.trim()}</Modal.Body>
              ))} */}

          <Modal.Footer>
            <span>요금정보를 확인하세요! </span>
            {selectedPriceModal}원
          </Modal.Footer>
          <Modal.Footer>
            <Button
              className="btn_close"
              variant="secondary"
              onClick={handleClose}
            >
              닫기
            </Button>
          </Modal.Footer>
        </Modal>
        {/* 예약버튼 */}
        <span
          style={{
            width: "350px",
            marginTop: "0.6em",
            marginLeft: "0.6em",
            flexGrow: "0.5",
          }}
        >
          <Alert variant="warning">
            <Alert.Heading>객실유형 및 요금을 확인하세요.</Alert.Heading>
            <TotalPrice>
              {Object.keys(selectRoom).map((key) => (
                <div key={key}>
                  선택한 룸타입 : {key} {selectRoom[key]}개
                </div>
              ))}
              <div
                style={{
                  textAlign: "left",
                  marginTop: "1em",
                  fontWeight: "bold",
                }}
              >
                {" "}
                최종 금액 : {totalPrice}원{" "}
              </div>{" "}
              <Button
                variant="outline-warning"
                onClick={onReservation}
                style={{ margin: "1em 0 0 13em" }}
              >
                지금 바로 <br />
                예약하세요!
              </Button>
              <br />
            </TotalPrice>
            <hr />
            <p className="mb-0">
              {checkResRoom.find((room) => room.RES_YN === "Y") ? (
                <p className="blink" style={{ color: "red", margin: "10px" }}>
                  선택하신 룸타입은 <br />
                  해당 날짜에 이용이 불가능 합니다
                </p>
              ) : checkResRoom.find((room) => room.RES_YN === "N") ? (
                <p>선택하신 룸타입은 이용가능합니다.</p>
              ) : (
                <p>객실을 선택해 주세요</p>
              )}
            </p>
          </Alert>
        </span>
      </div>
    </>
  );
};

export default HotelAvailabilityRow;
