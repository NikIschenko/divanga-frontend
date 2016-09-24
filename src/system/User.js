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
    return (this.getRole() !== Config.routePermission);
  }

  getProperty(type) {
    
    return (this.hasOwnProperty(type))
      ? this[type]
      : null;
  }

  getRole() {

    return (this.hasOwnProperty('role'))
      ? this.role
      : Config.routePermission;
  }
}
