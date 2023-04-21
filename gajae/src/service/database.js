import axios from "axios";
/**
 * POST방식으로 전송 시 반드시 data 속성으로 파라미터를 전송할 것
 */
export const propertyListDB = (property) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_GAJAE_IP + "property/list",
        params: property,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const searchListDB = (property) => {
  console.log(property);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "search/list",
        data: property,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}; //resultcontroller에서 오는거

export const memberInsertDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post", //@RequestBody
        url: process.env.REACT_APP_SPRING_GAJAE_IP + "member/memberInsert",
        data: member,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const uploadImageDB = (file) => {
  console.log("file ===> ", file);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_GAJAE_IP + "reply/imageUpload",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        processData: false,
        contentType: false,
        data: file,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const uploadFileDB = (file) => {
  console.log("file ===> ", file);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_GAJAE_IP + "reply/fileUpload",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        processData: false,
        contentType: false,
        data: file,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

//지도 마커 리스트 호출
export const markListDB = () => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios.get(
        process.env.REACT_APP_SPRING_IP + "search/markList"
      );
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
