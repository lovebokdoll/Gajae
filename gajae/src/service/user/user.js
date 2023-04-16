import axios from 'axios';

export const signinDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'user/signin',
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
        url: process.env.REACT_APP_SPRING_IP + 'user/getUser',
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
        url: process.env.REACT_APP_SPRING_IP + 'user/idCheck',
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
        url: process.env.REACT_APP_SPRING_IP + 'user/nicknameCheck',
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const siginupSubmitDB = (userRecord) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'user/signup',
        data: userRecord,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const userUpdateDB = (user) => {
  console.log('user ===>', user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'user/update',
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
