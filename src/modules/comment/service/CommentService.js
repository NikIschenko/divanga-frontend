import Api from '../../../system/Api';
import Config from '../../app/config/config';

export default class CommentService {

  /**
   * Return list of comments
   * @param id
   * @returns {Promise}
   */
  static getCommentsByEvent(id) {
    return new Promise((resolve, reject) => {
      Api
        .fetchJSON(Config.apiHost + 'api/comments/event/' + id)
        .then(resolve)
        .catch(reject);
    });
  }
}

