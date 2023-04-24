import { faBed, faCalendarDays, faCar, faHotel, faPerson, faPlane, faSuitcaseRolling, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';
import { BButton } from '../../style/FormStyle';
import './mainSearchBar.css';
import { Button, Modal } from 'react-bootstrap';

const MainSearchBar = ({ type }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //유효성 검사
  const [addressError, setAddressError] = useState(false);

  //지역 입력
  const [P_ADDRESS, setP_Address] = useState('');
  console.log(P_ADDRESS);
  //인원수, 객실수 입력
  const [ROOM_CAPACITY, setRoom_Capacity] = useState({
    adult: 1,
  });

  console.log(ROOM_CAPACITY);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]); //날짜

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
    const roomCapacity = parseInt(ROOM_CAPACITY.adult);
    if (!P_ADDRESS) {
      handleShow(); // 모달 창을 엽니다.
      return;
    }
    navigate(`/propertylist/?P_ADDRESS=${P_ADDRESS}&ROOM_CAPACITY=${roomCapacity}&DATE=${date}`, { state: { P_ADDRESS, date, ROOM_CAPACITY } });

    axios
      .post('http://localhost:9999/search/list', { P_ADDRESS, ROOM_CAPACITY: roomCapacity })
      .then((response) => {
        console.log(P_ADDRESS);
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
                    placeholder="어디로 떠나시나요?"
                    className="headerSearchInput"
                    onChange={(e) => setP_Address(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !P_ADDRESS) {
                        e.preventDefault();
                        handleShow();
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
                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${ROOM_CAPACITY.adult} adult`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={ROOM_CAPACITY.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption('adult', 'd')}
                        >
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
              <BButton
                className="headerBtn"
                style={{ backgroundColor: '#0077C0', width: '50px' }}
                type="button"  // 버튼의 타입을 변경합니다
                onClick={handleSearch}
              >
                검색
              </BButton>

              <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                  지역을 입력해주세요.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    닫기
                  </Button>
                </Modal.Footer>
              </Modal>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainSearchBar;
