import React from "react";
import Footer from "../../components/footer/Footer";
import HostMainPage from "../../components/host/HostMainPage";
import HostHeaderNav from "../../components/host/HostHeaderNav";
/**
 * 호스트가 숙소를 등록한다.
 * @returns 숙소등록 페이지
 */
const HostPage = () => {
  return (
    <>
      <HostHeaderNav />
      <HostMainPage />
      <Footer />
    </>
  );
};

export default HostPage;
