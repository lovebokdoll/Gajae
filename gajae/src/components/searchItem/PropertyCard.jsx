import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { React, useEffect, useState } from 'react';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setToastMessage } from '../../redux/toastStatus/action';
import { wishlistDeactivate, wishlistInsert } from '../../service/wishlist/wishlist';
import './propertyCard.css';

const PropertyCard = ({ row, isWishlistActive = false }) => {
  console.log('isWishlistActive ===>', isWishlistActive);
  const dispatch = useDispatch();
  console.log(row);
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(isWishlistActive);
  useEffect(() => {}, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log('row.P_ID ===>', row.P_ID);
    console.log(isLiked);

    // false이면 wishlist Insert / true wishlist delete
    if (isLiked === true) {
      console.log('isLiked is true');
      const wishlistParameter = {
        USER_ID: window.localStorage.getItem('userId'),
        P_ID: row.P_ID,
      };
      const wlDeactivate = async () => {
        const wlDeactivateResponse = await wishlistDeactivate(wishlistParameter);
        console.log('wlDeactivateResponse ===>', wlDeactivateResponse);
        dispatch(setToastMessage('위시리스트에서 삭제되었습니다.'));
      };
      wlDeactivate();
    } else if (isLiked === false) {
      console.log('isLiked is false');
      const wishlistParameter = {
        USER_ID: window.localStorage.getItem('userId'),
        P_ID: row.P_ID,
      };
      console.log('wishlistParameter ===>', wishlistParameter);
      const wlInsert = async () => {
        const wishlistResponse = await wishlistInsert(wishlistParameter);
        console.log('wishlistResponse ===>', wishlistResponse);
        dispatch(setToastMessage('위시리스트에 저장되었습니다.'));
      };
      wlInsert();
    }
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

  const Toast = Swal.mixin({
    toast: true,
    position: 'center-center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  //복사 됨 모달창
  const copyPageUrl = () => {
    const copyText = window.location.origin + '/hotel';
    navigator.clipboard.writeText(copyText);
    Toast.fire({
      icon: 'success',
      title: 'Copy가 완료되었습니다.',
      timer: 2000,
      timerProgressBar: false,
    });
  };

  return (
    <>
      <div style={{ position: 'relative' }}></div>
      <div className="pc_searchItem">
        <div class="pc_image-container">
          <img src={row.P_PHOTO} alt="" className="siImg" />
          <button className="wishlistButton" onClick={handleLike}>
            {isLiked ? <FaHeart size={27} color="red" /> : <FaRegHeart size={27} style={{ color: 'rgba(0, 0, 0, 0.5)' }} />}
          </button>
        </div>
        <div className="siDesc">
          <Link to="./hotel" style={{ textDecoration: 'none' }} />
          <Link to="./hotel" style={{ textDecoration: 'none' }}>
            <h1 className="siTitle">
              {' '}
              {row.P_TITLE}&nbsp;
              {Array.from({ length: parseInt(row.P_STAR) }, (_, i) => (
                <span key={i} role="img" aria-label="star">
                  <FontAwesomeIcon icon="fa-solid fa-star" style={{ color: '#FEBB02', fontSize: '0.9rem' }} />
                </span>
              ))}
            </h1>
          </Link>
          <span className="siCheck">
            {' '}
            체크인: {row.P_CHECKIN}부터, 체크아웃: {row.P_CHECKOUT}까지
          </span>
          <span className="siP_ADDRESS">{row.P_ADDRESS}</span>
          <span className="siROOM_TYPE">{row.ROOM_TYPE.replaceAll(',', ',\u00A0')}</span>
          <span className="siROOM_OPTION">{row.ROOM_OPTION}</span>
          <span className="siP_REFUND">{row.P_REFUND}</span>
          <span className="siTaxiOp">Free taxi</span>
        </div>
        <div className="siDetails">
          <div className="siRanking">
            <div>
              <button id="copybtn" onClick={copyPageUrl}>
                <FaShareAlt />
              </button>
            </div>{' '}
            <button id="rankigbtn" style={{ width: '39px', height: '39px', padding: '0px 0px 0px 0px', margin: '0px 0px 0px 5px' }}>
              {row.REVIEW_AVERAGE}
            </button>
          </div>
          <div className="siDetailTexts">
            <span className="siTaxes ">세금(TAX) 및 수수료 포함</span>
            <span className="siPrice">{Number(row.ROOM_PRICE).toLocaleString() + '원'}</span>
            <button className="siCheckButton" onClick={handleHotel}>
              예 약 하 기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PropertyCard;
