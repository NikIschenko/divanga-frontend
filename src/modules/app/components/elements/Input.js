import React, { PropTypes } from 'react';
import Formsy from 'formsy-react';
import classNames from 'classnames';


const Input = React.createClass({
  mixins: [Formsy.Mixin],

  propTypes: {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  },

  componentWillMount() {
    this.setState({
      isShowErrorMessage: false,
      _value: '',
    });

    if (this.props.value) {
      this.setValue(this.props.value);
    }
  },

  componentWillUpdate(nextState, nextProps) {
    if (nextProps._formSubmitted && !this.state.isShowErrorMessage) {
      this.setState({ isShowErrorMessage: true });
    }
  },

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  focus() {
    this.setState({
      isShowErrorMessage: false,
    });
  },

  blur() {
    this.setState({
      isShowErrorMessage: true,
    });
  },

  getClassName() {
    const { isShowErrorMessage } = this.state;

    return classNames('form-field', {
      error: (this.showRequired() && isShowErrorMessage) ||
      (this.showError() && isShowErrorMessage),
    });
  },

  getRenderErrorMessage() {
    return this.showRequired() ? "Обязательное поле" : this.getErrorMessage();
  },

  render() {
    const { type, name, placeholder, disabled } = this.props;

    return (
      <div className={this.getClassName()}>
        <input
          type={type || 'text'}
          onBlur={this.blur}
          onFocus={this.focus}
          onChange={this.changeValue}
          value={this.getValue()}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
        />
        <small>{this.getRenderErrorMessage()}</small>
      </div>
    );
  },
});

export default Input;
