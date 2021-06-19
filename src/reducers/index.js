/* Dependencies */
// libraries
import { combineReducers } from 'redux';
// reducer
import modalStateReducer from './reducers';

export default combineReducers({
  modalState: modalStateReducer
});