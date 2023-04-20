import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

/**
 * 해당 컴포넌트로 이동
 * @returns
 */
const DETAIL_NAV = [
  { index: 0, name: "옵션정보&요금" },
  { index: 1, name: "시설" },
  { index: 2, name: "정책" },
];
const ScrollToComponent = ({ scrollRef }) => {
  //스크롤 구현
  const [scrollIndex, setScrollIndex] = useState(null);
  const navRef = useRef([]); // 이동할 각각의 컴포넌트에 대응하는 목차버튼을 저장할 ref배열
  const navigate = useNavigate();

  useEffect(() => {
    scrollRef.current[scrollIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setScrollIndex(null);
  }, [scrollRef, scrollIndex]);

  // //hotelAvailability 이동
  // const onMoveToAvailability = () => {
  //   console.log("눌렸디");
  //   hotelAvailability.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };
  // //hotelFacilities로 이동
  // const onMoveToFacilites = () => {
  //   console.log("눌렸디");
  //   hotelFacilities.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };
  // //hotelPolicies로 이동
  // const onMoveToPolicies = () => {
  //   console.log("눌렸디");
  //   hotelPolicies.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };
  //고객후기페이지로 이동
  const reviewBoradPage = () => {
    navigate("/review");
  };
  return (
    <>
      <nav>
        {DETAIL_NAV.map(({ idx, name }) => (
          <div
            key={idx}
            ref={(ref) => (navRef.current[idx] = ref)}
            onClick={() => {
              setScrollIndex(idx);
            }}
          >
            {name}
          </div>
        ))}
      </nav>
      {/* <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={onMoveToAvailability}
        >
          옵션정보&요금
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={onMoveToFacilites}
        >
          시설
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={onMoveToPolicies}
        >
          하우스룰
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={reviewBoradPage}
        >
          고객후기
        </button>
      </div> */}
    </>
  );
};
export default ScrollToComponent;
