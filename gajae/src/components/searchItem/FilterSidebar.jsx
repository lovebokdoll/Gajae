import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ checkedFilters = () => {} , checkedRanks = () => {}}) => {
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

  const [ranks, setRanks] = useState([
    { name: "1", value: false },
    { name: "2", value: false },
    { name: "3", value: false },
    { name: "4", value: false },
    { name: "5", value: false },
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

  const handleRanksChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    const newRanksList = ranks.map((rank) => {
      if (rank.name === name) {
        return { ...rank, value: checked };
      }
      return rank;
    });
    setRanks(newRanksList);
    checkedRanks(newRanksList.filter((rank) => rank.value).map((rank) => rank.name));
  };
  

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
      <input type="checkbox" name="1" checked={ranks.find(rank => rank.name === "1").value} onChange={handleRanksChange}  />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label>2등급</label>
      <input type="checkbox" name="2" checked={ranks.find(rank => rank.name === "2").value} onChange={handleRanksChange}  />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label>3등급</label>
      <input type="checkbox" name="3" checked={ranks.find(rank => rank.name === "3").value} onChange={handleRanksChange}  />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label>4등급</label>
      <input type="checkbox" name="4" checked={ranks.find(rank => rank.name === "4").value} onChange={handleRanksChange}  />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label>5등급</label>
      <input type="checkbox" name="5" checked={ranks.find(rank => rank.name === "5").value} onChange={handleRanksChange}  />
    </div>
    
    </div>
  </>
  );
}


export default FilterSidebar;