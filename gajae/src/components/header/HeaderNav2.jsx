import React from 'react';
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../main/mainSearchBar.css';

const HeaderNav2 = () => {
  return (
    <>
      <div className="header">
        <div className="headerContainer listMode">
          <div className="headerList">
            <div className="headerListItem ">
              <FontAwesomeIcon icon={faBed} />
              <span>숙 소</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>항 공 권</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>렌 터 카</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>투 어</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>택 시</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav2;
