import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Charge_title, TotalPrice } from "../../style/HotelStyle";
/**
 * HotelPage에서 넘어온 정보를 이용하여 갯수만큼 화면에 뿌려준다.
 * 옵션정보&요금 - 숙소정보
 */

const HotelAvailabilityRow = ({ row }) => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  //객실선택갯수를 담는 useState선언
  const [selectNumber, setSelectNumber] = useState([]);
  //객실숫자 * 요금값을 담는 useState
  //[selectNumber]값이 변경될때만 함수 재생성
  const [totalPrice, setTotalPrice] = useState(0);
  //쿠키에 선택된 룸타입, 갯수저장하는 useState
  const [selectRoom, setSelectRoom] = useState({});
  //쿠키에 선택된 룸Id저장하는 useState
  const [show, setShow] = useState(false);
  //선택한 모달창 담는 useState
  const [selectedModal, setSelectedRoomModal] = useState([]);
  const [selectedPriceModal, setSelectedPriceModal] = useState([]);
  const [selectedFacModal, setSelectedFacModal] = useState({});
  //쿠키에 선택된 룸Id저장하는 useState
  const [selectRoomId, setSelectRoomId] = useState({});
  const [localID, setLocalID] = useState();
  useEffect(() => {
    setLocalID(window.localStorage.getItem('userId'));
  }, []);
  const selectNum = useCallback(
    (index, value) => {
      //selectNumber 상태를 복사하고 [index]: value추가한다.
      setSelectNumber({ ...selectNumber, [index]: value });
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
        return obj;
      }, {});
    setSelectRoom(selectedRoomTypes);
    //룸아이디
    setSelectRoomId(selectedRids);
  }, [hotels, selectNumber]);

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
    });
    setHotels(list);
  }, [row]);

  //지금예약버튼
  const onReservation = () => {
    if (totalPrice > 0) {
      if (localID == null) {
        alert('로그인을 먼저 진행해주세요.');
        return;
      }
      const roomIds = Object.keys(selectRoomId);
      const roomTypes = Object.keys(selectRoom);
      const selectedNumber = Object.values(selectRoom);
      for (let i = 0; i < roomTypes.length; i++) {
        const selecteNumber = selectedNumber[i];
        const selectRoomid = roomIds[i];
        Cookies.set('resRoomType', roomTypes); //한 꺼번에 두개를 담는게 아니라  하나씩 담는것 임
        Cookies.set('selectedRoomNumber', selecteNumber); // 인원 수 쿠키에 담음 Cookies.set("P_TITLE", row.P_TITLE);
        Cookies.set('resRoomId', selectRoomid);
      }
      Cookies.set('resPrice', totalPrice); // 총액 쿠키에 담음
      navigate('/reservate');
    } else {
      alert("객실을 선택해주세요");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    // console.log(selectedModal);
    setShow(true);
  };
  return (
    <>
      {/* 룸타입별 내용 */}
      <div className="table-wrapper" style={{width:'1200px'}}>
        <div className="table-wrapper-item1">
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
                          FAC_ROOM: hotel.FAC_ROOM,
                          FAC_LANGUAGE: hotel.FAC_LANGUAGE,
                          FAC_SECURITY: hotel.FAC_SECURITY,
                          FAC_BATHROOM: hotel.FAC_BATHROOM,
                          FAC_PARKING: hotel.FAC_PARKING,
                          FAC_BED: hotel.FAC_BED,
                          FAC_LIVING: hotel.FAC_LIVING,
                          FAC_MEDIA: hotel.FAC_MEDIA,
                          FAC_INTERNET: hotel.FAC_INTERNET,
                          FAC_SERVICE: hotel.FAC_SERVICE,
                          FAC_GENERAL: hotel.FAC_GENERAL,
                          FAC_LANGUAGE: hotel.FAC_LANGUAGE,
                          FAC_KITCHEN: hotel.FAC_KITCHEN,
                          FAC_RECEPTION: hotel.FAC_RECEPTION,
                        });
                        handleShow();
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
                          {/* <Dropdown.Item onClick={() => selectNum(index, 2)}>
                            2
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => selectNum(index, 3)}>
                            3
                          </Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title> {selectedModal}룸을 소개합니다</Modal.Title>
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
        <div className="table-wrapper-item3" style={{width:'300px'}}>
          <Charge_title style={{ textAlign:'left',fontSize: 15 }}>객실 유형 및 요금</Charge_title>
          
          <TotalPrice>
            {Object.keys(selectRoom).map((key) => (
              <div key={key} style={{textAlign:'left' ,width:150}}>
                선택한 룸타입 : <br/>
                {key} {selectRoom[key]}개
              </div>
            ))}
            <div style={{textAlign:'left',fontWeight:'bold'}}> {totalPrice}원 </div> <br />
          </TotalPrice>
          <div className="ReservateButton">
          <Button variant="outline-info" onClick={onReservation}>
            지금 바로 <br/>
            예약하세요!
          </Button>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default HotelAvailabilityRow;
