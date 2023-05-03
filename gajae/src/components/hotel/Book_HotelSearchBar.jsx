import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays, format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "./Book_hotel.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import moment from "moment/moment";
/**
 * 1.사용자는 조건에 맞게 정보를 들고 온 상태임
 * 2.사용자가 날짜, 객실을 변경하면 그 데이터를 기준으로 객실유형영역의 화면을 랜더링한다(날짜마다 숙박요금 달라야함...사용자가 날자 변경할때마다 방 타입은 그대로 -> 요금은 바뀌어야 할듯..데이터를 어)
 * 3. 숙소테이블에 가능 불가능작성..
 *  @param {*} param0
 * @returns
 */
const HotelSearchBar = ({ selectDate, selectOptions }) => {
  //쿠키 1주일 설정하는 변수
  const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const navigate = useNavigate();
  //상태관리
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  useEffect(() => {
    const cookieStartDate = Cookies.get("startDate"); // 쿠키에서 시작일 값 가져오기
    const cookieEndDate = Cookies.get("endDate"); // 쿠키에서 종료일 값 가져오기
    // 시작일과 종료일이 모두 있는 경우에만 state 값을 변경합니다.
    if (cookieStartDate && cookieEndDate) {
      setDate([
        {
          startDate: new Date(cookieStartDate),
          endDate: new Date(cookieEndDate),
          key: "selection",
        },
      ]);
    }
  }, []);
  console.log(date);
  //서치바 상태 담음 => props넘겨받기 사용자가 조건 변경할 때
  const [searchOption, setSearchOption] = useState([
    {
      selectDate: selectDate, // 초기값은 사용자가 선택해서 넘겨받은 값
      selectOptions: selectOptions, // 초기값은 사용자가 선택해서 넘겨받은 값
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  //인원수 선택하기 위한 option상태 사용
  const [options, setOptions] = useState({
    adult: 1,
  });
  const handleSearch = () => {
    const startDate = date[0].startDate;
    const formattedStartDate = `${startDate.getFullYear()}-${(
      startDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${startDate.getDate().toString().padStart(2, "0")}`;
    console.log("Formatted start date:", formattedStartDate);
    const endDate = date[0].endDate;
    const formattedEndDate = `${endDate.getFullYear()}-${(
      endDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${endDate.getDate().toString().padStart(2, "0")}`;
    console.log("Formatted end date:", formattedEndDate);
    Cookies.set("startDate", formattedStartDate, oneWeekFromNow);
    Cookies.set("endDate", formattedEndDate, oneWeekFromNow);
  };
  //검색버튼 누르면 페이지 이동
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <>
      <div className="hotelHeaderSearch">
        <div className="hotelHeaderSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText"
          >
            {" "}
            &nbsp;
            {`${moment(date[0].startDate).format("M월 D일 (ddd)")} - ${moment(
              date[0].endDate
            ).format("M월 D일 (ddd)")}`}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => {
                console.log(item.selection);
                setDate([item.selection]);
              }}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()} // set minDate to today's date
            />
          )}
        </div>
        <div className="hotelHeaderSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="hotelheaderSearchText"
          >{`${options.adult} adult`}</span>
          {openOptions && (
            <div className="hotelOptions">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hotelHeaderSearchItem">
          <button className="headerBtn" onClick={handleSearch}>
            검색변경
          </button>
        </div>
      </div>
    </>
  );
};
export default HotelSearchBar;
