import queryString from 'query-string';
import 'whatwg-fetch';


export default class Api {

  static TOKEN_TYPE       = 'Bearer ';
  static HTTP_METHODS     = ['GET', 'POST', 'PUT', 'DELETE'];
  static RESPONSE_TIMEOUT = 30000;

  static headers  = {
    'Accept':       'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=UTF-8',
  };
  static messages = {
    responseTimeout: 'Response timeout expired',
  };

  /**
   * Fetched data from url
   * @return {function}
   * @param method
   * @param url
   * @param data
   */
  static fetchJSON(method = 'GET', url, data = null) {

    if (Api.HTTP_METHODS.includes(method.toUpperCase()) === false) {
      data   = url;
      url    = method;
      method = 'GET';
    }

    return Api[method.toLowerCase()].call(this, url, data);
  }


  /**
   * Short method GET
   * @return {function} Promise
   * @param url
   * @param data
   */
  static get(url, data = {}) {

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error(Api.messages.responseTimeout)), Api.RESPONSE_TIMEOUT);
      fetch(Api._contactUrl(url, data),
        {
          method: 'GET',
          headers: Api.getHeaders(),
        })
        .then((response) => {
          clearTimeout(timeout);
          resolve(response.json());
        })
        .catch(reject);
    });
  }

  /**
   * Short method POST
   * @return {function} Promise
   * @param url
   * @param data
   */
  static post(url, data) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error(Api.messages.responseTimeout)), Api.RESPONSE_TIMEOUT);
      fetch(url,
        {
          method: 'POST',
          headers: Api.getHeaders(),
          body: JSON.stringify(data),
        })
        .then((response) => {
          clearTimeout(timeout);
          resolve(response.json());
        })
        .catch(reject);
    });
  }

  /**
   * Short method PUT
   * @return {function} Promise
   * @param url
   * @param data
   */
  static put(url, data) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error(Api.messages.responseTimeout)), Api.RESPONSE_TIMEOUT);
      fetch(url,
        {
          method: 'PUT',
          headers: Api.getHeaders(),
          body: Api._convertToFormData(data),
        })
        .then((response) => {
          clearTimeout(timeout);
          resolve(response.json());
        })
        .catch(reject);
    });
  }

  /**
   * Short method Delete
   * @return {function} Promise
   * @param url
   * @param data
   */
  static delete(url, data) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error(Api.messages.responseTimeout)), Api.RESPONSE_TIMEOUT);
      fetch(Api._contactUrl(url, data),
        {
          method: 'DELETE',
          headers: Api.getHeaders(),
        })
        .then((response) => {
          clearTimeout(timeout);
          resolve(response.json());
        })
        .catch(reject);
    });
  }

  /**
   * Transform object to form data values
   * @return {object} FormData
   * @param data
   */
  static _convertToFormData(data) {
    const formData = new FormData();
    for (const name in data) {
      formData.append(name, data[name]);
    }

    return formData;
  }

  /**
   * Direct method that allow set Authorization token
   * @return {object} Self class
   * @param token
   * @param type
   */
  static setToken(token, type = Api.TOKEN_TYPE) {
    Api.setHeaders('Authorization', type.concat(token));
    return Api;
  }

  /**
   * Set header row
   * @return {object} Self class
   * @param name
   * @param value
   */
  static setHeaders(name, value) {
    Api.headers[name] = value;
    return Api;
  }

  /**
   * Get headers
   * @return {object}
   */
  static getHeaders() {
    return Api.headers;
  }

  /**
   * Merged url with parameters
   * @return {string}
   */
  static _contactUrl(url, data) {
    if (Object.keys(data).length === 0) return url;
    return (url.indexOf('?') >= 0)
      ? url + '&' + queryString.stringify(data)
      : url + '?' + queryString.stringify(data);
  }
}
