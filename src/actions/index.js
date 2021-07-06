// action creator for handling modal state
export const modalHandlerCreator = boolean => ({
  type: 'MODAL_STATE',
  payload: boolean
  });

export const selectedProjectCreator = project => ({
  type: 'SELECTED_PROJECT',
  payload: project
});

export const projectsListCreator = list => ({
  type: 'PROJECTS_LIST',
  payload: list
});

export const selectedMenuCreator = menuText => ({
  type: 'SELECTED_MENU',
  payload: menuText
});

export const changeDetectedCreator = boolean => ({
  type: 'CHANGE_DETECTED',
  payload: boolean
})

export const isTransitionEndCreator = boolean => ({
  type: 'TRANSITION_END',
  payload: boolean
})

export const isReadyToMoveCreator = boolean => ({
  type: 'READY_TO_MOVE',
  payload: boolean
});

export const isChangingProjectCreator = number => ({
  type: 'CHANGING_PROJECT',
  payload: number
});