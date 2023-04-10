import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { qnaListDB } from '../../service/boardLogic';
import BoardRow from './BoardRow';

/**
 * 상위 컴포넌트에서 하위 컴포넌트로만 props 전달이 가능한 점
 * 일반적으로 상위 컴포넌트에 두는 것을 추천한다.
 * 중급 - 하위 컴포넌트에서 일어난 상태 변화를 상위 컴포넌트에 반영할 수 있는 사람
 * 리 렌더링 - 1), 2), 3) - 미묘한 문제 - useEffect, useMemeo(값), useCallback(함수) - 의존성 배열을 갖는다.
 * useEffect - 의존성 배열이 [] 비어 있으면 마운트 될 때 딱 한 번
 * 의존성 배열이 없으면 코딩할 때마다 호출, 의존성 배열에 입력한 변수가 바뀔 때마다 호출 - 다중처리 - 전역변수만 가능하다.
 * @returns
 */

//{board && board.map((board, index) => <BoardRow key={index} board={board} />)}
const BoardList = () => {
  const [board, setBoard] = useState({});
  const [qna, setQna] = useState([{}]);

  useEffect(() => {
    const qnaList = async () => {
      const res = await qnaListDB(board);
      console.log(res.data);
      setQna(res.data);
    };
    qnaList();
  }, [board]);

  return <>{qna && qna.map((row, index) => <BoardRow key={index} qna={row} />)}</>; // 리렌더링 조건을 수렴할 때마다 return()그룹이 재 호출된다.
};

export default BoardList;
