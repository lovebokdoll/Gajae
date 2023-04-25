import axios from "axios";

export const loginDB = (hostRecord) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "host/login",
        data: hostRecord,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const signupDB = (hostRecord) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "host/signup",
        data: hostRecord,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const overlapCheckDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "host/overlapCheck",
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
// 호텔 불러오기
export const hostHotelListDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "host/hotelList",
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
// p_id 불러오기
export const hostfacExistDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "host/facPidExist",
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const hostextraExistDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "host/extraPidExist",
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
//호텔상세보기
export const hostHotelDetailDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "host/hotelDetail",
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

//숙소수정하기
export const hosthotelUpdateDB = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "host/hotelUpdate",
        data: review,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

//숙소등록하기
export const hostpropertyInsertDB = (information) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "host/propertyInsert",
        data: information, //post방식으로 전송시 반드시 data속성으로 파라미터 줄 것
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

//시설등록하기
export const hostfacInsertDB = (information) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "host/hostfacInsert",
        data: information, //post방식으로 전송시 반드시 data속성으로 파라미터 줄 것
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const hostextraInsertDB = (information) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post", //@RequestBody
        url: process.env.REACT_APP_SPRING_IP + "host/hostextraInsert",
        data: information, //post방식으로 전송시 반드시 data속성으로 파라미터 줄 것
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const hotelDeleteDB = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "host/hotelDelete",
        params: review,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const hotelFACDeleteDB = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "host/hotelDelete",
        params: review,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const hotelEXTRADeleteDB = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "host/hotelDelete",
        params: review,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
