import Api from '../../../system/Api';
import Service from '../../../system/Service';

export const login = (dispatch, profile, provider = "local") => {

  const params = {
    email: profile.email       || '',
    authId: profile.authId     || profile.id || '',
    password: profile.password,
    provider: profile.provider || provider,
  };

  Api.post('/api/auth/login', params).then((response) => {

    if (response.user) {

    }

    dispatch(UserActions.login(response));
    setTimeout(() => { dispatch(CatalogActions.render()); }, 500);
  });
};

export const signUp = (dispatch, profile, provider = "local") => {

  dispatch(UserActions.init());

  if (profile.name) {
    const name = profile.name.split(" ");
    profile.firstName = name[0];
    profile.lastName = name[1];
  }

  if (profile.picture) {
    profile.image = profile.picture.data.url;
  }

  const params = {
    authId:    profile.authId    || profile.id || '',
    email:     profile.email     || '',
    firstName: profile.firstName || '',
    lastName:  profile.lastName  || '',
    image:     profile.image     || '',
    provider:  profile.provider  || provider,
    password:  profile.password  || '',
  };

  if (params.password === '') {
    return dispatch(UserActions.fillPassword(params));
  }

  Api.post('/api/user', params).then((response) => {
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
