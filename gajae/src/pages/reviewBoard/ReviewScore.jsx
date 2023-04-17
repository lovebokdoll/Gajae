import React, { useCallback, useState } from "react";
import { Custom_btn } from "../../style/FormStyle";
import styled from "styled-components";

const ReviewScore = ({
  handleReviewScore,
  service,
  setService,
  facility,
  setFacility,
  clean,
  setClean,
  cost,
  setCost,
  location,
  setLocation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <>
      <SelectDiv>
        <label>
          친절도
          <StyledSelect
            value={service}
            onChange={(e) => handleReviewScore(setService)(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </StyledSelect>
        </label>
        <label>
          시설
          <StyledSelect
            value={facility}
            onChange={(e) => handleReviewScore(setFacility)(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </StyledSelect>
        </label>
        <label>
          청결도
          <StyledSelect
            value={clean}
            onChange={(e) => handleReviewScore(setClean)(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </StyledSelect>
        </label>
        <label>
          가성비
          <StyledSelect
            value={cost}
            onChange={(e) => handleReviewScore(setCost)(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="8">9</option>
            <option value="8">10</option>
          </StyledSelect>
        </label>
        <label>
          위치
          <StyledSelect
            value={location}
            onChange={(e) => handleReviewScore(setLocation)(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </StyledSelect>
        </label>
      </SelectDiv>
    </>
  );
};

export default ReviewScore;

const SelectDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledSelect = styled.select`
  margin: 0px 10px;
  background-color: #fff;
  color: #0d6efd;
  height: 30px;
  border: 1px solid #0d6efd;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  &:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    transform: scale(1.05);
  }
`;
