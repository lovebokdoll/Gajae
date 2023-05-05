import axios from "axios";

export const hostReviewListDB = (host) => {
  console.log(host);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "review/hostReviewList",
        params: host,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const hostReviewDetailDB = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "review/hostReviewDetail",
        params: review,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const hostReviewDeleteDB = (hostreply) => {
  console.log(hostreply);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "review/hostReviewDelete",
        params: hostreply,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
