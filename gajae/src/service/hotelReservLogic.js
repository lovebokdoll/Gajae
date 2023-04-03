import axios from "axios";

export const hotelListDB = (hotel) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        // url: process.env.REACT_APP_SPTING_IP + "hotel/hotelList",
        url: "http://localhost:9999/hotel/hotelList",
        params: hotel,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
