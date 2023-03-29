import axios from 'axios';
/**
 * POST방식으로 전송 시 반드시 data 속성으로 파라미터를 전송할 것
 */

export const propertyListDB = (property) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'property/list',
        params: property,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const memberInsertDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post', //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + 'member/memberInsert',
        data: member,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
