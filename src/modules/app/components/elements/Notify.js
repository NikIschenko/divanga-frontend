import React, { PropTypes, Component } from 'react';
import className from 'classnames';

export default class Notify extends Component {

  render() {
    const { children, type } = this.props;
    const classes = className('message-box', type);

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
