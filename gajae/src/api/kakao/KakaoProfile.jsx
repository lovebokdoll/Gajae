import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoProfile = () => {
  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: '/v2/user/me',
      });
      console.log(data);
      console.log(data.connected_at);
      console.log(data.id);
      console.log(data.properties.nickname);
      console.log(data.kakao_account.email);

      window.localStorage.setItem('userId', data.id);//localStorage에 userId를 담음
      window.localStorage.setItem('user_nickname', data.properties.nickname);//localStorage에 user_nickname를 담음
      window.localStorage.setItem('user_email', data.kakao_account.email);////localStorage에 user_email 담음
      navigate('/');//로그인 처리되면 메인페이지로 네비게이트 처리

    } catch (error) {
      console.log('error = ', error);
      alert('로그인이 실패하였습니다.')
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  /*  const kakaoLogout = async () => {
    await axios({
      method: 'get',
      url: `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&logout_redirect_uri=http://localhost:3000`,
    })
      .then((res) => {
        window.localStorage.removeItem('userId');
        window.localStorage.removeItem('nickname');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }; */

  return <></>;
};

export default KakaoProfile;