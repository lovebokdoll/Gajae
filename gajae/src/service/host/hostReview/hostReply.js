import axios from 'axios';

export const replyInsertDB = (reply) => {
  console.log(reply);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'review/replyInsert',
        data: reply,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const replyListDB = (reply) => {
  console.log(reply);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'review/hostreplyList',
        params: reply,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const replyUpdateDB = (reply) => {
  console.log(reply);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'review/hostreplyUpdate',
        data: reply,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
