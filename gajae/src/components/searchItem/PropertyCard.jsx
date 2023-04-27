import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './propertyCard.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Cookies from 'js-cookie';

const PropertyCard = ({ row }) => {
  console.log(row);
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };
  //예약하기를 눌렀을 때 해당 숙소 이름, 인원 수, 주소, 체크인아웃, 가격, ID 담아서 이동
  const handleHotel = () => {
    Cookies.set('p_title', row.P_TITLE);
    // 해당 숙소 주소이므로 resAddress로 이름 수정
    Cookies.set('resAddress', row.P_ADDRESS);
    Cookies.set('p_checkin', row.P_CHECKIN);
    Cookies.set('p_checkout', row.P_CHECKOUT);
    Cookies.set('p_id', row.P_ID);
    navigate('/hotel');
  };

  return (
    <>
      <div style={{ position: 'relative' }}></div>
      <div className="searchItem">
        <div class="image-container">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt=""
            className="siImg"
          />
          <button
            onClick={handleLike}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            {isLiked ? <FaHeart size={27} color="red" /> : <FaRegHeart size={27} color="#8c8c8c" />}
          </button>
        </div>
        <div className="siDesc">
          <Link to="./hotel" style={{ textDecoration: 'none' }} />

          <Link to="./hotel" style={{ textDecoration: 'none' }}>
            <h1 className="siTitle"> {row.P_TITLE}</h1>
          </Link>
          <span className="siCheck">
            {' '}
            체크인 : {row.P_CHECKIN} <br />
            {/* 텍스트 정렬안되서 수정*/}
            체크아웃 : {row.P_CHECKOUT}
          </span>
          <span className="siP_ADDRESS">{row.P_ADDRESS}</span>
          <span className="siTaxiOp">Free taxi</span>
          <span className="siROOM_TYPE">{row.ROOM_TYPE}</span>
          <span className="siROOM_OPTION">{row.ROOM_OPTION}</span>
          <span className="siP_REFUND">{row.P_REFUND}</span>
        </div>
        <div className="siDetails">
          <div className="siRanking">
            <button className="rankigbtn">{row.REVIEW_AVERAGE}</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">{Number(row.ROOM_PRICE).toLocaleString() + '원'}</span>
            <span className="siTaxes ">세금 및 수수료 포함</span>
            <button className="siCheckButton" onClick={handleHotel}>
              예약하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PropertyCard;
