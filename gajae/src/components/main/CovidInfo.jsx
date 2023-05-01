import { faCheckCircle, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const CovidInfo = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div  className='covid19-outter' style={{ width: '1800px', display: 'flex',  padding: '20px' , paddingLeft:'90px'}}>
        <div className='covid19-inner' style={{ width: '1500px', border: '1px solid lightgrey', padding: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#00CC99' }} />
              &nbsp;
            </span>
            <div style={{ display: 'inline-block' }}>코로나19(COVID-19) 관련 안내</div>
            <button style={{ marginLeft: 'auto', border: 'none', background: 'none', cursor: 'pointer' }} onClick={toggleOpen}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faChevronDown} style={{ color: '#00CC99' }} />
            </button>
          </div>
          <div style={{ maxHeight: isOpen ? '1000px' : '0px', overflow: 'hidden', transition: 'ease-in-out', paddingLeft: '21px' }}>
            <div style={{ paddingTop: '3px' }}>코로나19(COVID-19)와 관련하여 최근 발표된 제한 조치 및 권고사항을 여행 전에 확인하세요.</div>
            <div style={{ marginTop: '5px' }}>
              <a href="https://www.0404.go.kr/dev/main.mofa" target="_blank" rel="noopener noreferrer">
                더 알아보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidInfo;
