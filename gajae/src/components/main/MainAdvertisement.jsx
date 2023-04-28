import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

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

  const renderCarouselItems = () => {
    return featuredItems.map((item, index) => (
      <Carousel.Item key={index}>
        <img
          src={item.imageSrc}
          alt=""
          className="d-block mx-auto featuredImg"
          style={{
            maxWidth: '1000px',
            maxHeight: '500px',
            objectFit: 'cover',
          }}
        />
        <Carousel.Caption>
          <h1>{item.title}</h1>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  };

  return (
    <div className="featured-Container">
      <Carousel
        interval={2000}
        pauseOnHover={true}
        controls={{
          iconPrev: <span className="carousel-control-prev-icon" />,
          iconNext: <span className="carousel-control-next-icon" />,
        }}
      >
        {renderCarouselItems()}
      </Carousel>
    </div>
  );
};

export default MainAdvertisement;
