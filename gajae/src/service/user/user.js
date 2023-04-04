import axios from 'axios';

export const signinDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_GAJAE_IP + 'user/signin',
        data: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const getUserDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_GAJAE_IP + 'user/getUser',
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const idCheck = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_GAJAE_IP + 'user/idCheck',
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const nicknameCheck = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_GAJAE_IP + 'user/nicknameCheck',
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
