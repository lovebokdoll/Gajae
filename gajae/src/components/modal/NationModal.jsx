import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setNationModalFalse } from '../../redux/nationStatus/action';
import { NationModalBody, NationModalButton, NationModalContainer } from './styled-nation';
const NationModal = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const [showModal, setShowModal] = useState(true); // set the default state of the Modal to true

  const handleClose = () => {
    setShowModal(false); // set the showModal state to false to close the Modal
    dispatch(setNationModalFalse(''));
  };

  const handleNationChange = (newNation) => {
    console.log(newNation); // log the new currency
    handleClose(); // close the Modal after the currency is selected
  };

  return (
    <>
      <NationModalContainer show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Nation</Modal.Title>
        </Modal.Header>
        <div>
          <div>모든 국가</div>
        </div>
        <NationModalBody>
          <NationModalButton onClick={() => handleNationChange('USA')}>
            미국{' '}
            <span>
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('EUR')}>
            유럽{' '}
            <span>
              <img src="eu_flag.png" alt="EU flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('JPN')}>
            일본{' '}
            <span>
              <img src="jpn_flag.png" alt="Japan flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('KOR')}>
            한국{' '}
            <span>
              <img src="kor_flag.png" alt="Korea flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('CHN')}>
            중국{' '}
            <span>
              <img src="chn_flag.png" alt="China flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('GBR')}>
            영국{' '}
            <span>
              <img src="gbr_flag.png" alt="UK flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('AUS')}>
            호주{' '}
            <span>
              <img src="aus_flag.png" alt="Australia flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('CAN')}>
            캐나다{' '}
            <span>
              <img src="can_flag.png" alt="Canada flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('CHE')}>
            스위스{' '}
            <span>
              <img src="che_flag.png" alt="Switzerland flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('DNK')}>
            덴마크{' '}
            <span>
              <img src="dnk_flag.png" alt="Denmark flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('HKG')}>
            홍콩{' '}
            <span>
              <img src="hkg_flag.png" alt="Hong Kong flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('IDN')}>
            인도네시아{' '}
            <span>
              <img src="idn_flag.png" alt="Indonesia flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('IND')}>
            인도{' '}
            <span>
              <img src="ind_flag.png" alt="India flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('MEX')}>
            멕시코{' '}
            <span>
              <img src="mex_flag.png" alt="Mexico flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('MYS')}>
            말레이시아{' '}
            <span>
              <img src="mys_flag.png" alt="Malaysia flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('NOR')}>
            노르웨이{' '}
            <span>
              <img src="nor_flag.png" alt="Norway flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('NZL')}>
            뉴질랜드{' '}
            <span>
              <img src="nzl_flag.png" alt="New Zealand flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('PHL')}>
            필리핀{' '}
            <span>
              <img src="phl_flag.png" alt="Philippines flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('RUS')}>
            러시아{' '}
            <span>
              <img src="rus_flag.png" alt="Russia flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('SWE')}>
            스웨덴{' '}
            <span>
              <img src="swe_flag.png" alt="Sweden flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('SGP')}>
            싱가포르{' '}
            <span>
              <img src="sgp_flag.png" alt="Singapore flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('THA')}>
            태국{' '}
            <span>
              <img src="tha_flag.png" alt="Thailand flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('TWD')}>
            대만{' '}
            <span>
              <img src="twd_flag.png" alt="Taiwan flag" />
            </span>
          </NationModalButton>
          <NationModalButton onClick={() => handleNationChange('ZAF')}>
            남아프리카 공화국{' '}
            <span>
              <img src="zar_flag.png" alt="South Africa flag" />
            </span>
          </NationModalButton>
        </NationModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </NationModalContainer>
    </>
  );
};

export default NationModal;
