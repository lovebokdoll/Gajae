import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  regexEmail,
  regexID,
  regexPassword,
  checkPassword,
  regexName,
  regexMobile,
  regexBusinessNum,
  regexNickname,
} from "../../service/regex";
import { overlapCheckDB, signupDB } from "../../service/hostLogic";
import {
  MyButton,
  MyInput,
  MyLabel,
  MyLabelAb,
  PwEye,
  SignupForm,
  SubmitButton,
} from "../../style/HostSignUp";
import Footer from "../footer/Footer";
import HostHeaderNav from "./HostHeaderNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
const HostSignUp = () => {
  const navigate = useNavigate();
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [isIdCheck, setIsIdCheck] = useState(false);
  const [submitButton, setSubmitButton] = useState({
    disabled: true,
    bgColor: "rgb(175, 210, 244)",
    hover: false,
  });
  const [comment, setComment] = useState({
    id: "",
    email: "",
    password: "",
    password2: "",
    name: "",
    tel: "",
    businessNum: "",
  });

  //모달 창
  const Toast = Swal.mixin({
    toast: true,
    position: "center-center",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const regex = (key, event) => {
    let result;
    if (key === "email") {
      result = regexEmail(event);
      console.log(result);
    } else if (key === "id") {
      result = regexID(event);
      console.log(result);
    } else if (key === "nickname") {
      result = regexNickname(event);
      console.log(result);
    } else if (key === "password") {
      result = regexPassword(event);
      console.log(result);
    } else if (key === "password2") {
      result = checkPassword(hostInfo.host_pw, event);
      console.log(result);
    } else if (key === "name") {
      result = regexName(event);
      console.log(result);
    } else if (key === "tel") {
      result = regexMobile(event);
      console.log(result);
    } else if (key === "businessNum") {
      result = regexBusinessNum(event);
      console.log(result);
    }
    setComment({ ...comment, [key]: result });
  };
  const [hostInfo, setHostInfo] = useState({
    host_id: "",
    host_pw: "",
    host_pw2: "",
    host_name: "",
    host_email: "",
    host_tel: "",
    host_business_num: "",
  });
  /**
   * 아이디, 닉네임 중복체크 함수
   * 입력 받은 아이디가 공백이면 toast message로 '아이디를 입력해주세요' 출력
   * 입력 받은 아이디가 공백이 아니면 아이디 중복체크 진행
   * 사용자가 입력한 아이디가 중복이면 1을 반환, 중복이 아니면 0을 반환
   * 0(중복이 아니면) isIdCheck를 true로 초기화
   * (닉네임도 동일하게 진행)
   * @param {*} key
   * @returns
   */
  const overlapEmail = async (key) => {
    // debugger;
    let params;
    let response;
    if (key === "host_email") {
      params = { HOST_EMAIL: hostInfo[key].trim(), type: "overlap" };
      if (params.HOST_EMAIL === "") {
        Toast.fire({
          icon: "info",
          title: "이메일을 입력해주세요.",
          timer: 1500,
          timerProgressBar: false,
        });
        return;
      } else {
        response = await overlapCheckDB(params);
        console.log(response.data);
        if (response.data === 0) {
          Toast.fire({
            icon: "success", // Alert 타입
            title: "사용 가능한 이메일 입니다.", // Alert 제목
            timer: 900,
            timerProgressBar: false,
          });
          setIsEmailCheck(true);
        } else if (response.data === 1) {
          Toast.fire({
            icon: "info", // Alert 타입
            title: "이미 존재하는 이메일 입니다.", // Alert 제목
            text: "로그인 페이지로 이동합니다", // Alert 내용
            timer: 1000,
            timerProgressBar: false,
          });
          setTimeout(() => {
            navigate("/host/login");
          }, 1200);
        }
      }
    }
  };
  const overlapId = async (key) => {
    // debugger;
    let params;
    let response;
    if (key === "host_id") {
      params = { HOST_ID: hostInfo[key].trim(), type: "overlap" };
      // params = { HOST_ID: hostInfo[key].trim() };
      if (params.HOST_ID === "") {
        Toast.fire({
          icon: "warning",
          title: "아이디를 입력해주세요.",
          timer: 900,
          timerProgressBar: false,
        });
        return;
      } else {
        response = await overlapCheckDB(params);
        console.log(response.data);
        if (response.data === 0) {
          Toast.fire({
            icon: "success", // Alert 타입
            title: "사용 가능한 ID 입니다.",
            timer: 900,
            timerProgressBar: false,
          });
          setIsIdCheck(true);
        } else if (response.data === 1) {
          Toast.fire({
            icon: "warning",
            title: "이미 사용중인 ID 입니다.",
            timer: 900,
            timerProgressBar: false,
          });
        }
      }
    }
  };
  const changeHostInfo = (event) => {
    const id = event.currentTarget.id;
    const value = event.target.value;
    console.log(id, ", value ===>", value);
    setHostInfo({ ...hostInfo, [id]: value });
  };

  const toggleHover = () => {
    if (submitButton.hover) {
      setSubmitButton({
        ...submitButton,
        hover: false,
        bgColor: "rgb(105, 175, 245)",
      });
    } else {
      setSubmitButton({
        ...submitButton,
        hover: true,
        bgColor: "rgb(72, 145, 218)",
      });
    }
  };

  const [passwordType, setPasswordType] = useState([
    {
      type: "password",
      visible: false,
    },
    {
      type: "password",
      visible: false,
    },
  ]);

  const passwordView = (event) => {
    const id = event.currentTarget.id;
    if (id === "password") {
      if (!passwordType[0].visible) {
        setPasswordType([{ type: "text", visible: true }, passwordType[1]]);
      } else {
        setPasswordType([
          { type: "password", visible: false },
          passwordType[1],
        ]);
      }
    } else if (id === "password2") {
      if (!passwordType[1].visible) {
        setPasswordType([passwordType[0], { type: "text", visible: true }]);
      } else {
        setPasswordType([
          passwordType[0],
          { type: "password", visible: false },
        ]);
      }
    }
  };

  const signup = async () => {
    if (
      !hostInfo.host_id ||
      !hostInfo.host_pw ||
      !hostInfo.host_email ||
      !hostInfo.host_pw2 ||
      !hostInfo.host_name ||
      !hostInfo.host_tel ||
      !hostInfo.host_business_num
    ) {
      Toast.fire({
        icon: "warning", // Alert 타입
        title: "필수정보를 모두 입력해주세요.", // Alert 제목
        timer: 900,
        timerProgressBar: false,
      });
      return;
    }
    if (isIdCheck && isEmailCheck) {
      try {
        const hostRecord = {
          HOST_ID: hostInfo.host_id,
          HOST_PW: hostInfo.host_pw,
          HOST_NAME: hostInfo.host_name,
          HOST_EMAIL: hostInfo.host_email,
          HOST_TEL: hostInfo.host_tel,
          HOST_BUSINESS_NUM: hostInfo.host_business_num,
        };
        console.log("hostRecord ===>", hostRecord);
        const response = await signupDB(hostRecord);
        console.log(response.data);

        if (response.data !== 1) {
          return "회원가입 실패";
        } else if (response.data == 1) {
          navigate("/host/login");
        }
      } catch (error) {
        console.log("error ===>", error);
      }
    } else if (isEmailCheck === false) {
      Toast.fire({
        icon: "warning",
        title: "이메일 중복확인을 먼저 진행해주세요.",
        timer: 900,
        timerProgressBar: false,
      });
    } else if (isIdCheck === false) {
      Toast.fire({
        icon: "warning",
        title: "아이디 중복확인을 먼저 진행해주세요.",
        timer: 900,
        timerProgressBar: false,
      });
    }
  };

  const handleSignup = () => {
    signup();
  };
  return (
    <>
      <HostHeaderNav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", width: "100%", marginTop: "-90px" }}>
          <SignupForm suggested={false}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-right-to-bracket"
                style={{ padding: "5px" }}
              />
              파트너 계정 등록
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              이미 파트너로 등록하셨나요?
            </div>
            <Link
              to="/host/login"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "15px",
                //   textDecoration: "none",
                marginBottom: "20px",
              }}
            >
              파트너로 로그인
            </Link>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div style={{ padding: "30px 30px 0px 30px" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <MyLabel>
                    {" "}
                    이메일 <span style={{ color: "red" }}>*</span>
                    <MyInput
                      type="email"
                      id="host_email"
                      placeholder="이메일를 입력해주세요."
                      onChange={(e) => {
                        changeHostInfo(e);
                        regex("email", e);
                      }}
                    />
                    <MyLabelAb>{comment.email}</MyLabelAb>
                  </MyLabel>
                  <MyButton
                    type="button"
                    onClick={() => {
                      overlapEmail("host_email");
                    }}
                  >
                    중복확인
                  </MyButton>
                </div>

                <div style={{ display: "flex" }}>
                  <MyLabel>
                    {" "}
                    아이디 <span style={{ color: "red" }}>*</span>
                    <MyInput
                      type="text"
                      id="host_id"
                      defaultValue={hostInfo.id}
                      placeholder="아이디을 입력해주세요."
                      onChange={(e) => {
                        changeHostInfo(e);
                        regex("id", e);
                      }}
                    />
                    <MyLabelAb>{comment.id}</MyLabelAb>
                  </MyLabel>
                  <MyButton
                    type="button"
                    onClick={() => {
                      overlapId("host_id");
                    }}
                  >
                    중복확인
                  </MyButton>
                </div>
                <MyLabel>
                  {" "}
                  비밀번호 <span style={{ color: "red" }}>*</span>
                  <MyInput
                    type={passwordType[0].type}
                    id="host_pw"
                    autoComplete="off"
                    placeholder="비밀번호를 입력해주세요."
                    maxLength={15}
                    onKeyUp={(e) => {
                      setComment({
                        ...comment,
                        host_pw: checkPassword(
                          e.target.value,
                          hostInfo.host_pw
                        ),
                      });
                    }}
                    onChange={(e) => {
                      changeHostInfo(e);
                      regex("password", e);
                    }}
                  />
                  <div
                    id="password"
                    onClick={(e) => {
                      passwordView(e);
                    }}
                    style={{
                      color: `${
                        passwordType[0].visible ? "gray" : "lightgray"
                      }`,
                    }}
                  >
                    <PwEye className="fa fa-eye fa-lg"></PwEye>
                  </div>
                  <MyLabelAb>{comment.password}</MyLabelAb>
                </MyLabel>
                <MyLabel>
                  {" "}
                  비밀번호 확인 <span style={{ color: "red" }}>*</span>
                  <MyInput
                    type={passwordType[1].type}
                    id="host_pw2"
                    autoComplete="off"
                    maxLength={15}
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    onChange={(e) => {
                      changeHostInfo(e);
                      regex("password2", e.target.value);
                    }}
                  />
                  <div
                    id="password2"
                    onClick={(e) => {
                      passwordView(e);
                    }}
                    style={{
                      color: `${
                        passwordType[1].visible ? "gray" : "lightgray"
                      }`,
                    }}
                  >
                    <PwEye className="fa fa-eye fa-lg"></PwEye>
                  </div>
                  <MyLabelAb>{comment.password2}</MyLabelAb>
                </MyLabel>
                <MyLabel>
                  {" "}
                  사업자번호 <span style={{ color: "red" }}>*</span>
                  <MyInput
                    type="text"
                    id="host_business_num"
                    defaultValue={hostInfo.host_business_num}
                    placeholder="사업자번호를 입력해주세요."
                    maxLength={12}
                    onChange={(e) => {
                      changeHostInfo(e);
                      regex("businessNum", e);
                    }}
                  />
                  <MyLabelAb>{comment.businessNum}</MyLabelAb>
                </MyLabel>
                <MyLabel>
                  {" "}
                  이름 <span style={{ color: "red" }}>*</span>
                  <MyInput
                    type="text"
                    id="host_name"
                    defaultValue={hostInfo.host_name}
                    placeholder="이름을 입력해주세요."
                    onChange={(e) => {
                      changeHostInfo(e);
                      regex("name", e);
                    }}
                  />
                  <MyLabelAb>{comment.name}</MyLabelAb>
                </MyLabel>
                <MyLabel>
                  {" "}
                  전화번호 <span style={{ color: "red" }}>*</span>
                  <MyInput
                    type="text"
                    id="host_tel"
                    defaultValue={hostInfo.host_tel}
                    placeholder="전화번호를 입력해주세요."
                    onChange={(e) => {
                      changeHostInfo(e);
                      regex("tel", e);
                    }}
                  />
                  <MyLabelAb>{comment.tel}</MyLabelAb>
                </MyLabel>
              </div>
            </div>
            <SubmitButton
              type="button"
              style={{ backgroundColor: submitButton.bgColor }}
              onClick={handleSignup}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            >
              {"가입하기"}
            </SubmitButton>
          </SignupForm>
        </div>
      </div>
      <div className="space" style={{ height: "110px" }}></div>
      <Footer />
    </>
  );
};
export default HostSignUp;
