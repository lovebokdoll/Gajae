import React, { useState } from 'react';

const CountrySelector = ({ countrySelect }) => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
    countrySelect(value); // 선택된 값(selectedCountry)을 외부로 전달합니다.
  };

  return (
    <div style={{ marginTop: '5px' }}>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={handleCountryChange}
        style={{
          width: '404.92px',
          height: '36px',
          backgroundColor: 'var(--bui_color_white)',
          borderWidth: '1px',
          padding: '4px 24px 4px 8px',
          lineHeight: '20px',
          borderRadius: '4px',
        }}
      >
        <option value="KR">대한민국</option>
        <option value="US">미국</option>
        <option value="CHN">중국</option>
        <option value="JPN">일본</option>
        <option value="RUS">러시아</option>
        <option value="DEU">독일</option>
        <option value="IND">인도</option>
        <option value="GBR">영국</option>
        <option value="FRA">프랑스</option>
        <option value="BRA">브라질</option>
        <option value="ITA">이탈리아</option>
        <option value="CAN">캐나다</option>
        <option value="AUS">호주</option>
        <option value="MEX">멕시코</option>
        <option value="IDN">인도네시아</option>
        <option value="TUR">터키</option>
        <option value="ESP">스페인</option>
        <option value="KSA">사우디아라비아</option>
        <option value="IRN">이란</option>
        <option value="NLD">네덜란드</option>
        <option value="CHE">스위스</option>
        <option value="ARG">아르헨티나</option>
        <option value="POL">폴란드</option>
        <option value="THA">태국</option>
        <option value="ZAF">남아프리카공화국</option>
        <option value="COL">콜롬비아</option>
        <option value="MYS">말레이시아</option>
        <option value="PHL">필리핀</option>
        <option value="EGY">이집트</option>
        {/* 여기에 원하는 국가/지역을 추가할 수 있습니다. */}
      </select>
    </div>
  );
};

export default CountrySelector;
