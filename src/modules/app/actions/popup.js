export default class PopupActions {
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
