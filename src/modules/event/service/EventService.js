import Api from '../../../system/Api';
import Config from '../../app/config/config';

export default class EventService {

  /**
   * Return full info by event (used on detail page)
   * @param id
   * @returns {Promise}
   */
  static getDetailInfo(id) {
    return new Promise((resolve, reject) => {
      Api
        .fetchJSON(Config.apiHost + 'api/events/confirmed/detail/' + id)
        .then(resolve)
        .catch(reject);
    });
  }
}