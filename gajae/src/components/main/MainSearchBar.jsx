import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';
import './mainSearchBar.css';
import axios from 'axios';

const MainSearchBar = ({ type }) => {
  const navigate = useNavigate();

  //지역 입력
  const [P_ADDRESS, setP_Address] = useState('');
  console.log(P_ADDRESS)

  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);//날짜 

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });// 인원 선택창

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = (e) => {
    navigate(`/propertylist/?P_ADDRESS=${P_ADDRESS}`, { state: { P_ADDRESS, date, options } });

    e.preventDefault(); // 페이지 리로딩 방지
    axios.post('http://localhost:9999/search/list', { P_ADDRESS })
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
  <div className="headerListItem active" style={{ width: 300 }}>
    <FontAwesomeIcon icon={faBed} />
    <span>Stays</span>
  </div>
  <div className="headerListItem" style={{ width: 300 }}>
    <FontAwesomeIcon icon={faPlane} />
    <span>Flights</span>
  </div>
  <div className="headerListItem" style={{ width: 300 }}>
    <FontAwesomeIcon icon={faCar} />
    <span>Car rentals</span>
  </div>
  <div className="headerListItem" style={{ width: 300 }}>
    <FontAwesomeIcon icon={faBed} />
    <span>Attractions</span>
  </div>
  <div className="headerListItem" style={{ width: 300 }}>
    <FontAwesomeIcon icon={faTaxi} />
    <span>Airport taxis</span>
  </div>
</div>

        {type !== 'list' && (
          <>
            <div style={{fontSize:50}}>다음에 머무를 숙소를 찾아보세요</div>
            <p className="headerDesc">
            호텔부터 홈까지, 다양한 숙소가 한 곳에! 특가를 찾아보세요
            </p>
            <div className="headerSearch">
            <div className="headerSearchItem" style={{textAlign: "center"}}>
  <FontAwesomeIcon icon={faBed} className="headerIcon" />
  <input
    type="text"
    placeholder="어디로 향하시나요?"
    className="headerSearchInput"
    onChange={(e) => setP_Address(e.target.value)}
  />
</div>

              <div className="headerSearchItem" style={{ cursor: 'pointer' }}>
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
                        <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption('adult', 'd')}>
                          -
                        </button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>
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
                          onClick={() => handleOption('children', 'd')}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption('room', 'd')}>
                          -
                        </button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className="optionCounterButton" onClick={() => handleOption('room', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
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