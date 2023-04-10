import axios from 'axios';

export const qnaListDB = (qna) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'qna/qnaList',
        params: qna,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const qnaInsertDB = (qna) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'qna/qnaInsert',
        data: qna,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const qnaUpdateDB = (qna) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'qna/qnaUpdate',
        data: qna,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const qnaDeleteDB = (qna) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'qna/qnaDelete',
        params: qna,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
