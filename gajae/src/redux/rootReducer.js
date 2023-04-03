import { combineReducers } from 'redux';
import toastStatus from './toastStatus/reducer';

export const rootReducer = combineReducers({
  toastStatus,
});

export default rootReducer;
