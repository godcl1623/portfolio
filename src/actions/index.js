// action creator for handling modal state
export const modalHandler = boolean => ({
  type: 'MODAL_STATE',
  payload: boolean
  });

export const selectedProject = project => ({
  type: 'SELECTED_PROJECT',
  payload: project
});