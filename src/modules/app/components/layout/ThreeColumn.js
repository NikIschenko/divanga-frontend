import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { root, catalog } from '../../config/menu';
import classNames from 'classnames';
import Menu from '../elements/Menu';
import Header  from '../../containers/elements/Header';
import Sidebar from '../../containers/layout/Sidebar';

export default class ThreeColumn extends Component {

  render() {
    const { children, className } = this.props;
    const layoutClass = classNames('layout-3', 'container', className);

    return (
      <div>
        <Header />
        <main className={layoutClass}>
          <div className="row">
            <div className="col-md-2">
              <Menu className="offset">
                {root}
              </Menu>
              <p className="caption">Популярное<br/>по тегам</p>
              <Menu>
                {catalog}
              </Menu>
              <p className="caption">
                <Link activeClassName="active" to="/about">Помощь</Link>
              </p>
            </div>
            <div className="col-xs col-md-7 tape">
              {children}
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
