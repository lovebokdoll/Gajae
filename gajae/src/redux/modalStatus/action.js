export const SET_MODAL_TRUE = "MODAL_STATUS/SET_MESSAGE";
export const SET_MODAL_FALSE = "MODAL_STATUS/SET_FALSE";

export const setModalTrue = (message) => {
  console.log(message);
  return {
    type: SET_MODAL_TRUE,
    message: message,
    bool: true,
  };
};

export const setModalFalse = () => {
  return {
    type: SET_MODAL_FALSE,
    message: "",
    bool: false,
  };
};
