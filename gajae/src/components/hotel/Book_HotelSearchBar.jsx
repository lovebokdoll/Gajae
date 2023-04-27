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
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "./Book_hotel.css";
/**
 * 1.사용자는 조건에 맞게 정보를 들고 온 상태임
 * 2.사용자가 날짜, 객실을 변경하면 그 데이터를 기준으로 객실유형영역의 화면을 랜더링한다(날짜마다 숙박요금 달라야함...사용자가 날자 변경할때마다 방 타입은 그대로 -> 요금은 바뀌어야 할듯..데이터를 어)
 * 3. 숙소테이블에 가능 불가능작성..
 *  @param {*} param0
 * @returns
 */
const HotelSearchBar = ({ selectDate, selectOptions }) => {
  //상태관리
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
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
    children: 0,
    room: 1,
  });
  // useEffect =
  //   (() => {
  //     //사용자가 서치바 조건 변경 할 때 상태변경..DB에서 받아오기
  //   },
  //   [searchOption]);
  const handleSearch = () => {};
  //검색버튼 누르면 페이지 이동
  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  //페이지로 이동하면서 상태 전달-> 리로딩되면서 상태 전달되는걸로 바꾸면 될듯

  return (
    <>
      <div className="headerSearch"  >
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
          )}
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText"
          >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
          {openOptions && (
            <div className="options">
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
        <div className="headerSearchItem">
          <button className="headerBtn" onClick={handleSearch}>
            검색변경
          </button>
        </div>
      </div>
    </>
  );
};

export default HotelSearchBar;
