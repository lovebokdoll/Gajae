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
