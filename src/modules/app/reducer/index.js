const initialState = {
  className: null,
  popup: null,
};

export default (state = initialState, action) => {
  // @TODO: why we are receieving null?
  if (_.isNull(state)) {
    return initialState;
  }

  switch (action.type) {
    case 'POPUP_SHOW':
      return { ...state, popup: { ...action.data, isOpened: true } };
    case 'POPUP_HIDE':
      return { ...state, popup: { ...state.popup, isOpened: false } };

    case 'TOGGLE_SIDEBAR':

      return Object.assign({}, state, { className: action.className });

    default:
      return state;
  }
};
