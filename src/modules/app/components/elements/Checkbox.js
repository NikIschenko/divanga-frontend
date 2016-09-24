import React, { Component, PropTypes } from 'react';

export default class Checkbox extends Component {
  static propTypes = {
    defaultChecked: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    defaultChecked: false,
  };

  render() {
    const { defaultChecked, onClick, children } = this.props;

    return (
      <label className="text-left checkbox noselect">
        <input onClick={onClick} type="checkbox" defaultChecked={defaultChecked}/>
        <span></span>
        {children}
      </label>
    );
  }
}

