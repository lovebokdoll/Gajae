import './footer.css';

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="fLists">
          <ul className="fList">
            <li className="fListItem">국가</li>
            <li className="fListItem">지역</li>
            <li className="fListItem">도시</li>
            <li className="fListItem">공항</li>
            <li className="fListItem">호텔</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Home </li>
            <li className="fListItem">아파트 </li>
            <li className="fListItem">리조트 </li>
            <li className="fListItem">빌라</li>
            <li className="fListItem">호텔</li>
            <li className="fListItem">게스트하우스</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">이용후기</li>
            <li className="fListItem">여행 커뮤니티 </li>
            <li className="fListItem">Unique places to stay </li>
            <li className="fListItem">Unpacked: Travel articles </li>
            <li className="fListItem">Seasonal and holiday deals </li>
          </ul>
          <ul className="fList">
            <li className="fListItem">렌트 </li>
            <li className="fListItem">Flight Finder</li>
            <li className="fListItem">Restaurant reservations </li>
            <li className="fListItem">여행사</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">고객센터</li>
            <li className="fListItem">Partner Help</li>
            <li className="fListItem">Careers</li>
            <li className="fListItem">Sustainability</li>
            <li className="fListItem">Press center</li>
            <li className="fListItem">Safety Resource Center</li>
            <li className="fListItem">Investor relations</li>
            <li className="fListItem">Terms & conditions</li>
          </ul>
        </div>
        <div className="footerText" style={{ fontSize: 18, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ marginRight: 10 }}>
            Copyright ©2023
            <span style={{}}>GAJAE.COM</span>
          </span>
          <div style={{ display: 'flex' }}>
            <img src="/images/부킹닷컴.png" alt="" style={{ marginRight: 10 }} />
            <img src="/images/priceline.png" alt="" style={{ marginRight: 10 }} />
            <img src="/images/카약.png" alt="" style={{ marginRight: 10 }} />
            <img src="/images/아고다.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
