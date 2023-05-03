import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MainAdvertisement = () => {
  const featuredItems = [
    {
      imageSrc: './images/침대.jpg',
      title: 'Pusan',
      link: '/propertylist/?P_ADDRESS=서울&ROOM_CAPACITY=1&startdate=2023-05-01&enddate=2023-05-01',
    },

    {
      imageSrc: './images/제주배경.jpg',
      title: 'Jeju',
      link: '/propertylist/?P_ADDRESS=부산&ROOM_CAPACITY=1&startdate=2023-05-01&enddate=2023-05-01',
    },

    {
      imageSrc: './images/한옥.png',
      title: 'Seoul ',
      link: '/propertylist/?P_ADDRESS=제주&ROOM_CAPACITY=1&startdate=2023-05-01&enddate=2023-05-01',
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
            maxWidth: '1200px',
            maxHeight: '500px',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
        <Carousel.Caption>
          <h1>{item.title}</h1>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  };

  return (
    <div className="featured-Container" style={{ zIndex: '0' }}>
      <div
        className="mainSearchBar간격"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '160px',
          margin: '0px 0px 30px 0px',
          fontSize: '2.0em',
        }}
      >
        {window.localStorage.getItem('userNickname')
          ? `${window.localStorage.getItem('userNickname')} 님, 다음 여행은 어디로?`
          : '여행객 님, 다음 여행은 어디로?'}
        <br />전 세계 Genius 단독 특가를 찾아보세요!
      </div>

      <Carousel
        interval={2000}
        pauseOnHover={true}
        controls={{
          prevIcon: <FontAwesomeIcon icon={faChevronLeft} style={{ color: 'black' }} />,
          nextIcon: <FontAwesomeIcon icon={faChevronRight} style={{ color: 'black' }} />,
        }}
      >
        {featuredItems.map((item, index) => (
          <Carousel.Item key={index}>
            <a href={`http://localhost:3000${item.link}`}>
              <img
                src={item.imageSrc}
                alt=""
                className="d-block mx-auto featuredImg"
                style={{
                  maxWidth: '1500px',
                  maxHeight: '500px',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </a>
            <Carousel.Caption>
              <h1>{item.title}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default MainAdvertisement;