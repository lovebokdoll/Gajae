import axios from "axios";

//호텔정보 가져오기
export const hotelListDB = (hotel) => {
  console.log(hotel);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_GAJAE_IP + "hotel/hotelList",
        params: hotel,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
// 룸타입가져오기
export const roomtypeListDB = (room) => {
  console.log(room);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_GAJAE_IP + "hotel/roomtypeList",
        params: room,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
