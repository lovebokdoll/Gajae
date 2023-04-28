import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  hostHotelListDB,
  hotelDeleteDB,
} from "../../../service/hostLogic";
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
  const hotelsPerPage = 2;
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
  //삭제처리
  const onDelete = async (P_ID) => {
    try {
      const deleteHotel = {
        P_ID: P_ID,
      };
      const res = await hotelDeleteDB(deleteHotel);
      const updatedHotels = myhotel.filter(
        (hotel) => hotel.HOTEL_NUMBER !== P_ID
      );
      setMyHotel(updatedHotels);
    } catch (error) {}
  };

  return (
    <>
      <BackDiv>
      <h3 style={{ fontWeight: "bold" }}>
          <FontAwesomeIcon
            icon="fa-solid fa-pen-to-square"
            style={{ color: "#1e3050" }}
          />
          &nbsp; 내 호텔
        </h3>
        <ReviewList>
          {myhotel.map((hotel, index) => (
            <li key={index}>
              <hr />
              <ReviewWrapper>
                <ImageContainer>
                  <ImageWrapper>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="placeholder image"
                    />
                  </ImageWrapper>
                  <ImageDescription>호텔정보</ImageDescription>
                </ImageContainer>
                <ContentWrapper>
                  <ReviewTitle>{hotel.P_TITLE}</ReviewTitle>
                  <RText>{hotel.P_ADDRESS}</RText>
                  <CardTimestamp>{hotel.P_HIREDATE}</CardTimestamp>
                  <ButtonContainer>
                    <ButtonWrapper>
                      <HotelListDropdown
                        hotel={hotel}
                        onEdit={onEdit}
                        onDelete={onDelete}
                      />
                    </ButtonWrapper>
                  </ButtonContainer>
                </ContentWrapper>
              </ReviewWrapper>
            </li>
          ))}
        </ReviewList>
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
      </BackDiv>
    </>
  );
};
export default MyHotelList;

const BackDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  max-width: 1200px;
  align-items: center;
`;

const ReviewList = styled.ul`
  margin: 0px;
  padding: 0;
  list-style-type: none;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 900px;
  height: 150px;
  position: relative;
  margin: 50px 0 50px 0;
`;

const ImageWrapper = styled.div`
  flex: 0 0 33.333333%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  flex: 0 0 66.666667%;
  padding: 1rem;
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
  font-size: 0.875rem;
  color: gray;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 2px; /* 버튼과 콘텐츠 사이의 간격을 띄우기 위해 추가 */
`;

const ImageDescription = styled.div`
  flex: 0 0 33.333333%;
  width: 100%;
  padding: 0.5rem; /* 기존 코드: 1rem */
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33.333333%;
`;

const DropLink = styled(Link);
