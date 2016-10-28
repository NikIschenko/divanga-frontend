const initialState = {
  className: null,
  popup: null,
  popularTags: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case 'POPUP_SHOW':
      return { ...state, popup: { ...action.data, isOpened: true } };

    case 'POPUP_HIDE':
      return { ...state, popup: { ...state.popup, isOpened: false } };
    case 'SET_POPULAR_TAGS':
      return { ...state, popularTags: action.tags };

    case 'TOGGLE_SIDEBAR':
      return { ...state, className: action.className  };

    default:
      return state;
  }
};
