import React from 'react';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import SignUp from '../../components/login/SignUp';

const SignUpPage = () => {
  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <SignUp />
      <Footer />
    </>
  );
};

export default SignUpPage;
