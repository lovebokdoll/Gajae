import React, { useEffect, useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import { setToastMessage } from '../../redux/toastStatus/action';
import { googleLogin } from '../../service/authLogic';
import { signinDB } from '../../service/user/user';
import { DividerDiv, DividerHr, DividerSpan, LoginForm, MyH1, MyInput, MyLabel, MyP, PwEye, SubmitButton } from '../../style/FormStyle';
import './loginPage.css';
import { AuthContainer, SignInForm } from './styled-login';

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
    if (response.data) {
      window.localStorage.setItem('userId', jsonDoc[0].USER_ID);
      window.localStorage.setItem('userNickname', jsonDoc[0].USER_NICKNAME);
      window.localStorage.setItem('userAuth', jsonDoc[0].USER_AUTH);
      window.localStorage.setItem('userEmail', jsonDoc[0].USER_EMAIL);
      window.localStorage.setItem('userBirth', jsonDoc[0].USER_BIRTH);
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
      setSubmitButton({ ...submitButton, hover: false, bgColor: 'rgb(105, 175, 245)' });
    } else {
      setSubmitButton({ ...submitButton, hover: true, bgColor: 'rgb(58, 129, 200)' });
    }
  };

  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <SignInForm>
        <MyH1>로그인</MyH1>
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
            style={{ color: `${passwordType.visible ? 'gray' : 'lightgray'}` }}
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
      </SignInForm>
      <DividerDiv>
        <DividerHr />
        <DividerSpan>또는 다음 중 하나로 계속</DividerSpan>
      </DividerDiv>
      <AuthContainer>
        <div>
          <a style={{ marginRight: '10px' }}>
            <Image src="/images/icons8-닌텐도-75.png" />
          </a>
          <button onClick={googleSignIn} style={{ marginRight: '10px', border: 'none', backgroundColor: 'transparent' }}>
            <Image src="/images/google_logo.png" />
          </button>

          <a href={KAKAO_AUTH_URL} style={{ marginRight: '10px' }}>
            <Image src="/images/icons8-kakao-talk-75.png" />
          </a>
        </div>
        <MyP style={{ marginTop: '20px' }}>
          신규 사용자이신가요?&nbsp;
          <Link to="/signup" className="text-decoration-none" style={{ color: 'blue' }}>
            계정 만들기
          </Link>
        </MyP>
        <MyP>
          아이디를 잊으셨나요?&nbsp;
          <Link to="/auth/findEmail" className="text-decoration-none" style={{ color: 'blue' }}>
            아이디 찾기
          </Link>
        </MyP>
        <MyP>
          비밀번호를 잊으셨나요?&nbsp;
          <Link to="/auth/resetPwd" className="text-decoration-none" style={{ color: 'blue' }}>
            비밀번호 찾기
          </Link>
        </MyP>
      </AuthContainer>
    </>
  );
};

export default LoginPage;