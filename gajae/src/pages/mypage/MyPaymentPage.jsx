import { faComment, faCreditCard, faHeart, faHistory, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import HeaderNav1 from '../../components/header/HeaderNav1';
import MyCardList from '../../components/mypage/MyCardList';
import { cardInformation, cardInsert } from '../../service/card/card';
import './paymentpage.css';
import {
  MSCLeftDIV,
  MSCRightDIV,
  MSContainer,
  MSPTComment,
  MSPTTitle,
  MyPageLinkMove,
  MySettingsFlexByRow,
  MySettingsPageTitle,
  SignOutButton
} from './styled-mypage';
import {
  CardButton,
  CardDiv,
  CardEXPInput,
  CardForm,
  CardInput,
  CardLabel,
  CardSaveButton,
  CardSettingsRow
} from './styled-payment';

const MyPaymentPage = () => {
  const [isCardAdd, setIsCardAdd] = useState(false);
  const [localID, setLocalID] = useState('');
  const navigate = useNavigate();

  const [cardInfo, setCardInfo] = useState({
    cardOwner: '',
    cardNumber: '',
    cardExpiryMonth: '',
    cardExpiryYear: '',
  });

  const cardInfoInsert = async () => {
    const cardInformation = {
      USER_ID: localID,
      CARD_OWNER: cardInfo.cardOwner,
      CARD_NUMBER: cardInfo.cardNumber,
      CARD_EXP: `${cardInfo.cardExpiryMonth}-${cardInfo.cardExpiryYear}`,
    };

    const cardInsertResponse = await cardInsert(cardInformation);
    console.log(cardInsertResponse);
    if (cardInsertResponse) {
      window.location.reload();
    } else {
      alert('카드 입력 실패');
    }
  };

  const [cards, setCards] = useState({
    cardNumber: '',
    cardExpiryMonth: '',
    cardExpiryYear: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardInfo((prevState) => ({ ...prevState, [name]: value }));
    console.log(cardInfo);
  };

  useEffect(() => {
    const tempID = window.localStorage.getItem('userId');
    if (tempID === null) {
      navigate('/');
    } else if (tempID != null) {
      setLocalID(tempID);
    }
    const cardOwner = {
      USER_ID: tempID,
    };
    const getCreditCard = async () => {
      const response = await cardInformation(cardOwner);
      console.log(response.data);
      setCards(response.data);
    };
    getCreditCard();
  }, []);

  return (
    <>
      <HeaderNav1 />
      <MSContainer>
        <MSCLeftDIV>
          {' '}
          <Nav defaultActiveKey="/home" className="flex-column">
            <MyPageLinkMove to="/mypage/settings">
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faUser} />
              </span>
              개인 정보
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/reservations">
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faHistory} />
              </span>
              예약내역
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/review">
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faComment} />
              </span>
              이용후기
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/payment">
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faCreditCard} />
              </span>
              결제정보
            </MyPageLinkMove>
            <MyPageLinkMove to="/mypage/wishlist">
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              위시리스트
            </MyPageLinkMove>
            <SignOutButton>
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              로그아웃
            </SignOutButton>
          </Nav>
        </MSCLeftDIV>
        <MSCRightDIV>
          <MySettingsFlexByRow>
            <MySettingsPageTitle>
              <MSPTTitle>결제정보</MSPTTitle>
              <MSPTComment>더욱 간편한 예약을 위해 결제 수단을 안전하게 추가하거나 삭제하세요.</MSPTComment>
            </MySettingsPageTitle>
          </MySettingsFlexByRow>
          <MyCardList cards={cards} />
          <CardSettingsRow>
            {!isCardAdd && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ display: 'inline-block', width: '200px', marginLeft: '23%' }}>다른 카드로 결제</span>
                <Button onClick={() => setIsCardAdd(true)}>카드추가</Button>
              </div>
            )}
            {isCardAdd && (
              <>
                <CardDiv>
                  <CardButton
                    onClick={() => {
                      setIsCardAdd(false);
                    }}
                  >
                    취소
                  </CardButton>{' '}
                </CardDiv>
                <CardForm>
                  <CardLabel>카드 소유주 성명</CardLabel>
                  <CardInput
                    type="text"
                    name="cardOwner"
                    value={cardInfo.cardOwner}
                    onChange={handleInputChange}
                    pattern="[a-zA-Z가-힣\s]+"
                    title="영어 또는 한글만 입력 가능합니다"
                  ></CardInput>
                  <CardLabel>카드 번호</CardLabel>
                  <CardInput
                    type="text"
                    name="cardNumber"
                    value={cardInfo.cardNumber}
                    onChange={handleInputChange}
                    pattern="[0-9]{15,16}"
                    maxLength="16"
                    title="15~16자리의 숫자만 입력 가능합니다"
                  ></CardInput>
                  <CardLabel>유효기간 (월)</CardLabel>
                  <CardEXPInput
                    type="text"
                    name="cardExpiryMonth"
                    value={cardInfo.cardExpiryMonth}
                    onChange={handleInputChange}
                    pattern="[0-9]{1,2}"
                    title="숫자 2자리만 입력 가능합니다"
                    maxLength="2"
                  ></CardEXPInput>
                  <CardLabel>유효기간 (연)</CardLabel>
                  <CardEXPInput
                    type="text"
                    name="cardExpiryYear"
                    value={cardInfo.cardExpiryYear}
                    onChange={handleInputChange}
                    pattern="[0-9]{4}"
                    title="숫자 4자리만 입력 가능합니다"
                    maxLength="4"
                  ></CardEXPInput>
                  <CardSaveButton type="button" onClick={cardInfoInsert}>
                    저장
                  </CardSaveButton>
                </CardForm>
              </>
            )}
          </CardSettingsRow>
        </MSCRightDIV>
      </MSContainer>
      <Footer />
    </>
  );
};

export default MyPaymentPage;
