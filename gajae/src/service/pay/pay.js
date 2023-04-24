import axios from "axios";

export const paymentInformation = (params) => {
  console.log(params);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'payment/paymentInformation',
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const paymentInsert = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'payment/paymentInsert',
        data: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const paymentUpdate = (params) => {
    return new Promise((resolve, reject) => {
      try {
        const response = axios({
          method: 'post',
          url: process.env.REACT_APP_SPRING_IP + 'payment/paymentUpdate',
          data: params,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };
