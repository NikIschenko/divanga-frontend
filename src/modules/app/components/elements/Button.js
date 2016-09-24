import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    href: '',
    onClick: () => null,
  };

  render() {
    const { className, text, href, onClick } = this.props;
    const classNames = classnames('button', {
      [className]: !_.isEmpty(className),
    });
    const props = {
      className: classNames,
      to: href,
      onClick,
    };

    return (
      <button {...props}>
        {text}
      </button>
    );
  }
}

