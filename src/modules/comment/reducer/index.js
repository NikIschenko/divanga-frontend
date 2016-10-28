const initialState = {
  list: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case 'SET_COMMENTS':
      return { ...state, list: action.comments };

    default:
      return state;
  }
};
