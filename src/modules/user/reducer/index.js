const initialState = {
  current: null,
  formError: null,
  renderFlag: false,
  formValues: {
    email: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "INIT":
    {
      const result = {
        formValues: null,
        formError: null,
      };
      return { ...state, ...result };
    }
    case "LOGIN":
    case "SIGNUP":
    {
      const { response } = action;
      const result = {
        current: null,
        formError: null,
      };

      if (response.user) {
        result.current = response.user;
      }

      if (response.error) {
        result.formError = response.error;
      }

      result.renderFlag = !state.renderFlag;

      return { ...state, ...result };
    }
    case "LOGOUT":
    {
      return { ...state, current: null };
    }

    case "FILL_PASSWORD":
    {
      return { ...state, formValues: action.params };
    }

    default:
    {
      return state;
    }
  }
};
