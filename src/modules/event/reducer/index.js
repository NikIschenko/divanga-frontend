const initialState = {
  mainItems: [],
  detailEvent: {},
  popularItems: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case 'SET_MAIN':
      return { ...state, mainItems: action.items };
    case 'SET_POPULAR':
      return { ...state, popularItems: action.items };
    case 'SET_DETAIL':
      return { ...state, detailEvent: action.item };

    default:
      return state;
  }

};
