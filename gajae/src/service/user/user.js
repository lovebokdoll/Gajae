import axios from "axios";

export const signinDB = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "user/signin",
        data: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const getUserDB = (params) => {
  console.log(params);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "user/getUser",
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const idCheck = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "user/idCheck",
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const nicknameCheck = (params) => {
  console.log(params);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "user/nicknameCheck",
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const siginupSubmitDB = (userRecord) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "user/signup",
        data: userRecord,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const userUpdateDB = (user) => {
  console.log("user ===>", user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "user/update",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const findUserID = (user) => {
  console.log("user ===>", user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "user/findUserID",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const findUserPW = (user) => {
  console.log("user ===>", user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "user/findUserPW",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const deactivate = (user) => {
  console.log("user ===>", user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "user/deactivate",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const activate = (user) => {
  console.log("user ===>", user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "user/activate",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const sendVerificationCode = (email) => {
  console.log(email);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "email/sendVerificationCode",
        params: email,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const profileUploadDB = (params) => {
  console.log(params);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "user/profileupload",
        data: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
