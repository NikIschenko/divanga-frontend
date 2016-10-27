export default class UserActions {

  static signup(response) {
    return {
      type: 'SIGNUP',
      response,
    };
  }

  static login(response) {
    return {
      type: 'LOGIN',
      response,
    };
  }

  static setErrors(errors) {
    return {
      type: 'SET_ERRORS',
      errors,
    };
  }

  static logout() {
    return {
      type: 'LOGOUT',
    };
  }
}
