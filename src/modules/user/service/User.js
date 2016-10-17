import Api from '../../../system/Api';

export default class User {

  static login(profile) {
    return new Promise((resolve, reject) => {
      Api
        .sendPost('api/authenticate', profile)
        .then((response) => {
          (response.id_token)
            ? resolve(User.getProfile(response.id_token, profile.username))
            : reject(response)
        });
    });
  }

  static getProfile(token, login) {
    return new Promise((resolve, reject) => {
      Api
        .setToken(token, Api.TOKEN_TYPE)
        .fetchJSON('api/users/' + login)
        .then(resolve)
        .catch(reject);
    });
  }

  static getFullName(user) {
    return user.firstName + ' ' + user.lastName;
  }
}