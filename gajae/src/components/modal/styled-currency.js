// styled-currency.js
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';

export const CurrencyModalContainer = styled(Modal)`
  & .modal-dialog {
    width: 912px;
    max-width: 100%;
    height: 1220px;
    margin: 1.75rem auto;
  }
`;

export const CurrencyModalBody = styled(Modal.Body)`
  height: 650px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 5px;
  align-items: center;
  justify-items: center;
`;

export const CurrencyModalButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 204px;
  height: 64px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: transparent;
  color: #333;
  margin: 2px;
  padding-left: 16px;

  &:hover {
    background-color: #e7f0ff;
    color: #333;
  }

  span {
    font-size: 12px;
    margin-top: 4px;
  }
`;
