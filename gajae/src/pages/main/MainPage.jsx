import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import MainAdvertisement from '../../components/main/MainAdvertisement';
import MainMailList from '../../components/main/MainMailList';
import MainProperty from '../../components/main/MainProperty';
import MainRecommandLoc from '../../components/main/MainRecommandLoc';
import MainSearchBar from '../../components/main/MainSearchBar';

const MainPage = () => {
  const [kakaoNickname, setKakaoNickname] = useState();

  const tempNick = useParams();

  return (
    <>
      <HeaderNav1 />
      <MainSearchBar />
      <MainAdvertisement />
      <MainRecommandLoc />
      <MainProperty />
      <MainMailList />
      <Footer />
    </>
  );
};

export default MainPage;
