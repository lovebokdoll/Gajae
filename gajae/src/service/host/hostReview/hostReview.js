import axios from 'axios';

export const hostReviewListDB = (host) => {
  console.log(host);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'review/hostReviewList',
        params: host,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
