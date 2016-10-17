const initialState = {
  current: null,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "INIT":
    {
      const result = {
        errors: [],
      };
      return { ...state, ...result };
    }
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
    default:
    {
      return state;
    }
  }
};
