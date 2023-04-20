import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import KakaoProfile from "./api/kakao/KakaoProfile";
import KakaoRedirectHandler from "./api/kakao/KakaoRedirectHandler";
import NaverPay from "./api/naver/NaverPay";
import "./App.css";
import SignUpTest from "./components/login/SignUpTest";
import InicisPay from "./components/pay/InicisPay";
import ReservationDetail from "./components/Reservate/ReservationDetail";
import Toast from "./components/toast/Toast";
import HotelPage from "./pages/hotel/HotelPage";
import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";
import MyNotificationsPage from "./pages/mypage/MyNotificationsPage";
import Mypage from "./pages/mypage/Mypage";
import MyPaymentPage from "./pages/mypage/MyPaymentPage";
import MyReservatiosPage from "./pages/mypage/MyReservatiosPage";
import MyReviewPage from "./pages/mypage/MyReviewPage";
import MySettings from "./pages/mypage/MySettings";
import MyWishListPage from "./pages/mypage/MyWishListPage";
import Payapge from "./pages/pay/Payapge";
import PropertyListPage from "./pages/propertyList/PropertyListPage";
import ReviewWritePage from "./pages/reviewBoard/ReviewWritePage";
import ReviewUpdate from "./pages/reviewBoard/ReviewUpdate";

const App = () => {
  const toastStatus = useSelector((state) => state.toastStatus);
  return (
    <div style={{ height: "100vh" }}>
      {toastStatus.status && <Toast />}{" "}
      <Routes>
        <Route path="/" exact="true" element={<MainPage />} />
        {/* signup & signin */}
        <Route path="/signup" exact={true} element={<SignUpTest />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" exact={true} element={<Mypage />} />
        <Route path="/propertylist" element={<PropertyListPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/review/write" element={<ReviewWritePage />} />
        <Route
          path="/auth/kakao/callback"
          exact={true}
          element={<KakaoRedirectHandler />}
        />
        <Route path="/kakaoprofile" exact={true} element={<KakaoProfile />} />
        <Route path="/naverpay" exact={true} element={<NaverPay />} />
        <Route path="/mypage" exact={true} element={<Mypage />} />
        <Route path="/mypage/settings" exact={true} element={<MySettings />} />
        <Route
          path="/mypage/notifications"
          exact={true}
          element={<MyNotificationsPage />}
        />
        <Route
          path="/mypage/reservations"
          exact={true}
          element={<MyReservatiosPage />}
        />
        <Route path="/mypage/review" exact={true} element={<MyReviewPage />} />
        <Route
          path="/mypage/payment"
          exact={true}
          element={<MyPaymentPage />}
        />
        <Route
          path="/mypage/wishlist"
          exact={true}
          element={<MyWishListPage />}
        />
        <Route path="/reservate" element={<ReservationDetail />} />
        <Route path="/pay" exact={true} element={<Payapge />} />
        <Route path="/inicis" exact={true} element={<InicisPay />} />
        <Route path="/review/update" exact={true} element={<ReviewUpdate />} />
      </Routes>
    </div>
  );
};

export default App;
