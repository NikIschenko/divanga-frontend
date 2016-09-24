import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

export default class Storage {
  constructor() {
    this.name = 'redux-storage';
    this.engine = null;
  }

  getStorage() {
    return this.engine;
  }

  create(storageName) {
    this.engine = createEngine(storageName);
  }

  init() {
    this.create(this.name);
    const middleware = storage.createMiddleware(this.getStorage());

    return middleware;
  }
}
