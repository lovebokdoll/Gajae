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
import MyHostNextTripCard from "./MyHostNextTripCard";

const MyHostpage = () => {
  return (
    <>
      <HostHeaderNav />
      <div style={{ margin: "30px 0px 0px 0px" }}></div>
      <div
        className="myhostpageContainer"
        style={{ width: "1060px", margin: "0 auto" }}
      >
        <div className="hostsetting">
          <h1 className="mypageH1" style={{ margin: "0px 0px 0px 10px" }}>
            계정 설정
          </h1>
        </div>
        <div style={{ margin: "0px 0px 0px 10px" }}>
          GAJAE.COM을 더욱 편리하게 이용해보세요!
        </div>
        <MyPageUL>
          <div
            className="myhostpageLine1"
            style={{
              width: "1084px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MyPageDIV>
              <MyPageLink to="/host/registerHotel">
                <MyPageH2>내 숙소등록</MyPageH2>
                <MyPageLinkDIV>내 숙소를 등록해보세요.</MyPageLinkDIV>
                <MyPageLinkSPAN>내 숙소 관리</MyPageLinkSPAN>
              </MyPageLink>
            </MyPageDIV>
            <MyPageDIV>
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
          </div>
        </MyPageUL>
      </div>
      <div className="myhostpageAbsoluteDiv" style={{ height: "50px" }}></div>
      <MyHostNextTripCard />
      <div className="myhostpageAbsoluteDiv" style={{ height: "200px" }}></div>
      <Footer />
    </>
  );
};

export default MyHostpage;
