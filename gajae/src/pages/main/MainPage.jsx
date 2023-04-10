import React from 'react';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import MainAdvertisement from '../../components/main/MainAdvertisement';
import MainMailList from '../../components/main/MainMailList';
import MainProperty from '../../components/main/MainProperty';
import MainRecommandLoc from '../../components/main/MainRecommandLoc';
import MainSearchBar from '../../components/main/MainSearchBar';


const MainPage = () => {
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
