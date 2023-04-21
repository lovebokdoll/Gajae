import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../main/mainSearchBar.css';
import { faBed } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const navigate = useNavigate();

  //쿠키에 저장되어있는 지역이름
  const ADDRESS = Cookies.get('P_ADDRESS');

  //지역 입력
  const [P_ADDRESS, setP_Address] = useState('');
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
  const handleSearh = (e) => {
    const roomCapacity = parseInt(ROOM_CAPACITY.adult); // ROOM_CAPACITY를 숫자형태로 변환
    navigate(`/propertylist/?P_ADDRESS=${P_ADDRESS}&ROOM_CAPACITY=${roomCapacity}`, { state: { P_ADDRESS, date, ROOM_CAPACITY } });

    e.preventDefault();
    axios
      .post('http://localhost:9999/search/list', { P_ADDRESS, ROOM_CAPACITY: roomCapacity }) // 변환된 ROOM_CAPACITY를 전달
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
        style={{ backgroundColor: '#FFFFFF', border: 'px solid #000000', marginTop: '10px', padding: '20px 10px', width: '200px' }}
      >
        <div style={{ marginTop: '10px' }}>
        <FontAwesomeIcon icon={faBed} />
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>
            여행지/숙소 이름
          </label>
          <br />
          <input
            className="addressbox"
            style={{ paddingLeft: '15px', fontSize: '15px' }}
            defaultValue={ADDRESS}
            onChange={(e) => setP_Address(e.target.value)}
            type="text"
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>체크인 날짜</label>
          <br />
          <input className="databox" type="date" name="" id="" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>체크아웃 날짜</label>
          <br />
          <input className="databox" type="date" />
        </div>

        <div className="headerSearchItem">
          <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${ROOM_CAPACITY.adult} 명`}</span>
          {openOptions && (
                  <div className="optionsBar">
                  <div className="optionItem">
                    <span className="optionText">adult</span>
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
          onClick={handleSearh}
          style={{
            cursor: 'pointer',
            width: '100%',
            height: '40px',
            marginTop: '20px',
            border: '0px',
            backgroundColor: '#000000',
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
