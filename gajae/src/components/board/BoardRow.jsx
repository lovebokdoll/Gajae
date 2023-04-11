import React from 'react';
import { Link } from 'react-router-dom';

const BoardRow = ({ qna }) => {
  console.log('BoardRow ===> ', qna);
  return (
    <>
      <tr>
        <td>
          <Link to={'/board/selectOne/' + qna.QNA_BNO} className="btn btn-primary">
            {' '}
            {qna.QNA_BNO}
          </Link>
        </td>
        <td>{qna.QNA_TITLE}</td>
        <td>{qna.MEM_NAME}</td>
        <td>{qna.QNA_DATE}</td>
        <td>{qna.QNA_HIT}</td>
      </tr>
    </>
  );
};

export default BoardRow;
