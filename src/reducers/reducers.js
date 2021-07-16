export const modalStateReducer = (state = false, action) => {
  if (action.type === 'MODAL_STATE') return action.payload;
  return state;
};

export const selectedProjectStateReducer = (state = '', action) => {
  if (action.type === 'SELECTED_PROJECT') return action.payload;
  return state;
}

export const projectsListReducer = (state = [], action) => {
  if (action.type === 'PROJECTS_LIST') return action.payload;
  return state;
}

export const selectedMenuReducer = (state = '', action) => {
  if (action.type === 'SELECTED_MENU') return action.payload;
  return state;
}

export const changeDetectedReducer = (state = false, action) => {
  if (action.type === 'CHANGE_DETECTED') return action.payload;
  return state;
}

export const isTransitionEndReducer = (state = false, action) => {
  if (action.type === 'TRANSITION_END') return action.payload;
  return state;
}

export const isReadyToMoveReducer = (state = false, action) => {
  if (action.type === 'READY_TO_MOVE') return action.payload;
  return state;
}

export const isChangingProjectReducer = (state = 0, action) => {
  if (action.type === 'CHANGING_PROJECT') return action.payload;
  return state;
}

export const displayDirectionReducer = (state = 'landscape', action) => {
  if (action.type === 'DISPLAY_DIRECTION') return action.payload;
  return state;
}