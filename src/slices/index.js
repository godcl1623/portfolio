import { combineReducers } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

  const modalState = createSlice({
    name: 'MODAL_STATE',
    initialState: false,
    reducers: {
      setModalState(state, action) {
        return action.payload;
      }
    }
  });
  const selectedProject = createSlice({
    name: 'SELECTED_PROJECT',
    initialState: '',
    reducers: {
      setSelectedProject(state, action) {
        return action.payload;
      }
    }
  });
  const projectsList = createSlice({
    name: 'PROJECTS_LIST',
    initialState: [],
    reducers: {
      setProjectsList(state, action) {
        return action.payload;
      }
    }
  });
  const selectedMenu = createSlice({
    name: 'SELECTED_MENU',
    initialState: '',
    reducers: {
      setSelectedMenu(state, action) {
        return action.payload;
      }
    }
  });
  const isChangeDetected = createSlice({
    name: 'CHANGE_DETECTED',
    initialState: false,
    reducers: {
      setIsChanged(state, action) {
        return action.payload;
      }
    }
  });
  const isTransitionEnd = createSlice({
    name: 'TRANSITION_END',
    initialState: false,
    reducers: {
      setIsTransitionEnd(state, action) {
        return action.payload;
      }
    }
  });
  const isReadyToMove = createSlice({
    name: 'READY_TO_MOVE',
    initialState: false,
    reducers: {
      setIsReadyToMove(state, action) {
        return action.payload;
      }
    }
  });
  const isChangingProject = createSlice({
    name: 'CHANGING_PROJECT',
    initialState: 0,
    reducers: {
      setIsChangingProject(state, action) {
        return action.payload;
      }
    }
  });

const sliceReducers = combineReducers({
  modalState: modalState.reducer,
  selectedProject: selectedProject.reducer,
  projectsList: projectsList.reducer,
  selectedMenu: selectedMenu.reducer,
  isChangeDetected: isChangeDetected.reducer,
  isTransitionEnd: isTransitionEnd.reducer,
  isReadyToMove: isReadyToMove.reducer,
  isChangingProject: isChangingProject.reducer
});

const store = configureStore({
  reducer: {
    sliceReducers
  }
});

export default store;

  export const { setModalState } = modalState.actions;
  export const { setSelectedProject } = selectedProject.actions;
  export const { setProjectsList } = projectsList.actions;
  export const { setSelectedMenu } = selectedMenu.actions;
  export const { setIsChanged } = isChangeDetected.actions;
  export const { setIsTransitionEnd } = isTransitionEnd.actions;
  export const { setIsReadyToMove } = isReadyToMove.actions;
  export const { setIsChangingProject } = isChangingProject.actions;