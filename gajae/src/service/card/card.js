export const cardInformation = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'card/cardInformation',
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const cardInsert = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'card/cardInsert',
        data: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const cardUpdate = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'post',
        url: process.env.REACT_APP_SPRING_IP + 'card/cardUpdate',
        data: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const cardDelete = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: process.env.REACT_APP_SPRING_IP + 'card/cardDelete',
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
