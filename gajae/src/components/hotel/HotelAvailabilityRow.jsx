import { useCallback } from "react";
import { useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Charge_title, TotalPrice } from "../../style/HotelStyle";
import { useNavigate } from "react-router-dom";
/**
 * HotelPage에서 넘어온 정보를 이용하여 갯수만큼 화면에 뿌려준다.
 *
 * 옵션정보&요금 - 숙소정보
 */

const HotelAvailabilityRow = ({ row }) => {
  const navigate = useNavigate();
  console.log(row); // 배열객체로 받아오기
  const [hotels, setHotels] = useState([]);
  //객실선택을 담는 useState선언
  const [selectNumber, setSelectNumber] = useState([]);
  //객실숫자 * 요금
  //[selectNumber]값이 변경될때만 함수 재생성
  const [totalPrice, setTotalPrice] = useState(0);
  const selectNum = useCallback(
    (index, value) => {
      //selectNumber 상태를 복사하고 [index]: value추가한다.
      setSelectNumber({ ...selectNumber, [index]: value });
    },
    [selectNumber]
  );
  useEffect(() => {
    let totalPrice = 0;
    for (let i = 0; i < hotels.length; i++) {
      const num = selectNumber[i] || 0;
      totalPrice += num * hotels[i].ROOM_PRICE;
    }
    setTotalPrice(totalPrice);
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
    console.log(row);
    // HotelAvailabilityRow에 넘겨줄 정보 list에 담기
    // 빈배열 생성
    const list = [];
    row.forEach((item) => {
      const obj = {
        ROOM_TYPE: item.ROOM_TYPE,
        ROOM_PRICE: item.ROOM_PRICE,
        ROOM_CAPACITY: item.ROOM_CAPACITY,
        ROOM_OPTION: item.ROOM_OPTION,
      };
      list.push(obj);
    });
    console.log(list);
    setHotels(list);
  }, [row]);
  const onReservation = () => {
    if (totalPrice > 0) {
      //navigate("/reservate");
      alert("결제페이지로 이동");
      console.log(totalPrice);
    } else {
      alert("객실을 선택해주세요");
    }
    console.log("지금예약버튼 클릭 -> 결제확인페이지로 이동");
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
                    <Link to={"/hoteldatail"}>{hotel.ROOM_TYPE}</Link>
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
