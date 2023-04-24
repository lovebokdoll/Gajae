import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import KakaoProfile from './api/kakao/KakaoProfile';
import KakaoRedirectHandler from './api/kakao/KakaoRedirectHandler';
import NaverPay from './api/naver/NaverPay';
import ReservationDetail from './components/Reservate/ReservationDetail';
import HostLogin from './components/host/HostLogin';
import HostSignUp from './components/host/HostSignUp';
import RegisterHotel from './components/host/register/RegisterHotel';
import RegisterRoom from './components/host/register/RegisterRoom';
import ReservateComplete from './components/Reservate/ReservateComplete';
import SignUpTest from './components/login/SignUpTest';
import WelcomePage from './components/login/WelcomePage';
import InicisPay from './components/pay/InicisPay';
import KakaoPay from './components/pay/KakaoPay';
import Toast from './components/toast/Toast';
import HostPage from './pages/host/HostPage';
import HotelPage from './pages/hotel/HotelPage';
import IDFindPage from './pages/login/IDFindPage';
import LoginPage from './pages/login/LoginPage';
import PWFindPage from './pages/login/PWFindPage';
import UserActivatePage from './pages/login/UserActivatePage';
import MainPage from './pages/main/MainPage';
import MyNotificationsPage from './pages/mypage/MyNotificationsPage';
import MyPaymentPage from './pages/mypage/MyPaymentPage';
import MyReservatiosPage from './pages/mypage/MyReservatiosPage';
import MyReviewPage from './pages/mypage/MyReviewPage';
import MySettings from './pages/mypage/MySettings';
import MyWishListPage from './pages/mypage/MyWishListPage';
import Mypage from './pages/mypage/Mypage'
import PropertyListPage from './pages/propertyList/PropertyListPage';
import ImageUpload from './pages/reviewBoard/ImageUpload';
import ReviewUpdate from './pages/reviewBoard/ReviewUpdate';
import ReviewWritePage from './pages/reviewBoard/ReviewWritePage';
import Paypage from './pages/pay/Paypage';
import CurrencyModal from './components/modal/CurrencyModal';
import NationModal from './components/modal/NationModal ';

const App = () => {
  
  const toastStatus = useSelector((state) => state.toastStatus);
  const modalStatus = useSelector((state) => state.modalInfo);
  const nationStatus = useSelector((state) => state.nationModalInfo);
  return (
    <div style={{ height: '100vh' }}>
      {toastStatus.status && <Toast />}{' '}
      {modalStatus.status && <CurrencyModal />}
      {nationStatus.status && <NationModal />}
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
        <Route path="/pay" exact={true} element={<Paypage />} />
        <Route path="/pay/complete" exact={true} element={<ReservateComplete />} />
        <Route path="/inicis" exact={true} element={<InicisPay />} />
        <Route path="/review/img" exact={true} element={<ImageUpload />} />
        <Route path="/host" exact={true} element={<HostPage />} />
        <Route path="/host/signup" exact={true} element={<HostSignUp />} />
        <Route path="/host/login" exact={true} element={<HostLogin />} />
        <Route path="/host/registerHotel" exact={true} element={<RegisterHotel />} />
        <Route path="/host/registerRoom" exact={true} element={<RegisterRoom />} />
        <Route path="/review/update" exact={true} element={<ReviewUpdate />} />
      </Routes>
    </div>
  );
};

export default App;
