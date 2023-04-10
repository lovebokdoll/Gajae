<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToastMessage } from '../../redux/toastStatus/action';
import {
  checkPassword,
  regexBirthday,
  regexEmail,
  regexID,
  regexMobile,
  regexName,
  regexNickname,
  regexPassword,
} from '../../service/regex';
import { idCheck, nicknameCheck, siginupSubmitDB } from '../../service/user/user';
import { MyButton, MyH1, MyInput, MyLabel, MyLabelAb, PwEye, SignupForm, SubmitButton } from '../../style/FormStyle';
import Footer from '../footer/Footer';
import HeaderNav1 from '../header/HeaderNav1';
import HeaderNav2 from '../header/HeaderNav2';

const SignUpTest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isInputCheck, setIsInputCheck] = useState(false);

  const [isIdCheck, setIsIdCheck] = useState(false);
  const [isNickNameCheck, setIsNickNameCheck] = useState(false);

  const [googleEmail, setGoogleEmail] = useState('');
  const [comment, setComment] = useState({
    id: '',
    email: '',
    password: '',
    password2: '',
    name: '',
    nickname: '',
    mobile: '',
    birthday: '',
  });

  const [star, setStar] = useState({
    id: '*',
    email: '*',
    password: '*',
    password2: '*',
    name: '*',
    nickname: '*',
    mobile: '*',
    birthday: '*',
  });

  useEffect(() => {
    let check = true;

    Object.keys(star).forEach((key) => {
      if (star[key] === '*') check = false;
    });

    if (check) {
      setSubmitButton({ disabled: false, bgColor: 'rgb(105, 175, 245)' });
    } else {
      setSubmitButton({ disabled: true, bgColor: 'rgb(175, 210, 244)' });
    }
  }, [star]);

  const regex = (key, event) => {
    let result;
    if (key === 'email') {
      result = regexEmail(event);
      console.log(result);
    } else if (key === 'id') {
      result = regexID(event);
      console.log(result);
    } else if (key === 'nickname') {
      result = regexNickname(event);
      console.log(result);
    } else if (key === 'password') {
      result = regexPassword(event);
      console.log(result);
    } else if (key === 'password2') {
      result = checkPassword(userInfo.user_pw, event);
      console.log(result);
    } else if (key === 'name') {
      result = regexName(event);
      console.log(result);
    } else if (key === 'mobile') {
      result = regexMobile(event);
      console.log(result);
    } else if (key === 'birthday') {
      result = regexBirthday(event);
      console.log(result);
    }
    setComment({ ...comment, [key]: result });
    if (result) {
      if (result === ' ') {
        setStar({ ...star, [key]: '' });
      } else {
        setStar({ ...star, [key]: '*' });
      }
    } else {
      setStar({ ...star, [key]: '' });
    }
  };

  const type = 'user';

  const [userInfo, setUserInfo] = useState({
    user_uid: '',
    user_id: '',
    user_pw: '',
    user_pw2: '',
    user_name: '',
    user_nickname: '',
    user_email: '',
    user_mobile: '',
    user_birthday: '',
    user_gender: '',
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
  const overlap = async (key) => {
    let params;
    let response;
    if (key === 'user_id') {
      params = { USER_ID: userInfo[key].trim(), type: 'overlap' };

      if (params.USER_ID === '') {
        dispatch(setToastMessage('아이디를 입력해주세요.'));
        return;
      } else {
        response = await idCheck(params);
        if (response.data === 0) {
          dispatch(setToastMessage('사용 가능한 ID 입니다.'));
          setIsIdCheck(true);
        } else if (response.data === 1) {
          dispatch(setToastMessage('이미 사용중인 ID 입니다.'));
        }
      }
    }

    if (key === 'user_nickname') {
      params = { USER_NICKNAME: userInfo[key].trim(), type: 'overlap' };

      if (params.USER_NICKNAME === '') {
        dispatch(setToastMessage('닉네임을 입력해주세요.'));
        return;
      } else {
        response = await nicknameCheck(params);
        if (response.data === 0) {
          dispatch(setToastMessage('사용 가능한 닉네임 입니다.'));
          setIsNickNameCheck(true);
        } else if (response.data === 1) {
          dispatch(setToastMessage('이미 사용중인 닉네임 입니다.'));
        }
      }
    }
    console.log('params ===> ', params);
  };

  const changeUserInfo = (event) => {
    const id = event.currentTarget.id;
    const value = event.target.value;
    console.log(id, ', value ===>', value);
    setUserInfo({ ...userInfo, [id]: value });
  };

  const [submitButton, setSubmitButton] = useState({
    disabled: true,
    bgColor: 'rgb(175, 210, 244)',
    hover: false,
  });

  const toggleHover = () => {
    if (submitButton.hover) {
      setSubmitButton({ ...submitButton, hover: false, bgColor: 'rgb(105, 175, 245)' });
    } else {
      setSubmitButton({ ...submitButton, hover: true, bgColor: 'rgb(72, 145, 218)' });
    }
  };

  const [passwordType, setPasswordType] = useState([
    {
      type: 'password',
      visible: false,
    },
    {
      type: 'password',
      visible: false,
    },
  ]);

  const passwordView = (event) => {
    const id = event.currentTarget.id;

    if (id === 'password') {
      if (!passwordType[0].visible) {
        setPasswordType([{ type: 'text', visible: true }, passwordType[1]]);
      } else {
        setPasswordType([{ type: 'password', visible: false }, passwordType[1]]);
      }
    } else if (id === 'password2') {
      if (!passwordType[1].visible) {
        setPasswordType([passwordType[0], { type: 'text', visible: true }]);
      } else {
        setPasswordType([passwordType[0], { type: 'password', visible: false }]);
      }
    }
  };

  const signup = async () => {
    console.log(userInfo.user_id == false);
    if (
      !userInfo.user_id ||
      !userInfo.user_pw ||
      !userInfo.user_email ||
      !userInfo.user_pw2 ||
      !userInfo.user_name ||
      !userInfo.user_mobile ||
      !userInfo.user_birthday ||
      !userInfo.user_nickname
    ) {
      dispatch(setToastMessage('필수정보를 모두 입력해주세요.'));
      return;
    }

    if (isIdCheck && isNickNameCheck) {
      try {
        const b = userInfo.user_birthday;
        let birthday = '';
        if (b !== '') {
          birthday = b.slice(0, 4) + '-' + b.slice(4, 6) + '-' + b.slice(6, 8);
        }
        const userRecord = {
          USER_ID: userInfo.user_id,
          USER_PW: userInfo.user_pw,
          USER_NAME: userInfo.user_name,
          USER_NICKNAME: userInfo.user_nickname,
          USER_EMAIL: userInfo.user_email,
          USER_MOBILE: userInfo.user_mobile,
          USER_BIRTH: birthday,
          USER_AUTH: type === 'user' ? 'user' : 'staff',
        };
        console.log('userRecord ===>', userRecord);
        const response = await siginupSubmitDB(userRecord);
        console.log(response.data);

        if (response.data !== 1) {
          return '회원가입 실패';
        } else if (response.data == 1) {
          navigate('/login');
        }
      } catch (error) {
        console.log('error ===>', error);
      }
    } else if (isIdCheck === false) {
      dispatch(setToastMessage('아이디 중복확인을 먼저 진행해주세요.'));
    } else if (isNickNameCheck === false) {
      dispatch(setToastMessage('닉네임 중복확인을 먼저 진행해주세요.'));
    }
  };

  const checkboxLable = ['없음', '남자', '여자'];

  const Checkbox = checkboxLable.map((item, index) => (
    <Form.Check
      inline
      label={item}
      value={item}
      name="group1"
      type="radio"
      checked={userInfo.user_gender === item ? true : false}
      readOnly
      id={`inline-radio-${item}`}
      key={index}
      onClick={(e) => {
        setUserInfo({ ...userInfo, user_gender: e.target.value });
      }}
    />
  ));

  const handleSignup = (event) => {
    signup();
  };
  return (
    <>
      <HeaderNav1 />
      <HeaderNav2 />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <SignupForm suggested={false}>
           <Image src='/images/1541.png' alt='회원가입'/>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ padding: '30px 30px 0px 30px' }}>
                {googleEmail ? (
                  <>
                    <MyLabel>
                      {' '}
                      이메일
                      <MyInput type="email" id="user_email" defaultValue={googleEmail} disabled={true} />
                    </MyLabel>
                  </>
                ) : (
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <MyLabel>
                      {' '}
                      이메일 <span style={{ color: 'red' }}>{star.email}</span>
                      <MyInput
                        type="email"
                        id="user_email"
                        placeholder="이메일를 입력해주세요."
                        onChange={(e) => {
                          changeUserInfo(e);
                          regex('email', e);
                        }}
                      />
                      <MyLabelAb>{comment.email}</MyLabelAb>
                    </MyLabel>
                  </div>
                )}
                <div style={{ display: 'flex' }}>
                  <MyLabel>
                    {' '}
                    아이디 <span style={{ color: 'red' }}>{star.id}</span>
                    <MyInput
                      type="text"
                      id="user_id"
                      defaultValue={userInfo.id}
                      placeholder="아이디을 입력해주세요."
                      onChange={(e) => {
                        changeUserInfo(e);
                        regex('id', e);
                      }}
                    />
                    <MyLabelAb>{comment.id}</MyLabelAb>
                  </MyLabel>
                  <MyButton
                    type="button"
                    onClick={() => {
                      overlap('user_id');
                    }}
                  >
                    중복확인
                  </MyButton>
                </div>
                <MyLabel>
                  {' '}
                  비밀번호 <span style={{ color: 'red' }}>{star.password}</span>
                  <MyInput
                    type={passwordType[0].type}
                    id="user_pw"
                    autoComplete="off"
                    placeholder="비밀번호를 입력해주세요."
                    onKeyUp={(e) => {
                      setComment({ ...comment, user_pw: checkPassword(e.target.value, userInfo.user_pw) });
                    }}
                    onChange={(e) => {
                      changeUserInfo(e);
                      regex('password', e);
                    }}
                  />
                  <div
                    id="password"
                    onClick={(e) => {
                      passwordView(e);
                    }}
                    style={{ color: `${passwordType[0].visible ? 'gray' : 'lightgray'}` }}
                  >
                    <PwEye className="fa fa-eye fa-lg"></PwEye>
                  </div>
                  <MyLabelAb>{comment.password}</MyLabelAb>
                </MyLabel>
                <MyLabel>
                  {' '}
                  비밀번호 확인 <span style={{ color: 'red' }}>{star.password2}</span>
                  <MyInput
                    type={passwordType[1].type}
                    id="user_pw2"
                    autoComplete="off"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    onChange={(e) => {
                      changeUserInfo(e);
                      regex('password2', e.target.value);
                    }}
                  />
                  <div
                    id="password2"
                    onClick={(e) => {
                      passwordView(e);
                    }}
                    style={{ color: `${passwordType[1].visible ? 'gray' : 'lightgray'}` }}
                  >
                    <PwEye className="fa fa-eye fa-lg"></PwEye>
                  </div>
                  <MyLabelAb>{comment.password2}</MyLabelAb>
                </MyLabel>
              </div>

              <div style={{ padding: '30px 30px 0px 30px' }}>
                <MyLabel>
                  {' '}
                  이름 <span style={{ color: 'red' }}>{star.name}</span>
                  <MyInput
                    type="text"
                    id="user_name"
                    defaultValue={userInfo.user_name}
                    placeholder="이름을 입력해주세요."
                    onChange={(e) => {
                      changeUserInfo(e);
                      regex('name', e);
                    }}
                  />
                  <MyLabelAb>{comment.name}</MyLabelAb>
                </MyLabel>
                <div style={{ display: 'flex' }}>
                  <MyLabel>
                    {' '}
                    닉네임 <span style={{ color: 'red' }}>{star.nickname}</span>
                    <MyInput
                      type="text"
                      id="user_nickname"
                      defaultValue={userInfo.user_nickname}
                      placeholder="닉네임을 입력해주세요."
                      onChange={(e) => {
                        changeUserInfo(e);
                        regex('nickname', e);
                      }}
                    />
                    <MyLabelAb>{comment.nickname}</MyLabelAb>
                  </MyLabel>
                  <MyButton
                    type="button"
                    onClick={() => {
                      overlap('user_nickname');
                    }}
                  >
                    중복확인
                  </MyButton>
                </div>
                <MyLabel>
                  {' '}
                  전화번호 <span style={{ color: 'red' }}>{star.mobile}</span>
                  <MyInput
                    type="text"
                    id="user_mobile"
                    defaultValue={userInfo.user_mobile}
                    placeholder="전화번호를 입력해주세요."
                    onChange={(e) => {
                      changeUserInfo(e);
                      regex('mobile', e);
                    }}
                  />
                  <MyLabelAb>{comment.mobile}</MyLabelAb>
                </MyLabel>
                <MyLabel>
                  {' '}
                  생년월일 <span style={{ color: 'red' }}>{star.birthday}</span>
                  <MyInput
                    type="text"
                    id="user_birthday"
                    defaultValue={userInfo.user_birthday}
                    placeholder="생년월일을 입력해주세요."
                    onChange={(e) => {
                      changeUserInfo(e);
                      regex('birthday', e);
                    }}
                  />
                  <MyLabelAb>{comment.birthday}</MyLabelAb>
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
              {'가입하기'}
            </SubmitButton>
          </SignupForm>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpTest;
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpTest = ({ authLogic }) => {
  const auth = authLogic.getUserAuth();
  console.log('auth ===> ', auth);

  const navigate = useNavigate();

  const [submitButton, setSubmitButton] = useState({
    disabled: true,
    bgColor: 'rgb(175, 210, 244)',
    hover: false,
  });

  const toggleHover = () => {
    if (submitButton.hover) {
      setSubmitButton({ ...submitButton, hover: false, bgColor: 'rgb(105, 175, 245)' });
    } else {
      setSubmitButton({ ...submitButton, hover: true, bgColor: 'rgb(72, 145, 218)' });
    }
  };

  const [post, setPost] = useState({
    zipcode: '',
    address: '',
    addressDetail: '',
  });

  const [userInfo, setUserInfo] = useState({
    user_id: '',
    user_pw: '',
    user_name: '',
    user_nickname: '',
    user_email: '',
    user_mobile: '',
    user_birth: '',
    user_address: '',
    user_gender: '',
    user_auth: '',
  });

  const [passwordType, setPasswordType] = useState([
    {
      type: 'password',
      visible: false,
    },
    {
      type: 'password',
      visible: false,
    },
  ]);
  
  const passwordView = (event) => {
    const id = event.currentTarget.id;

    if (id === 'password') {
      if (!passwordType[0].visible) {
        setPasswordType([{ type: 'text', visible: true }, passwordType[1]]);
      } else {
        setPasswordType([{ type: 'password', visible: false }, passwordType[1]]);
      }
    } else if (id === 'password2') {
      if (!passwordType[1].visible) {
        setPasswordType([passwordType[0], { type: 'text', visible: true }]);
      } else {
        setPasswordType([passwordType[0], { type: 'password', visible: false }]);
      }
    }
  };
  return <></>;
};

export default SignUpTest;
>>>>>>> origin/ws
