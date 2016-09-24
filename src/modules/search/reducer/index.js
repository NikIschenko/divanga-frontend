const initialState = {
  query: '',
  results: [],
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'SEARCH': {
      const { query, response } = action;
      const results = _.get(response, 'results', []);
      const total = _.get(response, 'total_count', 0);

      return { ...state, query, results, total };
    }

    default: { return state; }
  }
};

