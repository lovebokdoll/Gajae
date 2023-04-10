import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BoardDetail = () => {
  const { board_number } = useParams();

  const [boardParam, setBoardparam] = useState({
    board_number: board_number,
  });
  return <>게시글 상세보기</>;
};

export default BoardDetail;
