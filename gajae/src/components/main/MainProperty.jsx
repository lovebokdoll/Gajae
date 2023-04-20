import { Button, Card } from "react-bootstrap";
import "./MainProperty.css";

const MainProperty = () => {
  return (
    <>
    <div style={{fontSize:60}}> 당신이 원하는 숙소  바로 여기 게살몽땅</div>
    <div className="fp" >
    <Card style={{ width: '90rem',height:'600px'}}>
      <img src="./images/애기사진.jpg" alt="" className="fpImg" /> {/* 추가 */}
      <Card.Body>
        <div className="fpItem"> {/* 추가 */}
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <Button>8.9</Button>
            <span>Excellent</span>
          </div>
        </div>
        <Button variant="primary">구경하기</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '90rem' }}>
      <img src="./images/오션뷰.jpg" alt="" className="fpImg" /> {/* 추가 */}
      <Card.Body>
        <div className="fpItem"> {/* 추가 */}
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <Button>9.5</Button>
            <span>Excellent</span>
          </div>
        </div>
        <Button variant="primary">구경하기</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '90rem' }}>
      <img src="./images/오션뷰2.jpg" alt="" className="fpImg" /> {/* 추가 */}
      <Card.Body>
        <div className="fpItem"> {/* 추가 */}
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <Button>8.9</Button>
            <span>Excellent</span>
          </div>
        </div>
        <Button variant="primary">구경하기</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '90rem' }}>
      <img src="./images/칠.jpg" alt="" className="fpImg" /> {/* 추가 */}
      <Card.Body>
        <div className="fpItem"> {/* 추가 */}
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <Button>8.9</Button>
            <span>Excellent</span>
          </div>
        </div>
        <Button variant="primary">구경하기</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '90rem' }}>
      <img src="./images/칠.jpg" alt="" className="fpImg" /> {/* 추가 */}
      <Card.Body>
        <div className="fpItem"> {/* 추가 */}
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <Button>8.9</Button>
            <span>Excellent</span>
          </div>
        </div>
        <Button variant="primary">구경하기</Button>
      </Card.Body>
    </Card>
    </div>
          </>
  );
};

export default MainProperty;
