import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import MainAdvertisement from '../../components/main/MainAdvertisement';
import MainMailList from '../../components/main/MainMailList';
import MainProperty from '../../components/main/MainProperty';
import MainRecommandLoc from '../../components/main/MainRecommandLoc';
import MainSearchBar from '../../components/main/MainSearchBar';
import Popup from './Popup';


const MainPage = () => {
  const [kakaoNickname, setKakaoNickname] = useState();

  const tempNick = useParams();

  const handlePopupClose = () => {
    // do something when popup is closed
  }

  return (
    <>
      <HeaderNav1 />
      <MainSearchBar />
      <MainAdvertisement />
      <MainRecommandLoc />
      <MainProperty />
      <MainMailList />
      <Footer />
      <Popup onClose={handlePopupClose} />
    </>
  );
};

export default MainPage;
