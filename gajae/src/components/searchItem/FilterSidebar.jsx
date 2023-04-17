import axios from 'axios';
import React, { useState } from 'react';

const FilterSidebar = () => {
  const [extras, setExtras] = useState([]);

// 체크박스 클릭 핸들러
const handleCheckbox = (event) => {
  const value = event.target.value;
  const isChecked = event.target.checked;
  if (isChecked) {
    setExtras([...extras, value]); // 추가
  } else {
    setExtras(extras.filter((item) => item !== value)); // 제거
  }
};

// 검색 요청 핸들러
const handleSearch = async () => {
  try {
    const res = await axios.get('http://localhost:9999/search/list', {
      params: {
        extras: extras.join(','), // 문자열 합치기
      },
    });
    // 검색 결과 처리
  } catch (error) {
    console.error(error);
  }
};


  return (
    <>
    <div className='filter-group' style={{float:"left"}}>
    <label><div className='filter'>필터</div> </label>
      <hr/>
      <span> 
        <input type="checkbox" />
        <label><div onClick={() => handleCheckbox('헬스장')}>헬스장</div></label>
      </span>
      <br />
      <span> 
        <input type="checkbox" />
        <label><div onClick={() => handleCheckbox('편의점')}>편의점</div></label>
      </span>
    </div>
  </>
  );
};

export default FilterSidebar;
