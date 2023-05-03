import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const CardDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const CardSettingsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0px;
  border-top: 1px solid lightgrey;
`;
export const CardButton = styled(Button)`
  margin-left: 90%;
`;

export const CardLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const CardInput = styled.input`
  width: 350px;
  margin-bottom: 20px;
  display: block;
  height: 32px;
  border: none;
  border-bottom: 1px solid #dddddd;
  font-size: 15px;
  &:focus,
  &:hover {
    border-bottom: 2px solid #004fff;
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: lightgray;
    font-size: 13px;
  }
`;


export const CardEXPInput = styled.input`
  width: 200px;
  margin-bottom: 20px;
  display: block;
  height: 32px;
  border: none;
  border-bottom: 1px solid #dddddd;
  font-size: 15px;
  &:focus,
  &:hover {
    border-bottom: 2px solid #004fff;
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: lightgray;
    font-size: 13px;
  }
`;

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const MyCardRows = styled.div`
  width: 100%;
  padding: 16px 0px;
  border-top: 1px solid lightgrey;
`;

export const CardSaveButton = styled(Button)`
  margin-left: 90%;
`;
