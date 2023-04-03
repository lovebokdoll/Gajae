import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import KakaoProfile from './api/kakao/KakaoProfile';
import KakaoRedirectHandler from './api/kakao/KakaoRedirectHandler';
import './App.css';
import BoardDetail from './components/board/BoardDetail';
import BoardInsert from './components/board/BoardInsert';
import SignUpTest from './components/login/SignUpTest';
import QNADetailPage from './components/qna/QNADetailPage';
import QNAInsertForm from './components/qna/QNAInsertForm';
import QNAListPage from './components/qna/QNAListPage';
import QNAUpdatePage from './components/qna/QNAUpdatePage';
import Toast from './components/toast/Toast';
import BoardPage from './pages/board/BoardPage';
import HotelPage from './pages/hotel/HotelPage';
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';
import Mypage from './pages/mypage/Mypage';
import PropertyListPage from './pages/propertyList/PropertyListPage';
import ReviewBoradPage from './pages/reviewBoard/ReviewBoradPage';
import ReviewWritePage from './pages/reviewBoard/ReviewWritePage';
import SignUpPage from './pages/signup/SignUpPage';

function App({ authLogic, imageUploader }) {
  const ss = sessionStorage;
  const dispatch = useDispatch();
  const toastStatus = useSelector((state) => state.toastStatus);

  return (
    <div style={{ height: '100vh' }}>
      {toastStatus.status && <Toast />}{' '}
      <Routes>
        <Route path="/" exact="true" element={<MainPage />} />
        {/* signup & signin */}
        <Route path="/signup" exact={true} element={<SignUpTest authLogic={authLogic} />} />
        <Route path="/login" exact={true} element={<LoginPage authLogic={authLogic} />} />
        <Route path="/signuptest" exact={true} element={<SignUpPage />} />
        <Route path="/mypage" exact={true} element={<Mypage />} />
        <Route path="/propertylist" element={<PropertyListPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/review" element={<ReviewBoradPage />} />
        <Route path="/review/write" element={<ReviewWritePage />} />
        <Route path="/board" exact={true} element={<BoardPage />} />
        <Route path="/board/selectOne/*" element={<BoardDetail />} />
        <Route path="/board/insert" exact={true} element={<BoardInsert />} />
        <Route path="/auth/kakao/callback" exact={true} element={<KakaoRedirectHandler />} />
        <Route path="/kakaoprofile" exact={true} element={<KakaoProfile />} />
        {/* qna */}
        <Route path="/qna/list" exact={true} element={<QNAListPage />} />
        <Route path="/qna/detail/:qna_bno" exact={true} element={<QNADetailPage />} />
        <Route path="/qna/insert" exact={true} element={<QNAInsertForm />} />
        <Route path="/qna/update" exact={true} element={<QNAUpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
