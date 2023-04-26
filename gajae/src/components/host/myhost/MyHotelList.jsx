import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { hostHotelListDB, hotelDeleteDB } from "../../../service/hostLogic";
import HotelListDropdown from "./HotelListDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * 호스트페이지에서 등록내역 누르면 뜨는 페이지
 * 등록한 호텔을 보여주는 페이지
 * @param {*} param0
 * @returns
 */
const MyHotelList = ({ hostId }) => {
  const [myhotel, setMyHotel] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];
  const hotelsPerPage = 4;
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
        <h3 style={{ fontWeight: "bold", marginLeft: "20px" }}>
          <i class="fa-solid fa-house"></i>
          &nbsp; MY HOTEL
        </h3>
        <TLineDiv></TLineDiv>
        <EmtyDiv></EmtyDiv>
        <ReviewList>
          {myhotel.slice(start, end).map((hotel, index) => (
            <ReviewItem key={index}>
              {/* 수정 삭제 버튼이 있는 컴포넌트 */}
              <BtnWrapper>
                <HotelListDropdown hotel={hotel} onEdit={onEdit} />
              </BtnWrapper>
              <ReviewWrapper>
                <ImageContainer>
                  <ImageWrapper>
                    <img
                      src={hotel.P_PHOTO}
                      style={{ borderRadius: "30%", scale: "120%" }}
                      alt="placeholder image"
                    />
                  </ImageWrapper>
                  <ImageDescription>
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-house" />
                      &nbsp;&nbsp;
                      {hotel.P_ADDRESS}
                    </p>
                    <p>
                      <FontAwesomeIcon icon="fa-solid fa-phone-volume" />
                      &nbsp;&nbsp;
                      {hotel.P_TEL}
                    </p>
                    <p>
                      <FontAwesomeIcon icon="fa-regular fa-calendar-check" />
                      &nbsp;&nbsp;
                      {hotel.P_HIREDATE}
                    </p>
                  </ImageDescription>
                </ImageContainer>
                <ContentWrapper>
                  <TextWrapper>
                    <ReviewTitle> {hotel.P_TITLE}</ReviewTitle>
                    <RText>
                      <FontAwesomeIcon icon="fa-solid fa-star" />
                      &nbsp;&nbsp; {hotel.P_STAR}
                    </RText>
                    <CardTimestamp> {hotel.P_OVERVIEW}</CardTimestamp>
                  </TextWrapper>
                </ContentWrapper>
              </ReviewWrapper>
            </ReviewItem>
          ))}
        </ReviewList>
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
  min-height: 900px;
  max-height: 1000px;
  align-items: center;
  //font-family: "KOTRA_GOTHIC";
`;

const ReviewList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ReviewItem = styled.li`
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin-bottom: 30px;
  list-style-type: none;
`;
const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 800px;
  height: 300px;
  position: relative;
  margin: 50px 0 50px 15px;
`;
const ImageContainer = styled.div`
  display: flex;
  margin-left: 80px;
  flex-direction: column;
  flex-basis: 33.333333%;
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
  flex: 0 0 33.333333%;
  img {
    width: 200px;
    height: 200px;
  }
`;
const ImageDescription = styled.div`
  flex: 0 0 33.333333%;
  width: 100%;
  padding: 0.5rem; /* 기존 코드: 1rem */
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const ContentWrapper = styled.div`
  flex: 0 0 50.666667%;
  margin-left: 70px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const ReviewTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
`;

const RText = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`;

const CardTimestamp = styled.p`
  font-size: 1rem;
  bottom: 0;
  margin-top: auto;
`;

const ColorDiv = styled.div`
  background-color: lightgray;
  height: 1px;
  with: 100%;
`;

const BtnWrapper = styled.div`
  float: right;
  background-color: white;
`;

const TLineDiv = styled.div`
  background-color: #1e3050;
  height: 1px;
  margin: 3%;
  with: 100%;
`;

const EmtyDiv = styled.div`
  height: 10px;
`;
