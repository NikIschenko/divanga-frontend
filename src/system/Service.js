import Config from '../modules/app/config/config';

export default class Service {

  static redirect(location) {
    Config.historyType.push(location);
  }
}

