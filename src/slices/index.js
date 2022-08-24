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

  const isChangeDetected = createSlice({
    name: 'CHANGE_DETECTED',
    initialState: false,
    reducers: {
      setIsChanged(state, action) {
        return action.payload;
      }
    }
  });

  const selectedProjectIndex = createSlice({
    name: 'SELECTED_PROJECT_INDEX',
    initialState: 0,
    reducers: {
      setProjectIndex(state, action) {
        return action.payload;
      }
    }
  })

const sliceReducers = combineReducers({
  modalState: modalState.reducer,
  isChangeDetected: isChangeDetected.reducer,
  selectedProjectIndex: selectedProjectIndex.reducer
});

const store = configureStore({
  reducer: {
    sliceReducers
  }
});

export default store;

  export const { setModalState } = modalState.actions;
  export const { setIsChanged } = isChangeDetected.actions;
  export const { setProjectIndex } = selectedProjectIndex.actions;