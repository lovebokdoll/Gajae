import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';
import './mainSearchBar.css';
import axios from 'axios';

const MainSearchBar = ({ type }) => {
  const navigate = useNavigate();

  //유효성 검사
  const [addressError, setAddressError] = useState(false);

  //지역 입력
  const [P_ADDRESS, setP_Address] = useState('');
  console.log(P_ADDRESS)
  //인원수, 객실수 입력
  const [ROOM_CAPACITY, setRoom_Capacity] = useState({
    adult: 1,
  });
  console.log(ROOM_CAPACITY)
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const handleOption = (name, operation) => {
    setRoom_Capacity((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? ROOM_CAPACITY[name] + 1 : ROOM_CAPACITY[name] - 1,
      };
    });
  };


  const handleSearch = (e) => {
    const roomCapacity = parseInt(ROOM_CAPACITY.adult); // ROOM_CAPACITY를 숫자형태로 변환
    navigate(`/propertylist/?P_ADDRESS=${P_ADDRESS}&ROOM_CAPACITY=${roomCapacity}`, { state: { P_ADDRESS, date, ROOM_CAPACITY } });
    e.preventDefault();
    axios.post('http://localhost:9999/search/list', { P_ADDRESS, ROOM_CAPACITY: roomCapacity }) // 변환된 ROOM_CAPACITY를 전달
      .then(response => {
        console.log(P_ADDRESS)
        console.log(response.data);
        // 검색 결과를 처리할 코드
      })
      .catch(error => {
        console.error(error);
        // 에러 처리 코드
      });
  };

  return (
    <div className="header">
    <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
      <div className="headerList">
        <div className="headerListItem active">
          <FontAwesomeIcon icon={faBed} />
          <span>숙소</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>항공권</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>렌트카</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          <span>투어</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>택시</span>
        </div>
      </div>
      {type !== 'list' && (
        <>
          <h1 className="headerTitle" style={{textAlign:"center"}}>새로운 모험, 새로운 나를 만나다.</h1>
            <p className="headerDesc">
            여행을 계획하는 순간부터, 이미 여행은 시작된 것입니다
            </p>
          <div className="headerSearch">
            <div className="headerSearchText">
              <form onSubmit={handleSearch}>
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
              type="text"
              placeholder="어디로 떠나시나요?"
              className="headerSearchInput"
              onChange={(e) => setP_Address(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !P_ADDRESS) {
                  e.preventDefault();
                  alert("지역을 입력해주세요");
                }
              }}
            />
            </form>
            </div>
            <div className="headerSearchDate">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
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
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="headerSearchAdult">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${ROOM_CAPACITY.adult} adult`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button disabled={ROOM_CAPACITY.adult <= 1} className="optionCounterButton" onClick={() => handleOption('adult', 'd')}>
                        -
                      </button>
                      <span className="optionCounterNumber">{ROOM_CAPACITY.adult}</span>
                      <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="SearchBtn">
              <button className="headerBtn" type="submit" disabled={!P_ADDRESS} onClick={handleSearch}>
                검색
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);
};

export default MainSearchBar;