import React from 'react';

const SignupWelcomePage = ({ username }) => {
  return (
    <>
      {' '}
      <div>
        <h1>{username}님, 환영합니다!</h1>
        <p>회원가입이 완료되었습니다. 다음 단계를 진행해주세요.</p>
        {/* 다음 단계로 이동할 버튼 등을 추가할 수 있습니다. */}
      </div>
    </>
  );
};

export default SignupWelcomePage;
