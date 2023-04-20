import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const BoardSearch = () => {
  const boardSearch = () => {
    console.log('boardSerach');
  };

  return (
    <>
      <div className="row">
        <div className="col-3">
          <select id="category" className="form-select" aria-label="분류선택">
            <option defaultValue>분류선택</option>
            <option value="b_no">글번호</option>
            <option value="b_title">제목</option>
            <option value="b_content">내용</option>
          </select>
        </div>
        <div className="col-6">
          <input
            type="text"
            id="keyword"
            className="form-control"
            placeholder="검색어를 입력하세요"
            aria-label="검색어를 입력하세요"
            aria-describedby="btn_search"
          />
        </div>
        <div className="col-3">
          <Button variant="danger" id="btn_search" onClick={boardSearch}>
            검색
          </Button>
        </div>
      </div>
    </>
  );
};

export default BoardSearch;
