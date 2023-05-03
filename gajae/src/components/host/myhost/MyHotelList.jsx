import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { hostHotelListDB } from "../../../service/hostLogic";
import { Button, Card, ListGroup } from "react-bootstrap";
/**
 * 호스트페이지에서 등록내역 누르면 뜨는 페이지
 * 등록한 호텔을 보여주는 페이지
 * @param {*} param0
 * @returns
 */
const MyHotelList = ({ hostId }) => {
  const [myhotel, setMyHotel] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(myhotel);
  const pageNumber = [];
  const hotelsPerPage = 3;
  console.log(hostId);
  useEffect(() => {
    const host = {
      HOST_ID: hostId,
    };
    const hostHotelLsit = async () => {
      const res = await hostHotelListDB(host);
      if (res) {
        setMyHotel(res.data);
        console.log(res.data);
      }
    };

    hostHotelLsit();
  }, []);

  for (let i = 1; i <= Math.ceil(myhotel?.length / hotelsPerPage); i++) {
    pageNumber.push(i);
  }
  const indexOfLastReview = currentPage * hotelsPerPage;
  const indexOfFirstReview = indexOfLastReview - hotelsPerPage;
  const start = indexOfFirstReview;
  const end = indexOfLastReview;
  //수정화면으로 이동
  const onEdit = (hotel_id) => {
    window.location.href = `/host/update?hotel_id=${hotel_id}`;
  };

  console.log(myhotel);

  return (
    <>
      <BackDiv>
        <h3 style={{ marginLeft: "20px" }}>
          <i class="fa-solid fa-house-user fa-bounce"></i>
          &nbsp; 호텔의 정보를 관리하세요!
        </h3>
        <HotelList>
          {myhotel &&
            myhotel.slice(start, end).map((hotel, index) => (
              <HotelItem key={index}>
                <Card
                  style={{
                    margin: "1rem",
                    opacity: hotel.STATUS === "N" ? 0.5 : 1,
                  }}
                >
                  <Card.Img
                    variant="top"
                    style={{ width: "282px", height: "250px" }}
                    src={hotel.P_PHOTO}
                  />
                  <Card.Body>
                    <Card.Title style={{ width: "215px", height: "30px" }}>
                      {hotel.P_TITLE}
                    </Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      {" "}
                      <i
                        class="fa-solid fa-star"
                        style={{ marginRight: "7px" }}
                      ></i>
                      {hotel.P_STAR} 성급
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      <i
                        class="fa-solid fa-location-dot"
                        style={{ marginRight: "7px" }}
                      ></i>
                      {hotel.P_ADDRESS}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      <i
                        class="fa-solid fa-mobile-screen"
                        style={{ marginRight: "7px" }}
                      ></i>
                      {hotel.P_TEL}
                    </ListGroup.Item>
                    <ListGroup.Item> {hotel.P_HIREDATE}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Button
                      style={{ marginRight: "30px", marginLeft: "13px" }}
                      variant="warning"
                      hotel={hotel}
                      onClick={() => onEdit(hotel.P_ID)}
                    >
                      수정하기
                    </Button>{" "}
                    <Button
                      variant={hotel.STATUS === "Y" ? "secondary" : "danger"}
                      style={{ pointerEvents: "none" }}
                    >
                      {hotel.STATUS === "Y" ? "영업중" : "영업중지"}
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </HotelItem>
            ))}
        </HotelList>
        <div>
          <nav>
            <ul className="pagination justify-content-center">
              {pageNumber.map((page) => (
                <li
                  key={page}
                  className={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </BackDiv>
    </>
  );
};
export default MyHotelList;

const BackDiv = styled.div`
  display: block;
  flex-direction: column;
  width: 800px;
  height: auto;
  align-items: center;
`;

const HotelList = styled.span`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const HotelItem = styled.li`
  border-radius: 10px;
  margin-bottom: 30px;
  list-style-type: none;
`;
