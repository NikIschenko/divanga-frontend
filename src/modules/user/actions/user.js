import Api from '../../../system/Api';
import Service from '../../../system/Service';

export const login = (dispatch, profile) => {


  Api
    .sendPost('api/authenticate', profile)
    .then((response) => {
    dispatch(UserActions.login(response));
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

export const redirectUser = (user) => {

  if (user) {
    const location = (user.registry.length === 0)
      ? '/create-registry'
      : '/my';

    Service.redirect(location);
  }
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
