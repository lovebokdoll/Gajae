/*global daum*/
import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ContainerDiv, FormDiv } from "../../style/HostStyle";

const HostZipCode = ({
  onZipcodeChange,
  onAddrChange,
  onAddrDtlChange,
  post,
  setPost,
}) => {
  const navigate = useNavigate("");
  const handleZipcode = useCallback((e) => {
    onZipcodeChange(e);
  }, []);
  const handleAddr = useCallback((e) => {
    onAddrChange(e);
  }, []);
  const handleAddrdtl = useCallback((e) => {
    onAddrDtlChange(e);
  }, []);
  const clickAddr = (e) => {
    e.preventDefault();
    new daum.Postcode({
      oncomplete: function (data) {
        let addr = "";
        if (data.userSelectedType === "R") {
          addr = data.roadAddress; //도로명
        } else {
          addr = data.jibunAddress; //지번
        }
        console.log(data); //전체주소정보
        console.log(addr); //주소정보만
        setPost({ ...post, zipcode: data.zonecode, addr: addr });
        document.querySelector("#host_zipcode").value = data.zonecode; //화면에 자동으로 입력처리
        document.querySelector("#host_addr").value = addr;
        document.querySelector("#host_addr_dtl").focus(); //addr이 입력되었을때
        handleZipcode(document.querySelector("#host_zipcode").value);
        handleAddr(document.querySelector("#host_addr").value);

        /**
         * 위도경도 받아오기
         */
      },
    }).open();
  };
  return (
    <>
      <ContainerDiv>
        <FormDiv>
          <div style={{ width: "200px", maxWidth: "200px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>우편번호</span>
            </div>
            <input
              id="host_zipcode"
              type="text"
              maxLength="50"
              placeholder="우편번호를 입력하세요."
              style={{
                width: "200px",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "5px",
              }}
              onChange={(e) => {
                handleZipcode(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>주소</span>
            </div>
            <input
              id="host_addr"
              type="text"
              maxLength="50"
              placeholder="주소를 입력하세요."
              readOnly={post.addr ? false : true}
              style={{
                width: "200px",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "5px",
              }}
              onChange={(e) => {
                handleAddr(e.target.value);
              }}
            />
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>상세주소</span>
            </div>
            <input
              id="host_addr_dtl"
              type="text"
              maxLength="50"
              placeholder="상세주소를 입력하세요."
              readOnly={post.addr ? false : true}
              style={{
                width: "200px",
                height: "40px",
                border: "1px solid lightGray",
                marginBottom: "5px",
              }}
              onChange={(e) => {
                handleAddrdtl(e.target.value);
              }}
            /> */}
            <Button onClick={clickAddr}>주소검색</Button>
          </div>
        </FormDiv>
      </ContainerDiv>
    </>
  );
};

export default HostZipCode;
