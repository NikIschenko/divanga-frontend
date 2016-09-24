import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Spinner extends Component {
  static propTypes = {
    width: PropTypes.number,
    radius: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string,
  };

  static defaultProps = {
    width: 4,
    text: '',
    radius: '50px',
    className: 'text-center',
  };

  render() {
    const { width, radius, className, text } = this.props;
    return (
      <div className={`spinner ${className}`}>
        <svg width={radius} height={radius} viewBox="0 0 66 66">
          <circle className="path" fill="none" strokeWidth={width} strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    );
  }
}

