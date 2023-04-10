<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import KakaoProfile from './api/kakao/KakaoProfile';
import KakaoRedirectHandler from './api/kakao/KakaoRedirectHandler';
import NaverPay from './api/naver/NaverPay';
import './App.css';
import BoardDetail from './components/board/BoardDetail';
import BoardInsert from './components/board/BoardInsert';
import SignUpTest from './components/login/SignUpTest';
import Toast from './components/toast/Toast';
import BoardPage from './pages/board/BoardPage';
import HotelPage from './pages/hotel/HotelPage';
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';
import Mypage from './pages/mypage/Mypage';
import MyPaymentPage from './pages/mypage/MyPaymentPage';
import MyReservatiosPage from './pages/mypage/MyReservatiosPage';
import MyReviewPage from './pages/mypage/MyReviewPage';
import MyWishListPage from './pages/mypage/MyWishListPage';
import MyNotificationsPage from './pages/mypage/MyNotificationsPage';
import MySettings from './pages/mypage/MySettings';
import PropertyListPage from './pages/propertyList/PropertyListPage';
import ReviewBoradPage from './pages/reviewBoard/ReviewBoradPage';
import ReviewWritePage from './pages/reviewBoard/ReviewWritePage';

function App() {
  const toastStatus = useSelector((state) => state.toastStatus);

=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BoardDetail from "./components/board/BoardDetail";
import BoardInsert from "./components/board/BoardInsert";
import ScrollToComponent from "./components/scroll/ScrollToComponent";
import BoardPage from "./pages/board/BoardPage";
import HotelPage from "./pages/hotel/HotelPage";
import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";
import Mypage from "./pages/mypage/Mypage";
import PropertyListPage from "./pages/propertyList/PropertyListPage";
import ReviewBoradPage from "./pages/reviewBoard/ReviewBoradPage";
import ReviewWritePage from "./pages/reviewBoard/ReviewWritePage";
import SignUpPage from "./pages/signup/SignUpPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App({ imageUploader }) {
>>>>>>> origin/dahee_mac
  return (
    <div style={{ height: '100vh' }}>
      {toastStatus.status && <Toast />}{' '}
      <Routes>
        <Route path="/" exact="true" element={<MainPage />} />
        {/* signup & signin */}
        <Route path="/signup" exact={true} element={<SignUpTest />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" exact={true} element={<Mypage />} />
        <Route path="/propertylist" element={<PropertyListPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/review" element={<ReviewBoradPage />} />
        <Route path="/review/write" element={<ReviewWritePage />} />
        <Route path="/board" exact={true} element={<BoardPage />} />
<<<<<<< HEAD
        <Route path="/board/selectOne/*" element={<BoardDetail />} />
=======
        <Route
          path="/board/selectOne/*"
          exact={true}
          element={<BoardDetail />}
        />
>>>>>>> origin/dahee_mac
        <Route path="/board/insert" exact={true} element={<BoardInsert />} />
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
      </Routes>
    </div>
  );
}

export default App;
