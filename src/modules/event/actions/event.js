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

  static setTop(items) {
    return {
      type: 'SET_TOP',
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

