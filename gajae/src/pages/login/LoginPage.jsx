import React, { useEffect, useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import HeaderNav1 from '../../components/header/HeaderNav1';
import HeaderNav2 from '../../components/header/HeaderNav2';
import { DividerDiv, DividerHr, DividerSpan, GoogleButton, MyH1, MyInput, MyLabel, MyP, PwEye, SubmitButton } from '../../style/FormStyle';
/**
 *
 * @returns 로그인 페이지
 */
const LoginPage = ({ authLogic }) => {
  const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const auth = authLogic.getUserAuth();

  const signin = async () => {
    console.log('signin');
  };
  console.log('auth ===> ', auth);
  const navigate = useNavigate();

  const [submitButton, setSubmitButton] = useState({
    disabled: true,
    bgColor: 'rgb(175, 210, 244)',
    hover: false,
  });

  const [tempUser, setTempUser] = useState({
    email: '',
    password: '',
  });

  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false,
  });

  useEffect(() => {
    if (tempUser.email !== '' && tempUser.password !== '') {
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
      <Form>
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
            id="password"
            name="user_password"
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
        <DividerDiv>
          <DividerHr />
          <DividerSpan>또는</DividerSpan>
        </DividerDiv>
        <GoogleButton
          type="button"
          onClick={() => {
            //loginG();
          }}
        >
          <i className="fab fa-google-plus-g" style={{ color: 'red', fontSize: '18px' }}></i>&nbsp;&nbsp;Google 로그인
        </GoogleButton>{' '}
        <div>
          <a href={KAKAO_AUTH_URL}>
            <Image src="../../public/images/kakao/kakao_login_medium_narrow.png " />
          </a>
        </div>
        <MyP style={{ marginTop: '30px' }}>
          신규 사용자이신가요?&nbsp;
          <Link to="/auth/signup" className="text-decoration-none" style={{ color: 'blue' }}>
            계정 만들기
          </Link>
        </MyP>
        <MyP>
          이메일를 잊으셨나요?&nbsp;
          <Link to="/auth/findEmail" className="text-decoration-none" style={{ color: 'blue' }}>
            이메일 찾기
          </Link>
        </MyP>
        <MyP>
          비밀번호를 잊으셨나요?&nbsp;
          <Link to="/auth/resetPwd" className="text-decoration-none" style={{ color: 'blue' }}>
            비밀번호 변경
          </Link>
        </MyP>
      </Form>
    </>
  );
};

export default LoginPage;
