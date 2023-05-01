import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-bootstrap";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const MainAdvertisement = () => {
  const featuredItems = [
    {
      imageSrc: './images/침대.jpg',
      title: 'Seoul',
      link: '/propertylist/?P_ADDRESS=서울&ROOM_CAPACITY=1&startdate=2023-05-01&enddate=2023-05-01',
    },
    
    {
      imageSrc: './images/제주배경.jpg',
      title: 'Pusan',
      link: '/propertylist/?P_ADDRESS=부산&ROOM_CAPACITY=1&startdate=2023-05-01&enddate=2023-05-01',

    },
 
    {
      imageSrc: './images/한옥.png',
      title: 'Jeju ',
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
      <Carousel
        interval={2000}
        pauseOnHover={true}
        controls={{
          prevIcon: <FontAwesomeIcon icon={faChevronLeft} style={{ color: "black" }} />,
          nextIcon: <FontAwesomeIcon icon={faChevronRight} style={{ color: "black" }} />,
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
                  maxWidth: "1500px",
                  maxHeight: "500px",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
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

