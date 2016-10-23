import Api from '../../../system/Api';
import Service from '../../../system/Service';
import User from '../service/User';

export const login = (dispatch, profile) => {

  User
    .login(profile)
    .then((response) => {
      dispatch(UserActions.login(response));
    })
    .catch((error) => {
      console.log(error); // TODO: Set from error;
    });
};

export const signUp = (dispatch, profile) => {

  dispatch(UserActions.init());

  User
    .signup(profile)
    .then((response) => {
      console.log('test');
      console.log(response);

      //dispatch()
    });

};

export default class UserActions {

  static init() {
    return {
      type: 'INIT',
    };
  }

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

  static fillPassword(params) {
    return {
      type: 'FILL_PASSWORD',
      params,
    };
  }

  static logout() {
    return {
      type: 'LOGOUT',
    };
  }
}
