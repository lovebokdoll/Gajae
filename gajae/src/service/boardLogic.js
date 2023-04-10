import axios from 'axios';

export const boardListDB = (board) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'reply/replyBoardList',
        params: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const boardInsertDB = (board) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'reply/replyBoardInsert',
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const qnaListDB = (board) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'reply/qnaList',
        params: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const qnaInsertDB = (board) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'reply/qnaInsert',
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
