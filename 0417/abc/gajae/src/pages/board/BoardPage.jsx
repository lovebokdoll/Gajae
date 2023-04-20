import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BoardFooter from '../../components/board/BoardFooter';
import BoardHeader from '../../components/board/BoardHeader';
import BoardList from '../../components/board/BoardList';
import BoardSearch from '../../components/board/BoardSearch';
import HeaderNav1 from '../../components/header/HeaderNav1';

const BoardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderNav1 />
      <BoardHeader />
      <div className="container">
        <div className="page-header">
          <h2>
            댓글형 게시판&nbsp;<i className="fa-solid fa-angles-right"></i>&nbsp;
            <small>글목록</small>
          </h2>
          <hr />
        </div>
        <BoardSearch />
        <div style={{ height: '15px' }}></div>
        <div className="book-list">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              <BoardList />
            </tbody>
          </Table>
          <hr />
          <div className="booklist-footer">
            <Button variant="warning">전체조회</Button>
            &nbsp;
            <Button
              variant="success"
              onClick={() => {
                navigate(`/board/insert`);
              }}
            >
              이용후기 작성
            </Button>
          </div>
        </div>
      </div>
      {/* ========================== [[ 도서등록 Modal ]] ========================== */}
      <BoardFooter />
    </>
  );
};

export default BoardPage;
