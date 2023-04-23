import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setModalFalse } from '../../redux/modalStatus/action';
import { CurrencyModalBody, CurrencyModalButton, CurrencyModalContainer } from './styled-currency';
const CurrencyModal = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const [showModal, setShowModal] = useState(true); // set the default state of the Modal to true

  const handleClose = () => {
    setShowModal(false); // set the showModal state to false to close the Modal
    dispatch(setModalFalse(''));
  };

  const handleCurrencyChange = (newCurrency) => {
    console.log(newCurrency); // log the new currency
    handleClose(); // close the Modal after the currency is selected
  };

  return (
    <>
      <CurrencyModalContainer show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Currency</Modal.Title>
        </Modal.Header>
        <div>
          <div>모든 통화</div>
        </div>
        <CurrencyModalBody>
          <CurrencyModalButton onClick={() => handleCurrencyChange('USD')}>
            미국 달러
            <span>USD</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('EUR')}>
            유럽 유로 <span>EUR</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('JPY')}>
            일본 엔 <span>JPY</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('KRW')}>
            한국 원 <span>KRW</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('CNY')}>
            중국 위안 <span>CNY</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('GBP')}>
            영국 파운드 <span>GBP</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('AUD')}>
            호주 달러 <span>AUD</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('CAD')}>
            캐나다 달러 <span>CAD</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('CHF')}>
            스위스 프랑 <span>CHF</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('DKK')}>
            덴마크 크로네 <span>DKK</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('HKD')}>
            홍콩 달러 <span>HKD</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('IDR')}>
            인도네시아 루피아 <span>IDR</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('INR')}>
            인도 루피 <span>INR</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('MXN')}>
            멕시코 페소 <span>MXN</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('MYR')}>
            말레이시아 링깃 <span>MYR</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('NOK')}>
            노르웨이 크로네 <span>NOK</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('NZD')}>
            뉴질랜드 달러 <span>NZD</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('PHP')}>
            필리핀 페소 <span>PHP</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('RUB')}>
            러시아 루블 <span>RUB</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('SEK')}>
            스웨덴 크로나 <span>SEK</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('SGD')}>
            싱가포르 달러 <span>SGD</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('THB')}>
            태국 바트 <span>THB</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('TWD')}>
            대만 달러 <span>TWD</span>
          </CurrencyModalButton>
          <CurrencyModalButton onClick={() => handleCurrencyChange('ZAR')}>
            남아프리카 공화국 랜드 <span>ZAR</span>
          </CurrencyModalButton>
        </CurrencyModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </CurrencyModalContainer>
    </>
  );
};

export default CurrencyModal;