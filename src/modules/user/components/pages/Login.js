import React, { PropTypes } from 'react';
import LoginForm from '../forms/LoginForm';
import '../../media/styles/index.scss';
import { connect } from 'react-redux';
import UserActions from '../../actions/user';

export class Login extends React.Component {

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



function mapStateToProps({ user }) {
  return { ...user };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(UserActions.logout());;
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

