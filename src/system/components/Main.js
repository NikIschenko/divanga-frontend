import React from 'react';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Config from '../../modules/app/config/config';
import User from '../User';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.user = this.getUser();
  }

  getUser(from = null) {

    const user = (from)
      ? from.user
      : this.props.user;

    return (user && user[Config.userField])
      ? new User(user[Config.userField])
      : new User();
  }

  componentWillUpdate(nextProps) {
    if (this.getUser(nextProps) != this.getUser()) {
      this.user = this.getUser();
    }
  }

  getChildContext() {
    return { user: this.user };
  }

  static childContextTypes = {
    user: React.PropTypes.object,
  };

  render() {
    const { children, location, routes } = this.props;
    const transition = routes[1].transition || Config.transition;

    return (
      <ReactCSSTransitionGroup
        component="div"
        className="layout"
        transitionName={transition}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {React.cloneElement(children, { key: location.pathname })}
        {Config.globalComponents.map((Component, key) => <Component key={key} />)}
      </ReactCSSTransitionGroup>
    );
  }
}

export default connect(({ user }) => ({ user }), null)(Main);
