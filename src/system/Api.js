import urlJoin from 'url-join';
import config from '../modules/app/config/config';
import 'whatwg-fetch';

export default class Api {

  static authorization = '';
  static host          = '';

  static TOKEN_TYPE = 'Bearer ';
  static HTTP_METHOD = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
  };

  static setHost(host) {
    Api.host = host;
    return Api;
  }

  static setToken(token, type) {
    Api.authorization = type + token;
    return Api;
  }

  static fetchJSON(method = Api.HTTP_METHOD.GET, url, data = null) {

    const methods = Object.keys(Api.HTTP_METHOD);
    if (methods.includes(method.toUpperCase()) === false) {
      data = url;
      url = method;
      method = Api.HTTP_METHOD.GET;
    }

    url = this._prepareUrl(url);

    if (method === Api.HTTP_METHOD.POST) {
      return Api.post(url, data);
    }

    return fetch(url, {
      method,
      headers: Api._getHeaders(),
    }).then(response => response.json());
  }

  static _getHeaders() {
    const headers = {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8'
    };

    if (Api.authorization) {
      headers['Authorization'] = this.authorization;
    }

    return headers;
  }

  static _prepareUrl(url) {
    return 'http://40.68.243.107:8040/' + url;
  }

  static _convertToFormData(data) {
    const formData = new FormData();
    for (const name in data) {
      formData.append(name, data[name]);
    }
    
    return formData;
  }

  static post(url, data) {
    return fetch(url, {
      method: Api.HTTP_METHOD.POST,
      headers: Api._getHeaders(),
      body: Api._convertToFormData(data),
    }).then(response => response.json());
  }

  static put(url, data) {
    return fetch(url, {
      method: Api.HTTP_METHOD.PUT,
      headers: Api._getHeaders(),
      body: Api._convertToFormData(data),
    }).then(response => response.json());
  }


  static sendPost(url, data) {

    var json = JSON.stringify(data);
    return fetch(this._prepareUrl(url), {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: json,
    }).then((response) => response.json());
  }



  // -------------------------------------------------------------------------------------------------------------------
  static getJSON(url, flag = true) {
    return (

      fetch( (flag) ? urlJoin([config.apiHost, url]) : url, {
        headers: {
        /*  'Authorization': '578d01ab349c3003090000050c4315ce3d7e4676676d90eb97841b98',*/
        },
      })
      .then(response => response.json())
    );
  }

  static sendPOST(url, params) {

    const body = _(params)
      .toPairs()
      .filter(pair => pair[1] !== null)
      .map(pair => {
        if (_.isArray(pair[1])) {
          pair[1] = JSON.stringify(pair[1]);
        }
        return pair.join('=');
      })
      .value()
      .join('&');


    return (
      fetch(urlJoin([config.apiHostOld, url]), {
        method: 'post',
        body,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(response => response.json())
    );
  }

}
