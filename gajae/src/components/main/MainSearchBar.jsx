import { faBed, faCalendarDays, faCar, faHotel, faPerson, faPlane, faSuitcaseRolling, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { format } from 'date-fns';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToastMessage } from '../../redux/toastStatus/action';
import { BButton } from '../../style/FormStyle';
import './mainSearchBar.css';

const MainSearchBar = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //쿠키 1주일 설정하는 변수
  const oneWeekFromNow = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  //사용자가 선택했던 목적지(쿠키)
  const [destination, setDestination] = useState(Cookies.get('destination') || '');
  //지역 입력
  const [p_address, setP_Address] = useState('');
  //인원수, 객실수 입력
  const [room_capacity, setRoom_Capacity] = useState({
    adult: 1,
  });

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
        // 에러 처리 코드
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
                    type="text"
                    placeholder={`어디로 떠나시나요?`}
                    className="headerSearchInput"
                    onChange={(e) => setP_Address(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !p_address) {
                        e.preventDefault();
                      }
                    }}
                  />
                </form>
              </div>
              <div className="headerSearchDate">
                <FontAwesomeIcon icon={faCalendarDays} style={{ marginRight: '10px' }} className="headerIcon" />
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
                <FontAwesomeIcon icon={faPerson} style={{ marginRight: '10px' }} className="headerIcon" />
                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${room_capacity.adult} adult`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
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
                <BButton className="headerBtn" style={{ backgroundColor: '#0077C0', width: '50px' }} type="submit" onClick={handleSearch}>
                  검색
                </BButton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainSearchBar;
