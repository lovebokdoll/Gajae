import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
/**
 *
 * @returns 이용후기 게시판
 */
const ReviewBoradPage = () => {
  const navigate = useNavigate();

  const writeReview = () => {
    navigate('write');
  };

  return (
    <>
      <div>ReviewBoradPage</div>
      <Button onClick={writeReview}>이용후기 작성</Button>
    </>
  );
};

export default ReviewBoradPage;
