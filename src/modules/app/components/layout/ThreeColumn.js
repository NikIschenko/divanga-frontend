import React, { Component, PropTypes } from 'react';
import { root, catalog } from '../../config/menu';

import classNames from 'classnames';
import Menu from '../elements/Menu';
import Sidebar from '../../containers/layout/Sidebar';

export default class ThreeColumn extends Component {

  render() {
    const { sidebar, children, className } = this.props;
    const layoutClass = classNames('layout-3', 'container', className);

    return (

      <main className={layoutClass}>
        <div className="row">
          <div className="col-xs-2">
            <Menu className="offset">
              {root}
            </Menu>
            <p className="caption">Популярное<br/>по рубрикам</p>
            <Menu>
              {catalog}
            </Menu>
          </div>
          <div className="col-xs col-xs-7">
            {children}
          </div>
          <div className="col-xs-3">
            <Sidebar />
          </div>
        </div>
      </main>
    );
  }
}
