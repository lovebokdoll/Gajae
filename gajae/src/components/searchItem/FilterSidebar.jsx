import React from 'react';

const FilterSidebar = () => {
  return (
    <>
    <div className='filter-group' style={{float:"left"}}>
    <label><div className='filter'>필터</div> </label>
      <hr/>
      <span> 
        <input type="checkbox" />
        <label><div className='1class'>성급</div></label>
      </span>
      <br />
      <span> 
        <input type="checkbox" />
        <label><div className='2class'>부대시설</div></label>
      </span>

        <label for="check"/>
    </div>
  </>
  );
};

export default FilterSidebar;
