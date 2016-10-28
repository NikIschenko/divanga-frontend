import Api    from '../../../system/Api';
import Config from '../../app/config/config';

export default class User {

  static login(profile) {
    return new Promise((resolve, reject) => {
      Api
        .post(Config.apiHost + 'api/authenticate', profile)
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
        .post(Config.apiHost + 'api/register', profile)
        .then(resolve)
        .catch(reject);
    });
  }

  static getProfile(token, login) {
    return new Promise((resolve, reject) => {
      Api
        .setToken(token)
        .fetchJSON(Config.apiHost + 'api/users/' + login)
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