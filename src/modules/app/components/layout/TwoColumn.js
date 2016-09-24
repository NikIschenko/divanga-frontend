import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class TwoColumn extends Component {

  static propTypes = {
    sidebar: PropTypes.object,
    children: PropTypes.array,
    className: PropTypes.string,
  };

  render() {
    const { sidebar, children, className } = this.props;
    const layoutClass = classNames('two-column-layout', className);

    return (
      <div className={layoutClass}>
        <main className="row collapse layout">
          <div className="column shrink hide-for-portrait sidebar-left">{sidebar}</div>
          <div className="column page-content">{children}</div>
        </main>
      </div>
    );
  }
}
