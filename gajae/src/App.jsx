import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import KakaoProfile from "./api/kakao/KakaoProfile";
import KakaoRedirectHandler from "./api/kakao/KakaoRedirectHandler";
import NaverPay from "./api/naver/NaverPay";
import HostEndPage from "./components/host/HostEndPage";
import HostLogin from "./components/host/HostLogin";
import HostSignUp from "./components/host/HostSignUp";
import HostHotelUpdate from "./components/host/myhost/HostHotelUpdate";
import MyHostpage from "./components/host/myhost/MyHostpage";
import MyHotelPage from "./components/host/myhost/MyHotelPage";
import MyHotelReviewDetail from "./components/host/myhost/MyHotelReviewDetail";
import RegisterHotel from "./components/host/register/RegisterHotel";
import RegisterRoom from "./components/host/register/RegisterRoom";
import SignUpTest from "./components/login/SignUpTest";
import CurrencyModal from "./components/modal/CurrencyModal";
import NationModal from "./components/modal/NationModal";
import InicisPay from "./components/pay/InicisPay";
import NoticeListPage from "./components/qna/NoticeListPage";
import QnADetailPage from "./components/qna/QnADetailPage";
import QnAListPage from "./components/qna/QnAListPage";
import QnAUpdatePage from "./components/qna/QnAUpdatePage";
import QnAWritePage from "./components/qna/QnAWritePage";
// import ReservationDetail from './components/reservate/ReservationDetail';
import ReservationDetail from "./components/Reservate/ReservationDetail";
import Toast from "./components/toast/Toast";
import HostPage from "./pages/host/HostPage";
import MyHotelReviewPage from "./pages/host/MyHotelReviewPage";
import HotelPage from "./pages/hotel/HotelPage";
import IDFindPage from "./pages/login/IDFindPage";
import LoginPage from "./pages/login/LoginPage";
import PWFindPage from "./pages/login/PWFindPage";
import SignupWelcomePage from "./pages/login/SignupWelcomePage";
import UserActivatePage from "./pages/login/UserActivatePage";
import MainPage from "./pages/main/MainPage";
import MyNotificationsPage from "./pages/mypage/MyNotificationsPage";
import MyPaymentPage from "./pages/mypage/MyPaymentPage";
import MyReservationsPage from "./pages/mypage/MyReservationsPage";
import MyReviewPage from "./pages/mypage/MyReviewPage";
import MySettings from "./pages/mypage/MySettings";
import MyWishListPage from "./pages/mypage/MyWishListPage";
import Mypage from "./pages/mypage/Mypage";
import ReservationNotificationPage from "./pages/notification/ReservationNotificationPage";
import Paypage from "./pages/pay/Paypage";
import PropertyListPage from "./pages/propertyList/PropertyListPage";
import ReviewUpdate from "./pages/reviewBoard/ReviewUpdate";
import ReviewWritePage from "./pages/reviewBoard/ReviewWritePage";

const App = () => {
  const toastStatus = useSelector((state) => state.toastStatus);
  const modalStatus = useSelector((state) => state.modalInfo);
  const nationStatus = useSelector((state) => state.nationModalInfo);

  return (
    <div style={{ height: "100vh" }}>
      {toastStatus.status && <Toast />}
      {/*  */}
      {modalStatus.status && <CurrencyModal />}
      {nationStatus.status && <NationModal />}
      <Routes>
        <Route path="/" exact="true" element={<MainPage />} />
        {/* signup & signin */}
        <Route path="/signup" exact={true} element={<SignUpTest />} />
        <Route
          path="/signup/welcome"
          exact={true}
          element={<SignupWelcomePage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/activate" element={<UserActivatePage />} />
        <Route path="/login/findid" element={<IDFindPage />} />
        <Route path="/login/findpw" element={<PWFindPage />} />
        <Route path="/mypage" exact={true} element={<Mypage />} />
        <Route path="/propertylist" element={<PropertyListPage />} />
        <Route path="/notice" element={<NoticeListPage />} />
        <Route path="/qnalist" element={<QnAListPage />} />
        <Route path="/qna/writer/*" element={<QnAWritePage />} />
        <Route path="/qna/detail/*" element={<QnADetailPage />} />
        <Route path="/qna/update/*" element={<QnAUpdatePage />} />
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
          element={<MyReservationsPage />}
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
        <Route path="/pay" exact={true} element={<Paypage />} />
        <Route
          path="/reservation/notification"
          exact={true}
          element={<ReservationNotificationPage />}
        />
        <Route path="/inicis" exact={true} element={<InicisPay />} />
        <Route path="/host" exact={true} element={<HostPage />} />
        <Route path="/host/end" exact={true} element={<HostEndPage />} />
        <Route path="/host/signup" exact={true} element={<HostSignUp />} />
        <Route path="/host/login" exact={true} element={<HostLogin />} />
        <Route
          path="/host/registerhotel"
          exact={true}
          element={<RegisterHotel />}
        />
        <Route
          path="/host/registerroom/:p_id?"
          exact={true}
          element={<RegisterRoom />}
        />
        <Route path="/host/myhostpage" exact={true} element={<MyHostpage />} />
        <Route
          path="/host/myhotelpage"
          exact={true}
          element={<MyHotelPage />}
        />
        <Route
          path="/host/myhotelreview"
          exact={true}
          element={<MyHotelReviewPage />}
        />
        <Route path="/host/update" exact={true} element={<HostHotelUpdate />} />
        <Route path="/review/update" exact={true} element={<ReviewUpdate />} />
        <Route
          path="/reviewNumber/:reviewNumber"
          exact={true}
          element={<MyHotelReviewDetail />}
        />
      </Routes>
    </div>
  );
};

export default App;
