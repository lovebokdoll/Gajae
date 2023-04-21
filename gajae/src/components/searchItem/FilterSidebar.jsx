import React, { useState } from 'react';

const FilterSidebar = ({ranks, filters}) => {
  const [P_POOL, setP_POOL] = useState(false)
  const [P_SING, setP_SING] = useState(false)
  const [P_STORE, setP_STORE] = useState(false)
  const [P_PC, setP_PC] = useState(false)
  const [P_SPA, setP_SPA] = useState(false)
  const [P_CAT, set_CAT] = useState(false)
  const [P_BAR, setP_BAR] = useState(false)
  const [P_PK, setP_PK] = useState(false)
  const [P_WIFI, setP_WIFI] = useState(false)
  const [P_SMOKIG, setP_SMOKIG] = useState(false)
  const [P_TV, setP_TV] = useState(false)
  const [P_NF, setP_NF] = useState(false)

  const pool = () => {
    setP_POOL(!P_POOL)
    console.log(P_POOL)
    filters("수영장", !P_POOL)
  }
  const sing = () => {
    setP_SING(!P_SING)
    console.log(P_SING)
    filters("노래방", !P_SING)
  }
  const store = () => {
    setP_STORE(!P_STORE)
    console.log(P_STORE)
    filters("편의점", !P_STORE)
  }
  const pc = () => {
    setP_PC(!P_PC)
    console.log(P_PC)
    filters("PC", !P_PC)
  }
  const spa = () => {
    setP_SPA(!P_SPA)
    console.log(P_SPA)
    filters("스파", !P_SPA)
  }
  const cat = () => {
    set_CAT(!P_CAT)
    console.log(P_CAT)
    filters("동물출입가능", !P_CAT)
  }
  const bar = () => {
    setP_BAR(!P_BAR)
    console.log(P_BAR)
    filters("바베큐장", !P_BAR)
  }
  const pk = () => {
    setP_PK(!P_PK)
    console.log(P_PK)
    filters("주차장", !P_PK)
  }
  const wifi = () => {
    setP_WIFI(!P_WIFI)
    console.log(P_WIFI)
    filters("무료와이파이", !P_WIFI)
  }
  const smoking = () => {
    setP_SMOKIG(!P_SMOKIG)
    console.log(P_SMOKIG)
    filters("금연객실", !P_SMOKIG)
  }
  const tv = () => {
    setP_TV(!P_TV)
    console.log(P_TV)
    filters("TV", !P_TV)
  }
  const nk = () => {
    setP_NF(!P_NF)
    console.log(P_NF)
    filters("넷플릭스", !P_NF)
  }


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


  return (
    <> 
    <div className='filter-group' style={{marginTop : "20px", width: '200px'}}>
    <label><div className='filter'>필터</div> </label>
      <hr/>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>수영장</label>
        <input type="checkbox" onClick={pool}/>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>노래방</label>
        <input type="checkbox"  onClick={sing}/>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>편의점</label>
        <input type="checkbox"  onClick={store} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>PC</label>
        <input type="checkbox"  onClick={pc}/>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>스파</label>
        <input type="checkbox"  onClick={spa} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>동물출입가능</label>
        <input type="checkbox"  onClick={cat} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>바베큐장</label>
        <input type="checkbox"  onClick={bar} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>주차장</label>
        <input type="checkbox"  onClick={pk} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>무료와이파이</label>
        <input type="checkbox"  onClick={wifi} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>금연객실</label>
        <input type="checkbox"  onClick={smoking} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>TV</label>
        <input type="checkbox"  onClick={tv} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>넷플릭스</label>
        <input type="checkbox" onClick={nk}/>
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