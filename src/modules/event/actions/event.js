export default class EventActions {

  static setMain(items) {
    return {
      type: 'SET_MAIN',
      items
    }
  }

  static setPopular(items) {
    return {
      type: 'SET_POPULAR',
      items
    }
  }

  static setDetail(item) {
    return {
      type: 'SET_DETAIL',
      item
    }
  }
}

