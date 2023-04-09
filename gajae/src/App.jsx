import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BoardDetail from './components/board/BoardDetail';
import BoardInsert from './components/board/BoardInsert';
import BoardPage from './pages/board/BoardPage';
import HotelPage from './pages/hotel/HotelPage';
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';
import Mypage from './pages/mypage/Mypage';
import PropertyListPage from './pages/propertyList/PropertyListPage';
import ReviewBoradPage from './pages/reviewBoard/ReviewBoradPage';
import ReviewWritePage from './pages/reviewBoard/ReviewWritePage';
import SignUpPage from './pages/signup/SignUpPage';
import ReservationDetail from './components/Reservate/ReservationDetail';
import Payapge from './pages/pay/Payapge';
import InicisPay from './components/pay/InicisPay';
function App({ imageUploader }) {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact="true" element={<MainPage />} />
        <Route path="/login" exact={true} element={<LoginPage />} />
        <Route path="/signup" exact={true} element={<SignUpPage />} />
        <Route path="/mypage" exact={true} element={<Mypage />} />
        <Route path="/propertylist" element={<PropertyListPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/review" element={<ReviewBoradPage />} />
        <Route path="/review/write" element={<ReviewWritePage />} />
        <Route path="/reservate" element={<ReservationDetail />} />
        <Route path="/board" exact={true} element={<BoardPage />} />
        <Route path="/pay" exact={true} element={<Payapge />} />
        <Route path="/inicis" exact={true} element={<InicisPay />} />
        <Route path="/board/selectOne/*" exact={true} element={<BoardDetail />} />
        <Route path="/board/insert" exact={true} element={<BoardInsert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
