/* Dependencies */
// libraries
import { combineReducers } from 'redux';
// reducer
import * as reducers from './reducers';

export default combineReducers({
  modalState: reducers.modalStateReducer,
  selectedProject: reducers.selectedProjectStateReducer,
  projectsList: reducers.projectsListReducer,
  selectedMenu: reducers.selectedMenuReducer,
  isChangeDetected: reducers.changeDetectedReducer,
  isTransitionEnd: reducers.isTransitionEndReducer,
  isReadyToMove: reducers.isReadyToMoveReducer,
  isChangingProject: reducers.isChangingProjectReducer,
  displayDirection: reducers.displayDirectionReducer
});