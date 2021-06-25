export const modalStateReducer = (state = false, action) => {
  if (action.type === 'MODAL_STATE') return action.payload;
  return state;
};

export const selectedProjectStateReducer = (state = '', action) => {
  if (action.type === 'SELECTED_PROJECT') return action.payload;
  return state;
}
