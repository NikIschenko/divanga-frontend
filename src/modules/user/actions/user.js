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
      // TODO: Set from error;
      console.log(error);
    });
};

export const signUp = (dispatch, profile) => {

  dispatch(UserActions.init());

  if (profile.password === '') {
    return dispatch(UserActions.fillPassword(profile));
  }

  Api.sendPost('api/users', profile).then((response) => {
    dispatch(UserActions.signup(response));
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
