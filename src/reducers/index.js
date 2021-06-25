/* Dependencies */
// libraries
import { combineReducers } from 'redux';
// reducer
import * as reducers from './reducers';

export default combineReducers({
  modalState: reducers.modalStateReducer,
  selectedProject: reducers.selectedProjectStateReducer
});