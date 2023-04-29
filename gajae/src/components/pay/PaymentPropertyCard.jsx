import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { propertyListDB } from '../../service/database';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const PaymentPropertyCard = () => {
  const [row, setRow] = useState({});

  useEffect(() => {
    const getProperty = async () => {
      const propertyData = {
        P_ID: 4,
        ROOM_ID: 1,
      };
      const response = await propertyListDB(propertyData);
      console.log(response.data[0]);
      setRow(response.data[0]);
    };
    getProperty();
  }, []);

  const StarRating = ({ numStars }) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} color="yellow" />);
    }

    return <>{stars}</>;
  };

  return (
    <>
      <div className="card" style={{ width: '782px', height: '17rem', backgroundColor: 'rgb(214,230,245)' }}>
        <div className="card-body" style={{ width: '782px'}} >
          <div style={{ backgroundColor:'white',width: '782px', height: '222px', display: 'flex', alignItems: 'center',borderRadius:'10px' }}>
            <div class="image-container">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
                className="siImg"
              />
            </div>
            &nbsp; &nbsp;
            <div>
              <p>
                호텔 <StarRating numStars={row.P_STAR} />
              </p>
              <p>{row.P_TITLE}</p>
              <p>{row.P_ADDRESS}</p>
              <p>뛰어난 위치 - (평점)</p>
              <p>
                <FontAwesomeIcon icon={faUtensils} />
                &nbsp; 레스토랑
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <br />
    </>
  );
};

export default PaymentPropertyCard;
