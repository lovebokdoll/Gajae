import axios from 'axios';

export const siginupSubmitDB = (userRecord) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_GAJAE_IP + 'user/signup',
        data: userRecord,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

