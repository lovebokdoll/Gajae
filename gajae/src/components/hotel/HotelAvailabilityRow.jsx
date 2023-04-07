import { useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";
/**
 * 받아서 보여주기
 */

const HotelAvailabilityRow = ({ roomType }) => {
  console.log(roomType);
  const [selectNumber, setSelectNumber] = useState(0);
  // const selectNum = () => {
  //   setSelectNumber(1);
  // };
  const onReservation = () => {
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
              </tr>
            </thead>
            <tbody>
              {roomType.map((item, index) => (
                <tr key={index}>
                  <td>{item.ROOM_TYPE}</td>
                  <td>{item.ROOM_CAPACITY}명</td>
                  <td>{item.ROOM_PRICE}원</td>
                  <td>
                    {item.ROOM_OPTION.split(",").map((option, index) => (
                      <div key={index}>{option}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 금액선택 토글 */}
        <div className="table-wrapper-item2">
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              {selectNumber}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>2</Dropdown.Item>
              <Dropdown.Item>3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* 예약버튼 */}
        <div className="table-wrapper-item3">
          <Button variant="outline-info" onClick={onReservation}>
            지금 예약하세요!
          </Button>
          <div>단 2분이면 예약 완료!</div>
          <div>예약수수료, 신용카드 수수료 없음!</div>
        </div>
      </div>
    </>
  );
};

export default HotelAvailabilityRow;
