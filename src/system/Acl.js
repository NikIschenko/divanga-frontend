import User from './User';
import Config from '../modules/app/config/config';

export default class Alc {

  static isGranted(nextState, replace, permission, store) {

    const state = store.getState();
    const user  = new User(state.user[Config.userField]);

    if (user.hasRole(permission) === false) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  }
}
