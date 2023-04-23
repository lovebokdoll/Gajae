import { SET_NATION_MODAL_TRUE, SET_NATION_MODAL_FALSE } from "./action";
import { nationStatus } from "./state";

export default function nationModalInfo(state = nationStatus, action) {
  switch (action.type) {
    case SET_NATION_MODAL_TRUE:
      return { ...state, status: action.bool, message: action.message };
    case SET_NATION_MODAL_FALSE:
      return { ...state, status: action.bool, message: action.message };
    default:
      return { ...state };
  }
}
