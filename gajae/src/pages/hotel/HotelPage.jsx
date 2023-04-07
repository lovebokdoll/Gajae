import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import HeaderNav1 from "../../components/header/HeaderNav1";
import HeaderNav2 from "../../components/header/HeaderNav2";
import HotelAvailability from "../../components/hotel/HotelAvailability";
import HotelFacilities from "../../components/hotel/HotelFacilities";
import HotelInformation from "../../components/hotel/HotelInformation";
import HotelPolicies from "../../components/hotel/HotelPolicies";
import HotelReview from "../../components/hotel/HotelReview";
import { hotelListDB } from "../../service/hotelReservLogic";

/**
 *룸타입을 빼고 나머지 정보 가져오기
 *       {property.map((row, index) => (
 *         <HotelAvailabilitykey={index} row={row} />
 *      ))}
 * @returns 예약 가능 옵션보기 페이지
 */
const HotelPage = () => {
  //스크롤기능구현 배열 ref생성
  const availabilityRef = useRef(null);
  const reviewRef = useRef(null);
  const facilitiesRef = useRef(null);
  const policiesRef = useRef(null);

  const onMoveToAvailability = () => {
    availabilityRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onMoveToReview = () => {
    reviewRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const onMoveToFacilities = () => {
    facilitiesRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const onMoveToPolicies = () => {
    policiesRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  //호텔정보 담기
  const [property, setProperty] = useState([{}]);

  useEffect(() => {
    const getHotelList = async () => {
      const hotel = {
        P_ID: 1000,
      };
      const response = await hotelListDB(hotel);
      setProperty(response.data);
      console.log(response.data);
    };
    getHotelList();
  }, []);
  console.log(property);

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <Button variant="outline-success" onClick={onMoveToAvailability}>
        옵션정보
      </Button>{" "}
      <Button variant="outline-success" onClick={onMoveToFacilities}>
        시설
      </Button>{" "}
      <Button variant="outline-success" onClick={onMoveToPolicies}>
        정책
      </Button>{" "}
      <Button variant="outline-info" onClick={onMoveToReview}>
        고객후기를 확인하세요!
      </Button>{" "}
      <HotelInformation row={property[0]} />
      {/* 이동할 컴포넌트에 ref로 넘겨준다 */}
      <div ref={availabilityRef}>
        <HotelAvailability property={property} />
      </div>
      <div ref={reviewRef}>
        <HotelReview />
      </div>
      <div ref={facilitiesRef}>
        <HotelFacilities row={property[0]} />
      </div>
      <div ref={policiesRef}>
        <HotelPolicies row={property[0]} />
      </div>
      <Footer />
    </>
  );
};

export default HotelPage;
