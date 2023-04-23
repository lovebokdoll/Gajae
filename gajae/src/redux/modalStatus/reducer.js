import { SET_MODAL_FALSE, SET_MODAL_TRUE } from "./action";

export const modalStatus = {
  status: false,
  message: "",
};

export default function modalInfo(state = modalStatus, action) {
  switch (action.type) {
    case SET_MODAL_TRUE:
      return { ...state, status: action.bool, message: action.message };
    case SET_MODAL_FALSE:
      return { ...state, status: action.bool, message: action.message };
    default:
      return { ...state };
  }
}
