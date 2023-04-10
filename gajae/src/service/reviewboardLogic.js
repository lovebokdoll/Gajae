import axios from "axios";

export const reviewListDB = (board) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "review/reviewList",
        params: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const reviewInsertDB = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "review/reviewInsert",
        data: review,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const imageInsertDB = (imageUrl) => {
  console.log(imageUrl);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "review/imageInser",
        data: imageUrl,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
