import React from "react";
import Footer from "../../components/footer/Footer";
import HeaderNav1 from "../../components/header/HeaderNav1";
import HostMainPage from "../../components/host/HostMainPage";
/**
 * 호스트가 숙소를 등록한다.
 * @returns 숙소등록 페이지
 */
const HostPage = () => {
  return (
    <>
      <HeaderNav1 />
      <HostMainPage />
      <Footer />
    </>
  );
};

export default HostPage;
