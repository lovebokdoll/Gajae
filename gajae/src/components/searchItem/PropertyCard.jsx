import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './propertyCard.css';
import Cookies from 'js-cookie';

const PropertyCard = ({ row }) => {
  
  const navigate = useNavigate();


  //예약하기를 눌렀을 때 해당 숙소 정보 쿠키에 넣어서 넘겨주기
  const handleHotel = () => {
    Cookies.set('P_TITLE',row.P_TITLE)
    Cookies.set('P_ADDRESS',row.P_ADDRESS)
    Cookies.set('P_CHECKIN',row.P_CHECKIN)
    Cookies.set('P_CHECKOUT',row.P_CHECKOUT)
    Cookies.set('ROOM_PRICE',row.ROOM_PRICE)
    Cookies.set('P_ID',row.P_ID)
    navigate('/hotel');
  }

  return (
    <>
      <div className="searchItem" >
      <div class="image-container">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt=""
          className="siImg"
        />
      </div>

        <div className="siDesc">
          <Link to="./hotel" style={{textDecoration: "none"}}>
            <h1 className="siTitle"> {row.P_TITLE}</h1>
          </Link>
          <span className="siCheck">
            {' '}
            체크인 : {row.P_CHECKIN} 체크아웃 : {row.P_CHECKOUT}
          </span>
          <span className="siP_ADDRESS">{row.P_ADDRESS}</span>
          <span className="siTaxiOp">Free taxi</span>
          <span className="siROOM_TYPE">{row.ROOM_TYPE}</span>
          <span className="siROOM_OPTION">{row.ROOM_OPTION}</span>
          <span className="siP_REFUND">{row.P_REFUND}</span>
        </div>
        <div className="siDetails">
          <div className="siRanking">
            <button className='rankigbtn'>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">{Number(row.ROOM_PRICE).toLocaleString() + '원'}</span>
            <span className="siTaxes ">세금 및 수수료 포함</span>
            <button
              className="siCheckButton"
              onClick={handleHotel}
            >
              예약하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PropertyCard;