import React, { useState } from 'react';
import { useCallback } from 'react';

const FilterSidebar = ({ranks}) => {
  const [P_EXTRAS, setP_Extras] = useState([])
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

const oneRanking = () => {
  setOne(!one)
  console.log(one)
  ranks("1", !one)
}
const twoRanking = () => {
  setTwo(!two)
  console.log(two)
  ranks("2", !two)
}
const threeRanking = () => {
  setThree(!three)
  console.log(three)
  ranks("3", !three)
}
const fourRanking = () => {
  setFour(!four)
  console.log(four)
  ranks("4", !four)
}
const fiveRanking = () => {
  setFive(!five)
  console.log(five)
  ranks("5", !five)
}

  const handleCheckbox = (option) => {
    
    // 현재 선택된 옵션 배열에
    const updatedExtras = [...P_EXTRAS];
    
    // 선택된 옵션이 이미 배열에 있는지 확인
    const index = updatedExtras.indexOf(option);
    // 이미 선택된 옵션이면 배열에서 제거
    if (index !== -1) {
      updatedExtras.splice(index, 1);
    // 아니라면 배열에 추가
    } else {
      updatedExtras.push(option);
    }
    // 상태를 업데이트하고 필터링 요청
    setP_Extras(updatedExtras);
  };


  return (
    <> 
    <div className='filter-group' style={{marginTop : "20px"}}>
    <label><div className='filter'>필터</div> </label>
      <hr/>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>수영장</label>
        <input type="checkbox" onClick={() => handleCheckbox('수영장')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>노래방</label>
        <input type="checkbox" onClick={() => handleCheckbox('노래방')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>편의점</label>
        <input type="checkbox" onClick={() => handleCheckbox('편의점')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>PC</label>
        <input type="checkbox" onClick={() => handleCheckbox('PC')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>스파</label>
        <input type="checkbox" onClick={() => handleCheckbox('스파')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>동물출입가능</label>
        <input type="checkbox" onClick={() => handleCheckbox('동물출입가능')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>바베큐장</label>
        <input type="checkbox" onClick={() => handleCheckbox('바베큐장')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>주차장</label>
        <input type="checkbox" onClick={() => handleCheckbox('주차장')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>무료와이파이</label>
        <input type="checkbox" onClick={() => handleCheckbox('무료와이파이')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>금연객실</label>
        <input type="checkbox" onClick={() => handleCheckbox('금연객실')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>TV</label>
        <input type="checkbox" onClick={() => handleCheckbox('TV')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>넷플릭스</label>
        <input type="checkbox" onClick={() => handleCheckbox('넷플릭스')} />
      </div>

      <hr/>
      <label><div className='filter'>성급</div> </label>
      <hr/>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>1등급</label>
        <input type="checkbox" onClick={oneRanking} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>2등급</label>
        <input type="checkbox" onClick={twoRanking} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>3등급</label>
        <input type="checkbox" onClick={threeRanking} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>4등급</label>
        <input type="checkbox" onClick={fourRanking} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>5등급</label>
        <input type="checkbox"  onClick={fiveRanking} />
      </div>

    </div>
  </>
  );
}


export default FilterSidebar;