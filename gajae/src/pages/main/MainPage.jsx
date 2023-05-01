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
import Cookies from 'js-cookie';

const MainPage = () => {
  const [userName, setUserName] = useState();
  const [destination, setDestination] = useState('');

  useEffect(() => {
    const destinationValue = Cookies.get('destination');
    console.log('destinationValue ===>', destinationValue);
    setDestination(destinationValue);
    setUserName(window.localStorage.getItem('userName'));
  }, []);

  console.log('destination ===>', destination);
  const handlePopupClose = () => {
    
  };

  return (
    <>
      <HeaderNav1 />
      <MainSearchBar destination={destination} />
      <CovidInfo />
      <MainAdvertisement />
      <MainRecommandLoc />
      <MainProperty />
      <NextTripCard userName={userName} />
      <MainMailList />
      <div style={{}}></div>
      <Footer />
      <Popup onClose={handlePopupClose} />
    </>
  );
};

export default MainPage;
