import React, { PropTypes } from 'react';
import Header from '../../../app/components/elements/Header';
import LoginForm from '../../containers/forms/LoginForm';
import '../../media/styles/index.scss';

class Login extends React.Component {

  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    return (
      <div className="simple-form-page">
        <LoginForm />
      </div>
    );
  }
}

export default Login;
