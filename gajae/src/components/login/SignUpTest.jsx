import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { checkPassword, regexBirthday, regexEmail, regexMobile, regexName, regexNickname, regexPassword } from '../../service/regex';
import { siginupSubmitDB } from '../../service/signup/signup';
import { idCheck, nicknameCheck } from '../../service/user/user';
import { MyButton, MyH1, MyInput, MyLabel, MyLabelAb, PwEye, SignupForm, SubmitButton } from '../../style/FormStyle';
import Footer from '../footer/Footer';
import HeaderNav1 from '../header/HeaderNav1';
import HeaderNav2 from '../header/HeaderNav2';

const DivSignUp = styled.div`
  width: 300px;
  margin-bottom: 7px;
`;
const SignUpTest = ({ authLogic }) => {
  //const auth = authLogic.getUserAuth();
  // console.log('auth ===> ', auth);
  const [googleEmail, setGoogleEmail] = useState('');
  const [comment, setComment] = useState({
    user_email: '',
    user_pw: '',
    user_pw2: '',
    user_name: '',
    user_nickname: '',
    user_mobile: '',
    user_birthday: '',
  });

  const [star, setStar] = useState({
    user_email: '*',
    user_pw: '*',
    user_pw2: '*',
    user_name: '*',
    user_nickname: '*',
    user_mobile: '*',
    user_birthday: '*',
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
    } else if (key === 'nickname') {
      result = regexNickname(event);
    } else if (key === 'password') {
      result = regexPassword(event);
    } else if (key === 'password2') {
      result = checkPassword(userInfo.user_password, event);
    } else if (key === 'name') {
      result = regexName(event);
    } else if (key === 'mobile') {
      result = regexMobile(event);
    } else if (key === 'birthday') {
      result = regexBirthday(event);
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
  const navigate = useNavigate();

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
    user_auth: '',
  });

  const overlap = async (key) => {
    let params;
    let response;
    if (key === 'user_id') {
      params = { USER_ID: userInfo[key].trim(), type: 'overlap' };
      if (params.USER_ID === '') {
        alert('공백입력');
        return;
      }
      response = await idCheck(params);
    } else if (key === 'user_nickname') {
      params = { USER_NICKNAME: userInfo[key].trim(), type: 'overlap' };
      if (params.USER_NICKNAME === '') {
        alert('공백입력');
        return;
      }
      response = await nicknameCheck(params);
    }
    console.log('params ===> ', params);
    console.log(response.data);
    if (response.data === 0) {
      alert('사용 가능합니다.');
    } else if (response.data === 1) {
      alert('이미 사용중 입니다.');
    }
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
    try {
      const b = userInfo.user_birthday;
      let birthday = '';
      if (b !== '') {
        birthday = b.slice(0, 4) + '-' + b.slice(4, 6) + '-' + b.slice(6, 8);
      }
      const userRecord = {
        //USER_UID: userInfo.user_uid,
        USER_ID: userInfo.user_id,
        USER_PW: userInfo.user_pw,
        USER_NAME: userInfo.user_name,
        USER_NICKNAME: userInfo.user_nickname,
        USER_EMAIL: userInfo.user_email,
        USER_MOBILE: userInfo.user_mobile,
        USER_BIRTH: birthday,
        USER_GENDER: userInfo.user_gender,
        USER_AUTH: type === 'user' ? 'user' : 'staff',
        USER_STATUS: 1,
      };
      console.log('userRecord ===>', userRecord);
      const resonse = await siginupSubmitDB(userRecord);

      if (resonse.data !== 1) {
        return '회원가입 실패';
      } else if (resonse.data == 1) {
        navigate('/login');
      }
    } catch (error) {
      console.log('error ===>', error);
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
            <MyH1>{'Sign Up'}</MyH1>
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
                      이메일 <span style={{ color: 'red' }}>{star.user_email}</span>
                      <MyInput
                        type="email"
                        id="user_email"
                        placeholder="이메일를 입력해주세요."
                        onChange={(e) => {
                          changeUserInfo(e);
                          regex('email', e);
                        }}
                      />
                      <MyLabelAb>{comment.user_email}</MyLabelAb>
                    </MyLabel>
                  </div>
                )}
                <div style={{ display: 'flex' }}>
                  <MyLabel>
                    {' '}
                    아이디 <span style={{ color: 'red' }}>{star.user_id}</span>
                    <MyInput
                      type="text"
                      id="user_id"
                      defaultValue={userInfo.user_id}
                      placeholder="닉네임을 입력해주세요."
                      onChange={(e) => {
                        changeUserInfo(e);
                      }}
                    />
                    <MyLabelAb>{comment.user_id}</MyLabelAb>
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
                  비밀번호 <span style={{ color: 'red' }}>{star.user_pw}</span>
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
                  <MyLabelAb>{comment.user_pw2}</MyLabelAb>
                </MyLabel>
                <MyLabel>
                  {' '}
                  비밀번호 확인 <span style={{ color: 'red' }}>{star.user_pw2}</span>
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
                  <MyLabelAb>{comment.user_pw2}</MyLabelAb>
                </MyLabel>
              </div>

              <div style={{ padding: '30px 30px 0px 30px' }}>
                <MyLabel>
                  {' '}
                  이름 <span style={{ color: 'red' }}>{star.user_name}</span>
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
                  <MyLabelAb>{comment.user_name}</MyLabelAb>
                </MyLabel>
                <div style={{ display: 'flex' }}>
                  <MyLabel>
                    {' '}
                    닉네임 <span style={{ color: 'red' }}>{star.user_nickname}</span>
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
                    <MyLabelAb>{comment.user_nickname}</MyLabelAb>
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
                  전화번호 <span style={{ color: 'red' }}>{star.hp}</span>
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
                  <MyLabelAb>{comment.user_mobile}</MyLabelAb>
                </MyLabel>
                <MyLabel>
                  {' '}
                  생년월일 <span style={{ color: 'red' }}>{star.user_birthday}</span>
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
                  <MyLabelAb>{comment.user_birthday}</MyLabelAb>
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
