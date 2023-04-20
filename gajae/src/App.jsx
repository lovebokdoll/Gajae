import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import KakaoProfile from './api/kakao/KakaoProfile';
import KakaoRedirectHandler from './api/kakao/KakaoRedirectHandler';
import NaverPay from './api/naver/NaverPay';
import ReservationDetail from './components/Reservate/ReservationDetail';
import HostLogin from './components/host/HostLogin';
import HostSignUp from './components/host/HostSignUp';
import RegisterHouse from './components/host/RegisterHouse';
import SignUpTest from './components/login/SignUpTest';
import InicisPay from './components/pay/InicisPay';
import Toast from './components/toast/Toast';
import HostPage from './pages/host/HostPage';
import HotelPage from './pages/hotel/HotelPage';
import IDFindPage from './pages/login/IDFindPage';
import LoginPage from './pages/login/LoginPage';
import PWFindPage from './pages/login/PWFindPage';
import MainPage from './pages/main/MainPage';
import MyNotificationsPage from './pages/mypage/MyNotificationsPage';
import MyPaymentPage from './pages/mypage/MyPaymentPage';
import MyReservatiosPage from './pages/mypage/MyReservatiosPage';
import MyReviewPage from './pages/mypage/MyReviewPage';
import MySettings from './pages/mypage/MySettings';
import MyWishListPage from './pages/mypage/MyWishListPage';
import Mypage from './pages/mypage/Mypage';
import Payapge from './pages/pay/Payapge';
import PropertyListPage from './pages/propertyList/PropertyListPage';
import ImageUpload from './pages/reviewBoard/ImageUpload';
import ReviewWritePage from './pages/reviewBoard/ReviewWritePage';
import UserActivatePage from './pages/login/UserActivatePage';
import WelcomePage from './components/login/WelcomePage';

const App = () => {
  const [params, setParams] = useState({
    address: '',
    checkin: '',
    checkout: '',
    guests: '',
    rooms: '',
  });

  const navigateURL = () => {
    return `/propertylist/${params.address}`;
  };

  const toastStatus = useSelector((state) => state.toastStatus);

  return (
    <div style={{ height: '100vh' }}>
      {toastStatus.status && <Toast />}{' '}
      <Routes>
        <Route path="/" exact="true" element={<MainPage />} />
        {/* signup & signin */}
        <Route path="/signup" exact={true} element={<SignUpTest />} />
        <Route path="/signup/succession" exact={true} element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/activate" element={<UserActivatePage />} />
        <Route path="/login/findid" element={<IDFindPage />} />
        <Route path="/login/findpw" element={<PWFindPage />} />
        <Route path="/mypage" exact={true} element={<Mypage />} />
        <Route path="/propertylist/:P_ADDRESS?" element={<PropertyListPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/review/write" element={<ReviewWritePage />} />
        <Route path="/auth/kakao/callback" exact={true} element={<KakaoRedirectHandler />} />
        <Route path="/kakaoprofile" exact={true} element={<KakaoProfile />} />
        <Route path="/naverpay" exact={true} element={<NaverPay />} />
        <Route path="/mypage" exact={true} element={<Mypage />} />
        <Route path="/mypage/settings" exact={true} element={<MySettings />} />
        <Route path="/mypage/notifications" exact={true} element={<MyNotificationsPage />} />
        <Route path="/mypage/reservations" exact={true} element={<MyReservatiosPage />} />
        <Route path="/mypage/review" exact={true} element={<MyReviewPage />} />
        <Route path="/mypage/payment" exact={true} element={<MyPaymentPage />} />
        <Route path="/mypage/wishlist" exact={true} element={<MyWishListPage />} />
        <Route path="/reservate" element={<ReservationDetail />} />
        <Route path="/pay" exact={true} element={<Payapge />} />
        <Route path="/inicis" exact={true} element={<InicisPay />} />
        <Route path="/review/img" exact={true} element={<ImageUpload />} />
        <Route path="/host" exact={true} element={<HostPage />} />
        <Route path="/host/signup" exact={true} element={<HostSignUp />} />
        <Route path="/host/login" exact={true} element={<HostLogin />} />
        <Route path="/host/registerHouse" exact={true} element={<RegisterHouse />} />
      </Routes>
    </div>
  );
};

export default App;
