import React from 'react';

const SearchBox = () => {
  return (
    <>
      <div id="left" style={{ backgroundColor: '#febb02', padding: '20px 10px', width: '200px' }}>
        <h2 style={{ height: '28px', color: '#333' }}>Search</h2>
        <div style={{ marginTop: '10px' }}>
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>
            여행지/숙소 이름
          </label>
          <br />
          <input style={{ paddingLeft: '15px', fontSize: '15px' }} value={''} onChange={(e) => e.target.value} type="text" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>Check-in date</label>
          <br />
          <input type="date" name="" id="" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>Check-out date</label>
          <br />
          <input type="date" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <select style={{ textAlign: 'center', height: '40px', border: '0px', width: '100%', color: '#888' }} type="text">
            <option value="">2 Adults.0 Children.1 Room</option>
            <option value="">1 Adults.0 Children.1 Room</option>
            <option value="">2 Adults.2 Children.1 Room</option>
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <input className="checkbox" type="checkbox" />
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>
            Entire Home & Apartment
          </label>
        </div>
        <div style={{ marginTop: '10px' }}>
          <input className="checkbox" type="checkbox" />
          <label style={{ fontSize: '15px', marginBottom: '10px', fontFamily: 'BlinkMacSystemFont', color: '#333' }}>
            I am traveling for work
          </label>
        </div>
        <button
          onClick={''}
          style={{
            cursor: 'pointer',
            width: '100%',
            height: '48px',
            marginTop: '15px',
            border: '0px',
            backgroundColor: '#0071c2',
            padding: '12px',
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
