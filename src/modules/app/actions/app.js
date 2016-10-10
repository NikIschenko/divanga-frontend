export default class AppActions {

  static toggleSidebar(className) {
    return {
      type: 'TOGGLE_SIDEBAR',
      className
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

