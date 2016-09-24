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
    const { children, className, showMenu } = this.props;
    const layoutClass = classNames('one-column-layout', className);

    let mainClassName = 'row layout';
    mainClassName += !showMenu ? ' header-without-menu' : '';

    let pageContentClassName = 'column page-content';


    return (
      <div className={layoutClass}>
       
        <main className={mainClassName}>
          <div className="column page-content">{children}</div>
        </main>
      </div>
    );
  }
}
