import Config from '../modules/app/config/config';

export default class User {

  constructor(entity) {

    for (const propertyName in entity) {
      this[propertyName] = entity[propertyName];
    }
  }

  hasRole(roles) {

    if (roles === Config.routePermission) {
      return true;
    }

    return (roles.includes(this.getRole()));
  }

  isLogin() {
    console.log(this.getProperty('token'));
    return (this.getProperty('token'));
  }

  getProperty(type) {
    
    return (this.hasOwnProperty(type))
      ? this[type]
      : null;
  }

  getRole() {

    return (this.hasOwnProperty('authorities'))
      ? this.authorities
      : false;
  }
}
