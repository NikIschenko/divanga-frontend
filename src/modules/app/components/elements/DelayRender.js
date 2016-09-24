import React, { Component, PropTypes } from 'react';

export default class DelayRender extends Component {
  static propTypes = {
    time: PropTypes.number,
  };

  static defaultProps = {
    time: 100,
  };

  constructor(props) {
    super(props);

    this.state = {
      ready: false,
    };
  }

  componentWillMount() {
    setTimeout(() => this.show(), this.props.time);
  }

  show = () => {
    this.setState({ ready: true });
  };

  render() {
    return this.state.ready ? this.props.children : null;
  }
}
