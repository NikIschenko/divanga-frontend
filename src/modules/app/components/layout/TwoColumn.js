import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Sidebar from '../../containers/layout/Sidebar';

export default class TwoColumn extends Component {

  render() {
    const { sidebar, children, className } = this.props;
    const layoutClass = classNames('two-column-layout', className);

    return (
      <div className={layoutClass}>
        <main className="row collapse layout">
          <div className="column medium-8 page-content">{children}</div>
          <div className="column medium-4">
            <Sidebar />
          </div>
        </main>
      </div>
    );
  }
}
