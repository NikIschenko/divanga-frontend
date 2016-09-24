export default class SearchActions {

  static search(query, response) {
    return {
      type: 'SEARCH',
      query,
      response,
    };
  }
}

