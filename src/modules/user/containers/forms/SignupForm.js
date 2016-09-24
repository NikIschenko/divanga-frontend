import { connect } from 'react-redux';
import UserActions, { signUp } from '../../actions/user';
import SignupForm from '../../components/forms/SignupForm';

function mapStateToProps({ user }) {
  return { ...user };
}

function mapDispatchToProps(dispatch) {
  return {
    init: () => {
      dispatch(UserActions.init());
    },
    
    submitSignUpForm: (data) => {
      signUp(dispatch, data);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
