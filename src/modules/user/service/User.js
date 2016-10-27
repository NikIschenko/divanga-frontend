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
  
  static signup(profile) {
    return new Promise((resolve, reject) => {
      Api
        .post('http://40.68.243.107:8040/api/register', profile)
        .then(resolve)
        .catch(reject);
    });
  }

  static getProfile(token, login) {
    return new Promise((resolve, reject) => {
      Api
        .setToken(token, Api.TOKEN_TYPE)
        .fetchJSON('api/users/' + login)
        .then((response) => {
          response.token = token;
          resolve(response);
        })
        .catch(reject);
    });
  }

  static getFullName(user) {
    return user.firstName + ' ' + user.lastName;
  }
}