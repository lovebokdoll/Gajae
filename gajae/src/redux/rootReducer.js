import { combineReducers } from "redux";
import modalInfo from "./modalStatus/reducer";
import nationModalInfo from "./nationStatus/reducer";
import toastStatus from "./toastStatus/reducer";
import userAuth from "./userAuth/reducer";
export const rootReducer = combineReducers({
  userAuth,
  toastStatus,
  modalInfo,
  nationModalInfo,
});

export default rootReducer;
