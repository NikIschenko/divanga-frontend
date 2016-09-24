import 'file?name=[name].[ext]!./index.html';
import _ from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as ReduxStorage from 'redux-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';

import Acl from './system/Acl';
import Modules from './modules/index';
import Storage from './system/Storage';
import Application from './system/Application';
import Config from './modules/app/config/config';
import MainComponent from './system/components/Main';

(() => {

  const application = new Application();
  const storage     = new Storage();

  application.loadModules(Modules);

  const devTools   = window.devToolsExtension ? window.devToolsExtension() : f => f;
  const reducer    = ReduxStorage.reducer(application.getRootReducer());
  const middleware = applyMiddleware(storage.init());
  const store      = createStore(reducer, compose(middleware, devTools));
  const load       = ReduxStorage.createLoader(storage.getStorage());

  const indexRedirect = (Config.indexRedirect) ? <IndexRedirect to={Config.indexRedirect} /> : null;
  const indexRoute    = (Config.indexComponent) ? <IndexRoute component={Config.indexComponent} /> : null;


  const rootBlock = document.getElementById('root');
  const bootstrap = () => {
    return (
      <Provider store={store}>
        <Router history={Config.historyType}>
          <Route path={Config.indexRoute} component={MainComponent}>
            {indexRedirect}
            {indexRoute}
            {
              application.getRouters().map((route, key) => {

                const componentPath = require(route.component);
                const transition = (route.transition) ? route.transition : null;
                const permission = route.permission || Config.routePermission;

                return (
                  <Route key={key}
                         onEnter={(next, replace) => { Acl.isGranted(next, replace, permission, store); }}
                         path={route.path}
                         transition={transition}
                         component={componentPath.default}
                  />
                );
              })
            }
            <Route path="*" transition="fade-in" component={Config.page404}/>
          </Route>
        </Router>
      </Provider>
    );
  };

  (Config.storage)
      ? load(store).then(() => render(bootstrap(), rootBlock))
      : render(bootstrap(), rootBlock);

})();
