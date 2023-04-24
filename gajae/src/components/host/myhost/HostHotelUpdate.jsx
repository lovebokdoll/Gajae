import React, { useCallback, useEffect, useRef, useState } from "react";
import { ContainerDiv, FormDiv, HeaderDiv } from "../../../style/FormStyle";
import Footer from "../../../components/footer/Footer";
import { Form, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageUpload from "../../../components/review/ImageUpload";
import HostHeaderNav from "../HostHeaderNav";
import {
  hostHotelDetailDB,
  hosthotelUpdateDB,
} from "../../../service/hostLogic";
import { FormCheck } from "react-bootstrap";
export const HostHotelUpdate = () => {
  const param = useLocation();
  const hotelNumber = new URLSearchParams(param.search).get("hotel_id");
  console.log("p_id=" + hotelNumber);
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  const [postal, setPostal] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState(0);
  const [overView, setOverView] = useState("");
  const [scale, setScale] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [refund, setRefund] = useState("");
  const [roomtype, setRoomtype] = useState("");
  const [updateRoomtype, setUpdateRoomType] = useState({
    ROOM_ID: "",
  });

  const textareaRef = useRef(null);
  useEffect(() => {
    const myHotel = async () => {
      const hotel = {
        P_ID: hotelNumber,
      };
      const res = await hostHotelDetailDB(hotel);
      console.log(res.data);
      const temp = JSON.stringify(res.data); // 문자열 전화
      const jsonDoc = JSON.parse(temp); // 배열 접근 처리
      console.log(jsonDoc);
      //룸타입만 필터링
      const filterRoomtype = jsonDoc.map((Object) => Object.ROOM_TYPE);
      console.log(filterRoomtype);
      setTitle(jsonDoc[0].P_TITLE);
      setStar(jsonDoc[0].P_STAR);
      setPostal(jsonDoc[0].P_POSTAL);
      setAddress(jsonDoc[0].P_ADDRESS);
      setTel(jsonDoc[0].P_TEL);
      setRoomtype(filterRoomtype);
      setOverView(jsonDoc[0].P_OVERVIEW);
      setScale(jsonDoc[0].P_SCALE);
      setCheckIn(jsonDoc[0].P_CHECKIN);
      setCheckOut(jsonDoc[0].P_CHECKOUT);
      setRefund(jsonDoc[0].P_REFUND);
      setImageUrl(jsonDoc[0].P_PHOTO);
    };
    myHotel();
  }, []);
  //  console.log(imageUrl);
  const handleTitle = useCallback((value) => {
    setTitle(value);
  }, []);

  const handleStar = useCallback((value) => {
    setStar(value);
  }, []);

  const handleTel = useCallback((value) => {
    setTel(value);
  }, []);
  const handleOverView = useCallback((value) => {
    setOverView(value);
  }, []);
  const handleScale = useCallback((value) => {
    setScale(value);
  }, []);
  const handleCheckIn = useCallback((value) => {
    setCheckIn(value);
  }, []);
  const handleCheckOut = useCallback((value) => {
    setCheckOut(value);
  }, []);
  const handleRefund = useCallback((value) => {
    setRefund(value);
  }, []);

  const handleRoomType = (e) => {
    console.log(e);
    const roomId = e.target.id;
    const selectedroomtype = e.target.labels[0].innerText;
    const isChecked = e.target.checked;
    setUpdateRoomType((updateRoomtype) => ({
      ROOM_ID: isChecked
        ? [...updateRoomtype.ROOM_ID, roomId]
        : //value에 해당하는 효소를 제외하고 남은 요소들로 새로운 배열을 만든다.
          updateRoomtype.ROOM_ID.filter((val) => val !== roomId),
    }));
    console.log(updateRoomtype);
    console.log(roomtype);
  };
  useEffect(() => {
    console.log(updateRoomtype);
  }, [updateRoomtype]);

  const hotelUpdate = async () => {
    if (title.trim === "||content.trim()===")
      return alert("게시글 수정에 실패했습니다. ");
    const review = {
      P_ID: hotelNumber,
      P_TITLE: title,
      P_STAR: star,
      P_POSTAL: postal,
      P_PHOTO: imageUrl,
      P_ADDRESS: address,
      P_TEL: tel,
      P_OVERVIEW: overView,
      P_SCALE: scale,
      P_CHECKIN: checkIn,
      P_CHECKOUT: checkOut,
      P_REFUND: refund,
      ROOM_ID: updateRoomtype.ROOM_ID,
    };
    const res = await hosthotelUpdateDB(review);
    if (!res.data) return alert("게시글 수정에 실패하였습니다.");
    window.location.href = "/host/myhotelpage";
  };

  const getImage = (image) => {
    setImageUrl(image);
  };

  return (
    <>
      <HostHeaderNav />
      <ContainerDiv>
        <div
          style={{
            textAlign: "center",
            margin: "50px 0",
            border: "1px solid",
            padding: "10px",
            backgroundColor: "white",
          }}
        >
          <span style={{ margin: "10%" }}>
            <FontAwesomeIcon icon="fa-solid fa-door-open" />
            호텔 수정페이지
          </span>
        </div>
        <FormDiv>
          <div style={{ width: "100%", maxWidth: "2000px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "3px",
              }}
            >
              <h5>호텔명</h5>
              <Custom_btn type="button" onClick={hotelUpdate}>
                수정완료
              </Custom_btn>
            </div>
            <Textarea
              id="dataset-title"
              type="text"
              value={title}
              maxLength="50"
              placeholder="제목을 입력하세요."
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
              onChange={(e) => {
                handleTitle(e.target.value);
              }}
            />
            {/* 룸타입 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            />
            <h5>룸타입</h5>
            <h6>기존 룸타입</h6>
            <Textarea
              id="dataset-title"
              type="text"
              value={roomtype}
              disabled
              maxLength="50"
              placeholder="제목을 입력하세요."
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
            />

            <h6>룸타입을 추가하세요</h6>
            <form>
              {[
                { label: "스위트룸", value: "1" },
                { label: "트윈룸", value: "2" },
                { label: "싱글룸", value: "3" },
                { label: "트리플룸", value: "4" },
                { label: "디럭스룸", value: "5" },
                { label: "로얄", value: "6" },
                { label: "스탠다드 싱글", value: "7" },
                { label: "스탠다드 더블", value: "8" },
                { label: "슈페리어 트윈룸", value: "9" },
                { label: "슈페리어 싱글룸", value: "10" },
              ].map((type) => (
                <div key={`ROOM_TYPE-${type.value}`} className="mb-1">
                  <FormCheck
                    type="checkbox"
                    id={`${type.value}`}
                    label={type.label}
                    // checked={updateRoomtype.includes(type.value)}
                    onClick={handleRoomType}
                  />
                </div>
              ))}
            </form>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            />
            <h5>성급</h5>
            <Textarea
              id="dataset-title"
              type="text"
              value={star}
              maxLength="50"
              placeholder="성급을 입력하세요."
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
              onChange={(e) => {
                handleStar(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h6>
                <i className="fa-regular fa-face-smile"></i>
                전화번호
              </h6>
            </div>
            <Textarea
              id="dataset-bad"
              ref={textareaRef}
              value={tel}
              maxLength="50"
              placeholder="수정하실 전화번호를 입력해주세요"
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
              onChange={(e) => {
                handleTel(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h6>
                <i className="fa-regular fa-face-smile"></i>
                호텔 설명
              </h6>
            </div>
            <Textarea
              id="dataset-bad"
              ref={textareaRef}
              value={overView}
              maxLength="50"
              placeholder="호텔에 대해 설명해 주세요"
              style={{
                width: "100%",
                height: "150px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
              onChange={(e) => {
                handleOverView(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h6>
                <i className="fa-regular fa-face-smile"></i>
                호텔 규모
              </h6>
            </div>
            <Textarea
              id="dataset-bad"
              ref={textareaRef}
              value={scale}
              maxLength="50"
              placeholder="호텔의 규모를 수정해주세요"
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
              onChange={(e) => {
                handleScale(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h6>
                <i className="fa-regular fa-face-smile"></i>
                호텔 체크인
              </h6>
            </div>
            <Textarea
              id="dataset-bad"
              ref={textareaRef}
              value={checkIn}
              maxLength="50"
              placeholder="호텔의 체크인시간을 수정해주세요"
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
              onChange={(e) => {
                handleCheckIn(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h6>
                <i className="fa-regular fa-face-smile"></i>
                호텔 체크아웃
              </h6>
            </div>
            <Textarea
              id="dataset-bad"
              ref={textareaRef}
              value={checkOut}
              maxLength="50"
              placeholder="호텔의 체크인시간을 수정해주세요"
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
              onChange={(e) => {
                handleCheckOut(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h6>
                <i className="fa-regular fa-face-smile"></i>
                호텔 환불정책
              </h6>
            </div>
            <Textarea
              id="dataset-bad"
              ref={textareaRef}
              value={refund}
              maxLength="50"
              placeholder="호텔의 환불규정을 수정해주세요"
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "3px",
              }}
              onChange={(e) => {
                handleRefund(e.target.value);
              }}
            />
            <hr />
            <div
              style={{
                display: "block",
                border: "1px solid lightGray",
                borderRadius: "10px",
                minHeight: "60px",
                padding: "5px",
                transition: "height 0.3s ease-in-out",
                backgroundColor: "white",
              }}
            >
              {/*----------------------------------첨부파일-------------------------------------*/}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  alignItems: "center",
                }}
              ></div>
              <ImageUpload imageUrl={imageUrl} getImage={getImage} />
              <hr />
              {/*--------------------------------리뷰점수-------------------------------------  */}
            </div>
          </div>
        </FormDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
};

export default HostHotelUpdate;

export const Hr = styled.hr`
  border-top: 1px solid black;
  height: 1px;
  background-color: black;
`;
export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  marginleft: "10px";
  text-decoration: underline;
`;
export const ErrorDiv = styled.div`
  color: red;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid lightGray;
  padding: 5px;
  &:focus {
    outline: 2px solid #2e9afe;
  }
`;

export const Custom_btn = styled.button`
background-color: #fff;
color: #0d6efd;
height: 30px;
border: 1px solid #0d6efd;
border-radius: 5px;
padding: 5px 10px;
font-size: 16px;
cursor: pointer;
display: inline-flex; /* 수정된 부분 */
align-items: center; /* 수정된 부분 */
&:hover {
  background-color: #007bff;
  color: #fff;
  `;

const TipDiv = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  font-family: "KOTRA_GOTHIC";
  justify-content: space-between;
  align-items: center; /* 수평 중앙 정렬 */
  width: 90%;
  margin: 30px;
  border: 1px solid #e7e7e7;
`;
