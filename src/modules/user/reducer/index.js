const initialState = {
  current: null,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case "LOGIN":
    case "SIGNUP":
    {
      const { response } = action;
      const result = {
        current: response,
        errors: [],
      };

      return { ...state, ...result };
    }
    case "LOGOUT":
    {
      return { ...state, current: null };
    }
    case "SET_ERRORS":
    {
      return { ...state, errors: action.errors };
    }
    default:
    {
      return state;
    }
  }
};
