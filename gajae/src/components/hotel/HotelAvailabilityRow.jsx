import { useCallback } from "react";
import { useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Charge_title, TotalPrice } from "../../style/HotelStyle";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
/**
 * HotelPage에서 넘어온 정보를 이용하여 갯수만큼 화면에 뿌려준다.
 *
 * 옵션정보&요금 - 숙소정보
 */

const HotelAvailabilityRow = ({ row }) => {
  const navigate = useNavigate();
  console.log(row); // 배열객체로 받아오기
  const [hotels, setHotels] = useState([]);
  //객실선택갯수를 담는 useState선언
  const [selectNumber, setSelectNumber] = useState([]);
  //객실숫자 * 요금값을 담는 useState
  //[selectNumber]값이 변경될때만 함수 재생성
  const [totalPrice, setTotalPrice] = useState(0);
  //쿠키에 선택된 룸타입, 갯수저장하는 useState
  const [selectRoom, setSelectRoom] = useState({});
  //모달창 상태를 담는 변수
  const [show, setShow] = useState(false);
  //선택한 모달창 담는 useState
  const [selectedModal, setSelectedRoomModal] = useState([]);
  const [selectedPriceModal, setSelectedPriceModal] = useState([]);
  const [selectedFacModal, setSelectedFacModal] = useState({});

  const selectNum = useCallback(
    (index, value) => {
      //selectNumber 상태를 복사하고 [index]: value추가한다.
      setSelectNumber({ ...selectNumber, [index]: value });
    },
    [selectNumber]
  );
  //사용자가 선택한 룸타입 금액 저장
  /**
   * 사용자가 선택한 룸타입은 setSelectNumber 배열에 저장되어 있다.
   * setSelectNumber배열의 인덱스는 hotel배열의 요소와 매칭된다.
   * selectNumber[0]은 hotels[0]에 해당하는 룸타입의 선택갯수 나타낸다
   * 사영자가 선택한 룸타입 구분하려면 selectNumber 배열 참조하면 된다.
   */
  useEffect(() => {
    let totalPrice = 0;
    //쿠키에 객체로 담아준다.
    const selectedRooms = {};
    for (let i = 0; i < hotels.length; i++) {
      const num = selectNumber[i] || 0;
      totalPrice += num * hotels[i].ROOM_PRICE;
      selectedRooms[hotels[i].ROOM_TYPE] = num;
    }
    setTotalPrice(totalPrice);
    const temp = JSON.stringify(selectedRooms);
    console.log(temp);
    const rooms = JSON.parse(temp);
    console.log(rooms);
    /**
     *  Object.keys(rooms) 모든 키값을 배열로 반환한다.
     * 그리고 filter한수를 사용하여 배열을 필터링한다.
     * rooms[room] 여기서 room은 각 배열 요소의 값을 의미한다.
     * room매개변수는 rooms객체의 키값을 비교하면서 값이 0이 아닌것만 남겨준다.
     */
    //선택된 객실만 보여주는 새로운 키-값 배열 생성
    const selectedRoomTypes = Object.keys(rooms)
      .filter((room) => rooms[room] !== 0)
      .reduce((obj, key) => {
        obj[key] = rooms[key];
        return obj;
      }, {});
    console.log(selectedRoomTypes);
    setSelectRoom(selectedRoomTypes);
  }, [hotels, selectNumber]);

  /**
     * 이 경우에 배열의 길이가 다르기때문에 undefined가 되어 오류가 발생한다.
     * 따라서 길이가 긴 배열을 기준으로 for문 돌려야댐
      * for (let i = 0; i < selectNumber.length; i++) {
      *  for (let j = 0; j < hotels.length; j++) {
      *      totalPrice += selectNumber[i] * hotels[j].ROOM_PRICE;
      *      console.log(totalPrice);
      *    }
      }
    */

  useEffect(() => {
    // HotelAvailabilityRow에 넘겨줄 정보 list에 담기
    // 빈배열 생성
    const list = [];
    row.forEach((item) => {
      const obj = {
        ROOM_TYPE: item.ROOM_TYPE,
        ROOM_PRICE: item.ROOM_PRICE,
        ROOM_CAPACITY: item.ROOM_CAPACITY,
        ROOM_OPTION: item.ROOM_OPTION,
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
  }, [row, selectedFacModal]);

  //지금예약버튼
  const onReservation = () => {
    if (totalPrice > 0) {
      for (let i = 0; i < selectRoom.length; i++) {
        //쿠키를 언제 지울건지 알아야 함
        const roomtype = roomTypes[i];
        //Cookies.remove(roomtype);
      }
      Cookies.remove(); //기존 쿠키값 왜 삭제 안됨???????
      const roomTypes = Object.keys(selectRoom);
      const selectedNumber = Object.values(selectRoom);
      for (let i = 0; i < roomTypes.length; i++) {
        const roomtype = roomTypes[i];
        const selecteNumber = selectedNumber[i];
        //Cookies.set(roomtype, selecteNumber);//한 꺼번에 두개를 담는게 아니라  하나씩 담는것 임

        Cookies.set("roomtype", roomtype); //쿠키에 담음
        Cookies.set("selectedNumber", selecteNumber); // 인원 수 쿠키에 담음
      }
      Cookies.set("totalPrice", totalPrice); // 총액 쿠키에 담음
      navigate("/reservate");
      console.log(totalPrice);
    } else {
      alert("객실을 선택해주세요");
    }
    console.log("지금예약버튼 클릭 -> 결제확인페이지로 이동");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    // console.log(selectedModal);
    setShow(true);
  };
  return (
    <>
      {/* 룸타입별 내용 */}
      <div className="table-wrapper">
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
                          <Dropdown.Item onClick={() => selectNum(index, 2)}>
                            2
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => selectNum(index, 3)}>
                            3
                          </Dropdown.Item>
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
        <div className="table-wrapper-item3">
          <Charge_title>객실요금</Charge_title>
          <br />
          <TotalPrice>{totalPrice}원</TotalPrice>
          <Button variant="outline-info" onClick={onReservation}>
            지금바로 예약하세요!
          </Button>
          <div>단 2분이면 예약 완료!</div>
          <div>예약수수료, 신용카드 수수료 없음!</div>
        </div>
      </div>
    </>
  );
};

export default HotelAvailabilityRow;
