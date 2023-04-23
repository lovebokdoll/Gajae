import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import {
  MyPageDIV,
  MyPageH2,
  MyPageLink,
  MyPageLinkDIV,
  MyPageLinkSPAN,
  MyPageUL,
} from "./styled-mypage";
import HostHeaderNav from "../HostHeaderNav";

const MyHostpage = () => {
  return (
    <>
      <HostHeaderNav />
      <>
        <div className="container">
          <div>
            <h1>계정 설정</h1>
          </div>
          <div>GAJAE.COM을 더욱 편리하게 이용해보세요!</div>
          <MyPageUL>
            <MyPageDIV>
              <MyPageLink to="/host">
                <MyPageH2>개인 정보</MyPageH2>
                <MyPageLinkDIV>
                  정보를 업데이트하고 각 정보가 어떻게 활용되는지 알아보세요.
                </MyPageLinkDIV>
                <MyPageLinkSPAN>개인 정보 관리</MyPageLinkSPAN>
              </MyPageLink>
            </MyPageDIV>
            <MyPageDIV>
              {/* 이부분 확인하기.... */}
              <MyPageLink to={"/host/myhotelpage"}>
                <MyPageH2> 등록 내역</MyPageH2>
                <MyPageLinkDIV>
                  등록 내역을 확인하고 호텔을 관리하세요.
                </MyPageLinkDIV>
                <MyPageLinkSPAN>등록 내역 관리</MyPageLinkSPAN>
              </MyPageLink>
            </MyPageDIV>
            <MyPageDIV>
              <MyPageLink to="/host/myhotelreview">
                <MyPageH2>내 호텔리뷰</MyPageH2>
                <MyPageLinkDIV>
                  내 호텔리뷰를 확인하고 관리해보세요.
                </MyPageLinkDIV>
                <MyPageLinkSPAN>내 호텔 관리</MyPageLinkSPAN>
              </MyPageLink>
            </MyPageDIV>
          </MyPageUL>
        </div>
      </>
      <Footer />
    </>
  );
};

export default MyHostpage;
