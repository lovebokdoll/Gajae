import React from 'react'

const NaverPay = () => {
    
  /*   var oPay = Naver.Pay.create({ //SDK Parameters를 참고 바랍니다.
        "mode" : "{#_mode}",
        "clientId": "{#_clientId}"
  });

  var elNaverPayBtn = document.getElementById("naverPayBtn");

  elNaverPayBtn.addEventListener("click", function() {
      oPay.open({ 
        "merchantUserKey": "{#_merchantUserKey}",
        "merchantPayKey": "{#_merchantPayKey}",
        "productName": "{#_productName}",
        "totalPayAmount": {#_totalPayAmount},
        "taxScopeAmount": {#_taxScopeAmount},
        "taxExScopeAmount": {#_taxExScopeAmount},
        "returnUrl": "{#_returnUrl}"
      });
  }); */
  return (
    <div>
      <input type="button" id="naverPayBtn" value="네이버페이 결제 버튼"/>
    </div>
  )
}

export default NaverPay
