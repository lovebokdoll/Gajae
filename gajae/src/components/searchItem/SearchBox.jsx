import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../main/mainSearchBar.css';
import { faCalendarCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const navigate = useNavigate();

  //쿠키에 저장되어있는 지역이름
  const ADDRESS = Cookies.get('p_address');
  const CHECKIN = Cookies.get('startDate');
  const CHECKOUT = Cookies.get('endDate');
  const PEOPLE = Cookies.get('resPeople');
  console.log(CHECKOUT)

  //지역 입력
  const [P_ADDRESS, setP_Address] = useState('');
  console.log(P_ADDRESS);

  const [startDate, setStartDate] = useState('');
  console.log(P_ADDRESS);
  const [endDate, setEndDate] = useState('');
  console.log(P_ADDRESS);

  const [openOptions, setOpenOptions] = useState(false);

  //인원수, 객실수 입력
  const [ROOM_CAPACITY, setRoom_Capacity] = useState({
    adult: 1,
  });
  console.log(ROOM_CAPACITY);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);


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
    navigate(
      `/propertylist/?P_ADDRESS=${P_ADDRESS}&ROOM_CAPACITY=${roomCapacity}&startdate=${startDate}&enddate=${endDate}`,
      {
        state: { P_ADDRESS, date, roomCapacity },
      }
    );
    e.preventDefault();
    axios
      .post('http://localhost:9999/search/list', { P_ADDRESS, ROOM_CAPACITY: roomCapacity, startDate, endDate  }) // 변환된 ROOM_CAPACITY를 전달
      .then((response) => {
        console.log(P_ADDRESS);
        console.log(response.data);
        // 검색 결과를 처리할 코드
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        // 에러 처리 코드
      });
  };

  return (
    <>
      <div
        id="leftbox"
        style={{ backgroundColor: '#FFFFFF', marginTop: '10px', padding: '20px 10px', width: '200px' }}
      >
        <div style={{ marginTop: '10px' }}>
        <FontAwesomeIcon icon={faLocationDot} style={{marginRight: '10px', color: "#0058ab"}} />
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'KOTRA_GOTHIC', color: '#333'}}>
            지역 이름
          </label>
          <br />
          <input
            className="addressbox"
            style={{ paddingLeft: '15px', fontSize: '15px', width: '180px'}}
            defaultValue={ADDRESS}
            onChange={(e) => setP_Address(e.target.value)}
            type="text"
          />

        </div>

        <div style={{ marginTop: '10px'}}>
        <FontAwesomeIcon icon={faCalendarCheck} style={{marginRight: '10px'}}/>
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'KOTRA_GOTHIC', color: '#333' }}>체크인 날짜</label>
          <br />
          <input className="databox" style={{width: '180px'}} type="date" defaultValue={CHECKIN}  onChange={(e) => setStartDate(e.target.value)}/>
        </div>
        <div style={{ marginTop: '10px' }}>
        <FontAwesomeIcon icon={faCalendarCheck} style={{marginRight: '10px'}}/>
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'KOTRA_GOTHIC', color: '#333' }}>체크아웃 날짜</label>
          <br />
          <input className="databox" style={{width: '180px'}} type="date" defaultValue={CHECKOUT} onChange={(e) => setEndDate(e.target.value)}/>
        </div>
        <div className="headerSearchItem">
        <FontAwesomeIcon icon="fa-solid fa-user" style={{color: "gray"}}/>
          <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText" > {PEOPLE} 명</span>
          {openOptions && (
                  <div className="optionsBar" style={{marginLeft:'50px'}}>
                  <div className="optionItem">
                    <span className="optionText">인원</span>
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

        <button
          onClick={handleSearch}
          style={{
            cursor: 'pointer',
            width: '100%',
            height: '40px',
            marginTop: '20px',
            border: '0px',
            backgroundColor: '#0058ab',
            padding: '8px',
            color: 'white',
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBox;
