import { faBed, faCalendarDays, faCar, faHotel, faPerson, faPlane, faSuitcaseRolling, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { addDays, format } from 'date-fns';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToastMessage } from '../../redux/toastStatus/action';
import { BButton } from '../../style/FormStyle';
import './mainSearchBar.css';
import moment from 'moment/moment';
import { Checkbox } from '@material-ui/core';

const MainSearchBar = ({ type, destination }) => {
  console.log('type ===>', type);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //쿠키 1주일 설정하는 변수
  const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  //지역 입력
  const [p_address, setP_Address] = useState('');
  console.log('destination prop value:', destination);
  useEffect(() => {
    if (destination === undefined) {
      console.log('destination is undefined, initializing to default value');
      destination = '어디로 떠나시나요?';
    }
    setP_Address(destination);
  }, [destination]);

  console.log(p_address);
  const handleInputChange = (event) => {
    const { value } = event.target;
    Cookies.set('destination', value); // set destination in a cookie
    setP_Address(value);
    console.log(p_address);
  };
  //인원수, 객실수 입력
  const [room_capacity, setRoom_Capacity] = useState({
    adult: 1,
  });

  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const handleOption = (name, operation) => {
    setRoom_Capacity((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? room_capacity[name] + 1 : room_capacity[name] - 1,
      };
    });
  };

  const handleSearch = (e) => {
    const roomCapacity = parseInt(room_capacity.adult);

    const startDate = date[0].startDate;
    const formattedStartDate = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate
      .getDate()
      .toString()
      .padStart(2, '0')}`;
    console.log('Formatted start date:', formattedStartDate);

    const endDate = date[0].endDate;

    const formattedEndDate = `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate
      .getDate()
      .toString()
      .padStart(2, '0')}`;
    console.log('Formatted end date:', formattedEndDate);

    if (p_address === '') {
      dispatch(setToastMessage('여행을 떠나실 곳을 선택해주세요.'));
      return;
    }

    Cookies.set('startDate', formattedStartDate, oneWeekFromNow);
    Cookies.set('endDate', formattedEndDate, oneWeekFromNow);
    Cookies.set('destination', p_address, { expires: new Date(Date.now() + 10 * 60 * 1000) });
    Cookies.set('resPeople', roomCapacity, oneWeekFromNow);
    navigate(
      `/propertylist/?P_ADDRESS=${p_address}&ROOM_CAPACITY=${roomCapacity}&startdate=${formattedStartDate}&enddate=${formattedEndDate}`,
      {
        state: { p_address, date, room_capacity },
      }
    );

    axios
      .post('http://localhost:9999/search/list', { P_ADDRESS: p_address, ROOM_CAPACITY: roomCapacity })
      .then((response) => {
        console.log(p_address);
        console.log(response.data);
        // 검색 결과를 처리할 코드
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="header">
      <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHotel} />
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
            <h4 className="headerTitle" style={{ textAlign: 'center', color: '#FFFFFF', marginTop: '30px' }}>
              새로운 모험, 새로운 경험, 그리고 새로운 나를 만나다
            </h4>
            <br />
            <div className="headerSearch">
              <div className="headerSearchText">
                <form onSubmit={handleSearch}>
                  <FontAwesomeIcon icon={faSuitcaseRolling} style={{ marginRight: '10px' }} className="headerIcon" />
                  <input
                    type={type}
                    onChange={handleInputChange}
                    placeholder={`어디로 떠나시나요?`}
                    className="headerSearchInput"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                      }
                    }}
                  />
                </form>
              </div>
              <div className="headerSearchDate">
                <FontAwesomeIcon icon={faCalendarDays} style={{ marginRight: '10px' }} className="headerIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                  {' '}
                  {`${moment(date[0].startDate).format('M월 D일 (ddd)')} - ${moment(date[0].endDate).format('M월 D일 (ddd)')}`}
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
              <div className="headerSearchAdult">
                <FontAwesomeIcon icon={faPerson} style={{ marginRight: '10px' }} className="headerIcon" />
                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`성인 ${room_capacity.adult}명 `}</span>
                {openOptions && (
                  <div className="options" style={{ left: '65%' }}>
                    <div className="optionItem">
                      <span className="optionText">성인</span>
                      <div className="optionCounter">
                        <button
                          disabled={room_capacity.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption('adult', 'd')}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{room_capacity.adult}</span>
                        <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="SearchBtn">
                <BButton className="headerBtn" style={{ backgroundColor: '#0077C0', width: '50px' }} type="button" onClick={handleSearch}>
                  검색
                </BButton>
              </div>{' '}
            </div>{' '}
          </>
        )}
      </div>
    </div>
  );
};

export default MainSearchBar;
