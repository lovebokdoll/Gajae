import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HeaderNav1 from "../../components/header/HeaderNav1";
import { setToastMessage } from "../../redux/toastStatus/action";
import {
  MyH1,
  MyInput,
  MyLabel,
  MyP,
  PwEye,
  SubmitButton,
  WholeForm,
} from "../../style/FormStyle";
import { loginDB } from "../../service/hostLogic";
/**
 *
 * @returns 로그인 페이지
 */
const HostLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userAuth = useSelector((store) => store.userAuth);
  const [tempUser, setTempUser] = useState({
    host_id: "",
    host_pw: "",
  });

  const signin = async () => {
    if (!tempUser.host_id || !tempUser.host_pw) {
      dispatch(setToastMessage("아이디와 비밀번호를 입력해주세요."));
    }
    const response = await loginDB(tempUser);
    console.log(response);
    console.log(response.data);
    const temp = JSON.stringify(response.data);
    const jsonDoc = JSON.parse(temp);
    console.log(jsonDoc[0]);
    if (response.data) {
      // 로컬에 뭐가 담겨야 할지 생각하기!! 일단은 아이디, 이름, 사업자번호, 회사이름 담음
      window.localStorage.setItem("hostId", jsonDoc[0].HOST_ID);
      window.localStorage.setItem("hostName", jsonDoc[0].HOST_NAME);
      window.localStorage.setItem(
        "hostBusinessNum",
        jsonDoc[0].HOST_BUSINESS_NUM
      );
      window.localStorage.setItem(
        "hostCompanyName",
        jsonDoc[0].HOST_COMPANY_NAME
      );
      navigate("/host/registerHouse");
      console.log("로그인 성공");
    } else {
      dispatch(setToastMessage("아이디 또는 비밀번호가 일치하지 않습니다."));
    }
  };

  const [submitButton, setSubmitButton] = useState({
    disabled: true,
    bgColor: "rgb(175, 210, 244)",
    hover: false,
  });

  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });

  useEffect(() => {
    if (tempUser.host_id !== "" && tempUser.host_pw !== "") {
      setSubmitButton({ disabled: false, bgColor: "rgb(105, 175, 245)" });
    } else {
      setSubmitButton({ disabled: true, bgColor: "rgb(175, 210, 244)" });
    }
  }, [tempUser]);

  const changeUser = (e) => {
    const id = e.currentTarget.id;
    const value = e.target.value;
    setTempUser({ ...tempUser, [id]: value });
  };

  const passwordView = (e) => {
    const id = e.currentTarget.id;
    if (id === "password") {
      if (!passwordType.visible) {
        setPasswordType({ ...passwordType, type: "text", visible: true });
      } else {
        setPasswordType({ ...passwordType, type: "password", visible: false });
      }
    }
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
        bgColor: "rgb(58, 129, 200)",
      });
    }
  };

  return (
    <>
      <HeaderNav1 />
      <WholeForm>
        <Form className="container">
          <MyH1>반갑습니다! 파트너로 로그인 해주세요</MyH1>
          <MyLabel htmlFor="email">
            {" "}
            아이디
            <MyInput
              type="text"
              id="HOST_ID"
              name="HOST_ID"
              placeholder="아이디를 입력해주세요."
              onChange={(e) => changeUser(e)}
            />
          </MyLabel>
          <MyLabel htmlFor="password">
            {" "}
            비밀번호
            <MyInput
              type={passwordType.type}
              autoComplete="off"
              id="HOST_PW"
              name="HOST_PW"
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => changeUser(e)}
            />
            <div
              id="password"
              onClick={(e) => {
                passwordView(e);
              }}
              style={{
                color: `${passwordType.visible ? "gray" : "lightgray"}`,
              }}
            >
              <PwEye className="fa fa-eye fa-lg"></PwEye>
            </div>
          </MyLabel>
          <SubmitButton
            type="button"
            style={{ backgroundColor: submitButton.bgColor }}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={() => {
              signin();
            }}
          >
            로그인
          </SubmitButton>
        </Form>

        <MyP style={{ marginTop: "30px" }}>
          신규 파트너이신가요?&nbsp;
          <Link
            to="/host/signup"
            className="text-decoration-none"
            style={{ color: "blue" }}
          >
            계정 만들기
          </Link>
        </MyP>
        <MyP>
          아이디를 잊으셨나요?&nbsp;
          <Link
            to="/auth/findEmail"
            className="text-decoration-none"
            style={{ color: "blue" }}
          >
            아이디 찾기
          </Link>
        </MyP>
        <MyP>
          비밀번호를 잊으셨나요?&nbsp;
          <Link
            to="/auth/resetPwd"
            className="text-decoration-none"
            style={{ color: "blue" }}
          >
            비밀번호 찾기
          </Link>
        </MyP>
      </WholeForm>
    </>
  );
};

export default HostLogin;
