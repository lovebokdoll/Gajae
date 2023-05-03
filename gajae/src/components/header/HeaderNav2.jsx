import React, { useState } from 'react';
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../main/mainSearchBar.css';

const HeaderNav2 = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleHotelsClick = () => {
    setSelectedItem('hotels');
    window.location.href = 'https://www.booking.com/';
  };

  const handleFlightsClick = () => {
    setSelectedItem('flights');
    window.location.href = 'https://www.skyscanner.co.kr/';
  };

  const handleCarRentalClick = () => {
    setSelectedItem('carRental');
    window.location.href = 'https://www.socar.kr/';
  };

  const handleToursClick = () => {
    setSelectedItem('tours');
    window.location.href = 'https://www.hanatour.com/';
  };

  const handleTaxiClick = () => {
    setSelectedItem('taxi');
    window.location.href = 'https://allvan.kr/';
  };

  return (
    <div className="header">
      <div className="headerContainer listMode">
        <div className="headerList">
          <div className={`headerListItem ${selectedItem === 'hotels' ? 'selected' : ''}`} onClick={handleHotelsClick}>
            <FontAwesomeIcon icon={faBed} />
            <span>숙 소</span>
          </div>
          <div className={`headerListItem ${selectedItem === 'flights' ? 'selected' : ''}`} onClick={handleFlightsClick}>
            <FontAwesomeIcon icon={faPlane} />
            <span>항 공 권</span>
          </div>
          <div className={`headerListItem ${selectedItem === 'carRental' ? 'selected' : ''}`} onClick={handleCarRentalClick}>
            <FontAwesomeIcon icon={faCar} />
            <span>렌 터 카</span>
          </div>
          <div className={`headerListItem ${selectedItem === 'tours' ? 'selected' : ''}`} onClick={handleToursClick}>
            <FontAwesomeIcon icon={faBed} />
            <span>투 어</span>
          </div>
          <div className={`headerListItem ${selectedItem === 'taxi' ? 'selected' : ''}`} onClick={handleTaxiClick}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>택 시</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav2;