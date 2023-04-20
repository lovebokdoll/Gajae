import React, { useState } from 'react';

import '../main/mainSearchBar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchBox = () => {
  const navigate = useNavigate();
  
  //지역 입력
  const [P_ADDRESS, setP_Address] = useState('');
  console.log(P_ADDRESS)

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

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
    <>
      <div id="left" style={{ backgroundColor: '#C4DEFF', marginTop: '20px', padding: '20px 10px', width: '250px' }}>
        <h2 style={{ height: '28px', color: '#333' }}>Search</h2>
        <div style={{ marginTop: '10px' }}>
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>
            여행지/숙소 이름
          </label>

          <br />
          <input style={{ paddingLeft: '15px', fontSize: '15px' }} onChange={(e) => e.target.value} type="text" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>체크인 날짜</label>
          
          <br />
          <input type="date" name="" id="" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>체크아웃 날짜</label>
          <br />
          <input type="date" />
        </div>
        <div className="headerSearchItem">

                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText search-options"
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
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
                    

        <button
          onClick={handleSearch}
          style={{
            cursor: 'pointer',
            width: '100%',
            height: '40px',
            marginTop: '20px',
            border: '0px',
            backgroundColor: '#8EA8DB',
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
