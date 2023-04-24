import React, { useState } from 'react';

const FilterSidebar = ({ ranks = [], filtersList = [], checkedFilters = () => {} }) => {
  const [filters, setFilters] = useState([
    { name: "수영장", value: false },
    { name: "노래방", value: false },
    { name: "편의점", value: false },
    { name: "PC", value: false },
    { name: "스파", value: false },
    { name: "동물출입가능", value: false },
    { name: "바베큐장", value: false },
    { name: "주차장", value: false },
    { name: "무료와이파이", value: false },
    { name: "금연객실", value: false },
    { name: "TV", value: false },
    { name: "넷플릭스", value: false }
  ]);

  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    const newFiltersList = filters.map(filter => {
      if (filter.name === name) {
        return { ...filter, value: checked };
      }
      return filter;
    });
    setFilters(newFiltersList);
    checkedFilters(newFiltersList.filter(filter => filter.value).map(filter => filter.name));
  };

  const handleRankingClick = (event) => {
    const rank = event.target.value;
    const checkboxes = document.getElementsByName('check');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value !== rank) {
        checkboxes[i].checked = false;
      }
    }
    ranks(rank);
  }


  return (
    <> 
    <div className='filter-group' style={{marginTop : "20px", width: '200px'}}>
    <label><div className='filter'>객실 내 시설</div> </label>
      <hr/>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>수영장</label>
        <input type="checkbox" name="수영장" checked={filters.find(filter => filter.name === "수영장").value} onChange={handleCheckboxChange} />
      </div>


      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>노래방</label>
        <input type="checkbox" name="노래방" checked={filters.find(filter => filter.name === "노래방").value} onChange={handleCheckboxChange} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>편의점</label>
        <input type="checkbox" name="편의점" checked={filters.find(filter => filter.name === "편의점").value} onChange={handleCheckboxChange} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>PC</label>
        <input type="checkbox" name="PC" checked={filters.find(filter => filter.name === "PC").value} onChange={handleCheckboxChange} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>스파</label>
        <input type="checkbox" name="스파" checked={filters.find(filter => filter.name === "스파").value} onChange={handleCheckboxChange} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>동물출입가능</label>
        <input type="checkbox" name="동물출입가능" checked={filters.find(filter => filter.name === "동물출입가능").value} onChange={handleCheckboxChange} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>바베큐장</label>
        <input type="checkbox" name="바베큐장" checked={filters.find(filter => filter.name === "바베큐장").value} onChange={handleCheckboxChange} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>주차장</label>
        <input type="checkbox" name="주차장" checked={filters.find(filter => filter.name === "주차장").value} onChange={handleCheckboxChange} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>무료와이파이</label>
        <input type="checkbox" name="무료와이파이" checked={filters.find(filter => filter.name === "무료와이파이").value} onChange={handleCheckboxChange} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>금연객실</label>
        <input type="checkbox" name="금연객실" checked={filters.find(filter => filter.name === "금연객실").value} onChange={handleCheckboxChange} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>TV</label>
        <input type="checkbox" name="TV" checked={filters.find(filter => filter.name === "TV").value} onChange={handleCheckboxChange} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>넷플릭스</label>
        <input type="checkbox" name="넷플릭스" checked={filters.find(filter => filter.name === "넷플릭스").value} onChange={handleCheckboxChange} />
      </div>

      <hr/>
      <label><div className='filter'>호텔 유형 </div> </label>
      <hr/>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label>1등급</label>
      <input type="checkbox" name="check" value="1" onChange={handleRankingClick} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label>2등급</label>
      <input type="checkbox" name="check" value="2" onChange={handleRankingClick} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label>3등급</label>
      <input type="checkbox" name="check" value="3" onChange={handleRankingClick} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label>4등급</label>
      <input type="checkbox" name="check" value="4" onChange={handleRankingClick} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label>5등급</label>
      <input type="checkbox" name="check" value="5" onChange={handleRankingClick} />
    </div>
    
    </div>
  </>
  );
}


export default FilterSidebar;