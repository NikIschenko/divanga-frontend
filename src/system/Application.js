import { combineReducers } from 'redux';

export default class Application {
  constructor() {
    this.routes = [];
    this.reduces = [];
    this.modulePath = 'modules/';
    this.configDir = '/config/';
  }

  addRouters(routers) {
    routers = routers.default || routers;
    this.routes = this.routes.concat(routers);

    return this;
  }

  getRouters() {
    return this.routes;
  }

  getRootReducer() {
    let rootReducer = {};

    Object.keys(this.reduces).forEach((key) => {
      rootReducer[key] = this.reduces[key];
    });

    return combineReducers(rootReducer);
  }

  addReducer(reducer, moduleName) {
    reducer = reducer.default || reducer;
    this.reduces[moduleName] = reducer;
    return this;
  }

  loadModules(modules) {
    const { modulePath, configDir } = this;

    modules.forEach((moduleName) => {

      const name = moduleName.toLowerCase();

      try {
        const routers = require(`./../${modulePath}${name}${configDir}routes`);
        this.addRouters(routers);
      }
      catch (error) {
        console.warn(error);
      }

      try {
        const reducer = require(`./../${modulePath}${name}/reducer/index`);
        this.addReducer(reducer, name);
      } catch (error) {
        console.warn(error);
      }
    });
  }
}
