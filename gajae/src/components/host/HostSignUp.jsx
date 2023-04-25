import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToastMessage } from "../../redux/toastStatus/action";
import {
  checkPassword,
  regexBusinessNum,
  regexEmail,
  regexID,
  regexMobile,
  regexName,
  regexNickname,
  regexPassword,
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
} from "../../style/FormStyle";
import Footer from "../footer/Footer";
import HostHeaderNav from "./HostHeaderNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HostSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    mobile: "",
    host_business_num: "",
  });

  const [star, setStar] = useState({
    id: "*",
    email: "*",
    password: "*",
    password2: "*",
    name: "*",
    mobile: "*",
    host_business_num: "*",
  });

  useEffect(() => {
    let check = true;

    Object.keys(star).forEach((key) => {
      if (star[key] === "*") check = false;
    });

    if (check) {
      setSubmitButton({ disabled: false, bgColor: "rgb(105, 175, 245)" });
    } else {
      setSubmitButton({ disabled: true, bgColor: "rgb(175, 210, 244)" });
    }
  }, [star]);

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
    } else if (key === "businessNum ") {
      result = regexBusinessNum(event);
      console.log(result);
    }
    setComment({ ...comment, [key]: result });
    if (result) {
      if (result === " ") {
        setStar({ ...star, [key]: "" });
      } else {
        setStar({ ...star, [key]: "*" });
      }
    } else {
      setStar({ ...star, [key]: "" });
    }
  };

  const type = "host";

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
        dispatch(setToastMessage("이메일을 입력해주세요."));
        return;
      } else {
        response = await overlapCheckDB(params);
        console.log(response.data);
        if (response.data === 0) {
          dispatch(setToastMessage("사용 가능한 이메일 입니다."));
          setIsIdCheck(true);
        } else if (response.data === 1) {
          dispatch(
            setToastMessage(
              "이미 존재하는 이메일 입니다. 로그인 페이지로 이동합니다"
            )
          );
          setTimeout(() => {
            navigate("/host/login");
          }, 1000);
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
        dispatch(setToastMessage("아이디를 입력해주세요."));
        return;
      } else {
        response = await overlapCheckDB(params);
        console.log(response.data);
        if (response.data === 0) {
          dispatch(setToastMessage("사용 가능한 ID 입니다."));
          setIsIdCheck(true);
        } else if (response.data === 1) {
          dispatch(setToastMessage("이미 사용중인 ID 입니다."));
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
      dispatch(setToastMessage("필수정보를 모두 입력해주세요."));
      return;
    }
    if (isIdCheck) {
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
    } else if (isIdCheck === false) {
      dispatch(setToastMessage("아이디 중복확인을 먼저 진행해주세요."));
    }
  };

  const handleSignup = () => {
    signup();
  };
  return (
    <>
      <HostHeaderNav />

      <div style={{ display: "flex", justifyContent: "center" }}>
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
              <FontAwesomeIcon icon="fa-solid fa-right-to-bracket"  style={{ padding: "5px" }} />
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
                    이메일 <span style={{ color: "red" }}>{star.email}</span>
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
                    아이디 <span style={{ color: "red" }}>{star.id}</span>
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
                  비밀번호 <span style={{ color: "red" }}>{star.password}</span>
                  <MyInput
                    type={passwordType[0].type}
                    id="host_pw"
                    autoComplete="off"
                    placeholder="비밀번호를 입력해주세요."
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
                  비밀번호 확인{" "}
                  <span style={{ color: "red" }}>{star.password2}</span>
                  <MyInput
                    type={passwordType[1].type}
                    id="host_pw2"
                    autoComplete="off"
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
                  사업자번호{" "}
                  <span style={{ color: "red" }}>{star.host_business_num}</span>
                  <MyInput
                    type="text"
                    id="host_business_num"
                    defaultValue={hostInfo.host_business_num}
                    placeholder="사업자번호를 입력해주세요."
                    onChange={(e) => {
                      changeHostInfo(e);
                      regex("businessNum", e);
                    }}
                  />
                  <MyLabelAb>{comment.host_business_num}</MyLabelAb>
                </MyLabel>
                <MyLabel>
                  {" "}
                  이름 <span style={{ color: "red" }}>{star.name}</span>
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
                  전화번호 <span style={{ color: "red" }}>{star.tel}</span>
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

      <Footer />
    </>
  );
};
//};
export default HostSignUp;
