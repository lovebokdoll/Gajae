import React from 'react'

const MyResRow = () => {
  return (
    <div>
          <ReviewList>
          {reservationList.slice(start, end).map((review, index) => (
            <ReviewItem key={index}>
              {/* 수정 삭제 버튼이 있는 컴포넌트 */}
              <BtnWrapper>
                <DropdownToggle review={review} onDelete={resDelete} />
              </BtnWrapper>
              <ReviewWrapper>
                <div className="hotelInfoFirst">
                  <div className="hotelInfoDiv">
                    <span>
                      <img className="resHotelImage" src="/images/Flag_of_South_Korea.png" alt="placeholder_image" />
                    </span>
                    <div className="hotelName">
                      숙소이름 <span>결제금액</span>
                    </div>
                    <p className="resDate">예약날짜(예약내역테이블에서가져오기)</p>
                  </div>
                  <hr />
                </div>
              </ReviewWrapper>
            </ReviewItem>
          ))}
        </ReviewList>
    </div>
  )
}

export default MyResRow
