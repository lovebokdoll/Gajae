import React from 'react';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
/**
 *
 * @returns 로그인 페이지
 */
const LoginPage = () => {
  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <div>로그인 페이지</div>
      <Footer />
    </>
  );
};

export default LoginPage;
