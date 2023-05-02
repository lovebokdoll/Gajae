import styled from 'styled-components';

export const CurrencyButton = styled.button`
  color: white;
  background-color: #003580;
  border: none;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  transition: all 0.3s ease;

  span {
    font-size: 1.1rem;
  }
  &::before {
    content: '통화 선택';
    display: block;
    position: absolute;
    bottom: -21px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 25px;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 0.8rem;
    padding-top: 2px;
    z-index: 1;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const NationButton = styled.button`
  color: white;
  background-color: #003580;
  border: none;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  transition: all 0.3s ease;

  img {
    width: 30px;
    height: 20px;
  }
  &::before {
    content: '언어 선택';
    display: block;
    position: absolute;
    bottom: -21.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 25px;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 0.8rem;
    padding-top: 2px;
    z-index: 1;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;
