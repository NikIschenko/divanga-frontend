export default class AppActions {

  static toggleSidebar(className) {
    return {
      type: 'TOGGLE_SIDEBAR',
      className
    }
  }

  static setPopularTags(tags) {
    return {
      type: 'SET_POPULAR_TAGS',
      tags,
    }
  }

  static popupShow(data) {
    return {
      type: 'POPUP_SHOW',
      data,
    };
  }

  static popupHide() {
    return {
      type: 'POPUP_HIDE',
    };
  }
}

