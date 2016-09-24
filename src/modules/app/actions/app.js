export default class AppActions {

  static toggleSidebar(className) {
    return {
      type: 'TOGGLE_SIDEBAR',
      className
    }
  }
}

