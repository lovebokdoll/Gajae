import { SET_FALSE, SET_MESSAGE } from './action';
import { toastStatus } from './state';

export default function toastInfo(state = toastStatus, action) {
  console.log('toastStatus reducer.js ===> ', toastStatus);
  
  switch (action.type) {
    case SET_MESSAGE:
      console.log('toastStatus reducer.js ===> ', action);
      return { ...state, status: action.bool, message: action.message };
      
      case SET_FALSE:
      return { ...state, status: action.bool, message: action.message };

    default:
      return { ...state };
  }
}
