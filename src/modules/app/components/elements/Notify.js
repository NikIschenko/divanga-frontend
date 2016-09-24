import React, { PropTypes, Component } from 'react';
import className from 'classnames';

export default class Notify extends Component {

  render() {
    const { children, type } = this.props;
    const classes = className('message-box', type);

    return (
      <div className={classes}>
        <div className="row collapse">
          <div className="column shrink"><i className={`hbc-${type}`}></i></div>
          <div className="column">{children}</div>
        </div>
      </div>
    );
  }
}
