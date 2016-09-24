import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class OneColumn extends Component {
  static propTypes = {
    className: PropTypes.string,
    showHeader: PropTypes.bool,
    showMenu: PropTypes.bool,
    contentWithoutBorders: PropTypes.bool,
    logoText: PropTypes.string,
  };

  static defaultProps = {
    showHeader: true,
    showMenu: true,
    contentWithoutBorders: false,
  };

  render() {
    const { children, className, showHeader, showMenu, contentWithoutBorders } = this.props;
    const layoutClass = classNames('one-column-layout', className);

    let mainClassName = 'row collapse layout';
    mainClassName += !showMenu ? ' header-without-menu' : '';

    let pageContentClassName = 'column page-content';
    pageContentClassName += contentWithoutBorders ? ' without-borders' : '';

    return (
      <div className={layoutClass}>
       
        <main className={mainClassName}>
          <div className={pageContentClassName}>{children}</div>
        </main>
      </div>
    );
  }
}
