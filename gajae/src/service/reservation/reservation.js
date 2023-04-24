import axios from 'axios';

export const resInformation = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'reservation/resInformation',
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const resInsert = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'reservation/resInsert',
        data: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const resUpdate = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'reservation/resInsert',
        data: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const vacancyUpdate = (dateInfo) => {
  console.log(dateInfo);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'vacancy/vacancyUpdate',
        data: dateInfo,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
