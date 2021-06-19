const modalStateReducer = (state = false, action) => {
  if (action.type === 'MODAL_STATE') return action.payload;
  return state;
};

export default modalStateReducer;