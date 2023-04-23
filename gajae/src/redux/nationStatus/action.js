export const SET_NATION_MODAL_TRUE = "NATION_MODAL_STATUS/SET_NATION_TRUE";
export const SET_NATION_MODAL_FALSE = "NATION_MODAL_STATUS/SET_NATION_FALSE";

export const setNationModalTrue = (message) => {
  console.log(message);
  return {
    type: SET_NATION_MODAL_TRUE,
    message: message,
    bool: true,
  };
};

export const setNationModalFalse = () => {
  return {
    type: SET_NATION_MODAL_FALSE,
    message: "",
    bool: false,
  };
};
