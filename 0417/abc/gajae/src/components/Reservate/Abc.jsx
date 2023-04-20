import React from 'react'

const Abc = () => {
  const bookerName = localStorage.getItem('bookerName');// 결제 페이지로 넘기는 이름 
  const confirmMsg = `예약자 이름: ${bookerName}\n예약자 이름이 맞습니까?`;//버튼 클릭시 확인메시지 

   const userNickname = localStorage.getItem('user_nickname');//00님 얼마 안남았습니다. 을 위한 getItem
  const userEmail = localStorage.getItem('user_email');//
  //LOCALSTORAGE에서 USER정보를 꺼낸다.
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
  //const checkin = Cookies.get("checkin");
  //const checkout = Cookies.get("checkout");// 다빈이 넘겨준 쿠키값호출 


  const roomTypes = Cookies.get("roomtype");
  const selectedNumber = Cookies.get("selectedNumber");
  const totalPrice = Cookies.get("totalPrice");
  console.log(roomTypes); // roomtype 쿠키의 값 콘솔창에 출력
  console.log(selectedNumber); // selectedNumber 쿠키의 값 콘솔창에 출력
  console.log(totalPrice); // totalPrice 쿠키의 값 콘솔창에 출력->안찍히는듯 왜? 안 찍힐까  
  return (
    <>
    
    </>
  )
}

export default Abc