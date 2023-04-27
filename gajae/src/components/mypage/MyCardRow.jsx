import { faCalendarAlt, faCreditCardAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { MyCardRows } from '../../pages/mypage/styled-payment';
import { cardDelete } from '../../service/card/card';
import '../mypage/mypage_css/cardDeleteModal.css';
import '../mypage/mypage_css/myCardRow.css';

const MyCardRow = ({ card }) => {
  const [cardRow, setCardRow] = useState();
  const [showModal, setShowModal] = useState(false); // 모달 창을 보여줄지 여부를 관리하는 state

  useEffect(() => {
    setCardRow(card);
  }, []);

  const cardInfoDelete = async (event) => {
    event.preventDefault();
    console.log(cardRow);
    const cardDeleteResponse = await cardDelete(cardRow);
    console.log(cardDeleteResponse);
    window.location.reload();
  };

  return (
    <>
      <MyCardRows>
        <div class="payment-info">
          <div class="payment-title">결제정보</div>
          <div class="card-info">
            <div class="card-number">
              <FontAwesomeIcon icon={faCreditCardAlt} /> 카드번호:{card.CARD_NUMBER}
            </div>
            <div class="expiration-date"><FontAwesomeIcon icon={faCalendarAlt} /> 유효기간:{card.CARD_EXP}</div>
          </div>
          <div class="delete-btn">
            <button onClick={() => setShowModal(true)}>삭제</button>
            {/*  <button onClick={cardInfoDelete}>삭제</button> */}
          </div>
        </div>
        {/* 모달 창 */}
        {showModal && (
          <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">카드 삭제</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">선택하신 카드를 삭제하시겠습니까?</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={cardInfoDelete}>
                    삭제
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    취소
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </MyCardRows>
    </>
  );
};

export default MyCardRow;
