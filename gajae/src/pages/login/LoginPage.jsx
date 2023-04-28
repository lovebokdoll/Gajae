import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import HeaderNav1 from "../../components/header/HeaderNav1";
import HeaderNav2 from "../../components/header/HeaderNav2";
import { setToastMessage } from "../../redux/toastStatus/action";
import { googleLogin } from "../../service/authLogic";
import { signinDB } from "../../service/user/user";
import {
  DividerDiv,
  DividerDiv2,
  DividerHr,
  DividerSpan,
  MyInput,
  MyLabel,
  MyP,
  PwEye,
  SubmitButton,
} from "../../style/FormStyle";
import "./loginPage.css";
import { AuthContainer, SignInForm } from "./styled-login";
import { LoginImage, MGDIV } from "./styled-loginpage";

/**
 *
 * @returns 로그인 페이지
 */
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userAuth = useSelector((store) => store.userAuth);
  const [tempUser, setTempUser] = useState({
    user_id: '',
    user_pw: '',
  });

  const [userId, setUserId] = useState();

  const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const googleSignIn = async () => {
    try {
      const result = await googleLogin(userAuth.auth, userAuth.googleProvider);
      console.log(result);
      console.log(result.uid);
      setUserId(result.uid);
      window.localStorage.setItem('userId', result.uid);
      navigate('/');
      window.location.reload();
    } catch (error) {
      dispatch(setToastMessage(error + ': 로그인과정 중에 문제가 발생했습니다.'));
    }
  };

  const signin = async () => {
    if (!tempUser.user_id || !tempUser.user_pw) {
      dispatch(setToastMessage('아이디와 비밀번호를 입력해주세요.'));
    }

    const response = await signinDB(tempUser);
    console.log(response);
    console.log(response.data);
    const temp = JSON.stringify(response.data);
    const jsonDoc = JSON.parse(temp);

    console.log(jsonDoc[0]);
    if (jsonDoc[0].USER_ACTIVATE === 'N') {
      alert('휴면 계정입니다. 휴면 계정 해지 페이지로 이동합니다.');
      navigate('/login/activate');
      return;
    }
    if (response.data) {
      window.localStorage.setItem('userId', jsonDoc[0].USER_ID);
      window.localStorage.setItem('userName', jsonDoc[0].USER_NAME);
      window.localStorage.setItem('userNickname', jsonDoc[0].USER_NICKNAME);
      window.localStorage.setItem('userAuth', jsonDoc[0].USER_AUTH);
      window.localStorage.setItem('userEmail', jsonDoc[0].USER_EMAIL);
      window.localStorage.setItem('userBirth', jsonDoc[0].USER_BIRTH);
      window.localStorage.setItem('userPhoto', jsonDoc[0].USER_PHOTO);
      window.localStorage.setItem('userMobile', jsonDoc[0].USER_MOBILE);
      window.localStorage.setItem('userCreateDate', jsonDoc[0].USER_HIREDATE);
      window.localStorage.setItem("userPhoto", jsonDoc[0].USER_PHOTO);
      navigate('/');
    } else {
      dispatch(setToastMessage('아이디 또는 비밀번호가 일치하지 않습니다.'));
    }
  };

  const [submitButton, setSubmitButton] = useState({
    disabled: true,
    bgColor: 'rgb(175, 210, 244)',
    hover: false,
  });

  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false,
  });

  useEffect(() => {
    if (tempUser.user_id !== '' && tempUser.user_pw !== '') {
      setSubmitButton({ disabled: false, bgColor: 'rgb(105, 175, 245)' });
    } else {
      setSubmitButton({ disabled: true, bgColor: 'rgb(175, 210, 244)' });
    }
  }, [tempUser]);

  const changeUser = (e) => {
    const id = e.currentTarget.id;
    const value = e.target.value;
    setTempUser({ ...tempUser, [id]: value });
  };

  const passwordView = (e) => {
    const id = e.currentTarget.id;
    if (id === 'password') {
      if (!passwordType.visible) {
        setPasswordType({ ...passwordType, type: 'text', visible: true });
      } else {
        setPasswordType({ ...passwordType, type: 'password', visible: false });
      }
    }
  };

  const toggleHover = () => {
    if (submitButton.hover) {
      setSubmitButton({
        ...submitButton,
        hover: false,
        bgColor: 'rgb(105, 175, 245)',
      });
    } else {
      setSubmitButton({
        ...submitButton,
        hover: true,
        bgColor: 'rgb(58, 129, 200)',
      });
    }
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
        
      <div className="big-container" style={{width:'1900px',height:'800px',backgroundImage: 'url(./images/몽롱한사진.jpg)', backgroundSize: 'cover', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
  <div className="login-container" style={{ marginTop:'40px',marginBottom:'40px',width:'750px', height:'750px',  borderRadius:'20px', backgroundColor:'rgba(255,255,255,0.5)', position: 'relative' }}>
    <div className='Login-logo' style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
      <img src="./images/LoginLogo.png" alt="" style={{ width: '100%', height: '100%' }} />
    </div>
      <SignInForm>
    <MGDIV></MGDIV>
    <MGDIV></MGDIV>
        <MyLabel htmlFor="email">
          {' '}
          아이디
          <MyInput type="text" id="user_id" name="user_id" onChange={(e) => changeUser(e)} />
        </MyLabel>
        <MyLabel htmlFor="password">
          {' '}
          비밀번호
          <MyInput
            type={passwordType.type}
            autoComplete="off"
            id="user_pw"
            name="user_pw"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => changeUser(e)}
          />
          <div
            id="password"
            onClick={(e) => {
              passwordView(e);
            }}
            style={{ color: `${passwordType.visible ? "gray" : "lightgray"}`,transform: "translateY(-8px)" }}
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
            window.localStorage.removeItem('hostId');
            window.localStorage.removeItem('hostName');
            window.localStorage.removeItem('hostCompanyName');
            window.localStorage.removeItem('hostBusinessNum');
          }}
          >
          로    그    인
        </SubmitButton>
      </SignInForm>{' '}
      <DividerDiv>
        
        <DividerSpan>또는 다음 중 하나로 계속</DividerSpan>
      </DividerDiv>
      <AuthContainer>
        <div>
          <a style={{ marginRight: '15px' }}>
            <Image src="/images/login/네이버로그인.png" />
          </a>
          <button
            onClick={googleSignIn}
            style={{
              marginRight: '15px',
              border: 'none',
              backgroundColor: 'transparent',
            }}
            >
            <Image src="/images/login/구글로그인.png" />
          </button>
          <a href="#" style={{ marginRight: "15px" }} onClick={kakaoLogin}>
            <Image src="/images/login/카카오로그인.png" />
          </a>
        </div>
        <MyP style={{ marginTop: '20px' }}>
          신규 사용자이신가요?&nbsp;
          <Link
            to="/signup"
            className="text-decoration-none"
            style={{ color: "blue",fontWeight:'bold' }}
            >
            계정 만들기
          </Link>
        </MyP>
        <MyP>
          아이디를 잊으셨나요?&nbsp;
          <Link
            to="/login/findid"
            className="text-decoration-none"
            style={{ color: "blue" ,fontWeight:'bold'}}
          >
            아이디 찾기
          </Link>
        </MyP>
        <MyP>
          비밀번호를 잊으셨나요?&nbsp;
          <Link
            to="/login/findpw"
            className="text-decoration-none"
            style={{ color: "blue" ,fontWeight:'bold' }}
            >
            비밀번호 찾기
          </Link>
        </MyP>
      </AuthContainer>
      <DividerDiv2 />
            </div>{/* end of the login - container */}
            </div>{/* end of the big - container */}
<MGDIV></MGDIV>
         </>
  );
};

export default LoginPage;