import React, { PropTypes } from 'react';

class Toggle extends React.Component {

  static propTypes = {
    click: PropTypes.func,
    label: PropTypes.string,
    on: PropTypes.bool,
  };

  static defaultProps = { on: false };

  render() {
    const { click, label, on } = this.props;
    let toggleClass = "toggle";
    toggleClass += on ? ' on' : '';

    return (
      <label onClick={click}>
        {label} <div className={toggleClass}></div>
      </label>
    );
  }
}

export default Toggle;
