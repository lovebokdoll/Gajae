import axios from "axios";

/* MyReviewList */
export const reviewListDB = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "review/myreviewList",
        params: review,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const myReviewDB = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "review/myReviewDetail",
        params: review,
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

export const reviewUpdateDB = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "review/reviewUpdate",
        data: review,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const reviewDelete = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "review/reviewDelete",
        params: review,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
