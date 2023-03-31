import React, { useRef} from "react";
import "./hotelAvailability.css";
import { BButton } from "../../style/FormStyle";
import HotelFacilities from "./HotelFacilities";
import {useNavigate } from "react-router-dom";
import HotelPolicies from "./HotelPolicies";

const HotelAvailability = ({ hotel }) => {
  const hotelFacilities = useRef();
  const hotelPolicies = useRef();

  //hotelFacilities로 이동
  const onMoveToFacilites = () => {
    console.log("눌렸디");
    hotelFacilities.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  //hotelPolicies로 이동
  const onMoveToPolicies = () => {
    console.log("눌렸디");
    hotelPolicies.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  //고객후기페이지로 이동
  const reviewBoradPage = () => {
    navigate("/review");
  };
  //const [menuID, setMenuID] = useState(0);
  const navigate = useNavigate();
  const reserve = () => {
    console.log("지금예약버튼");
    //navigate("/");
  };
  return (
    <>
      <BButton onClick={onMoveToFacilites}>옵션정보&요금</BButton>
      <BButton onClick={onMoveToPolicies}>시설</BButton>
      <BButton onClick={onMoveToPolicies}>하우스룰</BButton>
      <BButton onClick={reviewBoradPage}>고객후기</BButton>
      <div className="hotel_title">{hotel.p_title}</div>
      <BButton onClick={reserve}>지금예약</BButton>

      <div className="contents" ref={hotelFacilities}></div>
      <HotelFacilities />
      {/*각각의 컴포넌트에 useRef로  DOM 에 접근하자*/}

      <div className="contents" ref={hotelPolicies}>
        여기로 오셈!!!!!!!!!!!!!!!!!
      </div>
      <HotelPolicies />
    </>
  );
};

export default HotelAvailability;
