import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './propertyCard.css';

const PropertyCard = ({ row }) => {
  
  const navigate = useNavigate();
  return (
    <>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <Link to="./hotel">
            <h1 className="siTitle"> {row.P_TITLE}</h1>
          </Link>
          <span className="siCheck">
            {' '}
            CHECKIN: {row.P_CHECKIN} CKECKOUT: {row.P_CHECKOUT}
          </span>
          <span className="siDistance">{row.P_ADDRESS}</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">Studio Apartment with Air conditioning</span>
          <span className="siFeatures">{row.ROOM_TYPE}</span>
          <span className="siCancelOpSubtitle">{row.ROOM_OPTION}</span>
          <span className="siCancelOp">{row.P_REFUND}</span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">{Number(row.ROOM_PRICE).toLocaleString() + '원'}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button
              className="siCheckButton"
              onClick={() => {
                navigate('/hotel');
              }}
            >
              See availability
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PropertyCard;