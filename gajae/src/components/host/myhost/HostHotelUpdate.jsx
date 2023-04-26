import React, { useCallback, useEffect, useRef, useState } from "react";
import { ContainerDiv, FormDiv, HeaderDiv } from "../../../style/FormStyle";
import Footer from "../../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageUpload from "../../../components/review/ImageUpload";
import HostHeaderNav from "../HostHeaderNav";
import {
  hostHotelDetailDB,
  hosthotelUpdateDB,
} from "../../../service/hostLogic";
import { Modal, ModalHeader } from "react-bootstrap";
export const HostHotelUpdate = () => {
  const param = useLocation();
  const hotelNumber = new URLSearchParams(param.search).get("hotel_id");
  console.log("p_id=" + hotelNumber);
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  const [tel, setTel] = useState(0);
  const [overView, setOverView] = useState("");
  const [scale, setScale] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [refund, setRefund] = useState("");
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
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
      setTitle(jsonDoc[0].P_TITLE);
      setStar(jsonDoc[0].P_STAR);
      setTel(jsonDoc[0].P_TEL);
      setOverView(jsonDoc[0].P_OVERVIEW);
      setScale(jsonDoc[0].P_SCALE);
      setCheckIn(jsonDoc[0].P_CHECKIN);
      setCheckOut(jsonDoc[0].P_CHECKOUT);
      setRefund(jsonDoc[0].P_REFUND);
      setImageUrl(jsonDoc[0].P_PHOTO);
      setStatus(jsonDoc[0].STATUS);
    };
    myHotel();
  }, []);
  console.log(status);
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
  const handleStatus = useCallback((value) => {
    setStatus(value);
    console.log(value);
  }, []);

  const hotelUpdate = async () => {
    if (title.trim === "||content.trim()===")
      return alert("게시글 수정에 실패했습니다. ");
    const review = {
      P_ID: hotelNumber,
      P_TITLE: title,
      P_STAR: star,
      P_PHOTO: imageUrl,
      P_TEL: tel,
      P_OVERVIEW: overView,
      P_SCALE: scale,
      P_CHECKIN: checkIn,
      P_CHECKOUT: checkOut,
      P_REFUND: refund,
      STATUS: status,
    };
    const res = await hosthotelUpdateDB(review);
    if (!res.data) return alert("게시글 수정에 실패하였습니다.");
    window.location.href = "/host/myhotelpage";
  };

  const getImage = (image) => {
    setImageUrl(image);
  };
  const getStatus = () => {
    if (status == "Y") {
      return "영업 중";
    } else {
      return "영업 중지";
    }
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
          <span>
            <FontAwesomeIcon icon="fa-solid fa-door-open" />
            호텔의 간단한 정보를 수정하고 관리해보세요!
          </span>
        </div>
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          style={{ width: "20%", marginBottom: "5%" }}
          onChange={(e) => {
            handleStatus(e.target.value);
          }}
        >
          <option selected disabled>
            현재 운영상태 : {getStatus()}
          </option>
          <option value="Y">영업 중</option>
          <option value="N">영업 중지</option>
        </select>
        <FormDiv>
          <div
            style={{
              width: "80%",
              margin: " auto",
              maxWidth: "2000px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "3px",
              }}
            >
              <h6>
                <i class="fa-solid fa-check"></i>호텔명
              </h6>
              <Custom_btn type="button" onClick={() => handleShow()}>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            />
            <h6>  <i class="fa-solid fa-check"></i>성급</h6>
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
              <h6> <i class="fa-solid fa-check"></i>전화번호</h6>
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
              <h6> <i class="fa-solid fa-check"></i>호텔 설명</h6>
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
              <h6> <i class="fa-solid fa-check"></i>호텔 규모</h6>
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
              <i class="fa-solid fa-check"></i>
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
              <h6> <i class="fa-solid fa-check"></i>호텔 체크아웃</h6>
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
              <h6> <i class="fa-solid fa-check"></i>호텔 환불정책</h6>
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
            </div>
          </div>
          <AlertModal show={showModal} onHide={handleClose}>
            <AlertHeader>
              <FontAwesomeIcon
                icon="fa-solid fa-pen"
                style={{ color: "#1E3050" }}
              />
            </AlertHeader>
            <ActionContainer>
              <p>호텔을 수정하시겠습니까?</p>
              <p>수정된 호텔은 즉시 반영됩니다.</p>
            </ActionContainer>
            <UpdateButton onClick={hotelUpdate}>수정</UpdateButton>
            <CancelButton onClick={handleClose}>취소</CancelButton>
          </AlertModal>
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

const AlertModal = styled(Modal)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    border: none;
  }
`;

const AlertHeader = styled(ModalHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 30px;
  border: none;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "KOTRA_GOTHIC";
  text-align: center;
  p {
    margin: 0 0 8px;
  }
`;

const UpdateButton = styled.button`
  margin: 5% 1% 0% 1%;
  background-color: #dc3545;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
`;

const CancelButton = styled.button`
  margin: 1% 1% 1% 1%;
  background-color: #1e3050;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
`;
