import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KakaoMap from './api/kakao/KakaoMap';
import './App.css';
import HotelPage from './pages/hotel/HotelPage';
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';
import Mypage from './pages/mypage/Mypage';
import PropertyListPage from './pages/propertyList/PropertyListPage';
import ReviewBoradPage from './pages/reviewBoard/ReviewBoradPage';
import ReviewWritePage from './pages/reviewBoard/ReviewWritePage';
import SignUpPage from './pages/signup/SignUpPage';

function App({ imageUploader }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<MainPage />} />
        <Route path="/login" exact="true" element={<LoginPage />} />
        <Route path="/signup" exact="true" element={<SignUpPage />} />
        <Route path="/mypage" exact="true" element={<Mypage />} />
        <Route path="/propertylist" element={<PropertyListPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/review" element={<ReviewBoradPage />} />
        <Route path="/review/write" element={<ReviewWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
