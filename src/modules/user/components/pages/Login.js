import React, { PropTypes } from 'react';
import Header from '../../../app/components/elements/Header';
import SocialAuth from '../../containers/common/SocialAuth';
import LoginForm from '../../containers/forms/LoginForm';
import '../../media/styles/index.scss';

class Login extends React.Component {

  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    const { location } = this.props;

    return (
      <div className="login">
        <Header className="large">Login</Header>
        <SocialAuth text="Login" />
        <LoginForm email={location.query.email} />
      </div>
    );
  }
}

export default Login;
