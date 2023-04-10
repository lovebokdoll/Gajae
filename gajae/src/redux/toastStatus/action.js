export const SET_MESSAGE = 'TOAST_STATUS/SET_MESSAGE';
export const SET_FALSE = 'TOAST_STATUS/SET_FALSE';

/**
 *  Action을 dispatch를 통해서 store에 전달할 때 호출되는 함수
 *  reducer에 전달되면 switch문에서 변화
 * @param {*} message
 * @returns
 */
export const setToastMessage = (message) => {
  console.log(message);
  return {
    type: SET_MESSAGE,
    message: message,
    bool: true,
  };
};

export const setToastFalse = () => {
  return {
    type: SET_FALSE,
    message: '',
    bool: false,
  };
};
