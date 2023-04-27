import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainAdvertisement.css';

const MainAdvertisement = () => {
  const featuredItems = [
    {
      imageSrc: './images/침대.jpg',
      title: 'Seoul',
    },
    {
      imageSrc: './images/제주배경.jpg',
      title: 'Pusan',
    },
    {
      imageSrc: './images/제주숙소1.jpg',
      title: 'Jeju',
    },
   
    {
      imageSrc: './images/부산.jpg',
      title: 'Busan',
    },
  
    {
      imageSrc: './images/제주야경.jpg',
      title: 'Seoul',
    },
    {
      imageSrc: './images/한옥.png',
      title: 'Jeju 🍊',
    },
    {
      imageSrc: './images/서울하야트.jpg',
      title: 'Pusan',
    },
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const sliderRef = useRef(null);

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="featured-Container">
      <div className="featured">
        <Slider ref={sliderRef} {...sliderSettings}>
          {featuredItems.map((item, index) => (
            <div className="featuredItem" key={index}>
              <img src={item.imageSrc} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default MainAdvertisement;
