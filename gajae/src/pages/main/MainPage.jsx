import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import MainAdvertisement from '../../components/main/MainAdvertisement';
import MainMailList from '../../components/main/MainMailList';
import MainProperty from '../../components/main/MainProperty';
import MainRecommandLoc from '../../components/main/MainRecommandLoc';
import MainSearchBar from '../../components/main/MainSearchBar';
import Popup from './Popup';
import CovidInfo from '../../components/main/CovidInfo';
import NextTripCard from '../../components/main/NextTripCard';

const MainPage = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName(window.localStorage.getItem('userName'));
  }, []);

  const handlePopupClose = () => {
    
  };

  return (
    <>
      <HeaderNav1 />
      <MainSearchBar />
      <CovidInfo />
      <MainAdvertisement />
      <MainRecommandLoc />
      <MainProperty />
      <NextTripCard userName={userName} />
      <MainMailList />
      <Footer />
      <Popup onClose={handlePopupClose} />
    </>
  );
};

export default MainPage;
